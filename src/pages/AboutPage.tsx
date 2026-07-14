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
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
            src="/images/fresh_fruits.png"
            alt="UV Foods premium agricultural produce"
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
            Group Legacy Since 1986
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
                Group Legacy
              </span>
              <h2 className="font-heading font-bold text-display text-white mb-6 text-balance">
                Nearly 4 Decades of Sourcing & Processing Heritage
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Through our holding company, Suruchi Foods, we draw on nearly four decades of expertise. UV Foods operates 
                as a compliant and approved vendor supplying high-grade food grains and products through cooperative channels like NCCF.
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
                  src="/images/fresh_grains.png"
                  alt="Premium food grains processing"
                  className="w-full h-[400px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-lime/20 backdrop-blur-md flex items-center justify-center border border-lime/30 text-lime">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white">FSSAI State & Central Licensed</h4>
                    <p className="text-xs text-white/60">Fully compliant under APEDA, IEC, and MSME</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-semibold text-muted-green uppercase tracking-widest block mb-4">
              Our Leadership
            </span>
            <h2 className="font-heading font-bold text-display text-forest">
              Driven by Experience and Integrity
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              Co-managed by seasoned entrepreneurs and administration experts who guide the company’s vision and strategic execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Himanshu Gupta',
                role: 'Co-Founder, Promoter & Director',
                desc: 'Promoter of Suruchi Foods Private Limited (holding company of UV Foods). Over 15 years of experience spanning real estate development and large-scale food processing.',
              },
              {
                name: 'Pramod Sharma',
                role: 'Co-Founder & Promoter',
                desc: 'Founder and promoter of the UV Group. Over 15 years of experience in corporate restructuring and non-performing asset resolution.',
              },
              {
                name: 'Dhirendra Singh Chauhan',
                role: 'Director',
                desc: 'Retired Brigadier from the Indian Army. Highly skilled in operations management, strategic administration, and large-scale logistics.',
              },
            ].map((leader) => (
              <div
                key={leader.name}
                className="bg-cream rounded-[28px] p-8 border border-forest/5 hover:border-lime/30 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5 flex flex-col justify-between group overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Portrait Placeholder with fresh farm/fruits feel */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-forest/5 border border-forest/5 relative">
                    <img
                      src="/images/corporate_leadership.png"
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-forest">{leader.name}</h3>
                    <p className="text-sm font-semibold text-muted-green mt-1">{leader.role}</p>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-cream text-center">
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
