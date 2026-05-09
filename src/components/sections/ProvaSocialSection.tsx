import {
  WashiTape,
  PushPin,
  StampBadge,
  StickerBadge,
  PostIt,
  PaperClip,
  CoffeStain,
  DoodleUnderline,
  DoodleStar,
  DoodleHeart,
  HandwrittenNote,
  CrumpledOverlay,
  TornEdgeSection,
  FoldedCorner,
  NotebookHole,
} from "../Decorations";

const testimonials = [
  {
    name: "Julia Andrade",
    text: "Oi prof, passando pra dar meu feedback sobre o e-book! Está realmente além do que eu esperava. As questões organizadas por tema facilitaram muito meu estudo e as análises são super claras. Recomendo demais!",
    course: "",
  },
  {
    name: "Bárbara Pillar",
    text: "Gente, o material é incrível! Eu estava completamente perdida sobre o que estudar pra UERJ e o e-book me deu um norte. As estratégias de resposta discursiva mudaram completamente minha forma de escrever.",
    course: "",
  },
  {
    name: "Allana Quinteiro",
    text: "Usei o combo e fui APROVADA em Direito na UERJ! O diferencial foi ter um material focado especificamente na prova da UERJ, não algo genérico. Os modelos de resposta me ajudaram muito na hora da prova.",
    course: "APROVADA — Direito UERJ",
  },
  {
    name: "Giovanna Fraga",
    text: "Melhor investimento que fiz pro vestibular! O preço é muito acessível e a qualidade é de cursinho top. As efemérides e os temas recorrentes me salvaram na hora da prova. Obrigada, profs!",
    course: "APROVADA UERJ",
  },
];

const aprovados = [
  "Ana Clara M.",
  "Lucas S.",
  "Beatriz R.",
  "Pedro H.",
  "Camila T.",
  "Rafael D.",
];

const postItColors: Array<"yellow" | "pink"> = ["yellow", "pink"];
const rotations = [-2, 1, -1, 2];
const aprovadoRotations = [-3, 2, -1, 3, -2, 1];
const pinColors: Array<"red" | "blue" | "green" | "yellow"> = [
  "red",
  "blue",
  "green",
  "yellow",
];

export const ProvaSocialSection = () => (
  <section className="bg-bege py-16 pb-20 md:py-24 md:pb-28 relative overflow-x-clip">
    <CrumpledOverlay opacity={0.07} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-14 relative">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-ink inline-block">
          Veja o que nossos alunos dizem
        </h2>
        <DoodleUnderline className="mx-auto mt-1 max-w-md" />
        <div className="flex items-center justify-center gap-3 mt-3">
          <StampBadge text="FEEDBACKS" color="primary" className="animate-stamp-in" />
        </div>
        <HandwrittenNote
          text="— feedbacks reais —"
          rotation={1}
          className="mt-3 text-xl"
        />
        <CoffeStain className="absolute -top-2 right-8 md:right-20 opacity-[0.04]" />
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        {testimonials.map((t, i) => {
          const isApproved = t.course !== "";
          const postItColor = postItColors[i % 2];
          const rotation = rotations[i % 4];

          return (
            <div
              key={t.name}
              className="relative animate-fade-in-rotate"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <PostIt
                color={postItColor}
                rotation={rotation}
                className="hover-lift"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <PushPin color={pinColors[i % 4]} />
                </div>

                <div className="pt-3 pb-2 px-1">
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]">
                    <div className="notebook-lined h-full w-full" />
                  </div>

                  {i === 1 && (
                    <PaperClip className="absolute -top-2 -right-3 scale-90" />
                  )}
                  {i === 3 && (
                    <PaperClip className="absolute -top-2 -left-2 scale-90 -scale-x-100" />
                  )}

                  <div className="relative z-10">
                    <p className="font-body text-sm text-ink leading-relaxed mb-4 italic">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="w-9 h-9 rounded-full bg-white/40 flex items-center justify-center border border-primary/20">
                        <span className="font-bold text-primary text-xs">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-ink">
                          — {t.name}
                        </p>
                        {isApproved && (
                          <div className="flex items-center gap-2 mt-1">
                            <StampBadge
                              text="APROVADO"
                              color="green"
                              className="text-[9px] px-2 py-0.5"
                            />
                            <DoodleHeart className="w-4 h-4 shrink-0" />
                          </div>
                        )}
                      </div>
                    </div>

                    {isApproved && (
                      <p className="text-xs font-bold text-primary mt-2 font-handwritten text-base">
                        {t.course}
                      </p>
                    )}
                  </div>
                </div>

{i === 0 && (
    <WashiTape
    color="blue"
    width="w-20"
    rotation={15}
    className="absolute -bottom-2 right-0"
    />
)}
                {i === 2 && (
                  <WashiTape
                    color="pink"
                    width="w-16"
                    rotation={-10}
                    className="absolute -bottom-2 left-6"
                  />
                )}
              </PostIt>

{i === 0 && (
    <HandwrittenNote
    text="adorei! ✎"
    rotation={6}
    className="absolute -bottom-5 right-0 text-sm"
    />
)}
            </div>
          );
        })}
      </div>

      <div className="text-center mb-10 relative">
        <h3 className="font-display text-xl md:text-2xl font-bold text-ink inline-block">
          Galeria dos Aprovados
        </h3>
        <DoodleStar className="absolute -top-4 -left-2 md:-left-6 w-8 h-8 opacity-50" />
        <DoodleStar className="absolute -top-3 -right-4 md:-right-8 w-6 h-6 opacity-40" />
        <p className="font-handwritten text-lg text-primary mt-2">
          🎉 parabéns a todos!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-6 max-w-5xl mx-auto pt-4 pb-4">
        {aprovados.map((name, i) => (
          <div
            key={name}
            className="relative animate-fade-in-rotate"
            style={{
              animationDelay: `${i * 80}ms`,
              transform: `rotate(${aprovadoRotations[i]}deg)`,
            }}
          >
            <div className="polaroid w-28 md:w-28 bg-white p-2 pb-10 shadow-lg hover-lift relative">
              <PushPin
                color={pinColors[i % 4]}
                className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
              />

              <div className="w-full aspect-square bg-paper flex items-center justify-center border border-border/30">
                <span className="font-display text-lg text-muted-foreground font-bold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div className="flex flex-col items-center mt-2 relative">
                <p className="font-body text-xs font-semibold text-ink">
                  {name}
                </p>
                <StampBadge
                  text="APROVADO ✓"
                  color="green"
                  className="text-[7px] px-1.5 py-0.5 mt-1"
                />
              </div>

              <DoodleStar
                className={`absolute w-4 h-4 opacity-50 ${
                  i % 2 === 0
                    ? "-top-1 -right-1"
                    : "-bottom-1 -left-1"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <HandwrittenNote
        text="eles conseguiram! ★"
        rotation={-3}
        className="text-right mt-6 mr-4 md:mr-12"
      />
      <CoffeStain className="absolute bottom-20 left-4 md:left-12 opacity-[0.035]" />
    </div>

    <TornEdgeSection position="bottom" color="paper" />
  </section>
);
