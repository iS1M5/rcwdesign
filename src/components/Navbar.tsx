import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Web Apps', path: '/web-apps' },
    { name: 'AI Integration', path: '/ai-integration' },
    { name: 'Print Design', path: '/print-design' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          RCWD<span className="italic">esign</span><span className="text-brand-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 bg-brand-ink text-brand-bg text-sm font-medium rounded-full hover:bg-brand-ink/90 transition-all"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-brand-bg border-b border-brand-ink/5 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-serif ${
                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full py-4 bg-brand-ink text-brand-bg text-center font-medium rounded-xl"
          >
            Get in touch
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
