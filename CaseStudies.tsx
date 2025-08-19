import React from 'react';
import { TrendingUp, Users, ShoppingCart, Smartphone, ArrowRight, BarChart3 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Personalization',
      company: 'Global Retail Platform',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered personalized product recommendations and dynamic pricing',
      results: [
        { metric: 'Conversion Rate', value: '+127%', color: 'text-green-600' },
        { metric: 'Cart Abandonment', value: '-45%', color: 'text-blue-600' },
        { metric: 'Revenue per User', value: '+89%', color: 'text-purple-600' },
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking UX',
      company: 'Digital Bank',
      challenge: 'Complex navigation and poor mobile experience',
      solution: 'Simplified user flows, biometric authentication, and AI chatbot support',
      results: [
        { metric: 'User Satisfaction', value: '+156%', color: 'text-blue-600' },
        { metric: 'Task Completion', value: '+78%', color: 'text-green-600' },
        { metric: 'Support Tickets', value: '-62%', color: 'text-orange-600' },
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Users,
      title: 'SaaS Onboarding',
      company: 'Project Management Tool',
      challenge: 'High user churn during onboarding process',
      solution: 'Progressive disclosure, interactive tutorials, and personalized setup flows',
      results: [
        { metric: 'Onboarding Completion', value: '+234%', color: 'text-purple-600' },
        { metric: 'User Retention', value: '+91%', color: 'text-green-600' },
        { metric: 'Time to Value', value: '-67%', color: 'text-blue-600' },
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
  ];

  const insights = [
    {
      title: 'Data-Driven Decisions',
      description: 'All successful projects started with comprehensive user research and data analysis',
      icon: BarChart3,
    },
    {
      title: 'Iterative Approach',
      description: 'Continuous testing and refinement led to the most significant improvements',
      icon: TrendingUp,
    },
    {
      title: 'User-Centric Focus',
      description: 'Solutions that prioritized user needs over business assumptions performed best',
      icon: Users,
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real-World{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI-powered UX projects have transformed businesses, improved user journeys, 
            and delivered measurable ROI across different industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${study.bgColor} rounded-3xl p-8 md:p-12 border border-gray-200 hover:shadow-xl transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${study.color} group-hover:scale-110 transition-transform duration-300`}>
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{study.company}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* Results */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Key Results</h4>
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">{result.metric}</span>
                        <span className={`text-2xl font-bold ${result.color}`}>{result.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500">Results achieved within 6 months</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Key Insights from Successful Projects
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common patterns and strategies that led to exceptional results across all case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <insight.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">{insight.title}</h4>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            The Business Impact of Great UX
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$75</div>
              <div className="text-blue-100">ROI for every $1 invested in UX</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">400%</div>
              <div className="text-blue-100">Average conversion rate increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50%</div>
              <div className="text-blue-100">Reduction in development costs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">90%</div>
              <div className="text-blue-100">Improvement in user satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
