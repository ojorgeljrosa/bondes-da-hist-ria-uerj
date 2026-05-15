import {
  WashiTape,
  PushPin,
  StampBadge,
  DoodleUnderline,
  DoodleStar,
  HandwrittenNote,
  CrumpledOverlay,
  TornEdgeSection,
} from "../Decorations";

const videos = [
  {
    id: "aF3ZKcXwxHI",
    title: "Passeios discursando",
    description: "Acompanhe nossos passeios e momentos de estudo",
  },
  {
    id: "rSu01zZhtQk",
    title: "Diferenciais do Discursando",
    description: "Descubra o que torna nosso método único",
  },
  {
    id: "5J4Mt9gnc94",
    title: "Depoimento - Giovanna",
    description: "Veja a experiência de quem já passou por aqui",
  },
  {
    id: "jC442IuMSBo",
    title: "Depoimento - Kiara",
    description: "Conheça a história de mais uma aprovada",
  },
];

const cardStyles = [
  { rotation: -1, pin: "red" as const, tapeColor: "pink" as const, tapeWidth: "w-20", tapeRotation: 12 },
  { rotation: 1, pin: "blue" as const, tapeColor: "green" as const, tapeWidth: "w-16", tapeRotation: -8 },
  { rotation: -2, pin: "green" as const, tapeColor: "yellow" as const, tapeWidth: "w-18", tapeRotation: 15 },
  { rotation: 2, pin: "yellow" as const, tapeColor: "orange" as const, tapeWidth: "w-14", tapeRotation: -12 },
];

export const ProvaSocialVideoSection = () => (
  <section className="bg-cream paper-texture py-16 md:py-24 relative overflow-x-clip">
    <CrumpledOverlay texture={2} opacity={0.05} />

    <DoodleStar className="absolute top-12 left-8 md:left-16 w-8 h-8 text-primary/20" />
    <DoodleStar className="absolute top-20 right-12 md:right-24 w-6 h-6 text-primary/15" />
    <DoodleStar className="absolute bottom-40 left-16 w-5 h-5 text-primary/20" />
    <DoodleStar className="absolute bottom-20 right-20 w-7 h-7 text-primary/10" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12 relative">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-ink inline-block">
          Veja quem já está com a gente
        </h2>
        <DoodleUnderline className="mx-auto mt-1 w-80 md:w-[500px]" />
        <p className="font-handwritten text-xl text-primary mb-4 mt-3">
          — prova social em vídeo —
        </p>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Assista aos depoimentos e momentos dos nossos alunos.
          Veja como o Discursando História está transformando a preparação para a UERJ.
        </p>
<HandwrittenNote
    text="assista! →"
    rotation={6}
    className="absolute right-2 md:right-8 top-16 md:top-20 text-lg"
/>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-6xl mx-auto">
        {videos.map((video, i) => {
          const style = cardStyles[i];
          return (
            <div
              key={video.id}
              className="collage-card relative bg-paper border border-border shadow-md hover-lift"
              style={{ transform: `rotate(${style.rotation}deg)` }}
            >
              <PushPin
                color={style.pin}
                className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
              />
              <WashiTape
                color={style.tapeColor}
                width={style.tapeWidth}
                rotation={style.tapeRotation}
                className="absolute -top-2 right-2 z-20"
              />

              <div className="relative aspect-video sm:aspect-[3/4] lg:aspect-[9/16] bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 border-t border-border/50">
                <h3 className="font-display text-base font-bold text-ink mb-1">
                  {video.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <StampBadge
          text="200+ ALUNOS"
          color="primary"
          className="animate-stamp-in inline-block text-base md:text-lg px-5 py-3"
        />
        <p className="font-body font-semibold text-primary mt-3">
          Mais de 200 alunos já confiam no Discursando História
        </p>
      </div>
    </div>

    <TornEdgeSection position="bottom" color="paper" />
  </section>
);
