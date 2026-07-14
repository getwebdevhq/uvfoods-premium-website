import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wheat, Building2, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { capabilities } from '../data/content';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Building2,
  Leaf,
  ShieldCheck,
};

export const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="capabilities" className="section-y bg-white">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-medium text-muted-green uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-heading font-bold text-display text-forest text-balance">
            Core Capabilities
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = iconMap[capability.icon];
            return (
              <motion.div
                key={capability.title}
                className="group relative bg-cream rounded-3xl p-8 lg:p-10 hover-lift cursor-default border border-transparent hover:border-muted-green/20"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center mb-6 group-hover:bg-lime/30 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-forest group-hover:text-olive transition-colors duration-500" />
                </div>

                <h3 className="font-heading font-semibold text-heading-lg text-forest mb-3">
                  {capability.title}
                </h3>

                <p className="text-muted leading-relaxed text-base">
                  {capability.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Learn More Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link
            to="/capabilities"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-forest text-white hover:bg-olive transition-colors duration-300 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-forest/10"
          >
            Explore our full capabilities
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
