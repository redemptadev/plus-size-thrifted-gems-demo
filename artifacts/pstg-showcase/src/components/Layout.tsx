import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import logoImg from "@assets/727519327_18093713027263464_1789033325456858993_n_1782819260564.jpg";


const WHATSAPP_URL = "https://wa.me/254700000000";
const INSTAGRAM_URL = "https://instagram.com/plussizethriftedgems";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0F0F0F]/95 backdrop-blur-md py-4 shadow-md"
            : "bg-[#0F0F0F]/80 backdrop-blur-sm py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Plus Size Thrifted Gems" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-serif text-white text-sm tracking-widest font-bold hidden lg:block">PLUSSIZE THRIFTED GEMS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/" current={location}>Home</NavLink>
            <NavLink href="/collection" current={location}>Collection</NavLink>
            <NavLink href="/about" current={location}>About</NavLink>
            <NavLink href="/faq" current={location}>FAQ</NavLink>
            <NavLink href="/contact" current={location}>Contact</NavLink>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-black transition-colors duration-300 px-6 py-2 text-sm font-medium tracking-wide uppercase"
          >
            Order Now
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-white pt-20 pb-10 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="font-serif text-2xl tracking-widest font-bold mb-6 inline-block">
                PSTG.
              </Link>
              <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                Quality Thrifted Fashion for Plus Size Women. Beautiful pieces curated to help every woman feel confident, stylish, and comfortable.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors duration-300 text-2xl">
                  <FaInstagram />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors duration-300 text-2xl">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg text-primary mb-6 tracking-wide">Explore</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="/collection" className="hover:text-primary transition-colors">Our Collection</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-primary mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Nairobi, Kenya</li>
                <li>Mon–Sat, 8am–8pm EAT</li>
                <li>We deliver across all 47 counties.</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Plus Size Thrifted Gems.</p>
            <div className="text-center md:text-right">
              <p>Website Concept by Nuvanta</p>
              <p className="text-xs mt-1">This website is a design concept created for demonstration purposes and is not the official website of Plus Size Thrifted Gems.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform animate-pulse-ring"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

function NavLink({ href, current, children }: { href: string; current: string; children: React.ReactNode }) {
  const isActive = current === href;
  return (
    <Link
      href={href}
      className={`relative text-sm tracking-widest uppercase transition-colors duration-300 ${
        isActive ? "text-primary" : "text-white/80 hover:text-white"
      } group`}
    >
      {children}
      <span
        className={`absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}