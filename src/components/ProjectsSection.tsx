import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Figma, Smartphone, Monitor } from 'lucide-react';

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const mobileProjects = [
    {
      id: 1,
      title: 'Mesob Equb ',
      description: 'Digital Saving Circles Rooted in Tradition.',
      image: '/MESOB EQUB App Login Screen.png',
      tags: ['Mobile', 'UI Design', 'Figma'],
      demoUrl: '#',
      figmaUrl: '#',
      category: 'mobile'
    },
    {
      id: 2,
      title: 'NovaLabs Website & Product Interfaces',
      description: 'NovaLabs is a digital product agency working with clients across industries to build engaging websites, applications, and tools.',
      image: '/Gemini_Generated_Image_skf0f2skf0f2skf0 (1).png',
      tags: ['Mobile', 'UX Research', 'Prototype'],
      demoUrl: '#',
      figmaUrl: '#',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Banking App Redesign',
      description: 'Complete UX/UI overhaul of a mobile banking application focusing on accessibility and user trust.',
      image: '/Gemini_Generated_Image_qfhi0nqfhi0nqfhi.png',
      tags: ['Mobile', 'Finance', 'Accessibility'],
      demoUrl: '#',
      figmaUrl: '#',
      category: 'mobile'
    }
  ];

  const webProjects = [
    {
      id: 4,
      title: 'Web-Based AI and VR-Supported Trauma Support Platform',
      description: 'A web platform using AI and VR to support trauma recovery. Users connect, share, and heal in immersive spaces. AI offers real-time emotional support.',
      image: '/Gemini_Generated_Image_yyabzcyyabzcyyab.png',
      tags: ['Web', 'React', 'VR', 'AI'],
      demoUrl: '#',
      githubUrl: '#',
      figmaUrl: '#',
      category: 'web'
    },
    {
      id: 5,
      title: 'Infinity Business Ideas',
      description: 'Infinity Business Ideas is a platform designed to inspire, generate, and organize scalable business ideas for entrepreneurs, students, and innovation teams.',
      image: '/Gemini_Generated_Image_vhcli5vhcli5vhcl.png',
      tags: ['Web', 'TypeScript', 'Portfolio'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 6,
      title: 'AI-Powered Health Analysis via Facial Scanning',
      description: 'This project explores how artificial intelligence can be used to analyze a user’s health condition based on facial features, expressions, and micro-signals.',
      image: '/Gemini_Generated_Image_pjdiqppjdiqppjdi copy.png',
      tags: ['Web', 'Dashboard', 'Analytics'],
      demoUrl: '#',
      githubUrl: '#',
      figmaUrl: '#',
      category: 'web'
    }
  ];

  const allProjects = [...mobileProjects, ...webProjects];

  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return isMobile ? mobileProjects : allProjects;
    }
    return allProjects.filter(project => project.category === activeFilter);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isMobile
              ? "Here are my mobile app designs optimized for your device"
              : "A showcase of my web and mobile projects across different platforms"
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 p-1 backdrop-blur-xl bg-glass border border-glass-border rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === 'all'
                  ? 'bg-neon text-white shadow-lg shadow-neon/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === 'mobile'
                  ? 'bg-neon text-white shadow-lg shadow-neon/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === 'web'
                  ? 'bg-neon text-white shadow-lg shadow-neon/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Web
            </button>
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group backdrop-blur-xl bg-glass border border-glass-border rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="p-2 bg-neon text-white rounded-lg hover:bg-neon/80 transition-colors duration-200"
                      title="View Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-200"
                      title="View Design"
                    >
                      <Figma className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2 group-hover:text-neon transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-800/20 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Device Info */}
        {isMobile && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-glass border border-glass-border rounded-lg text-gray-300">
              <Smartphone className="w-4 h-4 text-neon" />
              <span className="text-sm">Showing mobile-optimized projects for your device</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
