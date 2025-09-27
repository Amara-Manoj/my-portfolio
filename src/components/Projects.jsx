import React from 'react';
import { motion } from 'framer-motion';
import projectAirtelImage from '../assets/project-airtel.png';
// You will need to add an image for your new project in the `public` folder
// For now, I'll reuse the same image as a placeholder
import projectTestPlatformImage from '../assets/testTool.png'; 

const projectsData = [
  {
    title: "Mobile Payments Platform (NRT 2.0 & ACS Checkout)",
    client: "Airtel (African Opcos)",
    description: "Developed and integrated backend services for telecom wallet workflows, micro-loan features, and checkout processes to enhance user experience and transactional efficiency in high-traffic African markets.",
    tags: ["Node.js", "Express", "REST APIs", "Scalability", "Fault Tolerance"],
    achievements: [
      "Streamlined telecom wallet workflows, increasing transaction reliability.",
      "Implemented robust error handling and fallback mechanisms for high-volume transactions.",
      "Optimized API response times and reduced latency in core payment services.",
      "Collaborated with cross-functional teams to deploy features with zero post-release incidents.",
    ],
    image: projectAirtelImage,
  },
  {
    title: "Accelerated API Testing & Validation Platform",
    client: "Internal Automation Tool",
    description: "Architected a web-based automation tool to execute hundreds of API test cases from Excel and analyze results via an interactive dashboard, replacing manual Postman testing.",
    tags: ["React", "Node.js", "Express", "Automation", "In-Memory Cache"],
    achievements: [
      "Reduced API testing and debugging time by 40% with an automated, Excel-driven workflow.",
      "Implemented a high-performance Node.js backend for real-time API orchestration.",
      "Designed a dynamic React dashboard with filtering, report downloads, and an integrated log viewer.",
      "Streamlined developer debugging with a 'one-click retest' feature.",
    ],
    image: projectTestPlatformImage, // Placeholder - replace with a real image
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
      <img
        src={project.image}
        alt={`Background for ${project.title}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-navy/80 md:bg-gradient-to-r from-navy/90 to-navy/40"></div>
      <div className="relative flex flex-col justify-center items-start md:items-end w-full p-8 md:p-12 min-h-[400px]">
        <div className="md:w-3/5 text-left md:text-right">
          <p className="text-accent font-mono text-sm">{project.client}</p>
          <h3 className="text-3xl font-bold text-lightest-slate my-2">
            {project.title}
          </h3>
          <div className="bg-navy/50 p-6 rounded-md shadow-lg my-4 text-left">
            <p className="text-slate">{project.description}</p>
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
    <section id="projects" className="py-20 container mx-auto px-6 max-w-5xl scroll-mt-24">
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