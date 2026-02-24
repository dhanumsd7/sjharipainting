import { useState, useEffect } from "react";
  import { Menu, X, Paintbrush, Phone } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { motion, AnimatePresence } from "framer-motion";
  import { Link, useLocation } from "wouter";

  export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [location, setLocation] = useLocation();

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
      setMobileMenuOpen(false);
      
      if (href.startsWith("#")) {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        setLocation(href);
      }
    };

    const navLinks = [
    { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "About", href: "#why-us" },
      { name: "Contact", href: "#contact" },
    ];

    return (
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-lg" : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
              className="flex items-center gap-3 cursor-pointer group"
          >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Paintbrush size={22} className="text-white" />
              </div>
              <h1 className="font-bold text-xl leading-none text-slate-900 tracking-tight">
              SJ Hari <span className="text-primary">Painting</span>
              </h1>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors relative group"
              >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </button>
              ))}
              <Button 
                className="bg-accent hover:bg-accent/90 text-slate-900 rounded-full font-bold px-6 shadow-sm transition-all hover:scale-105"
                onClick={() => window.open("https://wa.me/919626344778", "_blank")}
            >
                WhatsApp
              </Button>
            </nav>

            <button 
              className="md:hidden p-2 text-slate-900 relative z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col items-center justify-center p-6"
          >
              <div className="flex flex-col space-y-8 w-full max-w-xs">
              {navLinks.map((link) => (
                  <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-3xl font-bold text-slate-900 text-center hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-slate-900 rounded-full font-bold py-8 text-xl shadow-lg transition-all hover:scale-105"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open("https://wa.me/919626344778", "_blank");
                }}
              >
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    );
  }