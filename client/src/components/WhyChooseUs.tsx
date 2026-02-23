import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">Why SJ Hari?</h3>
          <div className="h-2 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Experienced Team", desc: "Professional painters with years of local expertise." },
            { title: "Safety Focused", desc: "Strict adherence to safety protocols, especially in spider work." },
            { title: "Affordable Pricing", desc: "High-quality results that fit your budget perfectly." },
            { title: "On-Time Completion", desc: "We respect your time and finish projects as promised." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white"
            >
              <h4 className="text-xl font-black uppercase mb-3 text-black">{item.title}</h4>
              <p className="text-black font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
