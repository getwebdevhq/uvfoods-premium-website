import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { manufacturingFeatures } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Manufacturing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="manufacturing" className="section-y bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium text-muted-green uppercase tracking-widest mb-4">
              Infrastructure
            </span>
            <h2 className="font-heading font-bold text-display text-forest text-balance">
              Precision at every stage.
            </h2>
          </motion.div>

          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-lg text-muted leading-relaxed max-w-lg">
              UV Foods leverages the massive combined capacity of its holding company, Suruchi Foods, near Mathura, UP, while establishing its own state-of-the-art facility in Rajasthan.
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-12 lg:mb-16 group shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/fresh_grains.png"
            alt="UV Foods premium grains processing"
            className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />

          {/* Floating capacity badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 glass rounded-2xl px-6 py-4">
            <div className="text-lime font-heading font-bold text-2xl">600+ MT</div>
            <div className="text-white/60 text-sm">Combined Daily Capacity</div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {manufacturingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 lg:p-8 hover-lift border border-forest/5 hover:border-lime/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center mb-5 group-hover:bg-lime/40 transition-colors duration-300">
                <span className="text-forest font-heading font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h4 className="font-heading font-semibold text-lg text-forest mb-2">
                {feature.title}
              </h4>

              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Learn More CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link
            to="/infrastructure"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-forest text-white hover:bg-olive transition-colors duration-300 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-forest/10"
          >
            Tour our manufacturing facility
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
