import { Star } from "../Star";
import { Shield, CreditCard } from "lucide-react";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

export const CTAFinalSection = () => (
  <section className="relative overflow-hidden py-20 md:py-32 bg-secondary">
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-0" />
    <Star className="absolute top-8 left-8 z-10 animate-pulse" color="gold" size={36} />
    <Star className="absolute top-12 right-12 z-10" color="gold" size={28} />
    <Star className="absolute bottom-8 left-1/4 z-10" color="gold" size={24} />
    <Star className="absolute bottom-12 right-1/4 z-10 animate-pulse" color="gold" size={20} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto drop-shadow-lg">
        GARANTA AGORA SUA APROVAÇÃO NA UERJ!
      </h2>

      <p className="font-body text-white/80 text-lg mb-10 max-w-xl mx-auto">
        Não deixe para depois. A cada dia que passa, você perde tempo de estudo valioso.
      </p>

      <a
        href={COMBO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xl md:text-2xl px-12 py-6 rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-accent/40 mb-8"
      >
        GARANTIR MEUS E-BOOKS AGORA
      </a>

      <p className="font-body text-white/70 text-base mb-8 max-w-md mx-auto">
        Pagamento 100% seguro. Satisfação garantida ou seu dinheiro de volta em 7 dias.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2 text-white/80 text-sm font-body">
          <Shield className="w-5 h-5 text-accent" />
          Hotmart — Plataforma segura
        </div>
        <div className="flex items-center gap-2 text-white/80 text-sm font-body">
          <CreditCard className="w-5 h-5 text-accent" />
          Pix, Cartão, Boleto
        </div>
      </div>
    </div>
  </section>
);
