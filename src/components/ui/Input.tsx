import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id: customId, ...props }, ref) => {
    const generatedId = useId()
    const inputId = customId || generatedId
    const errorId = `${inputId}-error`
    const helperId = `${inputId}-helper`

    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-purple-200/80"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              'w-full px-4 py-2.5 rounded-xl bg-purple-950/20 text-white placeholder-purple-300/30',
              'border border-purple-500/20 transition-all duration-200',
              'focus:border-purple-400 focus:bg-purple-950/40 focus:ring-2 focus:ring-purple-500/20 focus:outline-none',
              error && 'border-rose-500 focus:border-rose-400 focus:ring-rose-500/20',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="text-xs text-rose-400 flex items-center gap-1">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="text-xs text-purple-300/50">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
