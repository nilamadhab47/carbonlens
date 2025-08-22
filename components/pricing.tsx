'use client'

import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap, Rocket, Target, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { pricing } from '@/lib/site-data'

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />

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
            <Crown className="w-12 h-12 text-emerald-500 mx-auto" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-emerald-400">Founder Pilot</span> Program
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get early access with{' '}
            <span className="text-emerald-400 font-semibold">dedicated founder support</span>{' '}
            and custom methodology development
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
                    <div className="bg-card/50 border border-emerald-500/20 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-2 text-sm font-bold rounded-bl-xl">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Limited Spots
              </div>
            </div>

            {/* Header Section */}
            <div className="text-center p-8">
              {/* Pilot Program Badge */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="h-5 w-5 text-emerald-500 fill-current" />
                <Badge className="bg-emerald-500 text-white px-3 py-1 text-sm font-bold">
                  <Crown className="w-4 h-4 mr-1" />
                  Pilot Program
                </Badge>
                <Star className="h-5 w-5 text-emerald-500 fill-current" />
              </div>
              
                            {/* Title */}
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">
                {pricing.title}
              </h3>
              
              {/* Price Display */}
              <div className="mb-6">
                <div className="text-5xl font-heading font-bold text-emerald-400 mb-2">
                  {pricing.price}
                </div>
                <div className="text-lg text-emerald-300/80 font-medium">
                  {pricing.period}
                </div>
              </div>
              
              <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
                {pricing.description}
              </p>
            </div>

            {/* Features List */}
            <div className="px-8 pb-6">
              <div className="space-y-4 mb-8">
                {pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

                            {/* CTA Button */}
              <div className="mb-6">
                <Button 
                  size="lg" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 font-bold"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  {pricing.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

                            {/* Pilot Benefits */}
              <div className="text-center">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold mb-3 text-sm">
                    🎯 Exclusive Pilot Benefits
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-emerald-200/80 text-xs font-medium">
                    {[
                      '• Weekly founder check-ins',
                      '• Custom emission factors',
                      '• Methodology validation',
                      '• Priority feature requests'
                    ].map((item) => (
                      <div key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 text-emerald-400">
              Why join the pilot program?
            </h3>
          </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Shape the product",
                description: "Direct input on features and methodology development for your industry needs.",
                emoji: "🚀"
              },
              {
                icon: DollarSign,
                title: "Locked-in pricing",
                description: "Pilot pricing guaranteed for 12 months post-launch, regardless of public pricing.",
                emoji: "💰"
              },
              {
                icon: Target,
                title: "Founder access",
                description: "Direct line to founders for urgent support and strategic guidance.",
                emoji: "🎯"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-card/50 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className="relative mx-auto mb-4 w-16 h-16">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="absolute top-2 right-2 text-lg">
                      {benefit.emoji}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-emerald-400">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
