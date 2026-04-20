import { Target, ListChecks, Calendar, DollarSign, Zap, Heart } from "lucide-react";

const items = [
  { icon: Target, title: "Foco nichado", desc: "Especialistas na UERJ, não materiais genéricos. Tudo pensado para a banca e o estilo da prova." },
  { icon: ListChecks, title: "Questões organizadas", desc: "Todas as questões separadas por assunto para um estudo direcionado e eficiente." },
  { icon: Calendar, title: "Efemérides 2026", desc: "Datas importantes e aniversários históricos que podem cair na prova deste ano." },
  { icon: DollarSign, title: "Preço acessível", desc: "Alta qualidade sem pesar no bolso. Acreditamos que educação de qualidade deve ser para todos." },
  { icon: Zap, title: "Direto ao ponto", desc: "Sem enrolação, apenas o que realmente cai. Otimize seu tempo de estudo ao máximo." },
  { icon: Heart, title: "Professores presentes", desc: "Cuidado e dedicação com cada aluno. Estamos juntos nessa jornada até a aprovação." },
];

export const DiferenciaisSection = () => (
  <section className="bg-card paper-texture py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
        O que torna nossos e-books diferentes?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-bege/60 border border-border">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
              <item.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
