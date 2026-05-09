import { HeroSection } from "@/components/sections/HeroSection";
import { PropositoSection } from "@/components/sections/PropositoSection";
import { ProblemaSection } from "@/components/sections/ProblemaSection";
import { QuemSomosSection } from "@/components/sections/QuemSomosSection";
import { MateriaisSection } from "@/components/sections/MateriaisSection";
import { ProvaSocialVideoSection } from "@/components/sections/ProvaSocialVideoSection";
import { ProvaSocialSection } from "@/components/sections/ProvaSocialSection";
import { DiferenciaisSection } from "@/components/sections/DiferenciaisSection";
import { ComparacaoSection } from "@/components/sections/ComparacaoSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTAFinalSection } from "@/components/sections/CTAFinalSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => (
  <main className="overflow-x-clip">
    <HeroSection />
    <PropositoSection />
    <ProblemaSection />
    <QuemSomosSection />
    <MateriaisSection />
    <ProvaSocialVideoSection />
    <ProvaSocialSection />
    <DiferenciaisSection />
    <ComparacaoSection />
    <FAQSection />
    <CTAFinalSection />
    <FooterSection />
  </main>
);

export default Index;
