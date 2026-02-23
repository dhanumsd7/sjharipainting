import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t-4 border-black flex gap-3 md:hidden z-50">
      <Button 
        className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-none h-14 text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        onClick={() => window.open('https://wa.me/919626344778', '_blank')}
      >
        WhatsApp
      </Button>
      <Button 
        className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        onClick={() => window.location.href = 'tel:+919626344778'}
      >
        Call Now
      </Button>
    </div>
  );
}
