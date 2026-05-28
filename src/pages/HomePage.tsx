import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Capabilities } from '../components/Capabilities';
import { Impact } from '../components/Impact';
import { Manufacturing } from '../components/Manufacturing';
import { Sustainability } from '../components/Sustainability';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  return (
    <PageTransition>
      <SEOHead
        title="Nutrition Infrastructure at Scale"
        description="Premium corporate website of UV Foods, India's trusted nutrition infrastructure company. Serving welfare programs with ISO 22000 sustainable manufacturing."
        path="/"
        image="/images/hero.png"
      />
      <Hero />
      <About />
      <Capabilities />
      <Impact />
      <Manufacturing />
      <Sustainability />
      <Certifications />
      <Contact />
    </PageTransition>
  );
};
