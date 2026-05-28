import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const showLight = isHome && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? 'glass-light shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lime font-heading font-bold text-sm">UV</span>
            </motion.div>
            <div>
              <h1
                className={`font-heading font-semibold text-base transition-colors duration-300 ${
                  showLight ? 'text-white' : 'text-forest'
                }`}
              >
                UV Foods
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    showLight
                      ? isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      : isActive
                        ? 'text-forest bg-forest/5'
                        : 'text-dark/60 hover:text-forest hover:bg-forest/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-lime text-forest rounded-full text-sm font-semibold hover:bg-lime-dark transition-all duration-300 hover:shadow-lg hover:shadow-lime/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${showLight ? 'text-white' : 'text-forest'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${showLight ? 'text-white' : 'text-forest'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 p-4 glass-light rounded-2xl"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                        isActive
                          ? 'text-forest bg-forest/5'
                          : 'text-dark/70 hover:text-forest hover:bg-forest/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="mt-2 px-5 py-3 bg-lime text-forest rounded-xl text-sm font-semibold text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
