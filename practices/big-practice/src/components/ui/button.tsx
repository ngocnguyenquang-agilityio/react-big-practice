import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center text-white justify-center rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ring-offset-slate-950 focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-blue-600 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
        outline:
          "border border-slate-800 bg-slate-950 hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-neutral-900 border-neutral-800 ring-1 ring-transparent transition duration-300 ease-in-out active:hover:scale-110 active:hover:ring-blue-600 relative z-10 disabled:cursor-not-allowed overflow-hidden before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform bg-neutral-900 dark:text-neutral-400 ring-neutral-700 before:bg-neutral-700",
        link: "underline-offset-4 hover:underline dark:text-neutral-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: 'w-full h-11',
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
