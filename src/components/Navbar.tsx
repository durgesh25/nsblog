import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#4ea88a1a] py-5">
      <div className="layout-container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="https://novostack.com/images/header/ns-logo-tm.png" 
            alt="Novostack Logo" 
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex gap-10 items-center text-[13px] font-bold tracking-widest text-[#3d3d3d] uppercase">
          <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
          <a href="https://novostack.com/#projectsSection" className="hover:text-primary transition-colors">PROJECTS</a>
          <a href="https://novostack.com/#servicesSection" className="hover:text-primary transition-colors">SERVICES</a>
          <Link href="/about" className="hover:text-primary transition-colors">ABOUT US</Link>
          <a href="https://novostack.com/connect" className="button-primary px-8 py-3 rounded-sm">
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Icon (Placeholder for functionality) */}
        <div className="md:hidden text-[#3d3d3d]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
