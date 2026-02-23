import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* hero residential painting beautiful home exterior */}
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop"
          alt="Premium House Painting"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <ShieldCheck className="text-accent w-5 h-5" />
            <span className="text-sm font-semibold tracking-wide">Top Rated Painters in Ammandivilai & Kanyakumari</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
            SJ Hari Painting
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white font-medium mb-10 max-w-2xl leading-relaxed">
            Professional Painting & Building Maintenance Services
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/919626344778', '_blank')}
              className="bg-primary hover:bg-primary/90 text-white rounded-none text-xl h-16 px-10 font-bold uppercase tracking-wider transition-all"
            >
              WhatsApp Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = 'tel:+919626344778'}
              className="rounded-none text-xl h-16 px-10 border-4 border-white text-white hover:bg-white hover:text-black bg-transparent font-bold uppercase tracking-wider transition-all"
            >
              Call Now
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
              <p className="text-slate-400 text-sm font-medium">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">500+</h4>
              <p className="text-slate-400 text-sm font-medium">Projects Completed</p>
            </div>
            <div className="hidden md:block">
              <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
              <p className="text-slate-400 text-sm font-medium">Satisfaction Guaranteed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
