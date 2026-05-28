import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { sustainabilityPageContent } from '../data/content';
import { Heart, Sprout, Shield, Accessibility, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  'Responsible Sourcing': Sprout,
  'Community Nutrition': Heart,
  'Food Accessibility': Accessibility,
  'Sustainable Production': Globe,
  'Future-Focused Infrastructure': Shield,
};

export const SustainabilityPage = () => {
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
        title="Sustainability & Environmental Stewardship"
        description="Discover UV Foods dedication to green operations, ethical raw-materials sourcing, regional food safety, and community health ecosystems built for future generations."
        path="/sustainability"
        image="/images/sustainability.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-forest overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src="/images/sustainability.png"
            alt="Cinematic environmental sustainable farming and food ecosystems"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
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
            Ecosystem Thinking
          </motion.span>
          <motion.h1
            className="font-heading font-bold text-display-xl text-white mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {sustainabilityPageContent.headline}
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sustainabilityPageContent.intro}
          </motion.p>
        </div>
      </section>

      {/* Expanded Sustainability Pillars Cards */}
      <section className="py-24 sm:py-32 bg-cream relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,243,107,0.06),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-semibold text-muted-green uppercase tracking-widest block mb-4">
              Our Commitments
            </span>
            <h2 className="font-heading font-bold text-display text-forest">
              Five Pillars of Long-Term Stability
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              We design our business practices to actively repair ecological imbalances, strengthen local farmers, and nourish local families in a self-sustaining loop.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sustainabilityPageContent.pillars.map((pillar) => {
              const Icon = iconMap[pillar.title] || Sprout;
              return (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  className="bg-white rounded-[28px] p-8 sm:p-10 border border-forest/5 hover:border-lime/30 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center mb-8 group-hover:bg-lime/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-forest" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest mb-4">{pillar.title}</h3>
                    <p className="text-muted leading-relaxed text-sm mb-6">{pillar.description}</p>
                  </div>
                  <div className="w-full h-1 bg-forest/5 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-lime group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sustainable Agriculture Deep-Dive */}
      <section className="py-24 bg-forest text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-semibold text-lime uppercase tracking-widest block">
                Ethical Sourcing Model
              </span>
              <h2 className="font-heading font-bold text-display text-white">
                Supporting the Soil and the Farmer
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                By purchasing agricultural inputs directly from regional cooperative grower aggregates, we secure reliable pricing for farming families and maintain strict raw materials trace protocols.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  '100% direct agri-cooperative partnerships in our core region',
                  'Fair-price crop acquisition agreements that protect local growers',
                  'Farming field education support for organic crop optimization',
                  'Water-efficient, zero-waste processing protocols',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-lime mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-[28px] overflow-hidden border border-white/10 group relative">
                <img
                  src="/images/community.png"
                  alt="Rural community and organic agricultural practices"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="font-heading font-semibold text-white text-lg">Social and Environmental Stewardship</h4>
                  <p className="text-xs text-white/50">Delivering systemic welfare through economic empowerments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-bold text-display text-forest mb-6">
            Join Our Sustainable Nutrition Program
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Let's integrate our sustainable processing capacity and organic agricultural sourcing model into your CSR goals or regional food programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-lime text-forest rounded-full font-semibold text-sm hover:bg-lime-dark transition-all duration-300 hover:shadow-xl hover:shadow-lime/20"
            >
              Collaborate With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="group flex items-center gap-2 px-8 py-4 bg-cream text-forest rounded-full font-semibold text-sm border border-forest/5 hover:bg-forest/5 transition-all duration-300"
            >
              Read About Our Legacy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
