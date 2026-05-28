import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { aboutPageContent } from '../data/content';
import { ArrowRight, Star, Heart, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <PageTransition>
      <SEOHead
        title="Our Story & Mission"
        description="Learn about UV Foods, our 35-year legacy of food manufacturing, and our mission to fight malnutrition through institutional scale and sustainable agriculture."
        path="/about"
        image="/images/community.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-forest overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src="/images/community.png"
            alt="UV Foods community outreach and legacy"
            className="w-full h-full object-cover opacity-25 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/80 to-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block text-sm font-semibold text-lime uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Since 1986
          </motion.span>
          <motion.h1
            className="font-heading font-bold text-display-xl text-white mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {aboutPageContent.headline}
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {aboutPageContent.intro}
          </motion.p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-12 gap-16 items-start"
          >
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <motion.span className="text-sm font-semibold text-muted-green uppercase tracking-widest block" variants={itemVariants}>
                Our Purpose
              </motion.span>
              <motion.h2 className="font-heading font-bold text-display text-forest text-balance" variants={itemVariants}>
                Empowering communities, strengthening welfare.
              </motion.h2>
              <motion.p className="text-lg text-muted leading-relaxed" variants={itemVariants}>
                At UV Foods, we believe that nutrition is the foundational infrastructure for a nation's growth. 
                Our programs are specifically designed to address systemic nutritional gaps at institutional scales.
              </motion.p>
              <motion.p className="text-base text-muted/80 leading-relaxed" variants={itemVariants}>
                By combining state-of-the-art manufacturing automation, strict FSSAI compliance, and direct 
                agricultural sourcing models, we deliver nutrient-dense, high-quality foods that nourish millions 
                of children and families daily.
              </motion.p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 space-y-8">
              {aboutPageContent.sections.map((sec, index) => {
                const Icon = index === 0 ? Star : index === 1 ? Heart : Award;
                return (
                  <motion.div
                    key={sec.title}
                    variants={itemVariants}
                    className="bg-white p-8 sm:p-10 rounded-[28px] border border-forest/5 hover:border-lime/30 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5 relative overflow-hidden group"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center group-hover:bg-lime/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-forest" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-xl text-forest mb-3">{sec.title}</h3>
                        <p className="text-muted leading-relaxed">{sec.body}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Stats & Highlight */}
      <section className="py-24 bg-forest text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,243,107,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-lime uppercase tracking-widest block mb-4">
                35+ Year Journey
              </span>
              <h2 className="font-heading font-bold text-display text-white mb-6 text-balance">
                A legacy of quality and trusted impact.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                UV Foods has evolved across three generations from a local manufacturer into a sophisticated partner 
                for regional state welfare programs, fortified product development, and massive scale operations.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {aboutPageContent.stats.map((st) => (
                  <div key={st.label}>
                    <div className="text-4xl font-heading font-bold text-lime mb-2">{st.value}</div>
                    <div className="text-xs text-white/50 leading-snug uppercase tracking-wider">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] overflow-hidden border border-white/10 relative group">
                <img
                  src="/images/manufacturing.png"
                  alt="Precision automated food production line"
                  className="w-full h-[400px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-lime/20 backdrop-blur-md flex items-center justify-center border border-lime/30 text-lime">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white">ISO 22000 & GMP Certified</h4>
                    <p className="text-xs text-white/60">Strict pharmaceutical-grade purity controls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-bold text-display text-forest mb-6">
            Nourishing India's Tomorrow, Today
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            We collaborate with states, corporations, and community developers to design and manufacture nutrition 
            programs that scale seamlessly. Let's build a healthier future together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-lime text-forest rounded-full font-semibold text-sm hover:bg-lime-dark transition-all duration-300 hover:shadow-xl hover:shadow-lime/20"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/capabilities"
              className="group flex items-center gap-2 px-8 py-4 bg-cream text-forest rounded-full font-semibold text-sm border border-forest/5 hover:bg-forest/5 transition-all duration-300"
            >
              Explore Capabilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
