import * as React from "react"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500",
          className || ""
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }