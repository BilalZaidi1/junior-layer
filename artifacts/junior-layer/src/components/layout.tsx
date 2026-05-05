import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Winter Jackets", path: "/winter-jackets" },
    { name: "School Wear", path: "/school-wear" },
    { name: "Everyday", path: "/everyday-clothing" },
    { name: "Footwear", path: "/footwear" },
    { name: "Bundles", path: "/bundles" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-primary z-50 relative">
            JUNIOR LAYER
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium tracking-wide hover:text-accent transition-colors ${
                  location === link.path ? "text-accent" : "text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-background shadow-xl pt-24 pb-8 px-6 flex flex-col gap-6 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg font-serif tracking-wide ${
                    location === link.path ? "text-accent" : "text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border/50 flex flex-col gap-4">
                <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
                <Link href="/size-guide" className="text-muted-foreground hover:text-primary">Size Guide</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-24 md:pt-32">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground py-16 md:py-24 mt-24">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-semibold mb-6 inline-block">JUNIOR LAYER</Link>
            <p className="text-primary-foreground/70 max-w-sm font-light leading-relaxed">
              Premium UK kids clothing built for durability and school-readiness. The brand parents trust because it holds up.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 font-light text-primary-foreground/70">
              <li><Link href="/winter-jackets" className="hover:text-white transition-colors">Winter Jackets</Link></li>
              <li><Link href="/school-wear" className="hover:text-white transition-colors">School Wear</Link></li>
              <li><Link href="/everyday-clothing" className="hover:text-white transition-colors">Everyday Clothing</Link></li>
              <li><Link href="/footwear" className="hover:text-white transition-colors">Footwear</Link></li>
              <li><Link href="/bundles" className="hover:text-white transition-colors">Kits & Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Support</h4>
            <ul className="flex flex-col gap-4 font-light text-primary-foreground/70">
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/delivery-returns" className="hover:text-white transition-colors">Delivery & Returns</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-primary-foreground/10 text-sm text-primary-foreground/50 font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Junior Layer. All rights reserved.</p>
          <p>UK Designed & Tested.</p>
        </div>
      </footer>
    </div>
  );
}
