import React from 'react'

interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 32, className = '' }: LogoIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="url(#gradient)"/>
      <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" fill="white" stroke="white" strokeWidth="1"/>
      <circle cx="16" cy="14" r="2" fill="#4F46E5"/>
      <path d="M12 18L16 16L20 18" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5"/>
          <stop offset="1" stopColor="#7C3AED"/>
        </linearGradient>
      </defs>
    </svg>
  )
}