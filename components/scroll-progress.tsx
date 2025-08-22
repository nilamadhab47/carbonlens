'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
      
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-50 origin-left overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />
        
        {/* Progress Fill */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 origin-left"
          style={{ scaleX: scrollProgress }}
          animate={{
            boxShadow: [
              '0 0 10px rgba(16, 185, 129, 0.5)',
              '0 0 20px rgba(16, 185, 129, 0.8)',
              '0 0 10px rgba(16, 185, 129, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Moving Glow Effect */}
        <motion.div
          className="absolute top-0 h-full w-8 bg-white/50 blur-sm"
          style={{ 
            left: `${scrollProgress * 100}%`,
            transform: 'translateX(-50%)',
          }}
          animate={{
            opacity: isScrolling ? [0.5, 1, 0.5] : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Floating Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: scrollProgress > 0.05 ? 1 : 0, x: scrollProgress > 0.05 ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative glass-emerald p-4 rounded-2xl border border-emerald-500/40 backdrop-blur-xl"
          animate={{
            boxShadow: [
              '0 0 20px rgba(16, 185, 129, 0.3)',
              '0 0 40px rgba(16, 185, 129, 0.5)',
              '0 0 20px rgba(16, 185, 129, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Circular Progress */}
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="8"
                fill="transparent"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                style={{
                  strokeDashoffset: `${2 * Math.PI * 45 * (1 - scrollProgress)}`,
                  transition: 'stroke-dashoffset 0.1s ease-out',
                }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-emerald-400 font-bold text-sm"
                animate={{
                  scale: isScrolling ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {Math.round(scrollProgress * 100)}%
              </motion.div>
            </div>
          </div>

          {/* Floating Icon */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Particles */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30"
        animate={{ opacity: isScrolling ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i * 7) % 70}%`,
            }}
            animate={isScrolling ? {
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            } : {}}
            transition={{
              duration: 1 + (i * 0.1),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </>
  )
}
