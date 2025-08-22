'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, BookmarkPlus, Share2, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MicroInteractionProps {
  children: React.ReactNode
  type?: 'hover' | 'click' | 'focus'
  effect?: 'scale' | 'rotate' | 'bounce' | 'shake' | 'glow'
}

export function MicroInteraction({ 
  children, 
  type = 'hover', 
  effect = 'scale' 
}: MicroInteractionProps) {
  const [isTriggered, setIsTriggered] = useState(false)

  const getAnimation = () => {
    switch (effect) {
      case 'scale':
        return { scale: isTriggered ? 1.05 : 1 }
      case 'rotate':
        return { rotate: isTriggered ? 5 : 0 }
      case 'bounce':
        return { y: isTriggered ? -5 : 0 }
      case 'shake':
        return { x: isTriggered ? [-2, 2, -2, 2, 0] : 0 }
      case 'glow':
        return { 
          boxShadow: isTriggered 
            ? '0 0 20px rgba(16, 185, 129, 0.4)' 
            : '0 0 0px rgba(16, 185, 129, 0)' 
        }
      default:
        return {}
    }
  }

  const handleTrigger = () => {
    if (type === 'click') {
      setIsTriggered(true)
      setTimeout(() => setIsTriggered(false), 200)
    }
  }

  return (
    <motion.div
      animate={getAnimation()}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => type === 'hover' && setIsTriggered(true)}
      onHoverEnd={() => type === 'hover' && setIsTriggered(false)}
      onFocus={() => type === 'focus' && setIsTriggered(true)}
      onBlur={() => type === 'focus' && setIsTriggered(false)}
      onClick={handleTrigger}
    >
      {children}
    </motion.div>
  )
}

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)
  const [count, setCount] = useState(127)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  return (
    <motion.button
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/50 hover:bg-card transition-colors"
      onClick={handleLike}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart 
          className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : 'text-muted-foreground'}`} 
        />
      </motion.div>
      <span className="text-sm">{count}</span>
    </motion.button>
  )
}

export function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <motion.button
      className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
      onClick={() => setIsBookmarked(!isBookmarked)}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isBookmarked ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        <BookmarkPlus 
          className={`h-4 w-4 ${isBookmarked ? 'text-emerald-500 fill-current' : 'text-muted-foreground'}`} 
        />
      </motion.div>
    </motion.button>
  )
}

export function ShareButton() {
  const [isShared, setIsShared] = useState(false)

  const handleShare = async () => {
    setIsShared(true)
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CarbonLens - Automated ESG Reports',
          text: 'Check out CarbonLens for automated carbon reporting',
          url: window.location.href,
        })
      } catch {
        console.log('Share cancelled')
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(window.location.href)
    }
    
    setTimeout(() => setIsShared(false), 2000)
  }

  return (
    <motion.button
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/50 hover:bg-card transition-colors"
      onClick={handleShare}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isShared ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isShared ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Share2 className="h-4 w-4 text-muted-foreground" />
        )}
      </motion.div>
      <span className="text-sm">{isShared ? 'Shared!' : 'Share'}</span>
    </motion.button>
  )
}

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <motion.button
      className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors"
      onClick={handleCopy}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isCopied ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </motion.div>
    </motion.button>
  )
}

interface PulseButtonProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

export function PulseButton({ children, ...props }: PulseButtonProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(16, 185, 129, 0.4)',
          '0 0 0 10px rgba(16, 185, 129, 0)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      }}
      className="rounded-lg"
    >
      <Button {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
