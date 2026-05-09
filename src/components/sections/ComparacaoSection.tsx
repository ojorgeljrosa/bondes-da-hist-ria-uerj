import { Check } from "lucide-react";
import {
  WashiTape,
  PushPin,
  StampBadge,
  StickerBadge,
  DoodleStar,
  DoodleUnderline,
  HandwrittenNote,
  FoldedCorner,
  NotebookHole,
  TornEdgeSection,
} from "@/components/Decorations";

const LINKS = {
  combo: "https://go.hotmart.com/D105224878P?dp=1",
  discursivo: "https://go.hotmart.com/S105139002C?dp=1",
  objetivo: "https://go.hotmart.com/D105224378S?dp=1",
};

const offers = [
  {
    name: "COMBO APROVAÇÃO",
    content: "Os 2 E-books completos + Efemérides 2026",
    price: "R$ 49,00",
    installments: "7x R$ 8,01",
    link: LINKS.combo,
    highlight: true,
    features: ["E-book Objetivo", "E-book Discursivo", "Efemérides 2026", "Economia de 32%"],
  },
  {
    name: "E-book Discursivo",
    content: "Foco na 2ª fase da prova",
    price: "R$ 29,20",
    installments: "4x R$ 7,95",
    link: LINKS.discursivo,
    highlight: false,
    features: ["Prova discursiva", "Modelos de resposta", "Critérios da banca"],
  },
  {
    name: "E-book Objetivo",
    content: "Foco no 1º Exame de Qualificação",
    price: "R$ 29,20",
    installments: "4x R$ 7,95",
    link: LINKS.objetivo,
    highlight: false,
    features: ["1º EQ (objetiva)", "Questões por assunto", "Temas recorrentes"],
  },
];

const cardRotations = [-2, 0, 1] as const;
const tapeColors = ["green", "pink", "blue"] as const;
const tapeRotations = [3, -4, 5] as const;

export const ComparacaoSection = () => (
  <section className="relative py-16 pt-20 md:pt-24 md:py-24 bg-secondary paper-texture overflow-x-clip">
    <TornEdgeSection position="bottom" color="cream" />

    <DoodleStar className="absolute top-8 left-8 opacity-20 w-10 h-10 pointer-events-none z-0" />
    <DoodleStar className="absolute bottom-16 right-12 opacity-15 w-8 h-8 pointer-events-none z-0" />
    <DoodleStar className="absolute top-1/2 right-6 opacity-10 w-12 h-12 pointer-events-none z-0" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="relative inline-block w-full">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-white text-center mb-1">
          Escolha o melhor caminho para sua aprovação
        </h2>
        <DoodleUnderline className="mx-auto w-96 max-w-full mt-1 mb-2" />
      </div>
      <p className="font-handwritten text-xl text-white/60 text-center mb-14">
        — compare as opções —
      </p>

      <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto items-start px-2 pt-4 pb-8">
        {offers.map((o, i) => (
          <div
            key={o.name}
            className={`relative notebook-lined bg-cream p-6 pt-10 pb-8 shadow-lg collage-card hover-lift ${
              o.highlight ? "ring-2 ring-primary z-20" : "z-10"
            }`}
            style={{ transform: `rotate(${cardRotations[i]}deg)` }}
          >
            {o.highlight && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                <StampBadge text="DESTAQUE" color="primary" className="animate-stamp-in" />
                <StickerBadge
                  text="★"
                  bgColor="bg-primary"
                  textColor="text-white"
                  size="sm"
                  rotation={12}
                  className="animate-fade-in-rotate"
                />
              </div>
            )}

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-x-4 z-20">
              <WashiTape
                color={tapeColors[i]}
                width="w-24"
                rotation={tapeRotations[i]}
              />
            </div>

            <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-0">
              <NotebookHole />
              <NotebookHole />
            </div>

            <FoldedCorner className="absolute top-0 right-0" />

            {!o.highlight && (
              <PushPin
                color={i === 1 ? "blue" : "green"}
                className="absolute -top-4 right-4 z-20"
              />
            )}

            <div className="pl-4 relative">
              <h3 className="font-display text-lg font-bold text-ink mb-2 mt-2">
                {o.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-4">
                {o.content}
              </p>

              <ul className="space-y-2 mb-6 text-left">
                {o.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm font-body text-ink"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="relative inline-block mb-1">
                <StickerBadge
                  text={o.price}
                  bgColor={o.highlight ? "bg-primary" : "bg-marsala"}
                  textColor="text-white"
                  size="lg"
                  rotation={o.highlight ? -3 : 2}
                  className="w-auto h-auto px-4 py-2 rounded-md font-display text-xl md:text-2xl"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-5">{o.installments}</p>

              <a
                href={o.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 font-bold transition-all hover:scale-105 text-center ${
                  o.highlight
                    ? "sticker bg-primary text-primary-foreground rounded-md border-b-4 border-primary/70 shadow-md hover-lift"
                    : "bg-secondary/80 text-secondary-foreground rounded border border-border/50"
                }`}
              >
                {o.highlight ? "QUERO O COMBO" : "COMPRAR"}
              </a>
            </div>

{o.highlight && (
    <HandwrittenNote
    text="← melhor custo-benefício!"
    rotation={2}
    className="absolute right-2 bottom-20 md:right-4 text-primary whitespace-nowrap text-xs md:text-base"
    />
)}
          </div>
        ))}
      </div>
    </div>
  </section>
);
