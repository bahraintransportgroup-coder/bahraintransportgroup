-- ============================================================
-- Bahrain Taxi - Supabase Database Schema
-- Run this in: Supabase Dashboard > SQL Editor > New Query
-- ============================================================

-- 1. Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  pickup_location TEXT NOT NULL,
  dropoff_location TEXT NOT NULL,
  service_type TEXT NOT NULL,
  pickup_date TEXT,
  pickup_time TEXT,
  passengers INTEGER DEFAULT 1,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

-- 2. Fleet Vehicles Table
CREATE TABLE IF NOT EXISTS fleet_vehicles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  capacity INTEGER NOT NULL DEFAULT 4,
  features TEXT[] DEFAULT '{}',
  image_url TEXT,
  price_per_km DECIMAL(10,2),
  is_available BOOLEAN DEFAULT TRUE,
  description TEXT
);

-- 3. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  location TEXT,
  is_approved BOOLEAN DEFAULT FALSE,
  avatar_url TEXT
);

-- 4. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE
);

-- ============================================================
-- Add missing columns if tables already existed
-- (Safe to run even if columns already exist)
-- ============================================================

ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS name TEXT;
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS rating INTEGER;
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS review TEXT;
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS is_approved BOOLEAN DEFAULT FALSE;
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS avatar_url TEXT;

ALTER TABLE fleet_vehicles ADD COLUMN IF NOT EXISTS is_available BOOLEAN DEFAULT TRUE;
ALTER TABLE fleet_vehicles ADD COLUMN IF NOT EXISTS features TEXT[] DEFAULT '{}';
ALTER TABLE fleet_vehicles ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE fleet_vehicles ADD COLUMN IF NOT EXISTS price_per_km DECIMAL(10,2);
ALTER TABLE fleet_vehicles ADD COLUMN IF NOT EXISTS description TEXT;

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- ============================================================
-- Row Level Security (RLS) Policies
-- ============================================================

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE fleet_vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop old policies first (ignore errors if they don't exist)
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;
DROP POLICY IF EXISTS "Service role full access bookings" ON bookings;
DROP POLICY IF EXISTS "Anyone can read fleet" ON fleet_vehicles;
DROP POLICY IF EXISTS "Service role full access fleet" ON fleet_vehicles;
DROP POLICY IF EXISTS "Anyone can read approved testimonials" ON testimonials;
DROP POLICY IF EXISTS "Anyone can submit testimonial" ON testimonials;
DROP POLICY IF EXISTS "Service role full access testimonials" ON testimonials;
DROP POLICY IF EXISTS "Anyone can submit contact" ON contact_messages;
DROP POLICY IF EXISTS "Service role full access messages" ON contact_messages;

-- Bookings policies
CREATE POLICY "Anyone can create bookings" ON bookings FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Service role full access bookings" ON bookings USING (TRUE);

-- Fleet policies
CREATE POLICY "Anyone can read fleet" ON fleet_vehicles FOR SELECT USING (TRUE);
CREATE POLICY "Service role full access fleet" ON fleet_vehicles USING (TRUE);

-- Testimonials policies
CREATE POLICY "Anyone can read approved testimonials" ON testimonials FOR SELECT USING (is_approved = TRUE);
CREATE POLICY "Anyone can submit testimonial" ON testimonials FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Service role full access testimonials" ON testimonials USING (TRUE);

-- Contact messages policies
CREATE POLICY "Anyone can submit contact" ON contact_messages FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Service role full access messages" ON contact_messages USING (TRUE);

-- ============================================================
-- Sample Data (optional - remove if not needed)
-- ============================================================

INSERT INTO fleet_vehicles (name, type, capacity, features, price_per_km, description, is_available)
SELECT 'Toyota Camry', 'Sedan', 4, ARRAY['Air Conditioning', 'WiFi', 'USB Charging'], 0.50, 'Comfortable standard sedan for city travel', TRUE
WHERE NOT EXISTS (SELECT 1 FROM fleet_vehicles WHERE name = 'Toyota Camry');

INSERT INTO fleet_vehicles (name, type, capacity, features, price_per_km, description, is_available)
SELECT 'Toyota Hiace', 'Van', 8, ARRAY['Air Conditioning', 'Extra Luggage Space', 'USB Charging'], 0.80, 'Spacious van perfect for groups and families', TRUE
WHERE NOT EXISTS (SELECT 1 FROM fleet_vehicles WHERE name = 'Toyota Hiace');

INSERT INTO fleet_vehicles (name, type, capacity, features, price_per_km, description, is_available)
SELECT 'Mercedes E-Class', 'Luxury', 4, ARRAY['Air Conditioning', 'WiFi', 'Leather Seats', 'Bottled Water'], 1.20, 'Premium luxury vehicle for VIP and corporate travel', TRUE
WHERE NOT EXISTS (SELECT 1 FROM fleet_vehicles WHERE name = 'Mercedes E-Class');

INSERT INTO fleet_vehicles (name, type, capacity, features, price_per_km, description, is_available)
SELECT 'Toyota Land Cruiser', 'SUV', 6, ARRAY['Air Conditioning', 'WiFi', '4x4', 'Extra Luggage'], 1.00, 'Powerful SUV for Saudi Causeway and long-distance trips', TRUE
WHERE NOT EXISTS (SELECT 1 FROM fleet_vehicles WHERE name = 'Toyota Land Cruiser');

INSERT INTO testimonials (name, rating, review, location, is_approved)
SELECT 'Ahmed Al-Rashid', 5, 'Excellent service! Driver was on time and very professional. Highly recommend for airport transfers.', 'Manama, Bahrain', TRUE
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name = 'Ahmed Al-Rashid');

INSERT INTO testimonials (name, rating, review, location, is_approved)
SELECT 'Sarah Johnson', 5, 'Used BTG for our corporate travel needs. Clean vehicles, punctual, and great communication.', 'London, UK', TRUE
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name = 'Sarah Johnson');

INSERT INTO testimonials (name, rating, review, location, is_approved)
SELECT 'Mohammed Al-Khalifa', 5, 'Best taxi service in Bahrain. Fixed rates and no hidden charges. Will use again!', 'Riffa, Bahrain', TRUE
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name = 'Mohammed Al-Khalifa');
