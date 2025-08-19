import React from 'react';
import { Users, Grid, Layers, MessageSquare, Zap, Accessibility } from 'lucide-react';

export const UXPrinciples: React.FC = () => {
  const principles = [
    {
      icon: Users,
      title: 'User-Centered Design',
      description: 'Every design decision should be made with the user\'s needs, goals, and context in mind. Conduct user research, create personas, and validate designs through testing.',
      keyPoints: ['User research first', 'Persona-driven decisions', 'Continuous validation'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Grid,
      title: 'Consistency',
      description: 'Maintain consistent patterns, terminology, and visual elements throughout the interface to reduce cognitive load and create predictable experiences.',
      keyPoints: ['Design systems', 'Pattern libraries', 'Style guides'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Layers,
      title: 'Hierarchy & Context',
      description: 'Organize information and interface elements in a clear hierarchy that guides users through tasks and helps them understand relationships between elements.',
      keyPoints: ['Visual hierarchy', 'Information architecture', 'Clear navigation'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MessageSquare,
      title: 'User Control & Feedback',
      description: 'Give users control over their experience and provide clear feedback for all actions. Users should always know where they are and what\'s happening.',
      keyPoints: ['Clear feedback', 'Undo/redo options', 'Status indicators'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Efficiency & Learnability',
      description: 'Design interfaces that are easy to learn for new users while providing efficient shortcuts for experienced users. Minimize cognitive load and steps to completion.',
      keyPoints: ['Progressive disclosure', 'Keyboard shortcuts', 'Smart defaults'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      description: 'Ensure your design is usable by people with diverse abilities and disabilities. Follow WCAG guidelines and design for inclusive experiences.',
      keyPoints: ['WCAG compliance', 'Screen reader support', 'Color contrast'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
            <Layers className="h-4 w-4 mr-2" />
            Core Principles
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Essential{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              UX Principles
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these fundamental principles to create exceptional user experiences that are intuitive, 
            accessible, and delightful for all users.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${principle.color} group-hover:scale-110 transition-transform duration-300`}>
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Implementation Points:</h4>
                {principle.keyPoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${principle.color}`}></div>
                    <span className="text-sm text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Principle Interconnections */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How These Principles Work Together
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles are interconnected and reinforce each other to create cohesive, exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 mb-4">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Foundation</h4>
                <p className="text-sm text-gray-600">User-centered design forms the foundation that guides all other principles</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-4">
                <Grid className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Structure</h4>
                <p className="text-sm text-gray-600">Consistency and hierarchy provide the structural framework for usable interfaces</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-4">
                <Accessibility className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Inclusivity</h4>
                <p className="text-sm text-gray-600">Accessibility and efficiency ensure the design works for everyone</p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Best Practices for Implementation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Start with user research and personas before any design work</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Create and maintain a comprehensive design system</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-pink-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Test early and often with real users</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Prioritize accessibility from the beginning, not as an afterthought</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Provide clear feedback for all user actions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-600 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Iterate based on user feedback and analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
