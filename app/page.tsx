import { Navbar } from '@/components/navbar'
import { EnhancedHero } from '@/components/enhanced-hero'
import { InteractiveDemo } from '@/components/interactive-demo'
import { ProductExplainer } from '@/components/product-explainer'
import { Features } from '@/components/features'
import { Metrics } from '@/components/metrics'
import { TrustSignals } from '@/components/trust-signals'
import { Comparison } from '@/components/comparison'
import { UseCases } from '@/components/use-cases'

import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { LeadForm } from '@/components/lead-form'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { FloatingCTA } from '@/components/floating-cta'
import { PerformanceMonitor } from '@/components/performance-monitor'

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <EnhancedHero />
        <InteractiveDemo />
        <ProductExplainer />
        <Features />
        <Metrics />
        <TrustSignals />
        <Comparison />
        <UseCases />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <FloatingCTA />
      <PerformanceMonitor />
    </div>
  );
}
