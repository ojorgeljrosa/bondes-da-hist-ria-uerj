import { PaperClip } from "../Decorations";

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

const aprovados = ["Ana Clara M.", "Lucas S.", "Beatriz R.", "Pedro H.", "Camila T.", "Rafael D."];

export const ProvaSocialSection = () => (
  <section className="bg-bege paper-texture py-16 md:py-24 relative">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-ink text-center mb-3">
        Veja o que nossos alunos dizem
      </h2>
      <p className="font-handwritten text-xl text-primary text-center mb-12">
        — feedbacks reais —
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {testimonials.map((t, i) => (
          <div key={t.name} className="bg-cream border border-border rounded p-6 shadow-sm relative">
            {i === 0 && <PaperClip className="absolute -top-4 right-6" />}
            {/* Lined paper effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded opacity-20">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="border-b border-blue-300/50" style={{ marginTop: j === 0 ? '28px' : '24px' }} />
              ))}
            </div>
            <div className="relative z-10">
              <p className="font-body text-sm text-ink leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="font-bold text-primary text-xs">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-ink">— {t.name}</p>
                  {t.course && (
                    <p className="text-xs font-bold text-primary mt-0.5 font-handwritten text-base">{t.course}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Galeria dos Aprovados */}
      <div className="text-center">
        <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-2">
          Galeria dos Aprovados
        </h3>
        <p className="font-handwritten text-lg text-primary mb-8">🎉 parabéns a todos!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {aprovados.map((name, i) => (
            <div
              key={name}
              className="bg-cream border border-border shadow-md rounded p-4 w-28 md:w-32 text-center"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <div className="w-14 h-14 rounded-full bg-paper mx-auto mb-2 flex items-center justify-center border border-border">
                <span className="font-display text-base text-muted-foreground font-bold">
                  {name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <p className="font-body text-xs font-semibold text-ink">{name}</p>
              <p className="text-[10px] text-primary font-bold mt-1 font-handwritten text-sm">Aprovado(a) ✓</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
