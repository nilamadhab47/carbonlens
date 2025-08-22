'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, BarChart3, Zap, Target } from 'lucide-react'
import { metrics } from '@/lib/site-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'

// Simple Metric Card Component
const MetricCard = ({ metric, index, icon: Icon }: { 
  metric: any; 
  index: number; 
  icon: any;
}) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-card/50 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300">
        {/* Icon */}
        <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-emerald-500" />
        </div>

        {/* Metric Value */}
        <div className="text-4xl font-heading font-bold mb-2 text-emerald-400">
          {metric.prefix}{metric.value}{metric.suffix}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          {metric.label}
        </h3>
        
        <p className="text-muted-foreground text-sm">
          {metric.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Metrics() {
  const icons = [TrendingUp, Clock, DollarSign]

  return (
    <section className="relative py-16 overflow-hidden">
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
            <BarChart3 className="w-12 h-12 text-emerald-500 mx-auto" />
          </div>
          
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="text-emerald-400">Revolutionary</span> Performance
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our target performance goals for{' '}
            <span className="text-emerald-400 font-semibold">manufacturing and services</span>
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              index={index}
              icon={icons[index]}
            />
          ))}
        </div>

        {/* Validation Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card/50 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Target className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold uppercase tracking-wide text-sm">
                Target Goals
              </span>
              <Zap className="w-5 h-5 text-teal-400" />
            </div>
            
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              * Target metrics based on analysis of traditional consulting approaches.
              Will be validated through our pilot program.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
