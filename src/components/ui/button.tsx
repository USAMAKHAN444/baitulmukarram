import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:bg-gradient-to-r hover:from-primary hover:to-primary-glow shadow-islamic hover:shadow-elegant hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/50 shadow-sm hover:shadow-md",
        secondary:
          "bg-gradient-gold text-secondary-foreground hover:bg-gradient-to-r hover:from-accent hover:to-secondary shadow-gold hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        islamic: "bg-gradient-button-primary text-white hover:shadow-elegant hover:shadow-xl animate-glow",
        gold: "bg-gradient-button-secondary text-white hover:shadow-lg hover:shadow-xl",
        whatsapp: "bg-gradient-button-accent text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25",
        enroll: "bg-gradient-button-primary text-white hover:shadow-elegant hover:shadow-xl hover:shadow-primary/25 font-semibold animate-gradient-shift",
        premium: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white hover:from-amber-600 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl hover:shadow-amber-500/25",
        success: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25",
        info: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
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
