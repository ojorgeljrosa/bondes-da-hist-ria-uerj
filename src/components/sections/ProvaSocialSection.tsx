import { Star } from "../Star";

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
    <Star className="absolute top-4 left-6 opacity-40" color="red" size={22} />
    <Star className="absolute top-4 right-6 opacity-40" color="blue" size={22} />

    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-marsala text-center mb-12">
        Veja o que nossos alunos dizem
      </h2>

      {/* Testimonials */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 shadow-md border border-border relative">
            <div className="text-4xl text-primary/20 font-display absolute top-3 left-4">"</div>
            <p className="font-body text-sm text-foreground leading-relaxed mb-4 mt-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">— {t.name}</p>
                {t.course && (
                  <p className="text-xs font-semibold text-accent-foreground bg-accent/80 inline-block px-2 py-0.5 rounded-full mt-1">
                    {t.course}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="text-center">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8">
          🎉 Galeria dos Aprovados
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {aprovados.map((name, i) => (
            <div
              key={name}
              className="bg-card border-2 border-accent shadow-lg rounded-lg p-4 w-32 text-center"
              style={{ transform: `rotate(${(i % 2 === 0 ? -3 : 3)}deg)` }}
            >
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                <span className="font-display text-lg text-muted-foreground font-bold">
                  {name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <p className="font-body text-xs font-semibold text-foreground">{name}</p>
              <p className="text-[10px] text-primary font-bold mt-1">APROVADO(A) ✓</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
