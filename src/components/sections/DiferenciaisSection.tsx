import { Target, ListChecks, Calendar, DollarSign, Zap, Heart } from "lucide-react";

const items = [
  { icon: Target, title: "Foco nichado", desc: "Especialistas na UERJ, não materiais genéricos. Tudo pensado para a banca e o estilo da prova." },
  { icon: ListChecks, title: "Questões organizadas", desc: "Todas as questões separadas por assunto para um estudo direcionado e eficiente." },
  { icon: Calendar, title: "Efemérides 2026", desc: "Datas importantes e aniversários históricos que podem cair na prova deste ano." },
  { icon: DollarSign, title: "Preço acessível", desc: "Alta qualidade sem pesar no bolso. Educação de qualidade deve ser para todos." },
  { icon: Zap, title: "Direto ao ponto", desc: "Sem enrolação, apenas o que realmente cai. Otimize seu tempo de estudo ao máximo." },
  { icon: Heart, title: "Professores presentes", desc: "Cuidado e dedicação com cada aluno. Estamos juntos nessa jornada até a aprovação." },
];

export const DiferenciaisSection = () => (
  <section className="bg-paper paper-texture py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-ink text-center mb-3">
        O que torna nossos e-books diferentes?
      </h2>
      <p className="font-handwritten text-xl text-primary text-center mb-12">
        — 6 razões para confiar —
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 p-5 rounded bg-cream border border-border shadow-sm">
            <div className="w-11 h-11 border-2 border-primary/20 rounded-full flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-ink mb-1">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
