import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    { title: "Painting Works", desc: "Interior & exterior residential painting with premium finishes." },
    { title: "Spray Painting", desc: "Flawless, uniform coating for doors, windows, and metal surfaces." },
    { title: "Texture Painting", desc: "Specialized texture and protective coating applications." },
    { title: "Spider Work", desc: "High-rise building maintenance using expert rope access." },
    { title: "Powder Coating", desc: "Durable and aesthetic finish for architectural metal components." },
    { title: "Glass Cleaning", desc: "Professional streak-free cleaning for high-profile buildings." },
    { title: "Commercial Painting", desc: "Large-scale painting solutions for offices and warehouses." }
  ];

  const handleWhatsApp = (serviceTitle: string) => {
    const message = encodeURIComponent(
      `Hello, I am interested in ${serviceTitle} from SJ Hari Painting.`
    );
    window.open(`https://wa.me/919626344778?text=${message}`, "_blank");
  };

  return (
    <section
      id="services"
      className="relative z-10 py-32 bg-slate-50/95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            What We Offer
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Select a Service
          </motion.h3>

          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              onClick={() => handleWhatsApp(service.title)}
              className="cursor-pointer group"
            >
              <Card className="h-full border-0 bg-white rounded-3xl shadow-sm shadow-slate-200 hover:shadow-xl hover:ring-2 hover:ring-primary/20 transition-all duration-300 active:scale-[0.98]">
                <CardContent className="p-10 flex flex-col h-full min-h-[220px]">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 uppercase tracking-widest group-hover:text-primary transition-colors">
                    <MessageCircle size={18} />
                    Inquire via WhatsApp
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}