const Button = ( {
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    ...props
}) => {
    // Define base styles applied to all button
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"

    // Define visual variants
    const variants = {
        primary: "bg-black text-white",
        secondary: "bg-gray-100 text-gray-900",
        outline: "border border-gray-300 text-gray-700"
    };

    // Define sizes
    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || size.md;
  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button
