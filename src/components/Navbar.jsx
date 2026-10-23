import { Link } from "react-router-dom";
import logo from "../assets/icon.png";

const Navbar = () => {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
        <nav
            aria-label="Main"
            className='mx-auto flex items-center justify-between h-18 w-full max-w-7xl gap-4 px-5 sm:px-8'>
            <Link   
            to="/"
            className="flex items-center gap-2 rounded-lg py-1"
            >
                <img src={logo} sizes={26}
                className="w-10 h-10 rounded-full" 
                alt="LionPlan Logo"
                />
                <span className='text-[1.0625rem] font-medium tracking-[-0.02em] text-white'>LionPlan</span>
            </Link>

            <div className='flex items-center gap-1.5 sm:gap-2'>
                <div className='hidden items-center gap-0.5 sm:flex'>
                    {navItems.map((item) => (
                        <Link
                        key={item.label}
                        to={item.href}
                        className='rounded-lg px-3 py-1.5 text-sm text-[0.875rem] tracking-[-0.01em] text-white/70 outline-none transition-colors duration-150 hover:text-white focus-visible:ring-2 focus-visible:ring-white'
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <Link
                to='/'
                className='inline-flex h-9 shrink-0 items-center whitespace-nowrap px-4 rounded-full bg-white text-[0.875rem] font-medium tracking-[-0.01em] text-[#03225a] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-white hover:bg-white/90'
                >
                    Get started
                </Link>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;