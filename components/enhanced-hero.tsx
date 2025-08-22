'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Globe, Star, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/lib/site-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { MicroInteraction, PulseButton } from '@/components/micro-interactions'



export function EnhancedHero() {
  const [mounted, setMounted] = useState(false)
  const particleContainerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    if (particleContainerRef.current && typeof window !== 'undefined') {
      // Only create particles on client side to avoid hydration issues
      import('@/lib/anime-utils').then(({ createFloatingElements }) => {
        if (particleContainerRef.current) {
          createFloatingElements(particleContainerRef.current, 15)
        }
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Revolutionary Background */}
      <div className="absolute inset-0">
        {/* Base gradients that work on SSR */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-500/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.15),transparent_50%)]" />
        
        {/* Animated mesh only after mount */}
        {mounted && (
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
              backgroundSize: '100px 100px',
            }}
          />
        )}
      </div>

      {/* Client-side particles */}
      {mounted && (
        <div
          ref={particleContainerRef}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
      )}
      
      {/* Enhanced animated globe background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          ref={globeRef}
          className="relative"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Multiple rotating rings */}
          <motion.div
            className="w-96 h-96 rounded-full border-2 border-emerald-500/30"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-teal-500/20"
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border border-emerald-400/15"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Pulsing center */}
          <motion.div
            className="absolute inset-1/2 w-4 h-4 -ml-2 -mt-2 bg-emerald-500/50 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Revolutionary Announcement Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-block relative">
              <Badge className="bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-400 border border-emerald-500/50 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                <Rocket className="h-4 w-4 mr-2" />
                🚀 AI-Powered ESG Revolution • Limited Pilot Access
                <Star className="h-4 w-4 ml-2" />
              </Badge>
              
              {/* Badge glow effect - only after mount */}
              {mounted && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-lg -z-10"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>

          {/* Spectacular Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-balance mb-8 relative"
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent relative"
              style={{ backgroundSize: '200% 200%' }}
              {...(mounted && {
                animate: {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                },
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }
              })}
            >
              Automated carbon reports
              
              {/* Title decoration - only after mount */}
              {mounted && (
                <motion.div
                  className="absolute -top-4 -right-4 w-4 h-4 bg-emerald-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.span>
            <br />
            <motion.span
              className="text-white inline-block relative"
              {...(mounted && {
                animate: {
                  textShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.5)',
                    '0 0 40px rgba(255, 255, 255, 0.8)',
                    '0 0 20px rgba(255, 255, 255, 0.5)',
                  ],
                },
                transition: { duration: 4, repeat: Infinity }
              })}
            >
              your auditors won't argue with
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-balance mb-10 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Turn activity data into{' '}
            <motion.strong 
              className="text-white font-bold relative inline-block"
              {...(mounted && {
                animate: {
                  textShadow: [
                    '0 0 10px rgba(255, 255, 255, 0.5)',
                    '0 0 20px rgba(255, 255, 255, 0.8)',
                    '0 0 10px rgba(255, 255, 255, 0.5)',
                  ],
                },
                transition: { duration: 3, repeat: Infinity }
              })}
            >
              BRSR/CSRD-ready
            </motion.strong>{' '}
            disclosures using{' '}
            <motion.span 
              className="text-emerald-400 font-bold relative inline-block"
              {...(mounted && {
                animate: {
                  textShadow: [
                    '0 0 10px rgba(16, 185, 129, 0.5)',
                    '0 0 20px rgba(16, 185, 129, 0.8)',
                    '0 0 10px rgba(16, 185, 129, 0.5)',
                  ],
                },
                transition: { duration: 3, repeat: Infinity }
              })}
            >
              NASA-grade Earth intelligence
            </motion.span>{' '}
            + LLMs
          </motion.p>

          {/* Revolutionary CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-bold shadow-2xl overflow-hidden group"
              >
                {/* Button shimmer effect - only after mount */}
                {mounted && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <Rocket className="mr-3 h-5 w-5 group-hover:rotate-12 transition-all duration-300" />
                <span className="relative z-10">Experience the Future</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="relative border-2 border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-8 py-4 text-lg font-bold backdrop-blur-sm overflow-hidden group"
              >
                {/* Button glow effect - only after mount */}
                {mounted && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <Play className="mr-3 h-5 w-5 group-hover:scale-125 transition-all duration-300" />
                <span className="relative z-10">Interactive Demo</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {[
              { icon: Globe, text: "Built on NASA Harvest", description: "Satellite Intelligence", color: "emerald" },
              { icon: Zap, text: "Open Data India", description: "Real-time Integration", color: "teal" },
              { icon: Sparkles, text: "GHG Protocol aligned", description: "Global Standards", color: "emerald" }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="relative group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 hover:border-emerald-400/50 transition-all duration-300">
                  {/* Hover glow - only after mount */}
                  {mounted && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <div className="text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-xl mb-3 border border-${item.color}-500/30`}
                      {...(mounted && {
                        animate: {
                          boxShadow: [
                            '0 0 20px rgba(16, 185, 129, 0.3)',
                            '0 0 40px rgba(16, 185, 129, 0.6)',
                            '0 0 20px rgba(16, 185, 129, 0.3)',
                          ],
                        },
                        transition: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                      })}
                    >
                      <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {item.text}
                    </h3>
                    <p className="text-emerald-400/80 text-xs font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <div className="w-8 h-12 border-2 border-emerald-500/60 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1.5 h-4 bg-emerald-500 rounded-full mt-2"
              animate={{
                y: [0, 8, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.div
            className="absolute inset-0 w-8 h-12 border-2 border-emerald-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
