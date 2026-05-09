import { BookOpen, ScrollText } from "lucide-react";
import {
  WashiTape,
  PushPin,
  StampBadge,
  StickerBadge,
  DoodleStar,
  DoodleUnderline,
  HandwrittenNote,
  CrayonOverlay,
  TornEdgeSection,
  FoldedCorner,
  CoffeStain,
} from "@/components/Decorations";

const LINKS = {
  combo: "https://go.hotmart.com/D105224878P?dp=1",
  discursivo: "https://go.hotmart.com/S105139002C?dp=1",
  objetivo: "https://go.hotmart.com/D105224378S?dp=1",
};

const products = [
  {
    title: "E-book Objetivo",
    subtitle: "Foco no 1º Exame de Qualificação",
    description:
      "Ideal para quem quer garantir o conceito A logo na primeira fase.",
    icon: BookOpen,
    accent: "bg-secondary",
    features: [
      "Explicação detalhada da prova",
      "Os principais assuntos cobrados",
      "Efemérides (datas importantes) fundamentais para o exame objetivo",
      "Questões selecionadas e organizadas por assunto",
      "Do período colonial ao contemporâneo",
    ],
    price: "R$ 29,20",
    installments: "ou 4x de R$ 7,95",
    link: LINKS.objetivo,
    highlight: false,
  },
  {
    title: "COMBO APROVAÇÃO",
    subtitle: "Os 2 E-books juntos",
    description:
      "A preparação completa que você precisa, no formato que cabe no seu bolso.",
    icon: ScrollText,
    accent: "bg-primary",
    features: [
      "2 e-books completos inclusos",
      "Economia de 32% no combo",
      "Cobertura total: objetivo + discursiva",
      "Efemérides 2026 incluídas",
      "Questões organizadas por tema",
      "Melhor custo-benefício",
    ],
    price: "R$ 49,00",
    installments: "ou 7x de R$ 8,01",
    link: LINKS.combo,
    highlight: true,
  },
  {
    title: "E-book Discursivo",
    subtitle: "Foco na Prova Discursiva",
    description:
      "O guia definitivo para quem vai fazer a prova específica e precisa aprender a construir as respostas que a banca espera.",
    icon: ScrollText,
    accent: "bg-primary",
    features: [
      "Análise do padrão de resposta da UERJ",
      "Os temas que mais caem na discursiva",
      "Efemérides voltadas para o contexto discursivo",
      "Questões organizadas por assunto",
      "Dicas de estruturação textual",
    ],
    price: "R$ 29,20",
    installments: "ou 4x de R$ 7,95",
    link: LINKS.discursivo,
    highlight: false,
  },
];

const cardRotations = [-2, 1, -1];
const tapeColors = ["yellow", "pink", "blue"] as const;
const pinColors = ["blue", "yellow"] as const;

function HandDrawnCheckbox() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6,9 L8,11.5 L12,6.5"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const MateriaisSection = () => (
  <section className="relative py-16 pt-20 pb-20 md:py-24 md:pt-28 md:pb-28 bg-secondary overflow-x-clip">
    <CrayonOverlay texture={3} opacity={0.04} />

    <TornEdgeSection position="bottom" color="cream" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12 relative">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-white inline-block">
          Nossos Materiais
        </h2>
        <DoodleUnderline className="mx-auto mt-1 max-w-xs opacity-80" />

        <p className="font-handwritten text-xl text-white/70 mt-3">
          — estude com foco no que realmente cai —
        </p>
        <p className="font-body text-white/80 max-w-2xl mx-auto mt-4">
          Sem perder tempo com conteúdos desnecessários. Em ambos os materiais
          você encontra explicação da prova, principais assuntos, efemérides e
          questões organizadas.
        </p>

        <DoodleStar className="absolute -top-2 right-[10%] w-6 h-6 opacity-30" />
        <DoodleStar className="absolute top-8 left-[8%] w-5 h-5 opacity-20" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start px-2 pt-4 pb-8">
        {products.map((p, i) => (
<div className={`relative bg-cream paper-texture shadow-xl ${
        p.highlight
          ? "md:scale-[1.02] ring-2 ring-primary z-20"
          : "z-10"
      }`} style={{ transform: `rotate(${cardRotations[i]}deg)` }}>
            <div
              className={`absolute -top-3 left-1/2 -translate-x-1/2 z-30 ${
                p.highlight ? "hidden" : ""
              }`}
            >
              <PushPin
                color={pinColors[i === 0 ? 0 : 1]}
                className="drop-shadow-md"
              />
            </div>

            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                <WashiTape color={tapeColors[i]} width="w-40" rotation={1} />
              </div>
            )}

            {!p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <WashiTape
                  color={tapeColors[i]}
                  width="w-24"
                  rotation={i === 0 ? 3 : -2}
                />
              </div>
            )}

{p.highlight && (
    <>
    <StampBadge
      text="MELHOR ESCOLHA"
      color="azul"
      className="absolute -top-3 left-4 z-40 rotate-[-8deg] scale-[0.85] md:scale-100"
    />
    <StickerBadge
      text="32% OFF"
      bgColor="bg-[hsl(var(--azul))]"
      textColor="text-white"
      size="sm"
      rotation={12}
      className="absolute -top-2 -right-1 z-40 shadow-lg md:-top-4 md:-right-2 md:!w-20 md:!h-20"
    />
    </>
)}

            <FoldedCorner className="absolute top-0 right-0 z-20" />

            <div className={`${p.accent} p-5 text-center relative`}>
              <p.icon className="w-8 h-8 text-white mx-auto mb-2" />
              <span className="text-white font-display font-bold text-lg block">
                {p.title}
              </span>
              <span className="text-white/80 text-sm font-body block mt-1">
                {p.subtitle}
              </span>
            </div>

            <div className="p-6">
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                {p.description}
              </p>

              <ul className="space-y-3 mb-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm font-body text-ink"
                  >
                    <HandDrawnCheckbox />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center border-t border-dashed border-border/60 pt-4 relative">
                <CoffeStain className="absolute -bottom-2 -left-4 w-16 h-16 opacity-[0.04]" />

                <div
                  className={`inline-block px-4 py-1.5 rounded-sm font-display font-bold text-xl md:text-2xl mb-1 ${
                    p.highlight
                      ? "bg-[hsl(352,72%,45%)] text-white rotate-[-1deg] shadow-md sticker"
                      : "bg-primary/10 text-ink rotate-[1deg] border-2 border-dashed border-primary/30"
                  }`}
                >
                  {p.price}
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  {p.installments}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded font-bold text-base transition-all hover:scale-105 ${
                    p.highlight
                      ? "bg-primary text-primary-foreground shadow-md border-b-4 border-primary/70 relative overflow-hidden"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-dashed border-secondary/40"
                  }`}
                >
                  {p.highlight ? "GARANTIR MEU COMBO" : "COMPRAR AGORA"}
                </a>
              </div>
            </div>

{p.highlight && (
    <div className="absolute -bottom-8 right-4 z-30">
    <HandwrittenNote
      text="vale muito! →"
      rotation={6}
      className="text-secondary-foreground/60 text-base"
    />
    </div>
)}
          </div>
        ))}
      </div>

      <DoodleStar className="absolute top-[30%] right-[3%] w-8 h-8 opacity-15 hidden md:block" />
      <DoodleStar className="absolute bottom-[25%] left-[2%] w-6 h-6 opacity-20 hidden md:block" />
    </div>
  </section>
);
