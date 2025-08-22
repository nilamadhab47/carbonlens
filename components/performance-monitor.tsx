'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  cls: number // Cumulative Layout Shift
  fid: number // First Input Delay
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [showMetrics, setShowMetrics] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const newMetrics: Partial<PerformanceMetrics> = {}

        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              newMetrics.fcp = entry.startTime
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {
            newMetrics.lcp = entry.startTime
          }
          if (entry.entryType === 'layout-shift') {
            newMetrics.cls = (newMetrics.cls || 0) + (entry as any).value
          }
          if (entry.entryType === 'first-input') {
            newMetrics.fid = (entry as any).processingStart - entry.startTime
          }
        })

        setMetrics(prev => ({ ...prev, ...newMetrics } as PerformanceMetrics))
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] })

      return () => observer.disconnect()
    }
  }, [])

  if (!metrics || process.env.NODE_ENV !== 'development') return null

  const getScoreColor = (metric: keyof PerformanceMetrics, value: number) => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      cls: { good: 0.1, poor: 0.25 },
      fid: { good: 100, poor: 300 }
    }

    const threshold = thresholds[metric]
    if (value <= threshold.good) return 'text-emerald-500'
    if (value <= threshold.poor) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: showMetrics ? 1 : 0.7, x: 0 }}
      whileHover={{ opacity: 1 }}
    >
      <div 
        className="bg-card/95 backdrop-blur-sm border rounded-lg p-3 cursor-pointer" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
        onClick={() => setShowMetrics(!showMetrics)}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold">Performance</span>
        </div>
        
        {showMetrics && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-1 text-xs"
          >
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getScoreColor('fcp', metrics.fcp)}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getScoreColor('lcp', metrics.lcp)}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getScoreColor('cls', metrics.cls)}>
                {metrics.cls?.toFixed(3) || '0.000'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={getScoreColor('fid', metrics.fid)}>
                {Math.round(metrics.fid || 0)}ms
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
