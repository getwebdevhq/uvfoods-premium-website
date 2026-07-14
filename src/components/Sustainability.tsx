import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const pillars = [
    {
      title: 'Farmer Procurement',
      description: 'Procuring high-quality grains directly from local farmers and agricultural traders, securing fair market pricing.',
      accent: 'from-lime/20 to-lime/5',
    },
    {
      title: 'Cooperative Distribution',
      description: "Direct supply channel through NCCF (National Cooperative Consumers' Federation) to execute welfare tenders.",
      accent: 'from-muted-green/20 to-muted-green/5',
    },
    {
      title: 'Expanding Sourcing',
      description: 'Establishing a dedicated processing unit in Rajasthan to increase regional sourcing and agricultural value addition.',
      accent: 'from-olive/20 to-olive/5',
    },
  ];

  return (
    <section id="sustainability" className="relative overflow-hidden">
      {/* Immersive background */}
      <div className="absolute inset-0">
        <img
          src="/images/fresh_farm_hero.png"
          alt="Fresh agricultural fields and crops"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/85 to-forest/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,243,107,0.06)_0%,transparent_70%)]" />
      </div>

      <div ref={ref} className="relative z-10 section-y">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-medium text-lime/70 uppercase tracking-widest mb-4">
                Sustainability
              </span>
              <h2 className="font-heading font-bold text-display text-white text-balance">
                Growing food.
                <br />
                <span className="gradient-text">Growing futures.</span>
              </h2>
            </motion.div>

            <motion.div
              className="flex items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                Our commitment extends beyond manufacturing — we build sustainable food ecosystems that benefit farmers, communities, and future generations.
              </p>
            </motion.div>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="glass rounded-3xl p-8 hover-lift cursor-default"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-6`}>
                  <div className="w-3 h-3 rounded-full bg-lime" />
                </div>

                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Value Chain */}
          <motion.div
            className="glass rounded-3xl p-8 lg:p-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-heading-lg text-white text-center mb-10">
              From Farm to Community
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6">
              {[
                { step: 'Sourcing', icon: '🌾' },
                { step: 'Processing', icon: '⚙️' },
                { step: 'Fortification', icon: '🔬' },
                { step: 'Quality Check', icon: '✅' },
                { step: 'Distribution', icon: '🚚' },
                { step: 'Communities', icon: '🤝' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm font-medium">{item.step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/sustainability"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-lime text-forest rounded-full font-semibold text-sm hover:bg-lime-dark transition-all duration-300 hover:shadow-xl hover:shadow-lime/20"
            >
              See our sustainability commitments
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
