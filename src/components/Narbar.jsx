const Narbar = () => {

    const NavItems = [
        { name: 'Products', href: '#products'},
        { name: 'Resources', href: '#resources'},
        { name: 'Pricing', href: '#princing'},
        { name: 'Careers', href: '#careers'},
    ]
  return (
    <header className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <nav className="text-xl md:flex items-center gap-6">
            <ul className="flex items-center justify-center gap-6">
                {NavItems.map((links) => (
                <li key={links.name}>
                    <a href={links.href}>
                        {links.name}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
        </div>
       
    </header>
  )
}

export default Narbar