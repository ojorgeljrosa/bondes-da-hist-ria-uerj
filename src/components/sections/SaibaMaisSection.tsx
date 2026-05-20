import { Instagram, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import {
  TornEdgeSection,
  TornPaperOverlay,
  CrayonOverlay,
  WashiTape,
  PushPin,
  StampBadge,
  StickerBadge,
  DoodleStar,
  DoodleArrow,
  DoodleHeart,
  HandwrittenNote,
  PostIt,
  CoffeStain,
  FoldedCorner,
  NotebookHole,
} from "@/components/Decorations";

const INSTAGRAM_URL = "https://www.instagram.com/disc.historia/";
const CURSO_URL = "https://go.hotmart.com/D105224878P?dp=1";

export const SaibaMaisSection = () => (
  <section className="relative py-20 md:py-28 bg-bege paper-texture overflow-x-clip">
    <TornEdgeSection position="top" color="bege" />
    <CrayonOverlay texture={3} opacity={0.05} />

    <TornPaperOverlay position="top-left" rotation={12} opacity={0.12} texture={6} />
    <TornPaperOverlay position="bottom-right" rotation={-8} opacity={0.1} texture={4} />

    <CoffeStain className="absolute top-12 right-10 md:right-20 w-28 h-28 md:w-40 md:h-40 opacity-[0.05]" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="text-center mb-12 relative">
        <WashiTape
          color="pink"
          width="w-20"
          rotation={18}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        />
        <DoodleHeart className="absolute -top-3 right-6 md:right-20 w-8 h-8 text-primary/30 rotate-12" />
        <DoodleStar className="absolute -top-1 left-6 md:left-16 w-6 h-6 text-primary/25 -rotate-6" />

        <p className="font-handwritten text-xl md:text-2xl text-primary/60 mb-3 tracking-wide">
          — quer ir mais longe? —
        </p>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight max-w-2xl mx-auto">
          Continue sua jornada <br /> conosco
        </h2>

        <div className="mt-3 flex justify-center">
          <DoodleArrow direction="down" className="w-6 h-12 text-primary/30" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-2 pt-4 pb-8">
        {/* Instagram Card */}
        <div
          className="collage-card hover-lift relative bg-cream p-6 pt-8 shadow-md"
          style={{ transform: "rotate(-1.5deg)" }}
        >
          <FoldedCorner className="absolute top-0 right-0" />
          <PushPin color="red" className="absolute -top-5 left-5 z-20" />
          <WashiTape
            color="blue"
            width="w-24"
            rotation={4}
            className="absolute -top-2 right-4 z-20"
          />

          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center mb-4"
              style={{ transform: "rotate(3deg)" }}
            >
              <Instagram className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-2">
              Siga no Instagram
            </h3>

            <p className="font-body text-muted-foreground text-base mb-5 leading-relaxed">
              Dicas para a preparação a prova discursiva e EQ da UERJ. Conteúdo exclusivo que só quem segue recebe!
            </p>

            <div className="flex gap-3 mb-5">
              <StampBadge text="DICAS DIÁRIAS" color="primary" className="animate-stamp-in" />
              <StampBadge text="RESUMOS" color="azul" className="animate-stamp-in" />
            </div>

            <div className="relative inline-block">
              <DoodleStar className="absolute -top-4 -left-6 w-6 h-6 text-primary/50 animate-fade-in-rotate" />
              <DoodleStar className="absolute -bottom-3 -right-5 w-5 h-5 text-primary/40 animate-fade-in-rotate" />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-2 bg-[hsl(340,60%,80%)] hover:bg-[hsl(340,60%,75%)] text-ink font-bold text-base px-8 py-3 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] border-2 border-[hsl(340,60%,70%)]/60"
                style={{ transform: "rotate(1deg)" }}
              >
                <Instagram className="w-5 h-5" />
                @disc.historia
              </a>
            </div>

            <HandwrittenNote
              text="← segue lá!"
              rotation={-6}
              className="mt-3 text-primary/50 text-base"
            />
          </div>
        </div>

        {/* Curso Intensivo Card */}
        <div
          className="collage-card hover-lift relative bg-cream p-6 pt-8 shadow-md"
          style={{ transform: "rotate(1.5deg)" }}
        >
          <FoldedCorner className="absolute top-0 right-0" />
          <PushPin color="blue" className="absolute -top-5 left-5 z-20" />
          <WashiTape
            color="yellow"
            width="w-24"
            rotation={-3}
            className="absolute -top-2 right-4 z-20"
          />

          <StickerBadge
            text="INTENSIVO"
            bgColor="bg-primary"
            textColor="text-white"
            className="absolute -right-1 -top-1 z-20 animate-stamp-in"
            rotation={12}
            size="sm"
          />

          <div className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center mb-4"
              style={{ transform: "rotate(-3deg)" }}
            >
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-2">
              Curso Intensivo Discursiva
            </h3>

            <p className="font-body text-muted-foreground text-base mb-5 leading-relaxed">
              Depois do primeiro EQ abriremos um curso intensivo focado preparação completa para a prova discursiva de História da UERJ. Aulas ao vivo, método focado no que realmente cai na prova.
            </p>

            <div className="flex gap-3 mb-5">
              <StampBadge text="AULAS AO VIVO" color="green" className="animate-stamp-in" />
              <StampBadge text="FOCO NO QUE CAI" color="primary" className="animate-stamp-in" />
            </div>

            <div className="relative inline-block">
              <DoodleStar className="absolute -top-4 -left-6 w-6 h-6 text-primary/50 animate-fade-in-rotate" />
              <DoodleStar className="absolute -bottom-3 -right-5 w-5 h-5 text-primary/40 animate-fade-in-rotate" />
              <HandwrittenNote
                text="vagas limitadas!"
                rotation={4}
                className="absolute -top-6 right-0 text-primary/50 text-sm hidden md:block"
              />
              <a
                href={CURSO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 py-3 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.4)] border-2 border-primary/80"
                style={{ transform: "rotate(-1deg)" }}
              >
                Quero me inscrever
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Post-it note */}
      <div className="flex justify-center">
        <PostIt color="yellow" rotation={-1}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary/60" />
            <HandwrittenNote
              text="Juntos rumo à aprovação!"
              rotation={0}
              className="!text-base md:!text-lg !italic"
            />
            <Sparkles className="w-4 h-4 text-primary/60" />
          </div>
        </PostIt>
      </div>

      {/* Decorative elements */}
      <NotebookHole className="absolute top-16 left-2 w-4 h-4 !border-ink/15 !bg-bege hidden md:block" />
      <NotebookHole className="absolute top-40 left-2 w-4 h-4 !border-ink/15 !bg-bege hidden md:block" />
      <NotebookHole className="absolute bottom-16 left-2 w-4 h-4 !border-ink/15 !bg-bege hidden md:block" />
      <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/5 z-0 hidden md:block" />

      <DoodleHeart className="absolute bottom-20 left-8 md:left-16 w-6 h-6 text-primary/15 -rotate-12" />
      <DoodleStar className="absolute bottom-10 right-10 md:right-20 w-5 h-5 text-primary/20 rotate-6" />

      <TornEdgeSection position="bottom" color="marsala" />
    </div>
  </section>
);
