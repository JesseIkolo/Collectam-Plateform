interface LeafLogoProps {
  className?: string;
  size?: number;
}

export function LeafLogo({ className = "", size = 32 }: LeafLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16 2C9.5 2 6 8 6 14C6 20 9.5 26 16 30C22.5 26 26 20 26 14C26 8 22.5 2 16 2Z" 
        fill="url(#leafGradient)"
      />
      <path 
        d="M16 2C16 2 20 8 16 30C16 30 12 8 16 2Z" 
        fill="url(#leafVein)"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="leafGradient" x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e"/>
          <stop offset="0.5" stopColor="#16a34a"/>
          <stop offset="1" stopColor="#15803d"/>
        </linearGradient>
        <linearGradient id="leafVein" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dcfce7"/>
          <stop offset="1" stopColor="#bbf7d0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
