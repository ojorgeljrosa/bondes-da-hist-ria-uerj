import { Star } from "../Star";

const people = [
  {
    name: "Julia Ramos",
    borderColors: "border-primary ring-secondary",
    role: "Graduada em História pela UFRJ • Especialista em Ensino de História",
    bio: "Apaixonada por educação e por tornar a história acessível a todos. Com anos de experiência preparando alunos para vestibulares, Julia desenvolveu métodos práticos para que qualquer estudante domine as provas da UERJ com confiança.",
  },
  {
    name: "Thiago Fernandes",
    borderColors: "border-secondary ring-accent",
    role: "Formado em História pela UFRRJ • Mestre em Ensino de História",
    bio: "Thiago combina sua formação acadêmica com uma didática envolvente. Seus alunos o conhecem por transformar temas complexos em explicações claras e diretas, sempre focadas no que realmente cai na prova.",
  },
];

export const QuemSomosSection = () => (
  <section className="bg-card paper-texture py-16 md:py-24 relative">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
        Quem está por trás deste projeto?
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {people.map((p) => (
          <div key={p.name} className="text-center">
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-5 border-4 ring-4 ${p.borderColors} bg-muted flex items-center justify-center`}
            >
              <span className="font-display text-3xl md:text-4xl text-muted-foreground font-bold">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{p.name}</h3>
            <p className="font-body text-sm text-primary font-semibold mb-3">{p.role}</p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{p.bio}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Star color="gold" size={36} />
      </div>
    </div>
  </section>
);
