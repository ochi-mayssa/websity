import React, { useState } from 'react';
import { Wrench, FileText, Users, Map, Eye, BarChart3, Palette, Brain } from 'lucide-react';

export const ToolsTemplates: React.FC = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const templates = [
    {
      icon: Map,
      title: 'User Journey Mapping',
      description: 'Visualize the complete user experience across all touchpoints and identify pain points and opportunities.',
      category: 'Research',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'User Personas',
      description: 'Create detailed user personas based on research data to guide design decisions and feature prioritization.',
      category: 'Research',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Eye,
      title: 'Empathy Maps',
      description: 'Understand what users think, feel, see, and do to build deeper empathy and user understanding.',
      category: 'Research',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Wireframe Templates',
      description: 'Start with proven wireframe layouts for common interface patterns and page types.',
      category: 'Design',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart3,
      title: 'Competitive Analysis',
      description: 'Systematically analyze competitors to identify opportunities and industry best practices.',
      category: 'Research',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'UX Case Studies',
      description: 'Document and present your design process with professional case study templates.',
      category: 'Documentation',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const tools = [
    {
      name: 'Miro',
      category: 'Collaboration',
      description: 'Digital whiteboard for collaborative design thinking and workshops',
      features: ['Real-time collaboration', 'Templates library', 'Integration tools'],
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      name: 'Piktochart',
      category: 'Visualization',
      description: 'Create infographics and visual presentations for UX research',
      features: ['Drag-and-drop editor', 'Data visualization', 'Professional templates'],
      color: 'bg-green-100 text-green-800',
    },
    {
      name: 'Uizard',
      category: 'AI Design',
      description: 'AI-powered design tool for rapid prototyping and wireframing',
      features: ['AI-generated designs', 'Hand-drawn to digital', 'Collaborative editing'],
      color: 'bg-purple-100 text-purple-800',
    },
    {
      name: 'MonkeyLearn',
      category: 'Analytics',
      description: 'Text analysis and sentiment analysis for user feedback',
      features: ['Sentiment analysis', 'Text classification', 'API integration'],
      color: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'Visily',
      category: 'Prototyping',
      description: 'AI-powered wireframing and prototyping tool',
      features: ['Smart templates', 'Team collaboration', 'Design handoff'],
      color: 'bg-pink-100 text-pink-800',
    },
    {
      name: 'UseGalileo',
      category: 'AI Design',
      description: 'AI copilot for interface design and ideation',
      features: ['AI design suggestions', 'Natural language input', 'Design variations'],
      color: 'bg-indigo-100 text-indigo-800',
    },
    {
      name: 'Attention Insight',
      category: 'Testing',
      description: 'AI-powered attention heatmaps and visual hierarchy analysis',
      features: ['Attention prediction', 'Visual hierarchy', 'A/B testing'],
      color: 'bg-red-100 text-red-800',
    },
    {
      name: 'Adobe Sensei',
      category: 'AI Creative',
      description: 'AI and machine learning framework for creative applications',
      features: ['Auto-tagging', 'Content-aware fill', 'Smart cropping'],
      color: 'bg-orange-100 text-orange-800',
    },
  ];

  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
            <Wrench className="h-4 w-4 mr-2" />
            Tools & Resources
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            UX Design{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Tools & Templates
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your UX design process with proven templates and cutting-edge tools that streamline 
            research, design, and collaboration workflows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === 'templates'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Templates
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === 'tools'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Wrench className="h-4 w-4 inline mr-2" />
              Tools
            </button>
          </div>
        </div>

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${template.color} group-hover:scale-110 transition-transform duration-300`}>
                    <template.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                    {template.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {template.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {template.description}
                </p>

                {/* Action */}
                <div className="mt-6">
                  <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200">
                    Download Template →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${tool.color}`}>
                      {tool.category}
                    </span>
                  </div>
                  <div className="bg-orange-100 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-5 w-5 text-orange-600" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Streamline Your UX Process?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Access our complete library of UX templates and discover the latest AI-powered tools 
            to accelerate your design workflow and create better user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Get All Templates
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200">
              Explore Tools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
