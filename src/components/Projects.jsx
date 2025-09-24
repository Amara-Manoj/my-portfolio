import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projectAirtelImage from '../assets/project-airtel.png';

const projectsData = [
  {
    title: "Mobile Payments Platform (NRT 2.0 & ACS Checkout)",
    client: "Airtel (African Opcos)",
    description: "Led API integration for mobile wallet and micro-loan features for a major telecom operator, directly impacting revenue and user experience across multiple African countries.",
    tags: ["JavaScript","REST APIs","Node.js", "Linux","Grafana", "MySQL","Monitoring", "Scalability", "Fintech"],
    achievements: [
      "Drove 55-60% revenue growth with new micro-loan features.",
      "Boosted transaction conversion and reliability with robust error handling.",
      "Ensured platform stability during scalable feature rollouts."
    ],
    image: projectAirtelImage,
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-lg overflow-hidden shadow-2xl group mb-12"
    >
      {/* 1. Background Image */}
      <img
        src={project.image}
        alt={`Background for ${project.title}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* 2. Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-navy/80 md:bg-gradient-to-r from-navy/90 to-navy/40"></div>

      {/* 3. Text Content */}
      <div className="relative flex flex-col justify-center items-start md:items-end w-full p-8 md:p-12 min-h-[400px]">
        <div className="md:w-3/5 text-left md:text-right"> {/* Adjusted width for better fit */}
          <p className="text-accent font-mono text-sm">{project.client}</p>
          <h3 className="text-3xl font-bold text-lightest-slate my-2">
            {project.title}
          </h3>
          <div className="bg-navy/50 p-6 rounded-md shadow-lg my-4 text-left"> {/* Force text left for readability */}
            <p className="text-slate">{project.description}</p>
            
            {/* CHANGE: The achievements list has been added back here */}
            <ul className="mt-4 space-y-2 list-none text-slate">
               {project.achievements.map((item, i) => (
                 <li key={i} className="flex items-start">
                   <span className="text-accent mr-3">▹</span>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm font-mono justify-start md:justify-end">
            {project.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="py-20 container mx-auto px-6 max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-lightest-slate mb-12 text-center"
      >
        Projects I've Worked On
      </motion.h2>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;