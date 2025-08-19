import React from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            The Future of UX Design with AI
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Master{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              UX Design
            </span>
            <br />
            in the AI Era
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover comprehensive UX design processes, AI-powered tools, and proven methodologies 
            that create exceptional digital experiences and drive business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center">
              Explore UX Processes
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">User-Centered</h3>
              <p className="text-gray-600">Design processes that prioritize user needs and behaviors</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Leverage artificial intelligence to enhance design workflows</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600">UX practices that improve search engine rankings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
