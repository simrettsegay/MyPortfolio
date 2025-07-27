import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Tewestya ',
      role: 'Product Manager',
      company: 'TechFlow Solutions',
      avatar: '/Gemini_Generated_Image_o966k2o966k2o966.png',
      content: 'Simret\'s ability to bridge design and development is exceptional. She delivered pixel-perfect implementations while suggesting valuable UX improvements that increased our user engagement by 40%.',
      rating: 5
    },
    {
      name: 'Mulgeta',
      role: 'Creative Director',
      company: 'Creative Digital Agency',
      avatar: '/Gemini_Generated_Image_o966k2o966k2o966 (2).png',
      content: 'Working with Simret was a game-changer for our team. Her design systems thinking and technical expertise helped us deliver consistent, high-quality projects for all our clients.',
      rating: 5
    },
    {
      name: 'Yordanos',
      role: 'Startup Founder',
      company: 'StartupLab Incubator',
      avatar: '/Gemini_Generated_Image_o966k2o966k2o966 (1).png',
      content: 'Simret transformed our vision into a beautiful, functional product. Her attention to detail and user-centered approach resulted in a 60% increase in user satisfaction scores.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            What People Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from colleagues, managers, and clients I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-neon rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-glass-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-white group-hover:text-neon transition-colors duration-200">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-yellow text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold mb-3">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always excited to collaborate on new projects and bring creative visions to life.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-3 bg-gradient-to-r from-neon to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
              <div className="absolute inset-0 bg-gradient-to-r from-neon to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;