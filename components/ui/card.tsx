// import * as React from "react"
// import { cn } from "@/lib/utils";

// const Card = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-lg border bg-white text-gray-800 shadow-md",
//       className
//     )}
//     {...props}
//   />
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("p-4", className)}
//     {...props}
//   />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
//   <h2
//     ref={ref}
//     className={cn(
//       "text-xl font-semibold leading-tight",
//       className
//     )}
//     {...props}
//   />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn("text-sm text-gray-600", className)}
//     {...props}
//   />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("p-4", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("p-4 bg-gray-100 flex justify-end", className)}
//     {...props}
//   />
// ));
// CardFooter.displayName = "CardFooter";

// export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };



// import * as React from "react";
// import { cn } from "@/lib/utils";

// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-xl border bg-blue-200 text-gray-800 shadow-lg transition-transform transform hover:scale-110",
//       className
//     )}
//     {...props}
//   />
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("p-6 transition-all duration-300", className)}
//     {...props}
//   />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef<HTMLHeadingElement, CardProps>(({ className, ...props }, ref) => (
//   <h2
//     ref={ref}
//     className={cn(
//       "text-2xl font-semibold leading-tight transition-all duration-300",
//       className
//     )}
//     {...props}
//   />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef<HTMLParagraphElement, CardProps>(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn("text-lg text-gray-600 transition-all duration-300", className)}
//     {...props}
//   />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("p-6 transition-all duration-300", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("p-6 bg-gray-200 flex justify-end transition-all duration-300", className)}
//     {...props}
//   />
// ));
// CardFooter.displayName = "CardFooter";

// export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


import * as React from "react"
import { cn } from "@/lib/utils"
import "./CardHolographic.css" // Importamos el archivo CSS para el efecto holográfico

const Card = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm holographic", // Agregamos la clase 'holographic'
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }



