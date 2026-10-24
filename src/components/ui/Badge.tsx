import type { FC, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'neon' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  size?: 'sm' | 'md'
  dot?: boolean
}

export const Badge: FC<BadgeProps> = ({
  className,
  variant = 'neon',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const variants = {
    neon: 'bg-purple-950/60 text-purple-200 border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.2)]',
    success: 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30',
    warning: 'bg-amber-950/50 text-amber-300 border-amber-500/30',
    danger: 'bg-rose-950/50 text-rose-300 border-rose-500/30',
    info: 'bg-cyan-950/50 text-cyan-300 border-cyan-500/30',
    neutral: 'bg-slate-900/60 text-slate-300 border-slate-700/50',
  }

  const dotColors = {
    neon: 'bg-purple-400 shadow-[0_0_8px_#c084fc]',
    success: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
    warning: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]',
    danger: 'bg-rose-400 shadow-[0_0_8px_#f87171]',
    info: 'bg-cyan-400 shadow-[0_0_8px_#38bdf8]',
    neutral: 'bg-slate-400',
  }

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border tracking-wide select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full inline-block', dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
