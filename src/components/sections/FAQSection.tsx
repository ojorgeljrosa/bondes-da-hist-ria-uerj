import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  WashiTape,
  PushPin,
  DoodleUnderline,
  DoodleCircle,
  CoffeStain,
  FoldedCorner,
  NotebookHole,
  TornEdgeSection,
} from "@/components/Decorations";

const faqs = [
  {
    q: "Como recebo os e-books?",
    a: "Após a confirmação do pagamento, você recebe imediatamente o acesso por e-mail com o link para download. O processo é automático e instantâneo via plataforma Hotmart.",
  },
  {
    q: "O material é digital?",
    a: "Sim! São e-books em formato PDF para você estudar onde quiser: celular, tablet ou computador. Baixe uma vez e tenha acesso vitalício.",
  },
  {
    q: "Tenho garantia?",
    a: "Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito(a), devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    q: "O material é atualizado?",
    a: "Sim! Nossos e-books são atualizados anualmente com as últimas provas e tendências da UERJ, incluindo as efemérides do ano vigente.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Aceitamos cartão de crédito (parcelamento em até 7x), PIX, boleto bancário e outros métodos disponíveis na Hotmart.",
  },
  {
    q: "Posso comprar só um e-book?",
    a: "Claro! Cada e-book pode ser adquirido separadamente por R$ 29,20. Mas recomendamos o combo para ter a preparação completa com 32% de economia.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Totalmente! O pagamento é processado pela Hotmart, a maior plataforma de produtos digitais da América Latina, com criptografia SSL e proteção total dos seus dados.",
  },
];

const numberCircle = (num: number) => (
  <span className="relative inline-flex items-center justify-center w-8 h-8 mr-3 shrink-0">
    <DoodleCircle className="absolute inset-0 w-full h-full" />
    <span className="relative z-10 font-handwritten text-primary text-base leading-none">
      {num}
    </span>
  </span>
);

export const FAQSection = () => (
  <section className="bg-cream paper-texture py-16 md:py-24 relative overflow-x-clip">
    <CoffeStain className="absolute top-8 right-4 md:right-12 w-24 h-24 md:w-32 md:h-32" />

    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12 relative">
        <div className="inline-block relative">
          <WashiTape
            color="yellow"
            width="w-36"
            rotation={1}
            className="absolute -top-4 left-1/2 -translate-x-1/2"
          />
          <h2 className="font-display text-2xl md:text-4xl font-bold text-ink pt-2">
            Perguntas Frequentes
          </h2>
          <DoodleUnderline className="mt-1 mx-auto w-64" />
        </div>

        <p className="font-handwritten text-xl text-primary mt-4">
          — tire suas dúvidas —
        </p>
      </div>

      <div className="relative collage-card bg-paper paper-texture rounded-sm shadow-lg">
        <PushPin
          color="red"
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 drop-shadow"
        />

        <div className="absolute top-10 left-0 bottom-0 flex flex-col items-center gap-24 pt-4 z-10">
          <NotebookHole />
          <NotebookHole />
          <NotebookHole />
        </div>

        <Accordion
          type="single"
          collapsible
          className="notebook-lined pl-10 pr-4 md:pr-8 py-6"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-border/40 last:border-b-0 px-3 py-2 md:px-5 md:py-3 relative group"
              style={{
                boxShadow:
                  i < faqs.length - 1
                    ? "0 2px 4px rgba(0,0,0,0.06)"
                    : undefined,
              }}
            >
              {i % 3 === 1 && (
                <FoldedCorner className="absolute -bottom-1 -right-1 w-6 h-6" />
              )}

              <AccordionTrigger className="font-display font-semibold text-left text-ink hover:no-underline hover:text-primary transition-colors">
                <span className="flex items-center">
                  {numberCircle(i + 1)}
                  <span>{faq.q}</span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="font-body text-muted-foreground leading-relaxed pl-11 ml-2 border-l-2 border-primary/20">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="absolute bottom-4 right-6 rotate-2 opacity-80">
          <WashiTape color="green" width="w-20" rotation={-3} />
        </div>
      </div>
    </div>

    <TornEdgeSection position="bottom" color="paper" />
  </section>
);
