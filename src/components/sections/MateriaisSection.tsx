import { Star } from "../Star";
import { Check } from "lucide-react";

const LINKS = {
  combo: "https://go.hotmart.com/D105224878P?dp=1",
  discursivo: "https://go.hotmart.com/S105139002C?dp=1",
  objetivo: "https://go.hotmart.com/D105224378S?dp=1",
};

const products = [
  {
    title: "E-book Objetivo",
    subtitle: "Foco no 1º Exame de Qualificação",
    color: "bg-secondary",
    features: [
      "Análise completa do 1º EQ",
      "Estratégias para questões objetivas",
      "Tópicos mais cobrados de História do Brasil",
      "Período colonial ao contemporâneo",
      "Questões organizadas por assunto",
    ],
    price: "R$ 29,20",
    installments: "ou 4x de R$ 7,95",
    link: LINKS.objetivo,
    highlight: false,
  },
  {
    title: "COMBO APROVAÇÃO",
    subtitle: "Os 2 E-books juntos",
    color: "bg-accent",
    features: [
      "2 e-books completos inclusos",
      "Economia de 32% no combo",
      "Cobertura total: objetivo + discursiva",
      "Efemérides 2026 incluídas",
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
    color: "bg-primary",
    features: [
      "Foco total na 2ª fase (discursiva)",
      "Modelos de respostas nota máxima",
      "Critérios de correção da banca",
      "Temas recorrentes analisados",
      "Dicas de estruturação textual",
    ],
    price: "R$ 29,20",
    installments: "ou 4x de R$ 7,95",
    link: LINKS.discursivo,
    highlight: false,
  },
];

export const MateriaisSection = () => (
  <section className="relative overflow-hidden py-16 md:py-24 rays-red">
    <div className="absolute inset-0 bg-black/30 z-0" />
    <Star className="absolute top-6 left-6 z-10" color="gold" size={28} />
    <Star className="absolute bottom-6 right-6 z-10" color="blue" size={24} />

    <div className="relative z-10 container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-white text-center mb-12">
        Nossos Materiais
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {products.map((p) => (
          <div
            key={p.title}
            className={`bg-card rounded-2xl overflow-hidden shadow-2xl relative ${
              p.highlight ? "ring-4 ring-accent md:scale-105 md:-mt-4 md:mb-[-1rem]" : ""
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-0 left-0 right-0 bg-accent text-accent-foreground text-center text-sm font-bold py-2 z-20">
                ⭐ MELHOR ESCOLHA — ECONOMIZE 32%
              </div>
            )}

            {/* Top */}
            <div className={`${p.color} p-6 ${p.highlight ? "pt-12" : ""} text-center`}>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 inline-block mb-3">
                <span className="text-white font-display font-bold text-lg">{p.title}</span>
              </div>
              <p className="text-white/90 text-sm font-body">{p.subtitle}</p>
            </div>

            {/* Features */}
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">{p.price}</p>
                <p className="text-sm text-muted-foreground font-body mb-4">{p.installments}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-bold text-base transition-all hover:scale-105 ${
                    p.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
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
