import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', category: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,243,107,0.05)_0%,transparent_50%)]" />

      <div ref={ref} className="relative z-10 section-y">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block text-sm font-medium text-lime/70 uppercase tracking-widest mb-4">
                  Contact
                </span>
                <h2 className="font-heading font-bold text-display text-white mb-6 text-balance">
                  Let's build something meaningful.
                </h2>
                <p className="text-lg text-white/50 leading-relaxed mb-12">
                  We partner with governments, institutions, and enterprises committed to nutrition security and sustainable food systems.
                </p>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">Mathura Plant (Holding Company)</h4>
                    <p className="text-white text-base">
                      Suruchi Foods Facility
                      <br />
                      Near Mathura, Uttar Pradesh, India
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">Rajasthan Plant</h4>
                    <p className="text-white text-base">
                      Upcoming Sourcing Unit
                      <br />
                      Rajasthan, India (Under Progress)
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">Email & Phone</h4>
                    <a
                      href="mailto:uvfoods2021@gmail.com"
                      className="text-lime hover:text-lime-light transition-colors text-base group inline-flex items-center gap-2 mb-1 block"
                    >
                      uvfoods2021@gmail.com
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-white text-base">
                      Landline: +91-011-4056-5460
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">Registered Office</h4>
                    <p className="text-white/70 text-base">
                      704, 7th Floor, Deepali Building,
                      <br />
                      92 Nehru Place, South Delhi,
                      <br />
                      New Delhi – 110019
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-cream rounded-3xl p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-forest mb-2">Message Sent</h3>
                    <p className="text-muted text-sm">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-forest mb-2">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 text-dark text-sm focus:border-olive focus:ring-2 focus:ring-olive/10 outline-none transition-all placeholder:text-muted/40"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-forest mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 text-dark text-sm focus:border-olive focus:ring-2 focus:ring-olive/10 outline-none transition-all placeholder:text-muted/40"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-category" className="block text-sm font-medium text-forest mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="contact-category"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 text-dark text-sm focus:border-olive focus:ring-2 focus:ring-olive/10 outline-none transition-all"
                      >
                        <option value="">Select category</option>
                        <option value="institutional">Institutional Partnership</option>
                        <option value="tender">Government Tender</option>
                        <option value="vendor">Vendor / Supplier</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-forest mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 text-dark text-sm focus:border-olive focus:ring-2 focus:ring-olive/10 outline-none transition-all resize-none placeholder:text-muted/40"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-forest text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-forest-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
