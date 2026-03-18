import Link from 'next/link';

export function Footer() {
    return (
        <footer className="mt-32 pt-24 pb-12 bg-white border-t border-[#4ea88a1a]">
            <div className="layout-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-1 space-y-6">
                        <Link href="/">
                            <img 
                                src="https://novostack.com/images/header/ns-logo-tm.png" 
                                alt="Novostack Logo" 
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                          Expert web design and development. Delivering state-of-the-art results with blockchain, SEO, and digital marketing.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-[13px] font-black text-[#09231a] tracking-widest uppercase">Navigation</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><a href="https://novostack.com/#projectsSection" className="hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="https://novostack.com/#servicesSection" className="hover:text-primary transition-colors">Services</a></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li>
                                <a href="https://novostack.com/connect" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
                                    Let's Talk <span className="bg-primary/10 text-primary text-[8px] px-1.5 py-0.5 rounded-sm">NEW</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-[13px] font-black text-[#09231a] tracking-widest uppercase">Services Offered</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500 underline-offset-4 decoration-[#4ea88a33]">
                            <li><a href="https://novostack.com/#servicesSection" className="hover:underline hover:text-primary">Design & Development</a></li>
                            <li><a href="https://novostack.com/#servicesSection" className="hover:underline hover:text-primary">Blockchain Development</a></li>
                            <li><a href="https://novostack.com/#servicesSection" className="hover:underline hover:text-primary">SEO & Digital Marketing</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-[13px] font-black text-[#09231a] tracking-widest uppercase">Legal Information</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500">
                            <li><a href="https://novostack.com/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="https://novostack.com/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-[#4ea88a1a] flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 text-sm text-[#3d3d3d] font-bold">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        Industrial Area, Sector 62, Noida, Uttar Pradesh 201308
                    </div>
                    
                    <p className="text-gray-500 text-sm font-bold">
                        © {new Date().getFullYear()} NovoStack™
                    </p>
                </div>
            </div>
        </footer>
    );
}
