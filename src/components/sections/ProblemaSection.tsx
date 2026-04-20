import { Lock, HelpCircle, Compass } from "lucide-react";
import { CoffeStain } from "../Decorations";

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
  <section className="bg-cream paper-texture py-16 md:py-24 relative">
    <CoffeStain className="absolute top-10 right-10 hidden md:block" />

    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-ink text-center mb-3">
        Por que tantos alunos travam na prova de História da UERJ?
      </h2>
      <p className="font-handwritten text-xl text-primary text-center mb-12">
        — os 3 principais obstáculos —
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        {problems.map((p) => (
          <div key={p.title} className="bg-paper border border-border rounded p-6 shadow-sm text-center relative">
            {/* Notebook hole */}
            <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-background border border-border" />
            <div className="w-14 h-14 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink mb-3">{p.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Mission - styled as a pinned note */}
      <div className="max-w-3xl mx-auto bg-paper border border-accent rounded p-6 md:p-8 shadow-md text-center relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape h-5 w-20 rounded-sm" />
        <p className="font-body text-ink text-base md:text-lg leading-relaxed mt-2">
          <strong className="text-primary">Nossa missão</strong> é democratizar o acesso à universidade pública,
          fornecendo as ferramentas necessárias para seu sucesso —{" "}
          <em className="font-handwritten text-xl">sem que o preço seja uma barreira.</em>
        </p>
      </div>

      <div className="text-center mt-10">
        <a
          href={COMBO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-3 rounded transition-all hover:scale-105"
        >
          CONHECER OS MATERIAIS ↓
        </a>
      </div>
    </div>
  </section>
);
