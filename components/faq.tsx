'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { faqs } from '@/lib/site-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-card/20">
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
            Frequently asked <span className="bg-emerald-teal bg-clip-text text-transparent">questions</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Everything you need to know about CarbonLens and our pilot program
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="neomorphic border-0 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-card/20 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you understand how CarbonLens can transform your ESG reporting process.
            </p>
            <button className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
              Schedule a consultation →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
