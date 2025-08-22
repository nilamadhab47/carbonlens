'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, FileText, BarChart3, Download, Zap, Cpu, Database, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const demoSteps = [
  {
    id: 'upload',
    title: 'Upload Data',
    description: 'Drag & drop your Excel files or connect ERP',
    preview: {
      type: 'upload',
      files: ['energy_consumption.xlsx', 'transport_logs.csv', 'facility_data.xlsx'],
      status: 'Processing...'
    }
  },
  {
    id: 'processing',
    title: 'AI Processing',
    description: 'NASA Harvest + emission factors analysis',
    preview: {
      type: 'processing',
      steps: [
        { name: 'Satellite data integration', status: 'completed' },
        { name: 'Emission factor mapping', status: 'completed' },
        { name: 'Scope categorization', status: 'processing' },
        { name: 'BRSR table generation', status: 'pending' }
      ]
    }
  },
  {
    id: 'report',
    title: 'Generated Report',
    description: 'Audit-ready BRSR compliance report',
    preview: {
      type: 'report',
      metrics: {
        scope1: '6.7 tCO2e',
        scope2: '36.0 tCO2e',
        scope3: '2.4 tCO2e',
        total: '45.1 tCO2e'
      },
      tables: ['Energy consumption', 'Transport emissions', 'Waste management']
    }
  }
]

// Floating Particle Component


export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentStep < demoSteps.length - 1) {
              setCurrentStep(prev => prev + 1)
              return 0
            } else {
              setIsPlaying(false)
              return 100
            }
          }
          return prev + 6 // Much faster progress
        })
      }, 50) // Faster interval
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentStep])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setProgress(0)
  }

  const renderPreview = (step: typeof demoSteps[0]) => {
    switch (step.preview.type) {
      case 'upload':
        return (
          <div className="space-y-3">
            {step.preview.files?.map((file, index) => (
              <motion.div
                key={file}
                className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <FileText className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium">{file}</span>
                <Badge className="ml-auto bg-emerald-500 text-white text-xs">
                  ✓ Uploaded
                </Badge>
              </motion.div>
            ))}
            <div className="text-center text-sm text-emerald-500 font-medium">
              {step.preview.status}
            </div>
          </div>
        )
      
      case 'processing':
        return (
          <div className="space-y-3">
            {step.preview.steps?.map((procStep, index) => (
              <motion.div
                key={procStep.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <div className={`w-3 h-3 rounded-full ${
                  procStep.status === 'completed' ? 'bg-emerald-500' :
                  procStep.status === 'processing' ? 'bg-yellow-500 animate-pulse' :
                  'bg-gray-500'
                }`} />
                <span className="text-sm">{procStep.name}</span>
                {procStep.status === 'processing' && (
                  <div className="ml-auto">
                    <div className="w-4 h-4 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )
      
      case 'report':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(step.preview.metrics || {}).map(([key, value]) => (
                <motion.div
                  key={key}
                  className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {key.replace(/(\d)/, ' $1')}
                  </div>
                  <div className="text-lg font-bold text-emerald-500">{value}</div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Generated Tables:</div>
              {step.preview.tables?.map((table) => (
                <div key={table} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BarChart3 className="h-3 w-3" />
                  {table}
                </div>
              ))}
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
      
      {/* Minimal Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <Database className="w-12 h-12 text-emerald-500 mx-auto" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
            See CarbonLens in action
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how we transform your raw data into{' '}
            <span className="text-emerald-400 font-semibold">compliance-ready reports</span>{' '}
            in minutes
          </p>
        </motion.div>

        {/* Clean Demo Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20 overflow-hidden">

            <div className="relative z-10 p-8">
              {/* Demo Controls */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <Button
                  onClick={handlePlay}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 font-semibold"
                >
                  {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                  {isPlaying ? 'Pause Demo' : 'Start Demo'}
                </Button>

                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10 px-6 py-3 font-semibold"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 -z-10" />
                
                {demoSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center relative"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                        index <= currentStep 
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl' 
                          : 'glass border-2 border-emerald-500/30 text-emerald-400'
                      }`}
                      animate={index <= currentStep ? {
                        boxShadow: [
                          '0 0 20px rgba(16, 185, 129, 0.5)',
                          '0 0 40px rgba(16, 185, 129, 0.8)',
                          '0 0 20px rgba(16, 185, 129, 0.5)',
                        ],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {index + 1}
                      
                      {/* Pulse Ring */}
                      {index === currentStep && (
                        <motion.div
                          className="absolute inset-0 border-2 border-emerald-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Step Content */}
                    <motion.div
                      className="mt-4 text-center max-w-xs"
                      animate={index === currentStep ? {
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className={`text-lg font-bold mb-2 transition-all ${
                        index <= currentStep ? 'text-emerald-400' : 'text-muted-foreground'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step.description}
                      </div>
                    </motion.div>

                    {/* Connection Arrow */}
                    {index < demoSteps.length - 1 && (
                      <motion.div
                        className="absolute top-8 -right-8"
                        animate={{
                          x: [0, 5, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-6 w-6 text-emerald-500" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Futuristic Progress Bar */}
              <motion.div
                className="relative w-full h-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full mb-12 overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-full"
                  style={{ width: `${(currentStep * 100 + progress) / demoSteps.length}%` }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(16, 185, 129, 0.5)',
                      '0 0 20px rgba(16, 185, 129, 0.8)',
                      '0 0 10px rgba(16, 185, 129, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Progress Glow Effect */}
                <motion.div
                  className="absolute top-0 h-full w-4 bg-white/50 rounded-full blur-sm"
                  style={{ 
                    left: `${(currentStep * 100 + progress) / demoSteps.length}%`,
                    transform: 'translateX(-50%)',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Revolutionary Demo Preview */}
              <div className="relative min-h-[400px] glass-emerald rounded-2xl border border-emerald-500/40 overflow-hidden">
                {/* Dynamic Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                    backgroundSize: '100px 100px',
                  }}
                />

                <div className="relative z-10 p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: 50, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, rotateX: 15 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    >
                      {/* Step Header */}
                      <motion.div
                        className="text-center mb-8"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <motion.h3
                          className="text-3xl font-heading font-black mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          style={{ backgroundSize: '200% 200%' }}
                        >
                          {demoSteps[currentStep].title}
                        </motion.h3>
                        <p className="text-emerald-200/80 text-lg">
                          {demoSteps[currentStep].description}
                        </p>
                      </motion.div>

                      {/* Enhanced Preview Content */}
                      <motion.div
                        className="transform-3d"
                        animate={{
                          rotateY: [0, 2, 0, -2, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      >
                        {renderPreview(demoSteps[currentStep])}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Corner Decorations */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-emerald-400/60" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4"
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Cpu className="w-5 h-5 text-teal-400/60" />
                </motion.div>
              </div>

              {/* Award-Winning CTA Section */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 text-white px-12 py-6 text-xl font-bold shadow-2xl overflow-hidden group"
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    <Download className="h-6 w-6 mr-4 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">Experience the Magic</span>
                    <Zap className="h-6 w-6 ml-4 group-hover:scale-125 transition-transform" />
                  </Button>
                </motion.div>

                <motion.p
                  className="text-emerald-200/80 mt-4 text-lg font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Upload your files and get a{' '}
                  <motion.span
                    className="text-emerald-400 font-bold"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(16, 185, 129, 0.5)',
                        '0 0 20px rgba(16, 185, 129, 0.8)',
                        '0 0 10px rgba(16, 185, 129, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    sample report in 5 minutes
                  </motion.span>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
