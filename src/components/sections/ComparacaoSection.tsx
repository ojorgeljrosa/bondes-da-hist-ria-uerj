import { Check } from "lucide-react";

const LINKS = {
  combo: "https://go.hotmart.com/D105224878P?dp=1",
  discursivo: "https://go.hotmart.com/S105139002C?dp=1",
  objetivo: "https://go.hotmart.com/D105224378S?dp=1",
};

const offers = [
  {
    name: "COMBO APROVAÇÃO",
    content: "Os 2 E-books completos + Efemérides 2026",
    price: "R$ 49,00",
    installments: "7x R$ 8,01",
    link: LINKS.combo,
    highlight: true,
    features: ["E-book Objetivo", "E-book Discursivo", "Efemérides 2026", "Economia de 32%"],
  },
  {
    name: "E-book Discursivo",
    content: "Foco na 2ª fase da prova",
    price: "R$ 29,20",
    installments: "4x R$ 7,95",
    link: LINKS.discursivo,
    highlight: false,
    features: ["Prova discursiva", "Modelos de resposta", "Critérios da banca"],
  },
  {
    name: "E-book Objetivo",
    content: "Foco no 1º Exame de Qualificação",
    price: "R$ 29,20",
    installments: "4x R$ 7,95",
    link: LINKS.objetivo,
    highlight: false,
    features: ["1º EQ (objetiva)", "Questões por assunto", "Temas recorrentes"],
  },
];

export const ComparacaoSection = () => (
  <section className="relative py-16 md:py-24 bg-secondary paper-texture">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-white text-center mb-3">
        Escolha o melhor caminho para sua aprovação
      </h2>
      <p className="font-handwritten text-xl text-white/60 text-center mb-12">
        — compare as opções —
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {offers.map((o) => (
          <div
            key={o.name}
            className={`bg-cream rounded border border-border p-6 text-center shadow-md ${
              o.highlight ? "ring-2 ring-primary relative" : ""
            }`}
          >
            {o.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 red-tape text-white text-xs font-bold px-4 py-1">
                ✦ DESTAQUE
              </div>
            )}
            <h3 className="font-display text-lg font-bold text-ink mb-2 mt-2">{o.name}</h3>
            <p className="text-sm text-muted-foreground font-body mb-4">{o.content}</p>
            <ul className="space-y-2 mb-6 text-left">
              {o.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-body text-ink">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="font-display text-2xl font-bold text-ink">{o.price}</p>
            <p className="text-xs text-muted-foreground mb-4">{o.installments}</p>
            <a
              href={o.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-3 rounded font-bold transition-all hover:scale-105 ${
                o.highlight
                  ? "bg-primary text-primary-foreground shadow-md border-b-4 border-primary/70"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {o.highlight ? "QUERO O COMBO" : "COMPRAR"}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
