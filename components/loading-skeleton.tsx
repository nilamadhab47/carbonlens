'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  animate?: boolean
}

export function Skeleton({ className = '', animate = true }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-muted rounded-md ${className}`}
      animate={animate ? {
        opacity: [0.5, 1, 0.5],
      } : {}}
      transition={animate ? {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      } : {}}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="neomorphic border-0 p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-10 w-32" />
    </div>
  )
}

export function MetricSkeleton() {
  return (
    <div className="neomorphic p-8 rounded-2xl text-center space-y-4">
      <Skeleton className="h-16 w-24 mx-auto" />
      <Skeleton className="h-6 w-32 mx-auto" />
      <Skeleton className="h-4 w-40 mx-auto" />
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="neomorphic border-0 p-6 space-y-4">
      <Skeleton className="h-8 w-8" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-28" />
        </div>
      </div>
    </div>
  )
}
