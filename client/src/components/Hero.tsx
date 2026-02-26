import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356f0f?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&h=900&fit=crop",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={HERO_IMAGES[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
        <h1 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl">
          Professional Painting Services in{" "}
          <span className="text-accent">Ammandivilai</span>
        </h1>

        <p className="mt-6 text-white/90 text-lg max-w-xl">
          Painting • Cleaning • High-rise Maintenance
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-white text-slate-900 h-12 px-8 rounded-full font-bold"
            onClick={() => (window.location.href = "tel:+919626344778")}
          >
            <Phone className="mr-2" /> Call Now
          </Button>
          <Button
            className="bg-accent text-slate-900 h-12 px-8 rounded-full font-bold"
            onClick={() => window.open("https://wa.me/919626344778", "_blank")}
          >
            <MessageCircle className="mr-2" /> WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}