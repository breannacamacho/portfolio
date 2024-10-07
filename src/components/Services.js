import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// technologies and their corresponding logos
const technologies = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/javascript/javascript-original.svg', // Devicon JavaScript logo
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg', // Devicon React logo
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/nodejs/nodejs-original.svg', // Devicon Node.js logo
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/python/python-original.svg', // Devicon Python logo
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/postgresql/postgresql-original.svg', // Devicon PostgreSQL logo
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/mongodb/mongodb-original.svg', // Devicon MongoDB logo
  },
  {
    name: 'TensorFlow',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/tensorflow/tensorflow-original.svg', // Devicon TensorFlow logo
  },
  {
    name: 'PyTorch',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/pytorch/pytorch-original.svg', // Devicon PyTorch logo
  },
  {
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/cplusplus/cplusplus-original.svg', // Devicon C++ logo
  },
  {
    name: 'C#',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/csharp/csharp-original.svg', // Devicon C# logo
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/docker/docker-original.svg', // Devicon Docker logo
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/kubernetes/kubernetes-plain.svg', // Devicon Kubernetes logo
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* title and description */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>My Knowledge.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            Driven by continuous learning and a dedication to staying ahead in technology, I’m always evolving to create better solutions.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>

          {/* technologies logos */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {technologies.map((tech, index) => {
              return (
                <div key={index} className='flex flex-col items-center'>
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className='w-20 h-20' // Adjust size as needed
                  />
                  <p className='text-center mt-2'>{tech.name}</p> {/* Label under each logo */}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;