'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = window.innerHeight * 1.5 // Show after 1.5 viewport heights
      
      if (scrolled > threshold && !isDismissed) {
        setIsVisible(true)
      } else if (scrolled <= threshold) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 max-w-sm"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          <Card className="neomorphic border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-4">
                <button
                  onClick={handleDismiss}
                  className="absolute top-2 right-2 text-white/80 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold text-sm">
                    Limited Time Offer
                  </span>
                </div>
                
                <h3 className="text-white font-heading font-bold text-lg mb-1">
                  Join Pilot Program
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  Get 50% off first year + custom methodology development
                </p>
                
                <Button 
                  className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                    handleDismiss()
                  }}
                >
                  Claim Offer
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="p-3 bg-card/95 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>⏰ Only 12 spots left</span>
                  <span>🔥 Ends in 7 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
