import { Star } from "../Star";
import { Lock, HelpCircle, MapPin } from "lucide-react";

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
    icon: MapPin,
    title: "Falta de direção",
    text: "Muitos estudam muito, mas sem estratégia. Não sabem como estruturar uma resposta discursiva nem quais temas são recorrentes na prova.",
  },
];

export const ProblemaSection = () => (
  <section className="bg-bege paper-texture py-16 md:py-24 relative">
    <Star className="absolute top-6 right-8 opacity-30" color="red" size={24} />
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-marsala text-center mb-12">
        Por que tantos alunos travam na prova de História da UERJ?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        {problems.map((p) => (
          <div key={p.title} className="bg-card rounded-xl p-6 shadow-md text-center border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Mission box */}
      <div className="max-w-3xl mx-auto border-2 border-accent rounded-xl p-6 md:p-8 bg-card shadow-lg text-center">
        <Star className="mx-auto mb-3" color="gold" size={28} />
        <p className="font-body text-foreground text-base md:text-lg leading-relaxed">
          <strong>Nossa missão</strong> é democratizar o acesso à universidade pública, fornecendo as
          ferramentas necessárias para seu sucesso — <em>sem que o preço seja uma barreira.</em>
        </p>
      </div>

      <div className="text-center mt-10">
        <a
          href={COMBO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-3 rounded-lg transition-all hover:scale-105"
        >
          CONHECER OS MATERIAIS
        </a>
      </div>
    </div>
  </section>
);
