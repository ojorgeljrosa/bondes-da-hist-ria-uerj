import logo from "@/assets/logo.png";
import { WashiTape, PushPin, StampBadge, StickerBadge, DoodleStar, DoodleArrow, HandwrittenNote, TornPaperOverlay, CrumpledOverlay, TornEdgeSection } from "../Decorations";

const COMBO_LINK = "https://go.hotmart.com/D105224878P?dp=1";

export const HeroSection = () => (
  <section className="relative overflow-x-clip pt-16 pb-8 md:pt-20 md:pb-10 bg-paper">
    <CrumpledOverlay texture={2} opacity={0.07} />

    <div className="absolute inset-0 pointer-events-none overflow-hidden mx-4 md:mx-8">
      <TornPaperOverlay texture={1} position="top-left" opacity={0.25} rotation={-12} />
      <TornPaperOverlay texture={3} position="bottom-right" opacity={0.2} rotation={8} />
      <TornPaperOverlay texture={5} position="top-right" opacity={0.15} rotation={15} />
      <TornPaperOverlay texture={7} position="bottom-left" opacity={0.18} rotation={-5} />
      <div className="absolute top-24 right-28 w-32 h-32 md:w-44 md:h-44 opacity-20"
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}textures/torn/9.png")`, backgroundSize: 'cover', transform: 'rotate(22deg)' }}
      />
      <div className="absolute bottom-36 left-12 w-28 h-28 md:w-36 md:h-36 opacity-15"
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}textures/torn/11.png")`, backgroundSize: 'cover', transform: 'rotate(-18deg)' }}
      />
    </div>

    <div className="absolute left-8 md:left-16 top-0 bottom-0 border-l-2 border-primary/15 hidden md:block" />
    <div className="absolute left-12 md:left-20 top-0 bottom-0 border-l border-azul/10 hidden md:block" />

<WashiTape color="yellow" width="w-36" rotation={4} className="absolute top-6 right-16 hidden md:block" />
<WashiTape color="pink" width="w-28" rotation={-6} className="absolute top-20 left-16 hidden md:block" />
<WashiTape color="blue" width="w-32" rotation={2} className="absolute bottom-24 right-24 hidden md:block" />
<WashiTape color="green" width="w-24" rotation={-3} className="absolute bottom-40 left-20 hidden md:block" />

    <PushPin color="red" className="absolute top-12 left-1/3 hidden md:block" />
    <PushPin color="blue" className="absolute top-28 right-1/4 hidden md:block" />
    <PushPin color="yellow" className="absolute bottom-32 left-1/4 hidden md:block" />

    <DoodleStar className="absolute top-16 right-40 opacity-40 hidden md:block" />
    <DoodleStar className="absolute bottom-48 left-32 opacity-30 hidden md:block" />
    <DoodleArrow direction="down" className="absolute bottom-20 right-1/3 opacity-30 w-6 h-20 hidden md:block" />

<HandwrittenNote text="comece aqui! →" rotation={5} className="absolute top-1/3 right-16 md:right-24 text-xl hidden md:block" />
<HandwrittenNote text="← melhor escolha!" rotation={-8} className="absolute bottom-1/3 left-20 md:left-28 text-lg hidden md:block" />

    <StampBadge text="UERJ 2026" color="azul" className="absolute top-14 right-16 hidden md:block animate-stamp-in" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="relative inline-block mb-8">
        <WashiTape color="yellow" width="w-20" rotation={-4} className="absolute -top-3 left-4" />
        <WashiTape color="yellow" width="w-20" rotation={3} className="absolute -top-3 right-4" />
        <img src={logo} alt="Discursando História" className="mx-auto h-16 md:h-20 drop-shadow-sm" />
      </div>

      <div className="max-w-4xl mx-auto mb-6 relative">
        <h1 className="font-display font-bold text-ink leading-tight">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Domine </span>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary relative inline-block">
            História
            <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,7 Q25,2 50,6 Q75,10 100,5 Q125,1 150,6 Q175,10 200,4" fill="none" stroke="hsl(352, 72%, 38%)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">no vestibular da </span>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-azul relative inline-block">UERJ</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">e garanta sua vaga na universidade pública.</span>
        </h1>
      </div>

      <div className="relative inline-block mb-8 max-w-2xl">
        <div className="post-it post-it-yellow px-6 py-4 shadow-md" style={{ transform: 'rotate(-1.5deg)' }}>
          <p className="font-handwritten text-xl md:text-2xl text-ink leading-snug">
            Guias práticos, diretos e acessíveis, criados por especialistas para quem quer passar no Exame de Qualificação e na Discursiva, <strong>mesmo começando do zero.</strong>
          </p>
        </div>
        <PushPin color="red" className="absolute -top-6 left-1/2 -translate-x-1/2" />
      </div>

      <div className="flex justify-center gap-4 md:gap-8 mb-10 relative px-2">
    <div className="polaroid w-32 sm:w-40 md:w-48 relative hover-lift" style={{ transform: 'rotate(-3deg)' }}>
      <PushPin color="blue" className="absolute -top-7 left-1/2 -translate-x-1/2 z-20" />
      <img
        src={`${import.meta.env.BASE_URL}capas/Capa ebook Exame de Qualificação.png`}
        alt="E-book 1º Exame de Qualificação (Objetivo)"
        className="h-36 sm:h-44 md:h-52 w-full object-cover"
      />
      <p className="font-handwritten text-center text-xs text-ink/60 mt-1">1º fase ✎</p>
    </div>

    <div className="polaroid w-32 sm:w-40 md:w-48 relative hover-lift" style={{ transform: 'rotate(3deg)' }}>
      <PushPin color="red" className="absolute -top-7 left-1/2 -translate-x-1/2 z-20" />
      <img
        src={`${import.meta.env.BASE_URL}capas/Capa Ebook Discursiva.png`}
        alt="E-book Discursiva de História da UERJ"
        className="h-36 sm:h-44 md:h-52 w-full object-cover"
      />
      <p className="font-handwritten text-center text-xs text-ink/60 mt-1">2º fase ✎</p>
    </div>
      </div>

<div className="mb-4 relative inline-block">
          <StickerBadge
            text="✦ ECONOMIZE 32% ✦"
            bgColor="bg-primary"
            textColor="text-white"
            size="md"
            rotation={-3}
            className="animate-stamp-in md:!w-28 md:!h-28 md:!text-xs"
          />
        </div>

        <div className="mb-4 px-4">
          <a href={COMBO_LINK} target="_blank" rel="noopener noreferrer"
            className="relative inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg lg:text-xl px-6 md:px-10 py-4 md:py-5 rounded shadow-xl transition-all hover:scale-105 border-b-4 border-primary/70 hover-lift"
          >
          QUERO O COMBO AGORA (R$ 49,00)!
        </a>
        <p className="text-muted-foreground text-sm mt-3 font-body">ou em 7x de R$ 8,01 no cartão</p>
      </div>

      <DoodleArrow direction="down" className="mx-auto w-8 h-10 opacity-30 mt-1" />
    </div>

    <TornEdgeSection position="bottom" color="cream" />
  </section>
);
