import { Link } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Get in Touch', path: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-forest border-t border-white/5">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="UV Foods Logo"
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 border border-white/10"
              />
              <div>
                <h3 className="font-heading font-semibold text-white text-base">UV Foods</h3>
                <p className="text-white/30 text-xs">Private Limited</p>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Agricultural sourcing, value-added processing, and compliant institutional supply across India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-white/60 text-sm hover:text-lime transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Operations */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Operations
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>Agricultural Sourcing</p>
              <p>Institutional Delivery</p>
              <p>Value-Added Processing</p>
              <p>Regulatory Compliance</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>Mathura, UP & Rajasthan</p>
              <a href="mailto:uvfoods2021@gmail.com" className="block hover:text-lime transition-colors">
                uvfoods2021@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} UV Foods Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/20 text-xs">A Suruchi Foods Enterprise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
