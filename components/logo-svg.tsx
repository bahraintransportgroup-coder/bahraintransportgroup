export function LogoSVG({ className = "w-full h-full" }: { className?: string }) {
    return (
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <defs>
                <linearGradient id="btgGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="bgGrad" x1="0" y1="512" x2="512" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#1e293b" />
                </linearGradient>
                <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="12" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Background Circle */}
            <circle cx="256" cy="256" r="256" fill="url(#bgGrad)" />

            {/* Gold Ring */}
            <circle cx="256" cy="256" r="236" stroke="url(#btgGrad)" strokeWidth="8" opacity="0.5" />

            {/* Shield Main Shape */}
            <path d="M256 80L380 140V280C380 360 300 420 256 440C212 420 132 360 132 280V140L256 80Z" fill="url(#btgGrad)" />

            {/* Shield Inner Dark Shape */}
            <path d="M256 100L360 150V275C360 345 290 395 256 410C222 395 152 345 152 275V150L256 100Z" fill="url(#bgGrad)" />

            {/* BOLD STAR — center of shield */}
            <polygon
                points="256,150 275,220 350,220 290,265 310,340 256,295 202,340 222,265 162,220 237,220"
                fill="url(#btgGrad)"
                filter="url(#starGlow)"
            />
        </svg>
    );
}
