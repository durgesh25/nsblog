import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/novostack/' },
    { name: 'Twitter', href: 'https://x.com/NovoStack?s=20' },
    { name: 'Instagram', href: 'https://www.instagram.com/novostack/' },
    { name: 'GitHub', href: 'https://github.com/novostack' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'https://novostack.com/#services' },
    { name: 'Experties', href: 'https://novostack.com/expertise' },
    { name: 'Hire Us', href: 'https://novostack.com/hire-us' },
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: 'https://novostack.com/team' },
    { name: "Let's Talk", href: '/contact' },
  ];

  const projectLinks = [
    { name: 'FINTECH', href: 'https://novostack.com/projects?category=FINTECH' },
    { name: 'BANKING', href: 'https://novostack.com/projects?category=BANKING' },
    { name: 'SOCIAL', href: 'https://novostack.com/projects?category=SOCIAL' },
    { name: 'AI/ML', href: 'https://novostack.com/projects?category=AI/ML' },
    { name: 'SAAS', href: 'https://novostack.com/projects?category=SAAS' },
    { name: 'BLOCKCHAIN', href: 'https://novostack.com/projects?category=BLOCKCHAIN' },
    { name: 'E-COMMERCE', href: 'https://novostack.com/projects?category=E-COMMERCE' },
  ];

  const hiringLinks = [
    { name: 'Careers', href: 'https://novostack.com/careers' },
    { name: 'Open Positions', href: 'https://novostack.com/careers/open-positions' },
  ];

  return (
    <footer className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950 overflow-hidden text-white">
      {/* Background radial ambient glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full -mb-48 -mr-48 pointer-events-none" />
      <div className="absolute top-0 left-10 w-80 h-80 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-12 gap-x-8 mb-20">
          
          {/* Brand & Socials Column */}
          <div className="col-span-4 md:col-span-5 lg:col-span-4 xl:col-span-5">
            <Link href="/" className="inline-block group mb-8">
              <img
                src="/images/NSlogo4.svg"
                alt="NovoStack Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-light text-base md:text-lg">
              A digital transformation and product engineering company building high-performance technology platforms for the future.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-6 justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500 hover:text-emerald-400 transition-all whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* HQ India Column */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <h5 className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-8">
              HQ India
            </h5>
            <p className="text-slate-400 leading-relaxed font-medium text-sm md:text-base">
              8th Floor, A42 Block-A <br />
              Priska Pride Tower, <br />
              Industrial Area, Sector 62, Noida, <br />
              Uttar Pradesh 201308
            </p>
          </div>

          {/* Navigation, Projects & Hiring Column */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 xl:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              {/* Navigation */}
              <div>
                <h5 className="text-white text-xs font-black uppercase tracking-widest mb-8">
                  Navigation
                </h5>
                <ul className="space-y-4">
                  {navLinks.map((item) => {
                    const isExternal = item.href.startsWith('http');
                    const linkContent = (
                      <>
                        <span>{item.name}</span>
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-emerald-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    );

                    return (
                      <li key={item.name}>
                        {isExternal ? (
                          <a
                            href={item.href}
                            className="text-slate-400 hover:text-white transition-all text-sm font-medium flex items-center gap-2 group"
                          >
                            {linkContent}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-slate-400 hover:text-white transition-all text-sm font-medium flex items-center gap-2 group"
                          >
                            {linkContent}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h5 className="text-white text-xs font-black uppercase tracking-widest mb-8">
                  Projects
                </h5>
                <ul className="space-y-4">
                  {projectLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-all text-sm font-medium flex items-center gap-2 group"
                      >
                        <span>{item.name}</span>
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-emerald-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* We Are Hiring */}
              <div className="col-span-2 sm:col-span-1">
                <h5 className="text-white text-xs font-black uppercase tracking-widest mb-8">
                  We Are Hiring
                </h5>
                <ul className="space-y-4">
                  {hiringLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-all text-sm font-medium flex items-center gap-2 group"
                      >
                        <span>{item.name}</span>
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-emerald-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] md:tracking-[0.3em] font-black text-center md:text-left">
            © {new Date().getFullYear()} Novostack Solutions • Built for Performance
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="https://novostack.com/privacy-policy"
              className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-all whitespace-nowrap"
            >
              • Privacy Policy
            </a>
            <a
              href="https://novostack.com/terms-of-service"
              className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-all whitespace-nowrap"
            >
              • Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
