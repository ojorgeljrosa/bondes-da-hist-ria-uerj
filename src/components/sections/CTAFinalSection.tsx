import { Shield, CreditCard } from "lucide-react";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

export const CTAFinalSection = () => (
  <section className="relative py-20 md:py-28 bg-secondary paper-texture overflow-hidden">
    {/* Notebook lines overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-5">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="border-b border-white" style={{ marginTop: i === 0 ? '30px' : '28px' }} />
      ))}
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="font-handwritten text-2xl text-white/60 mb-4">— última chamada —</p>

      <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
        GARANTA AGORA SUA APROVAÇÃO NA UERJ!
      </h2>

      <p className="font-body text-white/70 text-lg mb-10 max-w-xl mx-auto">
        Não deixe para depois. A cada dia que passa, você perde tempo de estudo valioso.
      </p>

      <a
        href={COMBO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl md:text-2xl px-12 py-6 rounded shadow-xl transition-all hover:scale-105 border-b-4 border-primary/70 mb-8"
      >
        GARANTIR MEUS E-BOOKS AGORA
      </a>

      <p className="font-body text-white/60 text-base mb-8 max-w-md mx-auto">
        Pagamento 100% seguro. Satisfação garantida ou seu dinheiro de volta em 7 dias.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2 text-white/70 text-sm font-body">
          <Shield className="w-5 h-5 text-accent" />
          Hotmart — Plataforma segura
        </div>
        <div className="flex items-center gap-2 text-white/70 text-sm font-body">
          <CreditCard className="w-5 h-5 text-accent" />
          Pix, Cartão, Boleto
        </div>
      </div>
    </div>
  </section>
);
