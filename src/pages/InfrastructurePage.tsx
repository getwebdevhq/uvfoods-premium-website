import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { infrastructurePageContent, certifications } from '../data/content';
import { Factory, Award, ArrowRight, Activity, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InfrastructurePage = () => {
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

  const getLineIcon = (category: string) => {
    if (category.includes('Rajasthan')) return Cpu;
    return Factory;
  };

  return (
    <PageTransition>
      <SEOHead
        title="Our Infrastructure & Facility"
        description="Sourcing and processing scale across Mathura and Rajasthan. Leveraging over 600 MT daily capacity of holding company Suruchi Foods with FSSAI state & central compliance."
        path="/infrastructure"
        image="/images/date_palms.png"
      />

      {/* Visual Hero Showcase */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/date_palms.png"
            alt="UV Foods date palm agricultural orchard sourcing scale"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/40 to-forest/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white py-32">
          <motion.span
            className="inline-block text-sm font-semibold text-lime uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mathura & Rajasthan Facilities
          </motion.span>
          <motion.h1
            className="font-heading font-bold text-display-xl text-white mb-8 text-balance max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {infrastructurePageContent.headline}
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {infrastructurePageContent.intro}
          </motion.p>
        </div>
      </section>

      {/* Production Capacities / Metrics Dashboard */}
      <section className="py-24 sm:py-32 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(199,243,107,0.05),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-sm font-semibold text-muted-green uppercase tracking-widest block mb-4">
              Capacity Dashboard
            </span>
            <h2 className="font-heading font-bold text-display text-forest text-balance">
              600+ MT Combined Daily Capacity
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed text-balance">
              By leveraging the established facility of our holding company, Suruchi Foods, in Mathura, and establishing our own processing unit in Rajasthan, we secure incredible scale.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {infrastructurePageContent.productionLines.map((line) => {
              const Icon = getLineIcon(line.category);
              return (
                <motion.div
                  key={line.category}
                  variants={itemVariants}
                  className="bg-white rounded-[28px] p-8 sm:p-10 border border-forest/5 hover:border-lime/30 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center mb-8 group-hover:bg-lime/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-forest" />
                    </div>
                    <span className="text-xs text-muted-green uppercase tracking-widest font-semibold block mb-2">Production Line</span>
                    <h3 className="font-heading font-bold text-2xl text-forest mb-4">{line.category}</h3>
                    <ul className="space-y-3 mb-8">
                      {line.products.map((p) => (
                        <li key={p} className="flex gap-2.5 items-center text-muted">
                          <CheckCircle className="w-4 h-4 text-muted-green/70 flex-shrink-0" />
                          <span className="text-sm leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-forest/5 pt-6 flex justify-between items-baseline">
                    <span className="text-sm text-muted">Active Capacity</span>
                    <span className="text-3xl font-heading font-bold text-forest group-hover:text-olive transition-colors duration-300">{line.capacity}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quality Process Timeline */}
      <section className="py-24 bg-forest text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-sm font-semibold text-lime uppercase tracking-widest block">
                Quality Assurance
              </span>
              <h2 className="font-heading font-bold text-display text-white">
                Pharmaceutical Grade Quality System
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We enforce a multi-point lab-validated testing hierarchy to guarantee batch purity, macro/micro-nutrient load reliability, and shelf-life safety.
              </p>
              <div className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-5">
                <Activity className="w-10 h-10 text-lime flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold">Real-Time Audits</h4>
                  <p className="text-xs text-white/50">Every batch tracked with digital batch records</p>
                </div>
              </div>
            </div>

            {/* Right Timeline */}
            <div className="lg:col-span-7 space-y-12 relative border-l border-white/10 pl-8 ml-4 sm:ml-6 py-4">
              {infrastructurePageContent.qualityProcess.map((proc, index) => (
                <div key={proc.step} className="relative space-y-3">
                  {/* Timeline dot */}
                  <div className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-forest border-2 border-lime flex items-center justify-center text-xs font-bold text-lime shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">{proc.step}</h3>
                  <p className="text-white/60 text-base leading-relaxed">{proc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Compliance Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-muted-green uppercase tracking-widest block mb-4">
              Compliance
            </span>
            <h2 className="font-heading font-bold text-display text-forest">
              Certified Food Systems
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              Fully compliant with national regulatory bodies and globally acknowledged food safety specifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-cream rounded-[20px] p-6 border border-forest/5 hover:border-lime/30 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center mb-5 group-hover:bg-lime/20 transition-colors duration-300">
                  <Award className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-forest mb-1.5">{cert.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{cert.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour CTA */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-bold text-display text-forest mb-6">
            Partner with India's Premier Nutrition Manufacturer
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Let's discuss how our massive capacities, automated clean systems, and rigorous compliance guidelines can power your state, NGO, or corporate food program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-lime text-forest rounded-full font-semibold text-sm hover:bg-lime-dark transition-all duration-300 hover:shadow-xl hover:shadow-lime/20"
            >
              Consult With Our Experts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/sustainability"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-forest rounded-full font-semibold text-sm border border-forest/5 hover:bg-forest/5 transition-all duration-300"
            >
              See Sustainability Values
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
