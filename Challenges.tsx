import React from 'react';
import { Shield, Clock, Heart, AlertTriangle, CheckCircle, Users } from 'lucide-react';

export const Challenges: React.FC = () => {
  const challenges = [
    {
      icon: Shield,
      title: 'Data Privacy & Fairness',
      description: 'AI systems must handle user data responsibly and avoid algorithmic bias that could discriminate against certain user groups.',
      considerations: [
        'GDPR and privacy compliance',
        'Transparent data usage policies',
        'Bias detection and mitigation',
        'Inclusive dataset training',
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Clock,
      title: 'Implementation Complexity',
      description: 'Integrating AI into UX workflows requires significant time, resources, and technical expertise to implement effectively.',
      considerations: [
        'Technical infrastructure requirements',
        'Team training and skill development',
        'Integration with existing tools',
        'Ongoing maintenance and updates',
      ],
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Heart,
      title: 'Human Creativity & Empathy',
      description: 'While AI enhances efficiency, human creativity, emotional intelligence, and empathy remain irreplaceable in UX design.',
      considerations: [
        'Maintaining human-centered approach',
        'Balancing automation with creativity',
        'Preserving emotional design elements',
        'Understanding cultural nuances',
      ],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
  ];

  const solutions = [
    {
      title: 'Ethical AI Framework',
      description: 'Establish clear guidelines for responsible AI use in design processes',
      icon: Shield,
    },
    {
      title: 'Gradual Implementation',
      description: 'Start with simple AI tools and gradually expand capabilities',
      icon: CheckCircle,
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Use AI to augment human capabilities, not replace them',
      icon: Users,
    },
  ];

  const bestPractices = [
    'Start with clear ethical guidelines and privacy policies',
    'Invest in team education and AI literacy training',
    'Begin with low-risk, high-impact AI implementations',
    'Maintain human oversight in all AI-driven decisions',
    'Regularly audit AI systems for bias and fairness',
    'Keep user consent and transparency at the forefront',
  ];

  return (
    <section id="challenges" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Challenges & Solutions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Navigating{' '}
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              AI UX Challenges
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the key challenges in implementing AI-powered UX design and practical 
            strategies to address ethical, technical, and human considerations.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`group ${challenge.bgColor} rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${challenge.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <challenge.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {challenge.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {challenge.description}
              </p>

              {/* Considerations */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Considerations:</h4>
                <div className="space-y-2">
                  {challenge.considerations.map((consideration, considerationIndex) => (
                    <div key={considerationIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${challenge.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-600">{consideration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Practical Solutions & Strategies
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven approaches to overcome challenges and implement AI in UX design responsibly and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h4>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Best Practices for AI in UX
              </h3>
              <p className="text-gray-600 mb-8">
                Follow these guidelines to implement AI-powered UX design while maintaining ethical standards 
                and preserving the human element that makes great design truly exceptional.
              </p>
              
              <div className="space-y-4">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-gray-700">{practice}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Human Element</h4>
                <p className="text-gray-600 mb-6">
                  Remember that AI is a tool to enhance human creativity and empathy, not replace it. 
                  The most successful AI-powered UX projects maintain a strong human-centered approach.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">of users prefer human-AI collaborative design</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Future of AI-Powered UX Design
            </h3>
            <p className="text-indigo-100 mb-8 max-w-3xl mx-auto">
              As AI technology continues to evolve, the key to success lies in thoughtful implementation 
              that enhances human capabilities while maintaining ethical standards and user trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-lg font-semibold mb-2">Responsible Innovation</div>
                <div className="text-sm text-indigo-100">Ethical AI development with user privacy at the core</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-lg font-semibold mb-2">Human-AI Partnership</div>
                <div className="text-sm text-indigo-100">Collaborative workflows that amplify human creativity</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-lg font-semibold mb-2">Continuous Learning</div>
                <div className="text-sm text-indigo-100">Adaptive systems that improve through user feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
