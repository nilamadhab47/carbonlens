'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Mail, MapPin } from 'lucide-react'
import { siteConfig, trustLogos } from '@/lib/site-data'
import { fadeInUp } from '@/lib/animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'API Docs', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Data Sources', href: '#' },
      { name: 'Methodology', href: '#' },
      { name: 'BRSR Guide', href: '#' },
      { name: 'CSRD Guide', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Data Processing', href: '#' },
      { name: 'Security', href: '#' },
    ],
  }

  return (
    <footer className="bg-card/30 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold bg-emerald-teal bg-clip-text text-transparent mb-2">
                {siteConfig.name}
              </h3>
              <p className="text-muted-foreground max-w-md">
                {siteConfig.description}. Built with NASA-grade satellite data and designed for Indian regulatory compliance.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <a
                href={siteConfig.links.twitter}
                className="p-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
                style={{backgroundColor: 'rgba(10, 10, 10, 0.5)'}}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-emerald-500" />
              </a>
              <a
                href={siteConfig.links.github}
                className="p-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
                style={{backgroundColor: 'rgba(10, 10, 10, 0.5)'}}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-emerald-500" />
              </a>
              <a
                href="mailto:hello@carbonlens.com"
                className="p-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
                style={{backgroundColor: 'rgba(10, 10, 10, 0.5)'}}
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-emerald-500" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="border-t pt-8 mb-8" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-sm text-muted-foreground">Powered by:</div>
            {trustLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{backgroundColor: 'rgba(10, 10, 10, 0.3)'}}
              >
                <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                </div>
                <span className="text-sm text-muted-foreground">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with 🌱 for a sustainable future</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Carbon neutral hosting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
