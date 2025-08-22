'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCases } from '@/lib/site-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function UseCases() {
  return (
    <section className="py-24" style={{backgroundColor: 'hsl(0 0% 4%)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4"
            variants={fadeInUp}
          >
            Proven across <span className="bg-emerald-teal bg-clip-text text-transparent">industries</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            From textiles to heavy industry, CarbonLens adapts to your sector's unique requirements
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={useCase.title} variants={fadeInUp}>
              <Card className="neomorphic border-0 h-full group hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-teal/20 flex items-center justify-center">
                      <span className="text-emerald-500 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    {useCase.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {useCase.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-emerald-500">
                      Input Data Required
                    </h4>
                    <div className="space-y-2">
                      {useCase.inputs.map((input) => (
                        <div key={input} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{input}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-teal-500">
                      Generated Outputs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.outputs.map((output) => (
                        <Badge
                          key={output}
                          variant="secondary"
                          className="text-xs bg-teal-500/10 text-teal-500 border-teal-500/20"
                        >
                          {output}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
                    <button className="flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors group">
                      View sample report
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <h3 className="text-xl font-heading font-semibold mb-2">
              Don't see your industry?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our pilot program includes custom methodology development for your specific sector requirements.
            </p>
            <button className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
              Discuss custom requirements →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
