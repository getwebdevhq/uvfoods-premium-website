import { Link } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-forest border-t border-white/5">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-lime font-heading font-bold text-sm">UV</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-base">UV Foods</h3>
                <p className="text-white/30 text-xs">Private Limited</p>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Modern food manufacturing and nutrition solutions for institutional impact across India.
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
              <p>Nutritional Manufacturing</p>
              <p>Food Fortification</p>
              <p>Institutional Supply</p>
              <p>Quality Assurance</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>Chhata, Mathura, UP</p>
              <a href="mailto:info@uvfoods.in" className="block hover:text-lime transition-colors">
                info@uvfoods.in
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
