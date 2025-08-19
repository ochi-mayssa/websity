import React, { useState } from 'react';
import { Menu, X, Brain, Palette } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#ux-processes', label: 'UX Processes' },
    { href: '#ai-ux', label: 'AI in UX' },
    { href: '#ux-seo', label: 'UX & SEO' },
    { href: '#principles', label: 'Principles' },
    { href: '#tools', label: 'Tools' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#challenges', label: 'Challenges' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-indigo-600" />
              <Palette className="h-4 w-4 text-purple-500 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Websity
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
