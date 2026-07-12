CREATE TABLE IF NOT EXISTS promo_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  discount_type text NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value numeric NOT NULL,
  description text,
  max_uses integer,
  uses_count integer NOT NULL DEFAULT 0,
  expires_at timestamptz,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS promo_code text;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS discount_amount numeric;

ALTER TABLE promo_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can read promo codes" ON promo_codes
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Service role can insert promo codes" ON promo_codes
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role can update promo codes" ON promo_codes
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "Service role can delete promo codes" ON promo_codes
  FOR DELETE USING (auth.role() = 'service_role');
