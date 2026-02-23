import { Paintbrush } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-none border-2 border-white bg-primary flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <Paintbrush size={24} />
              </div>
              <h2 className="font-black text-2xl text-white uppercase tracking-tighter">SJ Hari Painting</h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 font-medium">
              Professional Painting & Building Maintenance Services in Ammandivilai, Tamil Nadu. Trusted for quality, safety, and on-time completion.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-black uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>Sooriya Kumar T</li>
              <li><a href="tel:+919626344778" className="hover:text-primary transition-colors">+91 96263 44778</a></li>
              <li><a href="tel:+919677899278" className="hover:text-primary transition-colors">+91 96778 99278</a></li>
              <li><a href="mailto:sooriya887@gmail.com" className="hover:text-primary transition-colors">sooriya887@gmail.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-black uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>Painting Works</li>
              <li>Spray Painting</li>
              <li>Spider Work</li>
              <li>Powder Coating</li>
              <li>Glass Cleaning</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} SJ Hari Painting. All rights reserved.</p>
          <p>Ammandivilai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
