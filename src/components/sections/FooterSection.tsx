import { Instagram, Youtube } from "lucide-react";
import {
  WashiTape,
  TornEdgeSection,
  DoodleStar,
  HandwrittenNote,
  NotebookHole,
  CoffeStain,
} from "@/components/Decorations";

export const FooterSection = () => (
  <footer className="bg-marsala text-white/70 py-14 md:py-18 relative overflow-x-clip">
    <TornEdgeSection position="top" color="marsala" />

    <div className="paper-texture absolute inset-0 pointer-events-none opacity-[0.04]" />
    <CoffeStain className="absolute bottom-4 right-8 md:right-16 w-20 h-20 md:w-28 md:h-28 opacity-[0.12]" />

    <WashiTape
      color="pink"
      width="w-32 md:w-40"
      rotation={1}
      className="absolute top-4 left-1/2 -translate-x-1/2 z-20"
    />
    <WashiTape
      color="blue"
      width="w-16"
      rotation={-5}
      className="absolute top-6 right-6 md:right-12 z-20"
    />

    <DoodleStar className="absolute top-10 right-16 md:right-28 w-5 h-5 opacity-15 rotate-12" />

    <HandwrittenNote
      text="← fim do caderno"
      rotation={-1}
      className="absolute bottom-3 right-4 md:right-10 text-white/20 !text-sm"
    />

    <div className="container mx-auto px-4 relative z-10">
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center gap-10 md:gap-16 pt-2 z-0">
          <NotebookHole className="w-4 h-4 !border-white/20 !bg-marsala" />
          <NotebookHole className="w-4 h-4 !border-white/20 !bg-marsala" />
          <NotebookHole className="w-4 h-4 !border-white/20 !bg-marsala" />
        </div>

        <div className="notebook-margin absolute left-6 top-0 bottom-0 w-px bg-white/10 z-0 hidden md:block" />

        <div className="flex gap-6 text-sm font-body relative z-10 pl-4 md:pl-10">
          <a
            href="#"
            className="hover:text-white transition-colors font-handwritten text-base md:text-lg underline decoration-wavy decoration-white/30 underline-offset-4"
          >
            Privacidade
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors font-handwritten text-base md:text-lg underline decoration-wavy decoration-white/30 underline-offset-4"
          >
            Termos de Uso
          </a>
        </div>

        <div className="flex gap-3 relative z-10">
          {[
            { label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
            { label: "YouTube", icon: <Youtube className="w-4 h-4" /> },
            {
              label: "TikTok",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.28a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.69z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="stamp w-9 h-9 rounded-full flex items-center justify-center border border-white/25 text-white/60 hover:text-white hover:border-white/50 transition-all hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-xs font-handwritten relative z-10 pl-4 md:pl-10 text-white/40 tracking-wide">
          © 2026 Discursando História. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);
