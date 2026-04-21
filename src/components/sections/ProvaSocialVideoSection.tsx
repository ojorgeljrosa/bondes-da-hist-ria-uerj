import { Play } from "lucide-react";
import { TapeStrip } from "../Decorations";

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

export const ProvaSocialVideoSection = () => (
  <section className="bg-cream paper-texture py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-ink mb-3">
          Veja quem já está com a gente
        </h2>
        <p className="font-handwritten text-xl text-primary mb-4">
          — prova social em vídeo —
        </p>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Assista aos depoimentos e momentos dos nossos alunos. 
          Veja como o Discursando História está transformando a preparação para a UERJ.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-paper border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[9/16] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-bold text-ink mb-1">
                {video.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
          <Play className="w-5 h-5" />
          <span className="font-body font-semibold">
            Mais de 500 alunos já confiam no Discursando História
          </span>
        </div>
      </div>
    </div>
  </section>
);
