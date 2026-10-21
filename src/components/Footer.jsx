import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Products", href: "/products" },
      { name: "Pricing", href: "/pricing" },
      { name: "Get started", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Resources", href: "/resources" },
      { name: "Help", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/" },
      { name: "Terms", href: "/" },
    ],
  },
];




const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='mx-auto max-w-7xl bg-white/70 text-[#121212 px-5 py-12 sm:px-8 sm:py-16'>
      <div className=''>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h3 className='text-md font-medium tracking-[-0.01em] text-gray-900'>{link.title}</h3>
              <ul className='mt-4 space-y-2'>
                {link.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                    to={link.href}
                    className='text-sm text-gray-500 hover:text-gray-900'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='border border-gray-100 mt-6 w-full'></div>
        <p className='text-sm text-gray-600 mt-12'>
          &copy; {currentYear} LionPlan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer