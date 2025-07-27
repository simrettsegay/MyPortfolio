import React from 'react';
import { User, MapPin, Coffee, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
          About Me
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bio Card - Spans 2 columns on lg screens */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-[#bee9e8]" />
              <h3 className="text-xl font-montserrat font-semibold">Bio</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate UI/UX Designer and Frontend Engineer with a keen eye for detail and a love for creating 
              intuitive digital experiences. I bridge the gap between design and development, ensuring that beautiful 
              designs translate into functional, accessible, and performant applications.
            </p>
            <div className="mt-4 flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-[#bee9e8]" />
              <span className="text-sm">Based in Ethiopia, Addis Ababa</span>
            </div>
          </div>

          {/* Photo/Avatar Card */}
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="aspect-square bg-gradient-to-br from-[#bee9e8]/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#bee9e8] to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                ST
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-montserrat font-semibold mb-1">Simret Tsegay</h3>
              <p className="text-gray-400 text-sm">Always learning, always creating</p>
            </div>
          </div>

          {/* Key Skills Card */}
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-[#bee9e8]" />
              <h3 className="text-xl font-montserrat font-semibold">Key Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'React', 'Tailwind', 'TypeScript', 'Adobe XD', 'Framer'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#bee9e8]/20 text-[#bee9e8] rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Coffee Card - Fun element */}
          <div className="md:col-span-2 lg:col-span-1 backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-[#bee9e8]" />
              <h3 className="text-xl font-montserrat font-semibold">Fun Fact</h3>
            </div>
            <p className="text-gray-300">
              I've consumed over 1,000 cups of coffee while designing and coding. Each cup fuels a new creative solution!
            </p>
          </div>

          {/* Values Card - Spans remaining space */}
          <div className="md:col-span-2 lg:col-span-3 backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <h3 className="text-xl font-montserrat font-semibold mb-4">What I Believe In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#bee9e8]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#bee9e8] font-bold">01</span>
                </div>
                <h4 className="font-semibold mb-1">User-Centered</h4>
                <p className="text-gray-400 text-sm">Every design decision should serve the user's needs and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#bee9e8]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#bee9e8] font-bold">02</span>
                </div>
                <h4 className="font-semibold mb-1">Accessibility</h4>
                <p className="text-gray-400 text-sm">Digital experiences should be inclusive and accessible to everyone.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#bee9e8]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#bee9e8] font-bold">03</span>
                </div>
                <h4 className="font-semibold mb-1">Performance</h4>
                <p className="text-gray-400 text-sm">Beautiful designs must be paired with fast, efficient code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
