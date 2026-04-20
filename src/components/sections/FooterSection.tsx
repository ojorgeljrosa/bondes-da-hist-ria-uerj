import { Instagram, Youtube } from "lucide-react";

export const FooterSection = () => (
  <footer className="bg-marsala text-white/80 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-6 text-sm font-body">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>

        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.28a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.69z" />
            </svg>
          </a>
        </div>

        <p className="text-xs font-body">© 2026 Discursando História. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);
