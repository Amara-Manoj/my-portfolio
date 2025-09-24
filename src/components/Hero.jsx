import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../assets/Manoj.jpeg';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center container mx-auto px-6 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-x-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:flex-1 max-w-2xl text-center md:text-left mb-12 md:mb-0"
        >
          <p className="text-accent font-mono text-lg">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightest-slate mt-2 whitespace-nowrap">
            Amara Manoj NagaSai Venkat
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate mt-2">
            I design and build reliable, scalable systems that power high-traffic applications.
          </h2>
          <p className="mt-6 text-slate mx-auto md:mx-0">
            I’m a passionate software engineer with 2 years of experience specializing in backend development and site reliability engineering. My focus is on creating robust payment and telecom platforms that perform seamlessly under pressure. I’m dedicated to balancing feature innovation with performance optimization, observability, and incident response to ensure smooth and scalable operations.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start space-x-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-accent text-navy font-bold py-3 px-6 rounded hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </Link>
            <a
              href="https://linkedin.com/in/amara-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-accent transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent group">
            <img
              src={profilePic}
              alt="Amara Manoj"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;