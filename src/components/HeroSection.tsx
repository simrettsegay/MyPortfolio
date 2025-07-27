import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes float-sticky {
            0% {
              transform: translateY(0px) rotate(-15deg);
            }
            50% {
              transform: translateY(-10px) rotate(-15deg);
            }
            100% {
              transform: translateY(0px) rotate(-15deg);
            }
          }
          .animate-float-sticky {
            animation: float-sticky 4s ease-in-out infinite;
          }
        `}
      </style>

      <section id="hero" className="min-h-screen flex items-center px-4 pt-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="relative z-10 text-left">
            {/* Glowing background effect */}
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-neon rounded-full opacity-20 blur-3xl animate-glow -z-10"></div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Simret
              </span>
            </h1>

            {/* Subtitle */}
            <div className="text-xl md:text-2xl lg:text-3xl font-montserrat font-medium mb-4 text-gray-300">
              UI/UX Designer & Frontend Engineer
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl font-inter">
              Crafting clean digital experiences for all screen sizes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-neon to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="group px-8 py-4 backdrop-blur-xl bg-glass border border-glass-border text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Let's Talk
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative block order-last lg:order-none">
            <div className="relative w-full h-72 sm:h-96 mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-blue-600/20 rounded-full backdrop-blur-xl border border-glass-border"></div>

              {/* Image container */}
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-neon/10 to-blue-600/10 rounded-full border border-glass-border flex items-center justify-center">
                  <img 
                    src="/simret.png" 
                    alt="Simret" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating sticky notes */}
              <div className="absolute top-[-10%] left-[-10%] transform -translate-x-1/4 -translate-y-1/4">
                <div className="absolute top-[0%] left-[0%] w-40 z-25 transform rotate-[-15deg] hover:scale-105 transition-transform duration-300 animate-float-sticky"> 
                  <img src="/stick1.png" alt="Sticky Note 1" className="w-full h-full object-cover rounded-lg" />
                </div>
                
                <div className="absolute top-[15%] left-[15%] w-25 z-20 transform rotate-5 hover:scale-105 transition-transform duration-300 animate-float-sticky" style={{ animationDelay: '0.2s' }}> 
                  <img src="/stick2.png" alt="Sticky Note 2" className="w-full h-full object-cover rounded-lg" />
                </div>
                
                <div className="absolute top-[30%] left-[0%] w-40 z-20 transform rotate-[-10deg] hover:scale-105 transition-transform duration-300 animate-float-sticky" style={{ animationDelay: '0.4s' }}> 
                  <img src="/stick3.png" alt="Sticky Note 3" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-10 -left-10 w-8 h-8 bg-neon rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-6 h-6 bg-white rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/4 -right-10 w-4 h-4 bg-neon rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

          {/* Mobile floating dots */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-neon rounded-full opacity-60 animate-float lg:hidden"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 bg-white rounded-full opacity-40 animate-float lg:hidden" style={{animationDelay: '1s'}}></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
