import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Code2, Home, User, GraduationCap, Cpu, FolderOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/skills", label: "Skills", icon: Cpu },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 border border-primary rounded-md group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-6 h-6 text-primary group-hover:text-white transition-colors animate-pulse" />
          </div>
          <span className="font-display font-bold text-lg md:text-2xl tracking-widest text-white group-hover:text-glow transition-all">
            NISHANTH'S <span className="text-primary">PORTFOLIO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`font-display text-sm uppercase tracking-wider transition-all hover:text-primary hover:text-glow ${
              location === link.href ? "text-primary text-glow border-b-2 border-primary" : "text-muted-foreground"
            }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/20 p-4 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setIsOpen(false)}>
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className={`font-display text-lg uppercase tracking-wider ${
                    location === link.href ? "text-primary text-glow" : "text-white"
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
