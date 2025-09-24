import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: "Product Development Engineer",
    company: "Comviva",
    period: "Aug 2023 – Present",
    duties: [
      "Architected and integrated mission-critical APIs for high-traffic telecom wallet/payment platforms.",
      "Optimized backend workflows, significantly reducing system downtime by 50%.",
      "Provided L3 production support, debugging critical incidents to ensure platform stability."
    ]
  },
  {
    role: "Product Development Intern",
    company: "Comviva",
    period: "Feb 2023 – Aug 2023",
    duties: [
      "Built real-time monitoring dashboards using Grafana and Prometheus.",
      "Assisted in incident resolution and performed detailed root cause analysis.",
      "Conducted backend validation and testing to improve payment transaction reliability."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-lightest-slate mb-12 text-center"
      >
        Work Experience
      </motion.h2>

      <div className="relative border-l-2 border-lightest-navy pl-8">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 last:mb-0"
          >
             {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-navy"></div>
            <p className="text-accent font-mono text-sm">{job.period}</p>
            <h3 className="text-xl font-bold text-lightest-slate mt-1">{job.role}</h3>
            <p className="text-lg text-slate">{job.company}</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-slate">
              {job.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;