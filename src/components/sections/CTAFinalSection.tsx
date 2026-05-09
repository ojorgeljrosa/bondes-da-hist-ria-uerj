import { Shield, CreditCard } from "lucide-react";
import {
  TornEdgeSection,
  TornPaperOverlay,
  WashiTape,
  PushPin,
  StampBadge,
  DoodleStar,
  DoodleArrow,
  HandwrittenNote,
  CoffeStain,
  FoldedCorner,
  PaperClip,
} from "@/components/Decorations";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

export const CTAFinalSection = () => (
  <section className="relative py-20 md:py-28 bg-secondary paper-texture overflow-x-clip">
    <TornEdgeSection position="top" color="secondary" />

    {/* Notebook lines — subtle */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="border-b border-white"
          style={{ marginTop: i === 0 ? "30px" : "28px" }}
        />
      ))}
    </div>

    {/* Coffee stain */}
    <CoffeStain className="absolute bottom-8 right-8 w-40 h-40 md:w-56 md:h-56 opacity-[0.04]" />

    {/* Torn paper corners */}
    <TornPaperOverlay position="top-left" rotation={15} opacity={0.15} texture={2} />
    <TornPaperOverlay position="bottom-right" rotation={-10} opacity={0.12} texture={3} />
    <TornPaperOverlay position="top-right" rotation={-20} opacity={0.1} texture={1} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      {/* Handwritten "última chamada" */}
      <p className="font-handwritten text-2xl text-white/60 mb-4 tracking-wide">
        — última chamada —
      </p>

      {/* Title with torn paper energy */}
      <div className="relative inline-block mb-6">
<WashiTape
    color="red"
    width="w-20"
    rotation={25}
    className="absolute -top-5 right-0 md:-right-4 z-20"
/>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto relative">
          GARANTA AGORA SUA
          <br />
          APROVAÇÃO NA UERJ!
        </h2>
        <TornPaperOverlay
          position="bottom-left"
          rotation={5}
          opacity={0.08}
          texture={4}
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>

      <p className="font-body text-white/70 text-lg mb-10 max-w-xl mx-auto">
        Não deixe para depois. A cada dia que passa, você perde tempo de estudo valioso.
      </p>

      {/* CTA — huge sticker/label */}
      <div className="relative inline-block mb-8">
        {/* Doodle stars scattered around */}
        <DoodleStar className="absolute -top-6 -left-8 md:-left-14 w-10 h-10 md:w-14 md:h-14 text-primary animate-fade-in-rotate opacity-70" />
        <DoodleStar className="absolute -bottom-4 -right-8 md:-right-14 w-8 h-8 md:w-12 md:h-12 text-primary animate-fade-in-rotate opacity-60" />
        <DoodleStar className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-20 w-6 h-6 md:w-10 md:h-10 text-primary/50 animate-fade-in-rotate opacity-50" />
        <DoodleStar className="absolute -top-3 right-0 md:right-4 w-7 h-7 md:w-9 md:h-9 text-primary/40 animate-fade-in-rotate opacity-50" />

        {/* Handwritten annotation pointing to button */}
<HandwrittenNote
    text="← clique aqui!"
    rotation={-8}
    className="absolute -right-20 md:-right-32 top-1/2 -translate-y-1/3 text-white/50 text-base whitespace-nowrap hidden md:block"
/>

        <a
          href={COMBO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-lift inline-block bg-primary hover:bg-primary/90 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-md shadow-[6px_6px_0px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] border-2 border-primary/80 relative"
          style={{ transform: "rotate(-2deg)" }}
        >
          <span className="relative z-10">GARANTIR MEUS E-BOOKS AGORA</span>
        </a>
      </div>

      {/* Secure payment line + StampBadge */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <p className="font-body text-white/60 text-base max-w-md">
          Pagamento 100% seguro. Satisfação garantida ou seu dinheiro de volta em 7 dias.
        </p>
        <StampBadge text="GARANTIA 7 DIAS" color="primary" className="animate-stamp-in shrink-0" />
      </div>

      {/* Shield + security note */}
      <div className="flex items-center justify-center gap-2 mb-8 text-white/60">
        <Shield className="w-5 h-5 text-accent" />
        <span className="font-handwritten text-base text-white/50">
          compra protegida
        </span>
      </div>

      {/* Security badges — paper stamps style */}
      <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
        <div className="relative collage-card bg-cream/90 px-5 py-3 rounded border border-border/60">
          <FoldedCorner className="absolute -top-1 -right-1" />
          <div className="flex items-center gap-2 text-ink text-sm font-body">
            <Shield className="w-5 h-5 text-ink/80" />
            Hotmart — Plataforma segura
          </div>
        </div>
        <div className="relative collage-card bg-cream/90 px-5 py-3 rounded border border-border/60">
          <FoldedCorner className="absolute -top-1 -right-1" />
          <div className="flex items-center gap-2 text-ink text-sm font-body">
            <CreditCard className="w-5 h-5 text-ink/80" />
            Pix, Cartão, Boleto
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <PushPin
        color="red"
        className="absolute top-6 left-6 md:left-12 z-20 drop-shadow-lg"
      />
      <WashiTape
        color="yellow"
        width="w-24"
        rotation={-15}
        className="absolute bottom-10 left-6 md:left-10 z-20"
      />
      <PaperClip className="absolute top-10 right-8 md:right-16 z-20 opacity-40 rotate-12 scale-125" />
      <DoodleArrow
        direction="right"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-6 opacity-20 hidden md:block"
      />
    </div>
  </section>
);
