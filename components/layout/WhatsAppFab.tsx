import { MessageCircle } from 'lucide-react';
import { company } from '@/lib/data';

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      aria-label="WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-bg shadow-lg shadow-emerald/25 transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
