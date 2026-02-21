import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt = 'Bahrain Transport Group - #1 Rated 24/7 Fixed-Rate Taxi & Airport Transfers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Gold border */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '16px',
                        border: '2px solid rgba(245, 158, 11, 0.3)',
                        borderRadius: '24px',
                        display: 'flex',
                    }}
                />

                {/* Shield icon */}
                <div
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '32px',
                        boxShadow: '0 0 60px rgba(245, 158, 11, 0.4)',
                    }}
                >
                    <div style={{ color: 'white', fontSize: '40px', display: 'flex' }}>★</div>
                </div>

                {/* Brand name */}
                <div
                    style={{
                        fontSize: '56px',
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-2px',
                        display: 'flex',
                        marginBottom: '16px',
                    }}
                >
                    Bahrain Transport Group
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#f59e0b',
                        letterSpacing: '2px',
                        display: 'flex',
                    }}
                >
                    #1 Rated 24/7 Fixed-Rate Taxi & Airport Transfers
                </div>

                {/* Bottom tagline */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        display: 'flex',
                        gap: '24px',
                        color: 'rgba(148, 163, 184, 0.7)',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                    }}
                >
                    <span style={{ display: 'flex' }}>✓ No Surge Pricing</span>
                    <span style={{ display: 'flex' }}>✓ Saudi Causeway</span>
                    <span style={{ display: 'flex' }}>✓ VIP Fleet</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
