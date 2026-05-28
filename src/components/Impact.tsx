import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCounter } from '../hooks/useCounter';
import { impactMetrics } from '../data/content';

const AnimatedMetric = ({
  value,
  suffix,
  label,
  description,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
}) => {
  const { count, ref } = useCounter(value, 2500);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-lime mb-3">
        {count}
        <span className="text-lime/70">{suffix}</span>
      </div>
      <div className="text-white font-heading font-medium text-lg mb-2">{label}</div>
      <div className="text-white/40 text-sm max-w-[200px] mx-auto leading-relaxed">
        {description}
      </div>
    </motion.div>
  );
};

export const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      {/* Dark forest background */}
      <div className="absolute inset-0 bg-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,243,107,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(49,77,56,0.4)_0%,transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-medium text-muted-green uppercase tracking-widest mb-4">
            Our Impact
          </span>
          <h2 className="font-heading font-bold text-display text-white text-balance">
            Numbers that nourish.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {impactMetrics.map((metric, index) => (
            <AnimatedMetric
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              description={metric.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
