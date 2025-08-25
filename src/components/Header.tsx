import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { cn } from '@/lib/utils';

const navigationLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/approach', label: 'Approach (R.A.V.E)' },
  { href: '/industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-black/85 backdrop-blur-md border-b border-gray-800/50',
        isScrolled && 'bg-black/90 shadow-lg'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            >
              <img
                src="/logo.svg"
                alt="Secure-X"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={window.location.pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="/request-proposal"
              className="px-4 py-2 text-sm font-medium text-red-400 border border-red-400 rounded-full transition-all duration-200 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Request Proposal
            </a>
            <a
              href="/talk-to-expert"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg shadow-blue-500/25"
            >
              Talk to Security Expert
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-gray-800/50">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={window.location.pathname === link.href}
                  className="block px-3 py-2 text-base"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 pb-3 space-y-3 border-t border-gray-800/50">
                <a
                  href="/request-proposal"
                  className="block w-full px-4 py-2 text-sm font-medium text-red-400 border border-red-400 rounded-full text-center transition-all duration-200 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={closeMobileMenu}
                >
                  Request Proposal
                </a>
                <a
                  href="/talk-to-expert"
                  className="block w-full px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full text-center transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg shadow-blue-500/25"
                  onClick={closeMobileMenu}
                >
                  Talk to Security Expert
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
