import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "/", internal: true },
      { name: "Plans & pricing", href: "/pricing", internal: true },
      { name: "How transfers work", href: "/teams", internal: true },
    ],
  },
  {
    title: "Plans",
    links: [
      { name: "Basic", href: "/pricing", internal: true },
      { name: "Plus", href: "/pricing", internal: true },
      { name: "Pro", href: "/pricing", internal: true },
      { name: "Get started", href: "/pricing", internal: true },
    ],
  },
  {
    title: "Business",
    links: [
      { name: "For teams", href: "/pricing", internal: true },
      { name: "Teams", href: "/teams", internal: true },
      { name: "Support", href: "/teams", internal: true },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about", internal: true },
      { name: "Careers", href: "/careers", internal: true },
      { name: "Open roles", href: "/careers/roles", internal: true },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Home", href: "/", internal: true },
      { name: "Privacy", href: "/", internal: true },
      { name: "Terms", href: "/", internal: true },
    ],
  },
];

const linkClass = "text-sm text-white/45 hover:text-white";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-lg font-normal text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.name}>
                  {link.internal ? (
                    <Link to={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-16 text-sm text-white/40">
        © {currentYear} LionPlan. All rights reserved.
      </p>
    </div>
  </footer>
  );
}

export default Footer;