"use client"
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  MapPin 
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-300 mb-4">Ruturaj Kadam</h1>
          <p className="text-xl text-gray-400 mb-6">
            A Versatile Web Developer.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-teal-300 mb-4">About Me</h2>
          <div className="text-gray-200 space-y-4">
            <p>
              Hello World!!
              Ruturaj This Side
              I am final year engineering student and a skilled web developer.
              I Enjoy writing blogs and sharing knowledge hope it helps.
            </p>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-teal-300 mb-6">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-200">
                <Mail className="mr-4 text-teal-400" size={24} />
                <a 
                  href="mailto:your.email@example.com" 
                  className="hover:text-teal-300 transition"
                >
                  kruturaj96@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-200">
                <MapPin className="mr-4 text-teal-400" size={24} />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Globe className="mr-4 text-teal-400" size={24} />
                <a 
                  href="https://ruturajkadam.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition"
                >
                  Personal Website
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-teal-300 mb-6">Connect</h2>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/rutu1717" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-700 text-gray-200 py-3 rounded-lg hover:bg-gray-600 transition"
              >
                <Github className="mr-2" size={24} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ruturaj-kadam-47a4a5229/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-700 text-gray-200 py-3 rounded-lg hover:bg-gray-600 transition"
              >
                <Linkedin className="mr-2" size={24} />
                LinkedIn
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;