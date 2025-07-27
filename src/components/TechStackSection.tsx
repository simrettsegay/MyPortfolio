import React from 'react';
import { Palette, Code, GitBranch, Layers } from 'lucide-react';

const TechStackSection = () => {
  const techCategories = [
    {
      title: 'Design Tools',
      icon: Palette,
      color: 'from-pink-500 to-purple-600',
      tools: [
        { name: 'Figma', level: 95, icon: '🎨' },
        { name: 'Adobe XD', level: 90, icon: '✨' },
        { name: 'Adobe Creative Suite', level: 85, icon: '🎭' },
        { name: 'Framer', level: 80, icon: '⚡' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      tools: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Tailwind CSS', level: 95, icon: '🎯' },
        { name: 'Next.js', level: 85, icon: '🚀' },
      ]
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-600',
      tools: [
        { name: 'Git & GitHub', level: 90, icon: '🌿' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Vite', level: 85, icon: '⚡' },
        { name: 'npm/yarn', level: 88, icon: '📦' },
      ]
    },
    {
      title: 'Additional Skills',
      icon: Layers,
      color: 'from-orange-500 to-red-600',
      tools: [
        { name: 'Responsive Design', level: 95, icon: '📱' },
        { name: 'Animation (Framer Motion)', level: 80, icon: '🎬' },
        { name: 'User Research', level: 85, icon: '🔍' },
        { name: 'Prototyping', level: 90, icon: '🎪' },
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life, from initial concept to final implementation.
          </p>
        </div>

        {/* Bento Grid for Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold">{category.title}</h3>
                </div>

                {/* Tools List */}
                <div className="space-y-4">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="group/tool">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{tool.icon}</span>
                          <span className="font-medium text-white group-hover/tool:text-neon transition-colors duration-200">
                            {tool.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm font-medium">{tool.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-navy/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Indicator */}
                <div className="mt-4 pt-4 border-t border-glass-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-400 text-sm text-center">
                    Tools I'm passionate about using daily
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Section */}
        <div className="mt-8 backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6">
  <div className="text-center">
    <h3 className="text-xl font-montserrat font-semibold mb-3 text-gold-500">Currently Learning</h3>
    <div className="flex flex-wrap justify-center gap-3">
      {['Three.js', 'WebGL', 'Blender', 'Swift UI', 'Flutter', '.Net'].map((tech) => (
        <span
          key={tech}
          className="px-4 py-2 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 border border-yellow-400/40 text-yellow-500 rounded-full text-sm font-medium hover:bg-yellow-400/30 transition-all duration-200"
        >
          {tech}
        </span>
      ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;