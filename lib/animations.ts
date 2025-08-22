import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const floatAnimation: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const pulseRing: Variants = {
  initial: {
    scale: 0.33,
    opacity: 1,
  },
  animate: {
    scale: 2.33,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
}

// Reduced motion variants
export const reducedMotionFadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
}

// Viewport animation settings
export const viewportSettings = {
  once: true,
  margin: '-100px',
  amount: 0.3,
}
