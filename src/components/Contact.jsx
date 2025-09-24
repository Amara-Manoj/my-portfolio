import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center container mx-auto px-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent font-mono mb-2">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h2>
        <p className="text-slate mb-8">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll do my best to get back to you!
        </p>
        <a
          href="mailto:amara.manoj1528@gmail.com"
          className="inline-block border border-accent text-accent text-lg font-mono px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;