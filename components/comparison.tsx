'use client'

import { motion } from 'framer-motion'
import { Check, X, AlertTriangle, Crown, TrendingUp, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { comparison } from '@/lib/site-data'

export function Comparison() {

  const getStatusIcon = (value: string) => {
    if (value.includes('High') || value.includes('< 1 week') || value.includes('NASA-grade') || value.includes('Automatic') || value.includes('Unlimited')) {
      return <Check className="h-5 w-5 text-emerald-500" />
    }
    if (value.includes('Variable') || value.includes('Manual') || value.includes('Resource-bound') || value.includes('Time-intensive')) {
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    }
    return <X className="h-5 w-5 text-red-500" />
  }

  const getValueStyle = (value: string, columnIndex: number) => {
    if (columnIndex === 1) { // CarbonLens column
      return 'text-emerald-400 font-bold text-lg'
    }
    if (value.includes('Variable') || value.includes('Manual') || value.includes('Resource-bound') || value.includes('Time-intensive')) {
      return 'text-yellow-400 font-medium'
    }
    if (value.includes('2-3 months') || value.includes('3-6 months') || value.includes('₹5L-15L')) {
      return 'text-red-400 font-medium'
    }
    return 'text-muted-foreground font-medium'
  }

  return (
    <section className="relative py-16 overflow-hidden">
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
            Why choose <span className="text-emerald-400">CarbonLens</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Compare our approach with{' '}
            <span className="text-emerald-400 font-semibold">traditional consulting</span>{' '}
            and DIY solutions
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card/50 border border-emerald-500/20 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="p-6 border-b border-emerald-500/20 bg-emerald-500/5">
              <h3 className="text-2xl font-heading font-bold text-center text-emerald-400">
                Solution Comparison
              </h3>
            </div>

            {/* Simple Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-emerald-500/20">
                    {comparison.headers.map((header, index) => (
                      <th
                        key={header}
                        className={`p-4 text-left font-bold text-lg ${
                          index === 1 ? 'bg-emerald-500/10 text-emerald-400' : 'text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {header}
                          {index === 1 && (
                            <Badge className="bg-emerald-500 text-white px-2 py-1 text-xs font-bold">
                              <Crown className="w-3 h-3 mr-1" />
                              Recommended
                            </Badge>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-emerald-500/10 hover:bg-emerald-500/5 transition-all duration-300"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`p-4 ${
                            cellIndex === 1 ? 'bg-emerald-500/5' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {cellIndex > 0 && getStatusIcon(cell)}
                            <span className={getValueStyle(cell, cellIndex)}>
                              {cell}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Regulatory Landscape */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 text-emerald-400">
              The regulatory landscape is changing fast
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "BRSR Core (2024)",
                description: "Mandatory for top 1000 listed companies. Enhanced disclosure requirements with stricter audit trails.",
                icon: Award,
                status: "Active"
              },
              {
                title: "CSRD (2025+)",
                description: "EU Corporate Sustainability Reporting Directive. Critical for exporters and EU subsidiaries.",
                icon: TrendingUp,
                status: "Coming Soon"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-card/50 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <Badge className={`${item.status === 'Active' ? 'bg-emerald-500' : 'bg-teal-500'} text-white px-2 py-1 text-xs font-bold`}>
                      {item.status}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-emerald-400">
                    {item.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
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
