import { Target, ListChecks, Calendar, DollarSign, Zap, Heart } from "lucide-react";
import {
  WashiTape,
  PushPin,
  DoodleStar,
  DoodleUnderline,
  HandwrittenNote,
  PostIt,
  CoffeStain,
  CrayonOverlay,
  TornEdgeSection,
  FoldedCorner,
} from "../Decorations";

const items = [
  { icon: Target, title: "Foco nichado", desc: "Especialistas na UERJ, não materiais genéricos. Tudo pensado para a banca e o estilo da prova." },
  { icon: ListChecks, title: "Questões organizadas", desc: "Todas as questões separadas por assunto para um estudo direcionado e eficiente." },
  { icon: Calendar, title: "Efemérides 2026", desc: "Datas importantes e aniversários históricos que podem cair na prova deste ano." },
  { icon: DollarSign, title: "Preço acessível", desc: "Alta qualidade sem pesar no bolso. Educação de qualidade deve ser para todos." },
  { icon: Zap, title: "Direto ao ponto", desc: "Sem enrolação, apenas o que realmente cai. Otimize seu tempo de estudo ao máximo." },
  { icon: Heart, title: "Professores presentes", desc: "Cuidado e dedicação com cada aluno. Estamos juntos nessa jornada até a aprovação." },
];

const tapeColors = ["pink", "green", "blue", "yellow", "red", "orange"] as const;
const pinColors = ["red", "blue", "green", "yellow"] as const;

export const DiferenciaisSection = () => (
  <section className="bg-paper paper-texture py-16 md:py-24 relative overflow-x-clip">
    <CrayonOverlay texture={1} opacity={0.07} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-14 relative">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-ink inline-block">
          O que torna nossos e-books diferentes?
        </h2>
        <div className="mt-2 flex justify-center">
          <DoodleUnderline className="w-64 md:w-80" />
        </div>
        <div className="flex justify-center mt-4">
          <PostIt color="yellow" rotation={2} className="inline-block">
            <HandwrittenNote text="— 6 razões para confiar —" rotation={0} className="!text-base md:!text-lg !italic" />
          </PostIt>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        <DoodleStar className="w-6 h-6 opacity-40" />
        <DoodleStar className="w-4 h-4 opacity-25 -rotate-12" />
        <DoodleStar className="w-6 h-6 opacity-40" />
        <DoodleStar className="w-4 h-4 opacity-25 rotate-12" />
        <DoodleStar className="w-6 h-6 opacity-40" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-2 pt-4">
        {items.map((item, i) => {
          const rot = i % 2 === 0 ? -1 : 1;
          const hasPin = i % 2 === 0;
          const hasTape = i % 3 !== 2;

          return (
            <div
              key={item.title}
              className="collage-card hover-lift relative bg-cream p-5 pt-7 shadow-md"
              style={{ transform: `rotate(${rot}deg)` }}
            >
              <FoldedCorner className="absolute top-0 right-0" />

              {hasPin && (
                <PushPin
                  color={pinColors[i % 4]}
                  className="absolute -top-4 left-3 z-20"
                />
              )}

              {hasTape && (
                <WashiTape
                  color={tapeColors[i % 6]}
                  width="w-20"
                  rotation={rot * -3}
                  className="absolute -top-2.5 right-3 z-20"
                />
              )}

              <div
                className="w-12 h-12 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center shrink-0 mb-3"
                style={{ transform: `rotate(${rot * 3}deg)` }}
              >
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-display text-base font-bold text-ink mb-1">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <DoodleStar className="w-6 h-6 opacity-40" />
        <DoodleStar className="w-4 h-4 opacity-25 rotate-12" />
        <DoodleStar className="w-6 h-6 opacity-40" />
        <DoodleStar className="w-4 h-4 opacity-25 -rotate-12" />
        <DoodleStar className="w-6 h-6 opacity-40" />
      </div>

      <CoffeStain className="absolute bottom-12 right-8 md:right-16 opacity-40 w-24 h-24 pointer-events-none" />
    </div>

    <TornEdgeSection position="bottom" color="cream" />
  </section>
);
