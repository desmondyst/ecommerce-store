// This imports the forwardRef function from the React library. forwardRef is used to forward a ref from a parent component to a child component.
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// This defines an interface named ButtonProps that extends the React.ButtonHTMLAttributes interface. This interface inherits all the standard HTML button attributes, allowing you to use them in the Button component.
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// forwardRef is used to create a React component that can forward a ref to its child component.
// The component takes in various props, including className, children, disabled, and type, and spreads the rest into props.
// The ref argument is passed to the forwardRef function.
// The component returns a button element with the ref forwarded to it.
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, disabled, type = "button", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    `
                w-auto
                rounded-full
                bg-black
                border-transparent
                px-5
                py-3
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-white
                font-semibold
                hover:opacity-75
                transition
                `,
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

// This sets the displayName property of the Button component. This is helpful for debugging and identifying the component in React DevTools.
Button.displayName = "Button";

export default Button;
