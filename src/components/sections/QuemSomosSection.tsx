import juliaThiagoVertical from "@/assets/julia-thiago-vertical.jpeg";
import {
  WashiTape,
  PushPin,
  StampBadge,
  PolaroidFrame,
  PostIt,
  DoodleHeart,
  DoodleUnderline,
  HandwrittenNote,
  CrumpledOverlay,
  TornEdgeSection,
  NotebookHole,
  CoffeStain,
} from "../Decorations";

export const QuemSomosSection = () => (
  <section className="bg-paper paper-texture py-16 pb-20 md:py-24 md:pb-28 relative overflow-x-clip">
    <CrumpledOverlay texture={3} opacity={0.05} />
    <CoffeStain className="absolute top-8 right-8 md:right-16 w-32 h-32 opacity-40" />
    <CoffeStain className="absolute bottom-32 left-4 md:left-12 w-24 h-24 opacity-30 rotate-45" />

    <div className="container mx-auto px-4 relative z-10">
      {/* Title area */}
      <div className="text-center mb-14 relative">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-ink inline-block">
          Quem está por trás deste projeto?
        </h2>
        <DoodleUnderline className="mx-auto mt-1 w-80 md:w-[500px]" />
        <div className="flex items-center justify-center gap-3 mt-3">
          <p className="font-handwritten text-xl text-primary">
            — conheça os professores —
          </p>
          <StampBadge text="PROFESSORES" color="primary" className="animate-stamp-in" />
        </div>
      </div>

      {/* Main photo — large polaroid with washi tape & push pin */}
      <div className="max-w-sm mx-auto mb-10 relative">
        <WashiTape color="pink" width="w-20" rotation={-8} className="absolute -top-2 left-4 z-20" />
        <WashiTape color="green" width="w-20" rotation={5} className="absolute -top-2 right-4 z-20" />
        <PushPin color="red" className="absolute -top-4 left-1/2 -translate-x-1/2 z-30" />
        <PolaroidFrame
          src={juliaThiagoVertical}
          alt="Julia Ramos e Thiago Fernandes — professores do Discursando História"
          caption="Julia & Thiago"
          rotation={-1}
          className="w-full hover-lift"
        />
        <WashiTape color="yellow" width="w-16" rotation={25} className="absolute bottom-8 -right-3 z-20" />
        <WashiTape color="blue" width="w-14" rotation={-20} className="absolute bottom-2 -left-2 z-20" />
      </div>

      {/* Bio cards as PostIt notes */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto px-2">
        {/* Julia — pink post-it */}
        <div className="relative">
          <PushPin color="red" className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <NotebookHole className="absolute top-4 left-1 z-20" />
          <NotebookHole className="absolute top-14 left-1 z-20" />
          <PostIt color="pink" rotation={-2} className="relative p-6">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-xl font-bold text-ink">
                Julia Ramos
              </h3>
              <DoodleHeart className="w-5 h-5 inline-block" />
            </div>
            <p className="font-body text-sm text-primary font-semibold mb-3">
              Graduada em História pela UFRJ • Especialista em Ensino de História
            </p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Apaixonada por educação e por tornar a história acessível a todos. Com anos de experiência
              preparando alunos para vestibulares, Julia desenvolveu métodos práticos para que qualquer
              estudante domine as provas da UERJ com confiança.
            </p>
          </PostIt>
          <HandwrittenNote
            text="★ Professora incrível!"
            rotation={8}
            className="absolute -bottom-4 right-0 text-sm"
          />
        </div>

        {/* Thiago — green post-it */}
        <div className="relative">
          <PushPin color="blue" className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" />
          <NotebookHole className="absolute top-4 right-1 z-20" />
          <NotebookHole className="absolute top-14 right-1 z-20" />
          <PostIt color="green" rotation={2} className="relative p-6">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-xl font-bold text-ink">
                Thiago Fernandes
              </h3>
              <DoodleHeart className="w-5 h-5 inline-block" />
            </div>
            <p className="font-body text-sm text-primary font-semibold mb-3">
              Formado em História pela UFRRJ • Mestre em Ensino de História
            </p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Thiago combina sua formação acadêmica com uma didática envolvente. Seus alunos o conhecem por
              transformar temas complexos em explicações claras e diretas, sempre focadas no que realmente
              cai na prova.
            </p>
          </PostIt>
          <HandwrittenNote
            text="→ Didática top!"
            rotation={-6}
            className="absolute -bottom-4 left-0 text-sm"
          />
        </div>
      </div>
    </div>

    <TornEdgeSection position="bottom" color="bege" />
  </section>
);
