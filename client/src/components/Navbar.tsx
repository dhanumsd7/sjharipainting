import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Paintbrush,
  Phone,
  Home,
  Info,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (!el) return;
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          80;
        window.scrollTo({ top: y, behavior: "smooth" });
      };

      if (location === "/") {
        scrollToSection();
      } else {
        setLocation("/");
        setTimeout(scrollToSection, 200);
      }
      return;
    }

    setLocation(href);
  };

  const navLinks = [
    { name: "Home", href: "/#home", icon: <Home size={18} /> },
    { name: "Services", href: "/#services", icon: <Briefcase size={18} /> },
    { name: "About", href: "/#why-us", icon: <Info size={18} /> },
    { name: "Contact", href: "/#contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-6 inset-x-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ULTRA GLASS PILL */}
        <div
          className={`
            transition-all duration-300
            ${
              isScrolled
                ? "bg-white/90 backdrop-blur-lg border border-slate-200 shadow-md"
                : "bg-white/[0.08] backdrop-blur-[40px] border border-white/40 shadow-[0_15px_60px_rgba(0,0,0,0.25)]"
            }
            rounded-full
          `}
        >
          <div className="flex h-14 md:h-16 items-center justify-between px-8">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => handleNavClick("/#home")}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Paintbrush size={20} className="text-white" />
              </div>
              <span
                className={`font-bold text-lg md:text-xl tracking-tight ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                SJ Hari <span className="text-primary">Painting</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-semibold transition-colors ${
                    isScrolled
                      ? "text-slate-700 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <Button
                className="bg-accent text-slate-900 rounded-full h-9 px-6 font-bold hover:scale-105 transition"
                onClick={() =>
                  window.open("https://wa.me/919626344778", "_blank")
                }
              >
                WhatsApp
              </Button>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X
                  size={24}
                  className={isScrolled ? "text-slate-900" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={isScrolled ? "text-slate-900" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-28 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl z-40 p-6"
            >
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-3 text-lg font-bold text-slate-900"
                  >
                    {link.icon}
                    {link.name}
                  </button>
                ))}

                <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href = "tel:+919626344778")
                    }
                  >
                    <Phone size={18} className="mr-2" />
                    Call
                  </Button>
                  <Button
                    className="bg-accent"
                    onClick={() =>
                      window.open("https://wa.me/919626344778", "_blank")
                    }
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}