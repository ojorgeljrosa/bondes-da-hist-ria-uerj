import { Lock, HelpCircle, Compass } from "lucide-react";
import {
  WashiTape,
  PushPin,
  HandwrittenNote,
  TornEdgeSection,
  NewspaperClip,
  FoldedCorner,
  PaperClip,
  CoffeStain,
  NotebookHole,
  DoodleUnderline,
  CrayonOverlay,
} from "../Decorations";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

const problems = [
  {
    icon: Lock,
    title: "Barreira financeira",
    text: "Cursos preparatórios caros impedem muitos estudantes de ter acesso a materiais de qualidade, perpetuando a desigualdade no acesso à universidade pública.",
  },
  {
    icon: HelpCircle,
    title: "Perdidos na prova",
    text: "Sem orientação específica, os alunos não sabem o que a UERJ realmente cobra e perdem tempo estudando conteúdos que não são prioritários.",
  },
  {
    icon: Compass,
    title: "Falta de direção",
    text: "Muitos estudam muito, mas sem estratégia. Não sabem como estruturar uma resposta discursiva nem quais temas são recorrentes.",
  },
];

export const ProblemaSection = () => (
  <section className="bg-cream py-16 pb-24 md:py-24 md:pb-32 relative overflow-x-clip">
    <CrayonOverlay texture={3} opacity={0.07} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-14">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-ink inline-block">
          Por que tantos alunos travam na prova de História da UERJ?
        </h2>
        <DoodleUnderline className="mt-1 mx-auto block max-w-xl" />
        <p className="font-handwritten text-xl text-primary text-center mt-3">
          — os 3 principais obstáculos —
        </p>
      </div>

<div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-14 max-w-5xl mx-auto px-2 pt-2 pb-6">
      {/* Card 1 — Barreira financeira: notebook-lined, washi tape, notebook holes */}
      <div
        className="notebook-lined p-6 pb-8 shadow-md text-center relative collage-card"
        style={{ transform: "rotate(-3deg)" }}
      >
          <WashiTape color="pink" width="w-24" rotation={5} className="absolute -top-3 left-1/2 -translate-x-1/2 z-20" />
          <div className="absolute top-3 right-4 flex flex-col gap-3">
            <NotebookHole />
            <NotebookHole />
            <NotebookHole />
          </div>

          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/40 relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <path d="M4,28 Q4,4 28,4 Q52,4 52,28 Q52,52 28,52 Q4,52 4,28 Z" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" opacity="0.5" />
            </svg>
            <Lock className="w-6 h-6 text-primary relative z-10" />
          </div>
          <h3 className="font-display text-lg font-bold text-ink mb-3">Barreira financeira</h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">Cursos preparatórios caros impedem muitos estudantes de ter acesso a materiais de qualidade, perpetuando a desigualdade no acesso à universidade pública.</p>

          <HandwrittenNote text="isso não é justo!" rotation={4} className="absolute -bottom-4 right-2 text-sm whitespace-nowrap" />
        </div>

        {/* Card 2 — Perdidos na prova: cream bg, folded corner, paper clip */}
<div
        className="bg-cream border border-border p-6 pb-8 shadow-md text-center relative collage-card"
        style={{ transform: "rotate(2deg)" }}
      >
          <FoldedCorner className="absolute top-0 right-0" />
          <PaperClip className="absolute left-1 top-4" />

          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/40 relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <path d="M6,28 Q6,6 28,6 Q50,6 50,28 Q50,50 28,50 Q6,50 6,28 Z" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" opacity="0.5" />
            </svg>
            <HelpCircle className="w-6 h-6 text-primary relative z-10" />
          </div>
          <h3 className="font-display text-lg font-bold text-ink mb-3">Perdidos na prova</h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">Sem orientação específica, os alunos não sabem o que a UERJ realmente cobra e perdem tempo estudando conteúdos que não são prioritários.</p>

          <HandwrittenNote text="onde focar??" rotation={-5} className="absolute -bottom-4 left-1 text-sm whitespace-nowrap" />
        </div>

        {/* Card 3 — Falta de direção: bg-paper, push pin, shadow */}
<div
        className="bg-paper border border-border p-6 pb-8 shadow-lg text-center relative collage-card"
        style={{ transform: "rotate(-1deg)" }}
      >
          <PushPin color="blue" className="absolute -top-5 left-1/2 -translate-x-1/2 z-20" />

          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/40 relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <path d="M5,28 Q5,5 28,5 Q51,5 51,28 Q51,51 28,51 Q5,51 5,28 Z" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" opacity="0.5" />
            </svg>
            <Compass className="w-6 h-6 text-primary relative z-10" />
          </div>
          <h3 className="font-display text-lg font-bold text-ink mb-3">Falta de direção</h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">Muitos estudam muito, mas sem estratégia. Não sabem como estruturar uma resposta discursiva nem quais temas são recorrentes.</p>

          <HandwrittenNote text="estratégia é tudo!" rotation={6} className="absolute -bottom-4 right-2 text-sm whitespace-nowrap" />
        </div>
      </div>

      {/* Mission box — newspaper clip style */}
      <div className="max-w-3xl mx-auto text-center relative mb-12">
        <NewspaperClip>
          <p className="font-body text-ink text-base md:text-lg leading-relaxed">
            <strong className="text-primary">Nossa missão</strong> é democratizar o acesso à universidade pública,
            fornecendo as ferramentas necessárias para seu sucesso —{" "}
            <em className="font-handwritten text-xl">sem que o preço seja uma barreira.</em>
          </p>
        </NewspaperClip>
      </div>

      <div className="text-center mt-10">
        <a
          href={COMBO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 inline-flex bg-[hsl(var(--azul))] hover:bg-[hsl(var(--azul))] hover:opacity-90 text-white font-bold px-8 py-3 transition-all hover:scale-105 sticker hover-lift"
          style={{ transform: "rotate(-2deg)" }}
        >
          CONHECER OS MATERIAIS ↓
        </a>
      </div>
    </div>

    <CoffeStain className="absolute bottom-16 left-8 hidden md:block" />

    <TornEdgeSection position="bottom" color="paper" />
  </section>
);
