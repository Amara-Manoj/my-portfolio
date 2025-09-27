import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {

  "Backend & Application Development": ["Node.js", "Express", "React", "JavaScript", "REST APIs", "Microservices", "Workflow Automation"],
  "Databases & Caching": ["MySQL", "Redis", "Database Design", "Query Optimization"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Docker", "Kubernetes", "CI/CD Pipelines"],
  "Monitoring & Observability": ["Grafana", "Logging", "Performance Metrics", "Production Issue Tracking"],
  "Practices & Methodologies": ["End-to-end Feature Development", "Automation", "Scalability", "Production Support"],
};

const SkillCard = ({ title, skills }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0px 10px 30px -15px rgba(99, 255, 218, 0.2)" }}
    className="bg-light-navy p-6 rounded-lg shadow-md h-full"
  >
    <h3 className="text-accent font-semibold text-lg mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="text-accent mr-2">▹</span>
          <span className="text-light-slate">{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 container mx-auto px-6 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-lightest-slate mb-12 text-center"
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillsData).map(([category, skills], index) => (
           <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
           >
            <SkillCard title={category} skills={skills} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;