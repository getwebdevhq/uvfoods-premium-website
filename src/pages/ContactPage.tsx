import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageTransition } from '../components/PageTransition';
import { Send, CheckCircle2, Phone, Mail, MapPin, Building, Globe } from 'lucide-react';

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Institutional Partnership',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({
      name: '',
      email: '',
      organization: '',
      subject: 'Institutional Partnership',
      message: '',
    });
  };

  return (
    <PageTransition>
      <SEOHead
        title="Contact & Corporate Inquiries"
        description="Get in touch with UV Foods. Connect with our institutional partnership team, schedule a tour of our Chhata manufacturing unit, or visit our corporate office."
        path="/contact"
        image="/images/facility.png"
      />

      {/* Header Banner */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-cream overflow-hidden py-32 border-b border-forest/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,243,107,0.08),transparent_40%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block text-sm font-semibold text-muted-green uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="font-heading font-bold text-display-xl text-forest mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Partner With UV Foods
          </motion.h1>
          <motion.p
            className="text-lg text-muted/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our nutritional food manufacturing capacities and compliant logistics models can support your welfare programs.
          </motion.p>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Form Wrapper */}
            <div className="lg:col-span-7 bg-cream rounded-[28px] p-8 sm:p-12 border border-forest/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-lime" />
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mx-auto text-forest">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-forest">Message Received Securely</h2>
                  <p className="text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to UV Foods. Our institutional partnerships division will evaluate your request and follow up within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-forest text-white rounded-full text-sm font-semibold hover:bg-olive transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-forest">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-forest/10 bg-white focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-sm text-forest"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-forest">Business Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@organization.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-forest/10 bg-white focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-sm text-forest"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-semibold text-forest">Organization / State Agency</label>
                      <input
                        type="text"
                        id="organization"
                        placeholder="e.g. state welfare department, NGO"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-forest/10 bg-white focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-sm text-forest"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-forest">Inquiry Subject</label>
                      <select
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-forest/10 bg-white focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-sm text-forest"
                      >
                        <option value="Institutional Partnership">Institutional Partnership</option>
                        <option value="Contract Manufacturing">Contract Manufacturing</option>
                        <option value="Procurement & Sourcing">Procurement & Sourcing</option>
                        <option value="Facility Tour">Mathura Facility Tour</option>
                        <option value="General Corporate">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-forest">Message Details</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Please outline the capacity, timeline, and product details for your project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-forest/10 bg-white focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-sm text-forest resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-forest text-white hover:bg-olive transition-colors duration-300 rounded-xl font-semibold text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Inquiries...' : 'Send Enterprise Inquiry'}
                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Physical Addresses */}
            <div className="lg:col-span-5 space-y-10 lg:pl-6">
              
              <div className="space-y-4">
                <span className="text-sm font-semibold text-muted-green uppercase tracking-widest block">
                  Connect Directly
                </span>
                <h2 className="font-heading font-bold text-display text-forest">
                  Corporate Offices & Facilities
                </h2>
              </div>

              <div className="space-y-8">
                
                {/* Mathura Unit */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-forest mb-1">Manufacturing Unit</h3>
                    <p className="text-muted leading-relaxed text-sm">
                      National Highway-2, Chhata,<br />
                      Mathura District, Uttar Pradesh — 281401
                    </p>
                    <span className="inline-block mt-2 text-xs font-semibold text-muted-green uppercase tracking-wider bg-forest/5 px-2.5 py-1 rounded-md">
                      280+ MT Daily Production capacity
                    </span>
                  </div>
                </div>

                {/* Corporate Office */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-forest mb-1">Corporate Headquarters</h3>
                    <p className="text-muted leading-relaxed text-sm">
                      UV Foods Private Limited,<br />
                      New Delhi Metro Region, India
                    </p>
                  </div>
                </div>

                {/* Email / Support */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-forest mb-1">Partnership Inquiries</h3>
                    <a
                      href="mailto:info@uvfoods.in"
                      className="text-muted-green hover:text-olive font-semibold text-base block transition-colors duration-300"
                    >
                      info@uvfoods.in
                    </a>
                    <span className="text-xs text-muted block mt-1">General & Tender response team</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
