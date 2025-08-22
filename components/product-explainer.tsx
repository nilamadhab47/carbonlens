'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, FileText, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function ProductExplainer() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload',
      description: 'Import your activity data from Excel, CSV, or connect your ERP system',
      details: ['Energy consumption', 'Transport logs', 'Production data', 'Facility information'],
    },
    {
      icon: Cpu,
      title: 'Compute',
      description: 'AI processes your data using NASA satellite intelligence and verified emission factors',
      details: ['NASA Harvest integration', 'CEA grid factors', 'WRI transport factors', 'Scope 1,2,3 calculations'],
    },
    {
      icon: FileText,
      title: 'Report',
      description: 'Generate audit-ready BRSR/CSRD reports with complete methodology documentation',
      details: ['BRSR Annexure tables', 'Methodology appendix', 'Audit trail', 'One-click PDF export'],
    },
  ]

  return (
    <section id="how-it-works" className="py-16" style={{backgroundColor: 'hsl(0 0% 4%)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6"
            variants={fadeInUp}
          >
            From data to{' '}
            <span className="text-emerald-400">
              compliance
            </span>{' '}
            in 3 steps
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our streamlined process transforms your raw activity data into{' '}
            <span className="text-emerald-400 font-semibold">
              audit-ready sustainability reports
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div key={step.title} variants={fadeInUp}>
                <Card className="bg-card/50 border border-emerald-500/20 h-full hover:border-emerald-500/40 transition-all duration-300 relative">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                        <IconComponent className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <Badge className="bg-emerald-500/20 text-emerald-500 mb-1 text-xs">
                          Step {index + 1}
                        </Badge>
                        <h3 className="text-xl font-heading font-bold">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {step.description}
                    </p>
                    
                    <div className="space-y-1.5">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-xs">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-emerald-500/60" />
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Simple data transformation example */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-heading font-semibold mb-2">
              Data transformation example
            </h3>
            <p className="text-muted-foreground text-sm">
              Raw activity data becomes compliant BRSR tables with proper Scope categorization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input */}
            <div className="bg-card/30 border border-emerald-500/20 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-emerald-400 mb-3">Input Data</h4>
              <div className="space-y-1 text-xs text-muted-foreground font-mono">
                <div>electricity_consumption: 45,000 kWh</div>
                <div>fuel_diesel: 2,500 liters</div>
                <div>transport_km: 12,000 km</div>
              </div>
            </div>
            
            {/* Output */}
            <div className="bg-card/30 border border-emerald-500/20 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-emerald-400 mb-3">BRSR Output</h4>
              <div className="space-y-1 text-xs text-muted-foreground font-mono">
                <div>Scope 1: 6.7 tCO2e</div>
                <div>Scope 2: 36.0 tCO2e</div>
                <div>Scope 3: 2.4 tCO2e</div>
                <div className="text-emerald-400 font-semibold">Total: 45.1 tCO2e</div>
              </div>
            </div>
          </div>
          
          {/* Scope legend */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-muted-foreground">Scope 1: Direct</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-muted-foreground">Scope 2: Energy</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-muted-foreground">Scope 3: Indirect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
