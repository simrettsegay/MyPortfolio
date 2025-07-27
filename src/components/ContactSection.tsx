import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/simret-tsegay',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/simret-tsegay',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:simrettt3@gmail.com',
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's turn your ideas into beautiful, functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-neon" />
              <h3 className="text-xl font-montserrat font-semibold">Send a Message</h3>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy/50 border border-glass-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy/50 border border-glass-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-navy/50 border border-glass-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full px-6 py-4 bg-gradient-to-r from-neon to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8">
              <h3 className="text-xl font-montserrat font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <div className="w-12 h-12 bg-neon/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400 text-sm">simrettt3@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <div className="w-12 h-12 bg-neon/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Response Time</p>
                    <p className="text-gray-400 text-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8">
              <h3 className="text-xl font-montserrat font-semibold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 rounded-xl border border-glass-border transition-all duration-200 ${social.color} hover:border-white/30`}
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{social.name}</p>
                        <p className="text-gray-400 text-sm">
                          {social.name === 'Email' ? 'simrettt3@gmail.com' : `@simret-tsegay`}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Currently accepting freelance and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;