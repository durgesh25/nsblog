'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'SERVICES', href: 'https://novostack.com/#services' },
    { name: 'PROJECTS', href: 'https://novostack.com/projects' },
    { name: 'EXPERTISE', href: 'https://novostack.com/expertise' },
    { name: 'HIRE US', href: 'https://novostack.com/hire-us' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'BLOGS', href: '/' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.startsWith('/post') || pathname.startsWith('/category');
    }
    if (href === '/about') {
      return pathname === '/about';
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-2xl py-3.5 border-white/10 shadow-xl shadow-black/40'
          : 'bg-slate-950/60 backdrop-blur-md py-5 border-white/5'
      }`}
    >
      <div className="layout-container flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/images/NSlogo4.svg"
            alt="NovoStack Logo"
            className="h-8 md:h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            const isExternal = item.href.startsWith('http');
            const linkClass = `text-[10px] lg:text-[11px] xl:text-[12px] font-black uppercase tracking-widest transition-all duration-200 ${
              active
                ? 'text-emerald-400 font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`;

            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                className={linkClass}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={linkClass}
              >
                {item.name}
              </Link>
            );
          })}

          {/* "WE ARE HIRING" CTA Button */}
          <a
            href="https://novostack.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 lg:px-6 xl:px-7 py-2.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-slate-950 text-[10px] lg:text-[11px] font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] overflow-hidden flex items-center gap-2 group whitespace-nowrap"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              WE ARE HIRING
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
              </span>
            </span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-3xl px-6 py-8 flex flex-col items-center gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            const isExternal = item.href.startsWith('http');
            const linkClass = `text-sm font-black uppercase tracking-widest transition-all ${
              active ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
            }`;

            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {item.name}
              </Link>
            );
          })}

          <a
            href="https://novostack.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center relative px-8 py-3 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-slate-950 text-xs font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
          >
            WE ARE HIRING
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
