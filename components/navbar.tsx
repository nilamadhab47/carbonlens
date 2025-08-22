'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation, siteConfig } from '@/lib/site-data'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100) // Increased threshold for smoother transition
    }
    
    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-emerald border-b border-emerald-500/30 shadow-lg shadow-emerald-500/10' 
          : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Enhanced Background Effects */}
      {scrolled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/10 to-emerald-500/5"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {/* Always-present subtle backdrop for hero */}
      {!scrolled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Revolutionary Logo */}
          <motion.div
            className="flex-shrink-0 relative"
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.a
              href="#"
              className="text-3xl font-heading font-black relative"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #10b981 100%)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {siteConfig.name}
              
              {/* Logo Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-lg -z-10"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Floating Dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-emerald-200/80 hover:text-emerald-400 transition-all duration-300 text-lg font-medium group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.name}
                  
                  {/* Hover Underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute -inset-2 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Revolutionary CTA Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 text-lg font-bold shadow-lg overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Get Demo</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-emerald-teal hover:bg-emerald-teal-dark text-white">
                  Get Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
