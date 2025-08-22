'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const trustMetrics = [
  {
    icon: Users,
    value: '12',
    label: 'Pilot spots available',
    description: 'Limited early access program'
  },
  {
    icon: Shield,
    value: 'SOC 2',
    label: 'Security planned',
    description: 'Enterprise-grade security roadmap'
  },
  {
    icon: Clock,
    value: '1:1',
    label: 'Founder support',
    description: 'Direct access during pilot'
  },
  {
    icon: Award,
    value: 'Open',
    label: 'Source methodology',
    description: 'Transparent calculations'
  }
]

const certifications = [
  {
    name: 'GHG Protocol',
    description: 'Corporate standard alignment',
    status: 'in-development'
  },
  {
    name: 'BRSR Core',
    description: 'SEBI compliance mapping',
    status: 'in-development'
  },
  {
    name: 'CSRD ESRS',
    description: 'EU taxonomy research',
    status: 'planned'
  },
  {
    name: 'ISO 14064',
    description: 'GHG quantification standard',
    status: 'planned'
  }
]

const recentUpdates = [
  {
    date: 'This week',
    title: 'Pilot program launched',
    description: 'Now accepting early access applications',
    type: 'milestone'
  },
  {
    date: 'Last week',
    title: 'MVP development started',
    description: 'Core calculation engine in progress',
    type: 'development'
  },
  {
    date: '2 weeks ago',
    title: 'Market research completed',
    description: 'BRSR/CSRD requirements analysis',
    type: 'research'
  }
]

export function TrustSignals() {
  return (
    <section className="py-16 bg-card/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {trustMetrics.map((metric) => {
            const IconComponent = metric.icon
            return (
              <motion.div key={metric.label} variants={fadeInUp}>
                <Card className="neomorphic border-0 text-center group hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-teal/20 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-emerald-500 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm font-semibold mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card className="neomorphic border-0 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-emerald-500" />
                  <h3 className="text-lg font-heading font-semibold">
                    Standards & Roadmap
                  </h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between p-3 rounded-lg" style={{backgroundColor: 'rgba(10, 10, 10, 0.5)'}}>
                      <div>
                        <div className="font-semibold text-sm">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">{cert.description}</div>
                      </div>
                      <Badge className={
                        cert.status === 'in-development' 
                          ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20'
                          : 'bg-gray-500/20 text-gray-400 border-gray-500/20'
                      }>
                        {cert.status === 'in-development' ? (
                          <>
                            <Clock className="h-3 w-3 mr-1" />
                            In Development
                          </>
                        ) : (
                          <>
                            <Clock className="h-3 w-3 mr-1" />
                            Planned
                          </>
                        )}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Updates */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card className="neomorphic border-0 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <h3 className="text-lg font-heading font-semibold">
                    Development Progress
                  </h3>
                </div>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-teal/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{update.title}</span>
                          <Badge variant="outline" className="text-xs">
                            {update.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {update.description}
                        </p>
                        <span className="text-xs text-emerald-500">
                          {update.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <button className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors">
                    Follow our progress →
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Security Badge */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <Shield className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-medium">
              Security-first development • India-focused • Open methodology
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
