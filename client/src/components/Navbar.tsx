import { useState, useEffect } from "react";
import { Menu, X, Phone, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollTo("#home")}
          >
            <div className="w-10 h-10 rounded-none border-2 border-black bg-primary flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-accent transition-colors">
              <Paintbrush size={24} className="text-white" />
            </div>
            <div>
              <h1 className={`font-black text-2xl leading-none uppercase tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
                SJ Hari
              </h1>
              <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${isScrolled ? 'text-primary' : 'text-accent'}`}>
                Painting
              </p>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+919626344778" 
              className={`flex items-center gap-2 font-black text-lg transition-colors hover:text-primary ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              <Phone size={20} />
              <span>96263 44778</span>
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => window.open('https://wa.me/919626344778', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-4 border-black shadow-xl md:hidden">
          <div className="flex flex-col p-6 space-y-6">
            <a 
              href="tel:+919626344778" 
              className="flex items-center gap-3 font-black text-xl text-black uppercase"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-xl font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => window.open('https://wa.me/919626344778', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
