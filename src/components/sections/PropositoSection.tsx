import { GraduationCap, Heart } from "lucide-react";
import { TapeStrip } from "../Decorations";

export const PropositoSection = () => (
  <section className="bg-paper paper-texture py-16 md:py-20 relative">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-cream border border-border rounded-lg p-8 md:p-12 shadow-lg relative">
        <TapeStrip className="absolute -top-3 left-8" rotation={-2} />
        <TapeStrip className="absolute -top-3 right-8" rotation={1} />

        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            Por que nascemos?
          </h2>
        </div>

        <div className="space-y-6 text-ink">
          <p className="font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Muitos alunos <strong>sonham com a UERJ</strong>, mas se sentem perdidos diante da prova de História.
            Sabemos que nem todos conseguem acessar cursos completos, com aulas gravadas e acompanhamento, 
            por questões financeiras.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display text-lg font-semibold">O sonho da universidade</span>
            </div>
            <div className="hidden md:block text-2xl text-primary">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <span className="font-display text-lg font-semibold">Acesso para todos</span>
            </div>
          </div>

          <p className="font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Foi pensando nisso que o <strong>Discursando História nasceu</strong>. Nosso sonho é levar 
            mais jovens para a universidade pública.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-8">
            <p className="font-body text-base md:text-lg text-center leading-relaxed italic">
              "Acreditamos que a falta de recursos não deve ser uma barreira entre você e a sua aprovação.
              Por isso desenvolvemos uma alternativa de <strong>alta qualidade</strong> e 
              <strong> valor acessível</strong> para você estudar com a gente este ano."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
