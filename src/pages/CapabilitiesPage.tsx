import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { capabilities } from '../data/content';
import { Wheat, Building2, Leaf, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Building2,
  Leaf,
  ShieldCheck,
};

const capabilityDetails = [
  {
    title: 'Agricultural Sourcing',
    bullets: [
      'Procurement of premium grains directly from farming communities and local traders',
      'Zero-middleman supply chain assuring maximum freshness and fair crop pricing',
      'Rigorous quality verification upon crop intake at sorting terminals',
      'Direct sourcing capabilities aligned with seasonal regional harvests',
    ],
  },
  {
    title: 'Institutional Delivery',
    bullets: [
      'FSSAI state & central licensed delivery systems matching strict standards',
      'Currently fully activated partnership with NCCF cooperative network',
      'Reliable execution for institutional projects, welfare tenders, and grocery supply',
      'Structured logistics management ensuring compliance and timely delivery',
    ],
  },
  {
    title: 'Value-Added Processing',
    bullets: [
      'Access to Mathura processing plant with 600+ MT daily combined capacity',
      'Advanced grain cleaning, processing, packaging, and sorting lines',
      'High hygiene controls with ISO-grade facilities at our holding group',
      'Developing upcoming proprietary processing unit expansion in Rajasthan',
    ],
  },
  {
    title: 'Regulatory Compliance',
    bullets: [
      'State FSSAI License: 13322010000113 & Central FSSAI License: 13324999000097',
      'APEDA Registered Trader: Certificate Number 218173',
      'Importer-Exporter Code (IEC) holder for seamless trade operations',
      'MSME / Udyam Registered Enterprise: UDYAM-DL-08-0025271',
    ],
  },
];

const imageMap = [
  '/images/fresh_farm_hero.png',
  '/images/honey_extraction.png',
  '/images/fresh_grains.png',
  '/images/fresh_fruits.png',
];

export const CapabilitiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <PageTransition>
      <SEOHead
        title="Our Capabilities & Food Systems"
        description="Explore UV Foods core capabilities in nutrition infrastructure, large-scale institutional supply, custom food fortification, and sustainable operations."
        path="/capabilities"
        image="/images/fresh_grains.png"
      />

      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cream overflow-hidden py-32 border-b border-forest/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,243,107,0.12),transparent_40%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block text-sm font-semibold text-muted-green uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.span>
          <motion.h1
            className="font-heading font-bold text-display-xl text-forest mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Nourishment Built on Engineering & Trust
          </motion.h1>
          <motion.p
            className="text-xl text-muted/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We supply nutritional foods engineered to strict specifications and distributed on an unprecedented institutional scale across India.
          </motion.p>
        </div>
      </section>

      {/* Interactive Capabilities Showcase */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-24"
          >
            {capabilities.map((cap, index) => {
              const Icon = iconMap[cap.icon];
              const details = capabilityDetails.find(d => d.title === cap.title);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={cap.title}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex w-12 h-12 rounded-2xl bg-lime/20 items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-forest" />
                    </div>
                    <h2 className="font-heading font-bold text-display text-forest mb-6">
                      {cap.title}
                    </h2>
                    <p className="text-lg text-muted leading-relaxed mb-8">
                      {cap.description}
                    </p>
                    <ul className="space-y-4">
                      {details?.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-5 h-5 text-muted-green mt-0.5 flex-shrink-0" />
                          <span className="text-muted text-base leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Graphic / Visual Box Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-[28px] overflow-hidden h-[400px] border border-forest/5 hover:border-lime/30 transition-all duration-500 group shadow-md">
                      <img
                        src={imageMap[index]}
                        alt={cap.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                        <div className="inline-flex w-10 h-10 rounded-xl bg-lime/20 backdrop-blur-md items-center justify-center mb-4 border border-lime/30">
                          <Icon className="w-5 h-5 text-lime" />
                        </div>
                        <div className="text-xs text-lime font-semibold uppercase tracking-widest mb-1">UV Foods Capability</div>
                        <h3 className="font-heading font-bold text-2xl">{cap.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Custom Process Flow */}
      <section className="py-24 bg-forest text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(199,243,107,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-semibold text-lime uppercase tracking-widest block mb-4">
              Value Chain
            </span>
            <h2 className="font-heading font-bold text-display text-white">
              End-to-End Precision Model
            </h2>
            <p className="text-white/70 text-lg mt-4">
              Our streamlined manufacturing flow guarantees high micro-nutrient retention, hygiene, and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector line for large screens */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

            {[
              { step: '01', title: 'Direct Procurement', desc: 'Direct sourcing of premium agricultural commodities from verified farmer clusters.' },
              { step: '02', title: 'Automated Processing', desc: 'Pre-cleaning, fine grinding, and controlled fortifications without manual touch.' },
              { step: '03', title: 'Multi-Point Quality Lab', desc: 'Continuous testing of vitamin/mineral load, purity standards, and safety factors.' },
              { step: '04', title: 'Logistical Dispatch', desc: 'Seamless packaging and real-time tracked distribution to regional focal distribution points.' },
            ].map((p) => (
              <div key={p.step} className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-forest border border-white/20 flex items-center justify-center text-lime font-bold font-heading text-lg shadow-lg">
                  {p.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white pt-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-bold text-display text-forest mb-6">
            Looking for Custom Food Solutions?
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            We collaborate with state welfare departments, nutrition research labs, and private enterprises to manufacture specialized foods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-lime text-forest rounded-full font-semibold text-sm hover:bg-lime-dark transition-all duration-300 hover:shadow-xl hover:shadow-lime/20"
            >
              Contact Partnership Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/infrastructure"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-forest rounded-full font-semibold text-sm border border-forest/5 hover:bg-forest/5 transition-all duration-300"
            >
              Tour Our Facilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
