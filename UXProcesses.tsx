import React from 'react';
import { Search, Users, Layout, TestTube, CheckCircle, Target } from 'lucide-react';

export const UXProcesses: React.FC = () => {
  const processes = [
    {
      icon: Target,
      title: 'Product Definition',
      description: 'Define clear objectives, user goals, and business requirements to establish a solid foundation for the design process.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Search,
      title: 'Research & Analysis',
      description: 'Conduct user research, market analysis, and competitive studies to understand user needs and market opportunities.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: 'User Analysis',
      description: 'Create user personas, journey maps, and behavioral patterns to deeply understand your target audience.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Layout,
      title: 'Information Architecture',
      description: 'Structure content and navigation systems to create intuitive and logical user flows throughout the experience.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: TestTube,
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize and test design concepts.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: CheckCircle,
      title: 'Testing & Validation',
      description: 'Conduct usability testing, A/B testing, and user feedback sessions to validate and refine designs.',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  return (
    <section id="ux-processes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete UX Design{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive UX process covers the full workflow from product definition to validation, 
            emphasizing user-centered design, usability, accessibility, and engaging digital experiences.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${process.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <process.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>

              {/* Step Number */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-indigo-600">
                  Step {index + 1}
                </span>
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Follow This Process?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This systematic approach ensures every design decision is backed by research and user insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">User-Centered</h4>
                <p className="text-sm text-gray-600">Every decision prioritizes user needs and behaviors</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Data-Driven</h4>
                <p className="text-sm text-gray-600">Decisions backed by research and testing insights</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Iterative</h4>
                <p className="text-sm text-gray-600">Continuous improvement through testing and feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
