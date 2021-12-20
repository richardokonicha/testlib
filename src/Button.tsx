import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Provide a text for the button */
    children?: ReactNode
    /** The variant of the button */
    variant: "primary" | "secondary" | "tertiary"
}

/* This is a special button component */
export const Button = ({ children, variant = "primary", ...props }: Props) => {
    return (
        <button
            {...props}
            style={{
                backgroundColor: variant === "primary" ? "blue" : "white",
                color: variant === "primary" ? "white" : "blue",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                outline: "none",


            }}
        >
            {children}
        </button>
    )
}