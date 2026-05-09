import { GraduationCap, Heart } from "lucide-react";
import {
  WashiTape,
  PushPin,
  PostIt,
  DoodleArrow,
  DoodleHeart,
  DoodleStar,
  HandDrawnBox,
  NotebookHole,
  FoldedCorner,
  CoffeStain,
  CrumpledOverlay,
  TornEdgeSection,
  TornPaperOverlay,
} from "../Decorations";

export const PropositoSection = () => (
  <section className="bg-cream py-16 md:py-20 relative overflow-x-clip">
    <CrumpledOverlay texture={3} opacity={0.08} />
<div className="container mx-auto px-4 max-w-4xl relative z-10">
<div className="relative bg-paper paper-texture border border-border p-8 md:p-12 shadow-xl animate-fade-in-rotate ml-4" style={{ transform: "rotate(-0.3deg)" }}>
        <WashiTape color="pink" width="w-36" rotation={-5} className="absolute -top-3 left-6 md:left-10 z-20" />
        <WashiTape color="blue" width="w-32" rotation={3} className="absolute -top-3 right-6 md:right-10 z-20" />
        <FoldedCorner className="absolute bottom-0 right-0 z-20" />

<NotebookHole className="absolute top-6 left-1" />
<NotebookHole className="absolute top-1/2 left-1" />
<NotebookHole className="absolute bottom-6 left-1" />

        <TornPaperOverlay texture={7} position="bottom-left" opacity={0.15} rotation={12} />

        <CoffeStain className="absolute bottom-4 right-16 opacity-40 z-0" />

        <div className="text-center mb-8 relative z-10">
          <DoodleStar className="absolute -top-4 -left-2 w-8 h-8 text-primary/30" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">
            Por que nascemos?
          </h2>
          <DoodleHeart className="mx-auto w-6 h-6 text-secondary/50" />
        </div>

        <div className="space-y-6 text-ink relative z-10">
          <p className="font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Muitos alunos <strong>sonham com a UERJ</strong>, mas se sentem perdidos diante da prova de História.
            Sabemos que nem todos conseguem acessar cursos completos, com aulas gravadas e acompanhamento,
            por questões financeiras.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-6">
            <HandDrawnBox rotation={-2} className="bg-white/60 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display text-lg font-semibold">O sonho da universidade</span>
              </div>
            </HandDrawnBox>

            <DoodleArrow direction="right" className="w-20 h-6 text-primary/70 hidden md:block" />
            <DoodleArrow direction="down" className="w-6 h-16 text-primary/70 md:hidden" />

            <HandDrawnBox rotation={2} className="bg-white/60 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-display text-lg font-semibold">Acesso para todos</span>
              </div>
            </HandDrawnBox>
          </div>

          <p className="font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Foi pensando nisso que o <strong>Discursando História nasceu</strong>. Nosso sonho é levar
            mais jovens para a universidade pública.
          </p>

          <div className="flex justify-center mt-8 relative">
            <PostIt color="yellow" rotation={2} className="max-w-lg w-full relative">
              <PushPin color="red" className="absolute -top-5 left-1/2 -translate-x-1/2 z-20" />
              <p className="font-body text-base md:text-lg text-center leading-relaxed italic px-4 pt-4 pb-2">
                "Acreditamos que a falta de recursos não deve ser uma barreira entre você e a sua aprovação.
                Por isso desenvolvemos uma alternativa de <strong>alta qualidade</strong> e
                <strong> valor acessível</strong> para você estudar com a gente este ano."
              </p>
            </PostIt>
          </div>
        </div>

        <DoodleStar className="absolute top-12 right-8 w-6 h-6 text-primary/20 z-0" />
        <DoodleHeart className="absolute bottom-20 left-6 w-5 h-5 text-secondary/20 z-0" />
      </div>
    </div>
    <TornEdgeSection position="bottom" color="paper" />
  </section>
);
