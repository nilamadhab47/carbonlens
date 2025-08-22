'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeInUp } from '@/lib/animations'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsLoading(false)
    reset()

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="neomorphic border-0 p-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Thank you for your interest!
                </h3>
                <p className="text-muted-foreground mb-4">
                  We've received your request and will get back to you within 24 hours to schedule your demo.
                </p>
                <div className="text-sm text-muted-foreground">
                  Check your email for confirmation and next steps.
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Ready to transform your <span className="bg-emerald-teal bg-clip-text text-transparent">ESG reporting</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a personalized demo and see how CarbonLens can streamline your carbon accounting process
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <Card className="neomorphic border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading">
                Request Your Demo
              </CardTitle>
              <p className="text-muted-foreground">
                Join leading companies already using CarbonLens for their sustainability reporting
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="bg-background/50"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="bg-background/50"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    {...register('company')}
                    className="bg-background/50"
                    placeholder="Your Company Ltd."
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className="bg-background/50 min-h-[100px]"
                    placeholder="Tell us about your current ESG reporting challenges or specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-emerald-teal hover:bg-emerald-teal-dark text-white py-6 text-lg font-semibold group"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{borderColor: 'rgba(255, 255, 255, 0.3)', borderTopColor: 'white'}} />
                      Submitting...
                    </div>
                  ) : (
                    <>
                      Request Demo
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                  <br />
                  We'll only use your information to provide the demo and follow up on your inquiry.
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
