interface FeonixLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function FeonixLogo({ className = '', size = 'md' }: FeonixLogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  }

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phoenix wing icon */}
      <defs>
        <linearGradient id="feonixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      
      {/* Stylized Phoenix/Flame icon */}
      <path
        d="M 20 45 Q 15 35, 20 25 Q 25 15, 30 10 Q 35 5, 40 10 Q 45 15, 40 25 Q 35 35, 30 40 L 25 50 Z"
        fill="url(#feonixGradient)"
        opacity="0.8"
      />
      <path
        d="M 30 40 Q 35 30, 40 25 Q 45 20, 50 25 Q 55 30, 50 40 L 45 50 Z"
        fill="url(#feonixGradient)"
      />
      
      {/* FEONIX text */}
      <text
        x="65"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill="url(#feonixGradient)"
      >
        FEONIX
      </text>
      
      {/* Subtle AI indicator */}
      <circle cx="185" cy="20" r="2" fill="#0ea5e9" opacity="0.6" />
      <circle cx="190" cy="20" r="2" fill="#a855f7" opacity="0.6" />
      <circle cx="195" cy="20" r="2" fill="#0ea5e9" opacity="0.6" />
    </svg>
  )
}
