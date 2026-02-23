import { motion } from "framer-motion";
import { Home, Building2, Droplets, PaintRoller } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  const services = [
    { title: "Painting Works" },
    { title: "Spray Painting" },
    { title: "Sprat Painting" },
    { title: "Spider Work (High-rise rope access)" },
    { title: "Powder Coating" },
    { title: "Glass Cleaning" },
    { title: "High Profile Building Painting Works" }
  ];

  const handleWhatsApp = (serviceTitle: string) => {
    const message = encodeURIComponent(`Hello, I am interested in ${serviceTitle} from SJ Hari Painting.`);
    window.open(`https://wa.me/919626344778?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">Select a Service</h3>
          <div className="h-2 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleWhatsApp(service.title)}
              className="cursor-pointer group"
            >
              <Card className="h-full border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(255,0,255,1)] transition-all duration-200 overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center bg-white h-full min-h-[160px]">
                  <h4 className="text-2xl font-black text-black uppercase leading-tight group-hover:text-primary transition-colors">{service.title}</h4>
                  <div className="mt-4 py-2 px-4 bg-accent text-black font-bold text-sm uppercase">Order on WhatsApp</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
