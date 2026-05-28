import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { certifications } from '../data/content';

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-y bg-white">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-medium text-muted-green uppercase tracking-widest mb-4">
            Compliance
          </span>
          <h2 className="font-heading font-bold text-display text-forest text-balance">
            Certified excellence.
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Our operations meet and exceed national and international food safety, quality, and export standards.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="group bg-cream rounded-2xl p-6 lg:p-8 text-center hover-lift border border-transparent hover:border-lime/30 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-forest/5 group-hover:bg-lime/20 flex items-center justify-center mx-auto mb-4 transition-colors duration-500">
                <svg
                  className="w-6 h-6 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>

              <h4 className="font-heading font-semibold text-forest text-base mb-1">
                {cert.name}
              </h4>

              <p className="text-muted text-xs leading-relaxed">
                {cert.fullName}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
