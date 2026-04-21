import logo from "@/assets/logo.png";
import { RedUnderline, TapeStrip } from "../Decorations";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

export const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center paper-bg paper-texture">
    {/* Notebook margin line */}
    <div className="absolute left-12 md:left-20 top-0 bottom-0 border-l-2 border-primary/20 hidden md:block" />

    {/* Decorative tape */}
    <TapeStrip className="absolute top-8 right-12 hidden md:block" rotation={3} />
    <TapeStrip className="absolute bottom-16 left-8 hidden md:block" rotation={-1} />

    <div className="relative z-10 container mx-auto px-4 py-16 text-center">
      {/* Logo */}
      <img src={logo} alt="Discursando História" className="mx-auto h-16 md:h-20 mb-8 drop-shadow-sm" />

      {/* Headline - mixed typography like the reference */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          <span className="text-primary">BONDE:</span> A TURMA FOCADA NA{" "}
          <span className="relative inline-block">
            DISCURSIVA DE HISTÓRIA
            <RedUnderline className="absolute -bottom-1 left-0 w-full" />
          </span>{" "}
          DA UERJ
        </h1>
      </div>

    {/* Subheadline - handwritten style */}
    <p className="font-handwritten text-2xl md:text-3xl text-secondary mb-3">
      Domine a História no vestibular da UERJ e garanta sua vaga
    </p>
    <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
      Um guia prático, direto e acessível, criado por especialistas para quem quer passar 
      no Exame de Qualificação e na Discursiva, <strong className="text-ink">mesmo começando do zero</strong>.
    </p>
    <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
      Um guia prático, direto e acessível, criado por especialistas para quem quer passar 
      no Exame de Qualificação e na Discursiva, <strong className="text-ink">mesmo começando do zero</strong>.
    </p>

      {/* Mockups styled as pinned paper */}
      <div className="flex justify-center gap-6 md:gap-10 mb-10">
        <div className="bg-cream border border-border rounded shadow-md p-3 rotate-[-2deg] w-36 md:w-44 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-primary shadow-sm" />
          </div>
          <div className="bg-secondary/90 h-44 md:h-52 rounded-sm flex items-center justify-center text-white font-display text-sm font-bold p-3 text-center leading-snug">
            E-book<br />1º Exame de<br />Qualificação<br /><span className="font-handwritten text-lg">(Objetivo)</span>
          </div>
        </div>
        <div className="bg-cream border border-border rounded shadow-md p-3 rotate-[2deg] w-36 md:w-44 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-primary shadow-sm" />
          </div>
          <div className="bg-primary/90 h-44 md:h-52 rounded-sm flex items-center justify-center text-white font-display text-sm font-bold p-3 text-center leading-snug">
            E-book<br />Discursiva<br />de História<br /><span className="font-handwritten text-lg">da UERJ</span>
          </div>
        </div>
      </div>

      {/* Badge - tape style */}
      <div className="inline-block red-tape text-white font-bold text-sm px-6 py-2 mb-6 shadow-md">
        ✦ MELHOR ESCOLHA — ECONOMIZE 32% ✦
      </div>

      {/* CTA */}
      <div>
        <a
          href={COMBO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-10 py-5 rounded shadow-lg transition-all hover:scale-105 border-b-4 border-primary/70"
        >
          QUERO O COMBO AGORA (R$ 49,00)!
        </a>
        <p className="text-muted-foreground text-sm mt-3 font-body">ou em 7x de R$ 8,01 no cartão</p>
      </div>
    </div>
  </section>
);
