'use client'

import React from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

interface LogoProps {
  variant?: 'light' | 'dark' | 'white'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ 
  variant = 'light', 
  size = 'md', 
  showText = true, 
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  }

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const logoSrc = {
    light: '/images/logo.svg',
    dark: '/images/logo-dark.svg',
    white: '/images/logo-white.svg'
  }

  const textColorClasses = {
    light: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
    dark: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
    white: 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className="relative">
        <Image
          src={logoSrc[variant]}
          alt="Kaironovas Logo"
          width={40}
          height={40}
          className={`${sizeClasses[size]} w-auto object-contain`}
          priority
          onError={() => {
            // Handle error in parent component if needed
            console.warn('Logo image failed to load, showing fallback')
          }}
        />
        
        {/* Fallback Icon - Hidden by default, can be shown via CSS or JS */}
        <div className="hidden fallback-icon">
          <Sparkles className={`${sizeClasses[size]} ${variant === 'white' ? 'text-indigo-400' : 'text-indigo-600'}`} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold ${textColorClasses[variant]}`}>
          Kaironovas
        </span>
      )}
    </div>
  )
}

// Simple Text-Only Logo for cases where image isn't needed
export function TextLogo({ 
  variant = 'light', 
  size = 'md', 
  className = '' 
}: Omit<LogoProps, 'showText'>) {
  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const textColorClasses = {
    light: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
    dark: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
    white: 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Sparkles className={`h-6 w-6 ${variant === 'white' ? 'text-indigo-400' : 'text-indigo-600'}`} />
      <span className={`${textSizeClasses[size]} font-bold ${textColorClasses[variant]}`}>
        Kaironovas
      </span>
    </div>
  )
}