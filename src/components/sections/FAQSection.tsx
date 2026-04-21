import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export const FAQSection = () => (
  <section className="bg-cream paper-texture py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-ink text-center mb-3">
        Perguntas Frequentes
      </h2>
      <p className="font-handwritten text-xl text-primary text-center mb-12">
        — tire suas dúvidas —
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-paper rounded border border-border px-6 shadow-sm"
          >
            <AccordionTrigger className="font-body font-semibold text-left text-ink hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
