import React from 'react';
import { Brain, Zap, Eye, Accessibility, BarChart3, Wand2 } from 'lucide-react';

export const AIInUX: React.FC = () => {
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Personalization',
      description: 'AI analyzes user behavior to create personalized experiences that adapt to individual preferences and usage patterns.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast user behavior and identify potential pain points before they impact the user experience.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wand2,
      title: 'Automated Prototyping',
      description: 'Generate wireframes, mockups, and interactive prototypes automatically from design requirements.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Accessibility,
      title: 'Accessibility Enhancement',
      description: 'Automatically identify and suggest improvements for accessibility compliance and inclusive design.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Eye,
      title: 'Usability Testing',
      description: 'AI-powered testing tools analyze user interactions and provide insights on usability improvements.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Dynamic Interfaces',
      description: 'Create adaptive user interfaces that change based on context, device, and user preferences.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const aiTools = [
    { name: 'Uizard', category: 'Design Generation', description: 'AI-powered design tool for rapid prototyping' },
    { name: 'Fronty', category: 'Code Generation', description: 'Convert designs to code automatically' },
    { name: 'Mockitt AI', category: 'Prototyping', description: 'Intelligent prototyping with AI assistance' },
    { name: 'Hotjar AI', category: 'Analytics', description: 'AI-driven user behavior insights' },
    { name: 'DataRobot', category: 'Predictive Analytics', description: 'Machine learning for UX predictions' },
    { name: 'Adobe Sensei', category: 'Design Intelligence', description: 'AI-powered creative tools' },
  ];

  return (
    <section id="ai-ux" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <Brain className="h-4 w-4 mr-2" />
            Artificial Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Revolutionizes{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              UX Design
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how artificial intelligence enhances every aspect of UX design, from personalization 
            and predictive analytics to automated prototyping and accessibility improvements.
          </p>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon with Gradient */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${capability.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <capability.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* AI Tools Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Popular AI-Powered UX Tools
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These cutting-edge tools help automate tasks, provide insights, and enhance the overall design workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{tool.name}</h4>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Reduces Design Bias</h4>
            <p className="text-gray-600">AI helps identify and eliminate unconscious biases in design decisions</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Speeds Up Workflows</h4>
            <p className="text-gray-600">Automate repetitive tasks and accelerate the design process</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Enables Adaptive UIs</h4>
            <p className="text-gray-600">Create interfaces that adapt dynamically to user needs and context</p>
          </div>
        </div>
      </div>
    </section>
  );
};
