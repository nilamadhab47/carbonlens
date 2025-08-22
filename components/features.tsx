'use client'

import { motion } from 'framer-motion'
import { FileText, Zap, Truck, Network, Download, Map, LucideIcon, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { features } from '@/lib/site-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Zap,
  Truck,
  Network,
  Download,
  Map,
}

// Simple Feature Card
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const IconComponent = iconMap[feature.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="bg-card/50 border border-emerald-500/20 h-full hover:border-emerald-500/40 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
              <IconComponent className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              {feature.title}
            </h3>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {feature.description}
          </p>

          <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm cursor-pointer hover:gap-3 transition-all">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="features" className="relative py-16 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Header */}
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <div className="inline-block mb-4">
            <Zap className="w-12 h-12 text-emerald-500 mx-auto" />
          </div>
            
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="text-emerald-400">Revolutionary</span> Features
          </motion.h2>
            
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Built specifically for{' '}
            <span className="text-emerald-400 font-semibold">Indian compliance</span>{' '}
            with BRSR and CSRD reporting requirements
          </motion.p>
          </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
