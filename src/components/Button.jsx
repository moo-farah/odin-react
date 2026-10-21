import { Link } from "react-router-dom";
const variants ={
  primary: "bg-white hover:bg-white/90 transition-colors duration-200 text-[#03225a] py-3 px-2",
  secondary: "bg-transparent text-white border border-white/80 hover:bg-white/10 transition-colors duration-200 px-8",
};

const Button = ( {variant = 'primary', to, children, ...props} ) => {
  const className = `inline-flex h-11 items-center rounded-full px-6 mt-12 text-sm font-medium ${variants[variant]}`

  if (to) {
    return (
      <Link
      to={to}
      className={className}
      {...props}
      >
        {children}
      </Link>
    );
  }
  return <button type="button" className={className} {...props}>{children}</button>;
};

export default Button;