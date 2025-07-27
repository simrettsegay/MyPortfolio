import React from 'react';
import { Download, MapPin, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechFlow Solutions',
      location: 'Addis Ababa',
      duration: '2025 - Present',
      description: 'Leading frontend development for enterprise SaaS applications. Implementing design systems and mentoring junior developers.',
      achievements: [
        'Increased application performance by 40% through code optimization',
        'Led the migration to TypeScript across 5 major projects',
        'Designed and implemented reusable component library'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      type: 'work'
    },
    {
      title: 'UI/UX Designer & Frontend Developer',
      company: 'NovaLabs',
      location: 'Remote',
      duration: '2024 - 2025',
      description: 'Full-stack design and development role creating digital experiences for diverse clients from startups to Fortune 500 companies.',
      achievements: [
        'Designed and developed 15+ client websites and applications',
        'Improved user engagement by 60% through UX research and iteration',
        'Established design system standards for the agency'
      ],
      technologies: ['Figma', 'React', 'JavaScript', 'CSS/SCSS'],
      type: 'work'
    },
    {
      title: 'Bachelor of Computer Science and Engineering',
      company: 'Mekelle University ,MIT ',
      location: 'Ethiopia, Mekelle',
      duration: '2018 - 2025',
      description: 'Focused on Human-Computer Interaction and Software Engineering. Graduated Magna Cum Laude with a 3.8 GPA.',
      achievements: [
        'President of the UI/UX Design Club',
        'Winner of 2021 Hackathon for Best Design Implementation',
        'Teaching Assistant for Web Development course'
      ],
      technologies: ['Python', 'Java', 'JavaScript', 'Database Design'],
      type: 'education'
    },
    {
      title: 'UIUx  Intern',
      company: 'Vite Tcechnologies Plc',
      location: 'Ethiopia, Mekelle',
      duration: 'November 2024 -March 2023',
      description: 'Contributed to multiple early-stage startup projects, focusing on rapid prototyping and MVP development.',
      achievements: [
        'Built responsive landing pages for 8 startup companies',
        'Implemented user authentication and dashboard interfaces',
        'Collaborated with designers to ensure pixel-perfect implementations'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Figma'],
      type: 'work'
    }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Simret_Tsegay_Resume.pdf'; 
    link.download = 'Simret_Tsegay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            My journey through education and professional experience, building expertise in design and development.
          </p>

          {/* Download Resume Button */}
          <button
            onClick={downloadResume}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
            <div className="absolute inset-0 bg-gradient-to-r from-neon to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-purple-500 to-neon"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-neon rounded-full border-4 border-navy z-10">
                  <div className="absolute inset-0 bg-neon rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                  }`}
                >
                  <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-montserrat font-semibold text-white group-hover:text-neon transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-neon font-medium">
                          <span>{exp.company}</span>
                          {exp.type === 'work' && <ExternalLink className="w-4 h-4" />}
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'work'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <div className="w-1 h-1 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon/20 text-neon rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
