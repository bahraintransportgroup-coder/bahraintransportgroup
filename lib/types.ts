export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  pickup_location: string;
  dropoff_location: string;
  service_type: string;
  pickup_date: string;
  pickup_time: string;
  passengers: number;
  message: string | null;
  status: BookingStatus;
}

export interface FleetVehicle {
  id: string;
  created_at: string;
  name: string;
  type: string;
  capacity: number;
  features: string[];
  image_url: string | null;
  price_per_km: number | null;
  is_available: boolean;
  description: string | null;
}

export interface Testimonial {
  id: string;
  created_at: string;
  name: string;
  rating: number;
  review: string;
  location: string | null;
  is_approved: boolean;
  avatar_url: string | null;
}

export interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  is_read: boolean;
}
