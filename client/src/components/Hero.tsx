import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&h=900&fit=crop", // Painter at work
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&h=900&fit=crop", // Professional painting
  "https://images.unsplash.com/photo-1504307651254-35680f356f0f?w=1600&h=900&fit=crop", // High-rise work
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop", // Commercial building
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=900&fit=crop", // Modern house
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&h=900&fit=crop", // Spray painting
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&h=900&fit=crop", // Glass cleaning
  "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?w=1600&h=900&fit=crop", // Exterior detail
  "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=1600&h=900&fit=crop", // Quality finish
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop"  // Professional focus
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt="SJ Hari Painting Hero"
          />
        </AnimatePresence>
        {/* Deep overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter uppercase">
              Professional Painting Services in <span className="text-accent">Ammandivilai</span>
            </h1>

            <p className="text-2xl md:text-3xl text-white font-bold mb-12 max-w-2xl leading-tight uppercase tracking-widest border-l-8 border-primary pl-6">
              Painting & Building Maintenance Services
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:+919626344778'}
                className="bg-white hover:bg-slate-100 text-slate-900 rounded-full text-lg h-16 px-10 font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/919626344778', '_blank')}
                className="bg-accent hover:bg-accent/90 text-slate-900 rounded-full text-lg h-16 px-10 font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
