import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { capabilities } from '../data/content';
import { Wheat, Building2, FlaskConical, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Building2,
  FlaskConical,
  Leaf,
};

const capabilityDetails = [
  {
    title: 'Nutritional Manufacturing',
    bullets: [
      'Fortified flour, blended grains, and custom nutritional flour mixes',
      'Proprietary infant foods and energy-dense supplementary nutrition',
      'High-speed packaging with robust shelf-life assurance parameters',
      'Strict quality validation across each batch processing cycle',
    ],
  },
  {
    title: 'Institutional Supply',
    bullets: [
      'Optimized distribution to 600+ districts across central and state welfare programs',
      'End-to-end trace-and-track logistics management systems',
      'Seamless multi-point warehousing under stringent temperature controls',
      'Dedicated compliance and contract execution teams for institutional clients',
    ],
  },
  {
    title: 'Food Fortification',
    bullets: [
      'Custom Vitamin-Mineral Premix formulation for direct flour/rice enhancement',
      'State-of-the-art Fortified Rice Kernels (FRK) production line',
      'Micro-nutrient blending precision conforming to global WHO guidelines',
      'Rigorous testing in internal and certified third-party laboratories',
    ],
  },
  {
    title: 'Sustainable Operations',
    bullets: [
      'Direct, zero-middleman partnerships with local agricultural farmer clusters',
      'Resource conservation through advanced low-emission boiler architectures',
      'Strict zero-waste policy with eco-friendly byproduct processing',
      'Eco-efficient routing protocols to minimize distribution carbon footprint',
    ],
  },
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
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <PageTransition>
      <SEOHead
        title="Our Capabilities & Food Systems"
        description="Explore UV Foods core capabilities in nutrition infrastructure, large-scale institutional supply, custom food fortification, and sustainable operations."
        path="/capabilities"
        image="/images/manufacturing.png"
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
                    <div className="relative rounded-[28px] overflow-hidden bg-cream p-12 min-h-[350px] flex items-center justify-center border border-forest/5 hover:border-lime/30 transition-all duration-500 group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-lime/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="text-center space-y-6 relative z-10">
                        <div className="w-24 h-24 rounded-3xl bg-white shadow-lg mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-12 h-12 text-forest" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-green font-semibold uppercase tracking-widest mb-1">UV Foods Capability</div>
                          <div className="font-heading font-bold text-2xl text-forest">{cap.title}</div>
                        </div>
                        <p className="text-sm text-muted/70 max-w-sm mx-auto">
                          Delivering performance, reliability, and certified safety parameters at full enterprise scale.
                        </p>
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
            ].map((p, idx) => (
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
