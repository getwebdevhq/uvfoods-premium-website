import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/fresh_farm_hero.png"
          alt="Fresh agricultural farm landscape at sunrise"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/45 to-forest/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-screen py-32">
          {/* Left - Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-white/80 text-sm font-medium">Group Legacy Since 1986</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-heading font-bold text-display-xl text-white mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Committed to Quality.
              <br className="hidden sm:block" />
              Driven by <span className="gradient-text">Innovation.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed text-balance"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              UV Foods Private Limited sources, processes, and supplies high-quality food grains and agricultural products to India's leading government institutions. Trusted for quality, compliance, and consistent delivery.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                to="/capabilities"
                className="group flex items-center gap-2 px-7 py-3.5 bg-lime text-forest rounded-full font-semibold text-sm hover:bg-lime-dark transition-all duration-300 hover:shadow-xl hover:shadow-lime/20"
              >
                Explore Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/infrastructure"
                className="group flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Infrastructure
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right - Floating Glass Stats Card */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="glass rounded-3xl p-8 animate-float">
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-6">
                Impact Overview
              </h3>
              <div className="space-y-6">
                {[
                  { value: '40+ Yrs', label: 'Group Legacy' },
                  { value: '600+ MT', label: 'Daily Capacity' },
                  { value: 'NCCF', label: 'Active Partner' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-3xl font-heading font-bold text-lime">{stat.value}</span>
                    <span className="text-white/50 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-scroll-hint" />
      </motion.button>
    </section>
  );
};
