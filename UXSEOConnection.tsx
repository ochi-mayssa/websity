import React from 'react';
import { Search, TrendingDown, MousePointer, Navigation, Shield, Heart } from 'lucide-react';

export const UXSEOConnection: React.FC = () => {
  const uxSeoFactors = [
    {
      icon: TrendingDown,
      title: 'Lower Bounce Rates',
      description: 'Good UX keeps users engaged longer, reducing bounce rates and signaling quality content to search engines.',
      metric: '↓ 40%',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: MousePointer,
      title: 'Higher Engagement',
      description: 'Intuitive interfaces encourage user interaction, increasing time on site and pages per session.',
      metric: '↑ 65%',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Navigation,
      title: 'Better Navigation',
      description: 'Clear navigation structure helps both users and search engine crawlers understand site hierarchy.',
      metric: '↑ 50%',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  const uxPrinciples = [
    {
      icon: MousePointer,
      title: 'Usable',
      description: 'Easy to use and navigate',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Search,
      title: 'Findable',
      description: 'Discoverable through search',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Credible',
      description: 'Trustworthy and reliable',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Heart,
      title: 'Desirable',
      description: 'Emotionally engaging',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Navigation,
      title: 'Accessible',
      description: 'Inclusive for all users',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingDown,
      title: 'Valuable',
      description: 'Provides meaningful value',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="ux-seo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <Search className="h-4 w-4 mr-2" />
            SEO & UX Synergy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            UX Design Boosts{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              SEO Rankings
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how exceptional user experience directly impacts search engine optimization, 
            creating a powerful synergy that drives both user satisfaction and organic visibility.
          </p>
        </div>

        {/* UX-SEO Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {uxSeoFactors.map((factor, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon and Metric */}
              <div className="flex items-center justify-between mb-6">
                <div className={`inline-flex p-3 rounded-xl ${factor.color} group-hover:scale-110 transition-transform duration-300`}>
                  <factor.icon className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-green-600">{factor.metric}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        {/* UX Principles for SEO */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Essential UX Principles for SEO Success
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Websites must embody these core principles to rank well in search engines and provide exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uxPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon with Gradient */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${principle.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <principle.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {principle.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why UX and SEO Work Together
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">User Signals:</strong> Search engines use user behavior metrics like bounce rate and dwell time as ranking factors.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">Technical Performance:</strong> Good UX requires fast loading times and mobile optimization, which are direct SEO factors.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">Content Structure:</strong> Well-organized, accessible content benefits both users and search engine crawlers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Result</h4>
                <p className="text-gray-600 mb-4">
                  Websites with excellent UX see significant improvements in search rankings and organic traffic.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">+127%</div>
                    <div className="text-sm text-gray-600">Organic Traffic</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">+89%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
