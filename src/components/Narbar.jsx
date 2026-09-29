import { Menu, X } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";


const Narbar = () => {
    const [isOpen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen(!isOpen);
    };

    const NavItems = [
        { name: 'Products', href: '/products'},
        { name: 'Resources', href: '/resources'},
        { name: 'Pricing', href: '/pricing'},
        { name: 'Careers', href: '/careers'},
    ];
  return (
    <header className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <nav className="md:flex text-md items-center gap-6">
            <ul className="flex items-center justify-center gap-6">
                {NavItems.map((links) => (
                <li key={links.name}>
                    <Link to={links.href}
                    className="px-4 py-1.5 hover:bg-gray-100/50 rounded-4xl"
                    >
                        {links.name}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
            <button 
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-black focus:outline-none"
                arial-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
            <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4">
                <ul className="flex flex-col space-y-2 text-base font-medium text-gray-700">
                    {NavItems.map((link) => (
                        <li key={link.name}>
                            <Link 
                                to={link.href}
                                onClick={() => setIsopen(false)} // Closes menu on click
                                className="block hover:text-black transition-colors text-2xl"
                                >
                                {link.name}

                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </header>
    
  )
}

export default Narbar