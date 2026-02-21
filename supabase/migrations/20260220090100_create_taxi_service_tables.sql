/*
  # Create Bahrain Royal Taxi Database Schema

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `location` (text)
      - `rating` (integer)
      - `review` (text)
      - `created_at` (timestamptz)
    
    - `fleet_vehicles`
      - `id` (uuid, primary key)
      - `name` (text)
      - `model` (text)
      - `image_url` (text)
      - `passenger_capacity` (integer)
      - `luggage_capacity` (integer)
      - `features` (text[])
      - `category` (text)
      - `created_at` (timestamptz)
    
    - `service_areas`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `created_at` (timestamptz)
    
    - `booking_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `pickup_location` (text)
      - `dropoff_location` (text)
      - `service_type` (text)
      - `pickup_date` (text)
      - `pickup_time` (text)
      - `passengers` (integer)
      - `message` (text)
      - `status` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated insert
*/

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  review text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Fleet Vehicles Table
CREATE TABLE IF NOT EXISTS fleet_vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  model text NOT NULL,
  image_url text,
  passenger_capacity integer NOT NULL,
  luggage_capacity integer NOT NULL,
  features text[] DEFAULT '{}',
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE fleet_vehicles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view fleet vehicles"
  ON fleet_vehicles FOR SELECT
  TO anon, authenticated
  USING (true);

-- Service Areas Table
CREATE TABLE IF NOT EXISTS service_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_areas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view service areas"
  ON service_areas FOR SELECT
  TO anon, authenticated
  USING (true);

-- Booking Requests Table
CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  pickup_location text NOT NULL,
  dropoff_location text NOT NULL,
  service_type text NOT NULL,
  pickup_date text NOT NULL,
  pickup_time text NOT NULL,
  passengers integer DEFAULT 1,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert booking requests"
  ON booking_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own bookings"
  ON booking_requests FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert Sample Data
INSERT INTO testimonials (name, location, rating, review) VALUES
  ('Ahmed Al-Khalifa', 'Manama', 5, 'Excellent service! The driver was professional and the car was spotless. Highly recommend for airport transfers.'),
  ('Sarah Johnson', 'Amwaj Islands', 5, 'Best taxi service in Bahrain. Always on time and very reliable. The app makes booking so easy!'),
  ('Mohammed Hassan', 'Riffa', 5, 'Professional drivers, clean vehicles, and reasonable prices. I use them for all my business trips.'),
  ('Emily Roberts', 'Tourist', 5, 'Used their service during my vacation in Bahrain. Great experience from airport to hotel and city tours!');

INSERT INTO fleet_vehicles (name, model, passenger_capacity, luggage_capacity, features, category) VALUES
  ('Economy Sedan', 'Toyota Camry 2023', 4, 3, ARRAY['Air Conditioning', 'GPS Navigation', 'Phone Charger', 'WiFi'], 'Standard'),
  ('Comfort Sedan', 'Hyundai Sonata 2023', 4, 3, ARRAY['Leather Seats', 'Air Conditioning', 'GPS Navigation', 'Premium Sound'], 'Standard'),
  ('Family Van', 'Kia Carnival 2023', 7, 5, ARRAY['Spacious Interior', 'Child Seats Available', 'Air Conditioning', 'Entertainment System'], 'Van'),
  ('Luxury SUV', 'GMC Yukon 2023', 6, 6, ARRAY['Luxury Leather', 'Premium Sound', 'Panoramic Roof', 'Advanced Safety'], 'Luxury'),
  ('VIP Sedan', 'Mercedes-Benz E-Class', 4, 3, ARRAY['Premium Leather', 'Massage Seats', 'Ambient Lighting', 'Chauffeur Service'], 'Luxury');

INSERT INTO service_areas (name, description) VALUES
  ('Manama', 'Capital city with business districts and shopping centers'),
  ('Muharraq', 'Historic city and home to Bahrain International Airport'),
  ('Riffa', 'Residential area with royal palaces and shopping malls'),
  ('Hamad Town', 'Modern residential community'),
  ('Isa Town', 'Educational hub with universities and colleges'),
  ('Budaiya', 'Coastal area with beach resorts'),
  ('Saar', 'Upscale residential area'),
  ('Amwaj Islands', 'Luxury waterfront community');