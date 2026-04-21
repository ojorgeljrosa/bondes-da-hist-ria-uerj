import juliaThiagoVertical from "@/assets/julia-thiago-vertical.jpeg";
import { TapeStrip } from "../Decorations";

export const QuemSomosSection = () => (
  <section className="bg-paper paper-texture py-16 md:py-24 relative">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-ink text-center mb-3">
        Quem está por trás deste projeto?
      </h2>
      <p className="font-handwritten text-xl text-primary text-center mb-12">
        — conheça os professores —
      </p>

      {/* Photo - using the vertical photo from /fotos folder */}
      <div className="max-w-sm mx-auto mb-12 relative">
        <TapeStrip className="absolute -top-3 left-1/4 z-10" rotation={-3} />
        <TapeStrip className="absolute -top-3 right-1/4 z-10" rotation={2} />
        <div className="bg-cream p-3 shadow-lg border border-border rotate-[1deg]">
          <img
            src={juliaThiagoVertical}
            alt="Julia Ramos e Thiago Fernandes — professores do Discursando História"
            className="w-full rounded-sm"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Julia */}
        <div className="bg-cream border border-border rounded p-6 shadow-sm relative notebook-margin ml-0 md:ml-4">
          <h3 className="font-display text-xl font-bold text-ink mb-1">Julia Ramos</h3>
          <p className="font-body text-sm text-primary font-semibold mb-3">
            Graduada em História pela UFRJ • Especialista em Ensino de História
          </p>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            Apaixonada por educação e por tornar a história acessível a todos. Com anos de experiência
            preparando alunos para vestibulares, Julia desenvolveu métodos práticos para que qualquer
            estudante domine as provas da UERJ com confiança.
          </p>
        </div>

        {/* Thiago */}
        <div className="bg-cream border border-border rounded p-6 shadow-sm relative notebook-margin ml-0 md:ml-4">
          <h3 className="font-display text-xl font-bold text-ink mb-1">Thiago Fernandes</h3>
          <p className="font-body text-sm text-primary font-semibold mb-3">
            Formado em História pela UFRRJ • Mestre em Ensino de História
          </p>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            Thiago combina sua formação acadêmica com uma didática envolvente. Seus alunos o conhecem por
            transformar temas complexos em explicações claras e diretas, sempre focadas no que realmente
            cai na prova.
          </p>
        </div>
      </div>
    </div>
  </section>
);
