import React from 'react';
import { Brain, Palette, Mail, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'UX Design': [
      { name: 'Design Process', href: '#ux-processes' },
      { name: 'UX Principles', href: '#principles' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Tools & Templates', href: '#tools' },
    ],
    'AI & Technology': [
      { name: 'AI in UX', href: '#ai-ux' },
      { name: 'Automation Tools', href: '#tools' },
      { name: 'Challenges', href: '#challenges' },
      { name: 'Best Practices', href: '#challenges' },
    ],
    'SEO & Performance': [
      { name: 'UX & SEO', href: '#ux-seo' },
      { name: 'User Engagement', href: '#ux-seo' },
      { name: 'Conversion Optimization', href: '#case-studies' },
      { name: 'Analytics', href: '#tools' },
    ],
    'Resources': [
      { name: 'Templates Library', href: '#tools' },
      { name: 'Tool Reviews', href: '#tools' },
      { name: 'Success Stories', href: '#case-studies' },
      { name: 'Implementation Guide', href: '#challenges' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Brain className="h-8 w-8 text-indigo-400" />
                <Palette className="h-4 w-4 text-purple-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Websity
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your comprehensive resource for mastering UX design in the AI era. 
              Discover processes, tools, and strategies that create exceptional digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with UX Trends</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI-powered UX design, new tools, and industry best practices 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Websity. All rights reserved. Built with passion for great UX design.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
