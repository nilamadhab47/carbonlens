'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { createFloatingElements } from '@/lib/anime-utils'

export function Hero() {
  const particleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (particleContainerRef.current) {
      createFloatingElements(particleContainerRef.current, 15)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div
        ref={particleContainerRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
      
      {/* Animated globe background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          className="w-96 h-96 rounded-full border-2 border-emerald-500/20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full border border-teal-500/20"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-balance mb-6"
            variants={fadeInUp}
          >
            <span className="bg-emerald-teal bg-clip-text text-transparent">
              Automated carbon reports
            </span>
            <br />
            your auditors won&apos;t argue with
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-emerald-teal hover:bg-emerald-teal-dark text-white px-8 py-4 text-lg font-semibold group"
            >
              Get a demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Try sample report
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              Built on NASA Harvest
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              Open Data India
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              GHG Protocol aligned
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
