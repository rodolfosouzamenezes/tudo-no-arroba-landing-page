'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { ComponentProps, useRef } from 'react'

interface SectionProps extends ComponentProps<'div'> {
  title: string
  description: string
  reverse?: boolean
  onlyColumn?: boolean
}

export function Section({
  title,
  description,
  children,
  className,
  reverse = false,
  onlyColumn = false,
  ...props
}: SectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div
      className={cn([
        'container flex w-full flex-col py-8 md:py-16 lg:py-28',
        {
          'mg:py-28 lg:flex-row lg:items-center lg:justify-between':
            !onlyColumn,
          'lg:flex-row-reverse': reverse,
        },
        className,
      ])}
      {...props}
    >
      <div
        ref={ref}
        className={cn([
          'space-y-4 text-center',
          {
            'lg:w-[45%] lg:text-start': !onlyColumn,
          },
        ])}
      >
        <h1
          className={cn([
            'text-4xl font-bold md:text-5xl',
            {
              'animate-fade-in delay-75': inView,
            },
          ])}
        >
          {title}
        </h1>
        <h2
          className={cn([
            'text-base font-light md:text-lg',
            {
              'lg:text-justify': !onlyColumn,
              'animate-fade-in delay-100': inView,
            },
          ])}
        >
          {description}
        </h2>
      </div>
      <div
        className={cn([
          'flex w-full pt-16',
          'translate-x-40 rotate-45 opacity-0 transition-all delay-200',
          {
            'lg:w-[45%] lg:pt-0': !onlyColumn,
            '-translate-x-40': reverse,
            'rotate-0 transform-none opacity-100': inView,
          },
        ])}
      >
        {children}
      </div>
    </div>
  )
}
