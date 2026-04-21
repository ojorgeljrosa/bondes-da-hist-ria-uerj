import { Check, BookOpen, ScrollText } from "lucide-react";

const LINKS = {
  combo: "https://go.hotmart.com/D105224878P?dp=1",
  discursivo: "https://go.hotmart.com/S105139002C?dp=1",
  objetivo: "https://go.hotmart.com/D105224378S?dp=1",
};

const products = [
  {
    title: "E-book Objetivo",
    subtitle: "Foco no 1º Exame de Qualificação",
    description: "Ideal para quem quer garantir o conceito A logo na primeira fase.",
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
    description: "A preparação completa que você precisa, no formato que cabe no seu bolso.",
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
    description: "O guia definitivo para quem vai fazer a prova específica e precisa aprender a construir as respostas que a banca espera.",
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

export const MateriaisSection = () => (
  <section className="relative py-16 md:py-24 bg-secondary paper-texture">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-white text-center mb-3">
        Nossos Materiais
      </h2>
      <p className="font-handwritten text-xl text-white/70 text-center mb-4">
        — estude com foco no que realmente cai —
      </p>
      <p className="font-body text-white/80 text-center max-w-2xl mx-auto mb-12">
        Sem perder tempo com conteúdos desnecessários. Em ambos os materiais você encontra 
        explicação da prova, principais assuntos, efemérides e questões organizadas.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {products.map((p) => (
          <div
            key={p.title}
            className={`bg-cream rounded border border-border shadow-lg relative overflow-hidden ${
              p.highlight ? "md:scale-105 md:-mt-4 md:mb-[-1rem] ring-2 ring-primary" : ""
            }`}
          >
            {p.highlight && (
              <div className="red-tape text-white text-center text-sm font-bold py-2 px-4">
                ✦ MELHOR ESCOLHA — ECONOMIZE 32% ✦
              </div>
            )}

            <div className={`${p.accent} p-5 text-center`}>
              <p.icon className="w-8 h-8 text-white mx-auto mb-2" />
              <span className="text-white font-display font-bold text-lg block">{p.title}</span>
              <span className="text-white/80 text-sm font-body block mt-1">{p.subtitle}</span>
            </div>

            <div className="p-6">
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                {p.description}
              </p>

              <ul className="space-y-3 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-ink">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center border-t border-border pt-4">
                <p className="font-display text-3xl font-bold text-ink">{p.price}</p>
                <p className="text-sm text-muted-foreground font-body mb-4">{p.installments}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded font-bold text-base transition-all hover:scale-105 ${
                    p.highlight
                      ? "bg-primary text-primary-foreground shadow-md border-b-4 border-primary/70"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  }`}
                >
                  {p.highlight ? "GARANTIR MEU COMBO" : "COMPRAR AGORA"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
