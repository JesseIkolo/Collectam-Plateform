interface ModernCollectamLogoProps {
  className?: string;
  size?: number;
}

export function ModernCollectamLogo({ className = "", size = 40 }: ModernCollectamLogoProps) {
  const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Modern circular background with gradient */}
      <circle cx="24" cy="24" r="22" fill={`url(#modernGradient-${uniqueId})`} stroke={`url(#borderGradient-${uniqueId})`} strokeWidth="2"/>

      {/* Central waste collection symbol */}
      <path
        d="M18 16 L30 16 M20 20 L28 20 L27 32 C27 33.1 26.1 34 25 34 L23 34 C21.9 34 21 33.1 21 32 L20 20 Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Smart technology elements */}
      <circle cx="22" cy="24" r="1.5" fill="white" opacity="0.9" />
      <circle cx="24" cy="27" r="1.5" fill="white" opacity="0.9" />
      <circle cx="26" cy="24" r="1.5" fill="white" opacity="0.9" />

      {/* GPS/Location indicator */}
      <path
        d="M35 12 C36.5 12 37.5 13 37.5 14.5 C37.5 16 35 19 35 19 S32.5 16 32.5 14.5 C32.5 13 33.5 12 35 12 Z"
        fill="white"
        opacity="0.95"
      />
      <circle cx="35" cy="14.5" r="1" fill="#10b981" />

      {/* Recycling arrows around the edge */}
      <path
        d="M12 20 L14 18 L16 20 M14 18 L14 22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />

      <path
        d="M32 36 L34 34 L36 36 M34 34 L34 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />

      <defs>
        <linearGradient id={`modernGradient-${uniqueId}`} x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981"/>
          <stop offset="0.5" stopColor="#059669"/>
          <stop offset="1" stopColor="#047857"/>
        </linearGradient>
        <linearGradient id={`borderGradient-${uniqueId}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399"/>
          <stop offset="1" stopColor="#065f46"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
