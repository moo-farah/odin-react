const footerColumns = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Jobs', href: '#jobs' },
        { name: 'For the Record', href: '#for-the-record' },
      ],
    },
    {
      title: 'Communities',
      links: [
        { name: 'For Artists', href: '#artists' },
        { name: 'For Creators', href: '#creators' },
        { name: 'For Authors', href: '#authors' },
        { name: 'Developers', href: '#developers' },
        { name: 'Advertising', href: '#advertising' },
        { name: 'Investors', href: '#investors' },
        { name: 'Vendors', href: '#vendors' },
      ],
    },
    {
      title: 'Useful links',
      links: [
        { name: 'Support', href: '#support' },
        { name: 'Free Mobile App', href: '#app' },
        { name: 'Popular by Country', href: '#country' },
        { name: 'Top Song Lyrics', href: '#lyrics' },
        { name: 'Import your music', href: '#import' },
      ],
    },
    {
      title: 'Spotify Plans',
      links: [
        { name: 'Premium Individual', href: '#individual' },
        { name: 'Premium Duo', href: '#duo' },
        { name: 'Premium Family', href: '#family' },
        { name: 'Premium Student', href: '#student' },
        { name: 'Spotify Free', href: '#free' },
      ],
    },
]; 

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#121212] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Navigation Columns */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {footerColumns.map((column, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-white text-sm font-bold tracking-tight">
                        {column.title}
                      </h4>
                      <ul className="space-y-2">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a 
                              href={link.href}
                              className="text-[#B3B3B3] text-sm hover:text-white"
                              >
                                {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                ))}
            </div>

              {/* Social Media Icons column */}
              <div className="flex md:justify-end items-start space-x-4 pt-2 md:pt-0 mb-4">
                {/* Instagram */}
                <a href="#instagram" className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a href="#twitter" className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#facebook" className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/>
            </svg>
          </a>

              </div>

        </div>

          <div className="border-t border-[#B3B3B3] mb-8"></div>


        <div className="text-sm flex items-center justify-end text-white px-6 py-3">
          <p>&copy; {currentYear} The Odin Project. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer