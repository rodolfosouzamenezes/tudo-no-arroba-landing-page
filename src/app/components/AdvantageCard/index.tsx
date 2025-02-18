import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

interface AdvantageCardProps extends ComponentProps<'div'> {
  title: string
  description: string
  icon: LucideIcon
}

export function AdvantageCard({
  title,
  description,
  icon: Icon,
  className,
  ...props
}: AdvantageCardProps) {
  return (
    <div
      className={cn([
        'flex flex-col items-center justify-start space-y-2 rounded-lg bg-white p-6 text-center',
        className,
      ])}
      {...props}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs">{description}</p>
    </div>
  )
}
