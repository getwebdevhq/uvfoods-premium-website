import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-y bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Editorial Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block text-sm font-medium text-muted-green uppercase tracking-widest mb-6">
                About UV Foods
              </span>
            </motion.div>

            <motion.h2
              className="font-heading font-bold text-display text-forest mb-8 text-balance"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Nourishing India, One Partnership at a Time.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-5"
            >
              <p className="text-lg text-muted leading-relaxed text-balance">
                UV Foods Private Limited operates at the intersection of agricultural sourcing, modern processing, and institutional supply chains — bringing quality food grains and products to millions.
              </p>
              <p className="text-base text-muted/80 leading-relaxed text-balance">
                Co-managed by experienced entrepreneurs, we draw on the manufacturing power of our holding company, Suruchi Foods Private Limited, which has nearly 40 years of expertise (since 1986) in India's nutritional food sector.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex gap-8 sm:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div>
                <div className="text-3xl font-heading font-bold text-forest">600+ MT</div>
                <div className="text-sm text-muted mt-1">Mathura Plant<br />Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-forest">NCCF</div>
                <div className="text-sm text-muted mt-1">Active Sourcing<br />Partner</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-forest">1986</div>
                <div className="text-sm text-muted mt-1">Group Founding<br />Year</div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-forest hover:text-olive font-semibold text-sm transition-colors duration-300"
              >
                Learn more about our legacy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="/images/fresh_fruits.png"
                alt="Fresh organic agricultural produce and fruits"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass-light rounded-2xl p-5 shadow-xl max-w-[220px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-lime" />
                <span className="text-xs font-semibold text-forest uppercase tracking-wider">Quality First</span>
              </div>
              <p className="text-sm text-muted leading-snug">
                Supplying premium agricultural products direct from farmers to market.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
