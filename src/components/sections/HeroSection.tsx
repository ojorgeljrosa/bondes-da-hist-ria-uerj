import { Star } from "../Star";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

export const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center rays-hero paper-texture">
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/40 z-0" />

    {/* Stars */}
    <Star className="absolute top-6 left-6 z-10 animate-pulse" color="gold" size={40} />
    <Star className="absolute top-8 right-8 z-10" color="blue" size={36} />
    <Star className="absolute bottom-10 left-10 z-10" color="red" size={28} />
    <Star className="absolute bottom-8 right-12 z-10 animate-pulse" color="gold" size={32} />
    <Star className="absolute top-1/3 left-4 z-10" color="red" size={20} />
    <Star className="absolute top-1/4 right-4 z-10" color="blue" size={22} />

    <div className="relative z-10 container mx-auto px-4 py-16 text-center">
      {/* Logo */}
      <p className="font-display text-accent text-xl md:text-2xl font-bold tracking-wider mb-6 uppercase">
        ⭐ Discursando História ⭐
      </p>

      {/* Headline */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto drop-shadow-lg">
        BONDE: A TURMA FOCADA NA DISCURSIVA DE HISTÓRIA DA UERJ
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto mb-4">
        Domine a História no vestibular da UERJ e garanta sua vaga na universidade pública
      </p>

      {/* Parágrafo */}
      <p className="text-base md:text-lg text-white/80 font-body max-w-xl mx-auto mb-8">
        Seu guia prático e premium para as provas de Qualificação e Discursiva.
        Materiais criados por especialistas aprovados na UERJ.
      </p>

      {/* Mockups */}
      <div className="flex justify-center gap-4 md:gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-2xl p-3 rotate-[-3deg] w-36 md:w-48">
          <div className="bg-secondary h-44 md:h-56 rounded flex items-center justify-center text-white font-display text-sm md:text-base font-bold p-3 text-center">
            E-book<br />1º Exame de<br />Qualificação<br />(Objetivo)
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-2xl p-3 rotate-[3deg] w-36 md:w-48">
          <div className="bg-primary h-44 md:h-56 rounded flex items-center justify-center text-white font-display text-sm md:text-base font-bold p-3 text-center">
            E-book<br />Discursiva<br />de História
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="inline-block bg-accent text-accent-foreground font-bold text-sm px-4 py-1 rounded-full mb-4 shadow-lg animate-bounce">
        ⭐ MELHOR ESCOLHA — ECONOMIZE 32%
      </div>

      {/* CTA */}
      <div>
        <a
          href={COMBO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-10 py-5 rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-accent/30"
        >
          QUERO O COMBO AGORA (R$ 49,00)!
        </a>
        <p className="text-white/70 text-sm mt-3 font-body">ou em 7x de R$ 8,01 no cartão</p>
      </div>
    </div>
  </section>
);
