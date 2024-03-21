import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

interface Props {
  logo: string,
}

function Skills({ logo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl dark:text-gray-300'>
        Skills
      </h3>
      {/* <h3 className='absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm dark:text-gray-400'>
        Hover over a skill for currency profieciency
      </h3> */}
      <div className='grid grid-cols-3 gap-5'>
        <Skill logo='https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/05/95baa365-fedb-4d3c-8b1f-22735e3bb77a.webp' percentage='80'/>
        <Skill logo='https://www.svgrepo.com/show/376353/terraform.svg' percentage='80'/>
        <Skill logo='https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' percentage='80'/>
        <Skill logo='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' percentage='80'/>
        <Skill logo='https://static-00.iconduck.com/assets.00/linux-icon-2048x2048-sy06t4un.png' percentage='80'/>
        <Skill logo='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' percentage='80'/>
        <Skill logo='https://static-00.iconduck.com/assets.00/ruby-icon-1024x1024-u3yoql71.png' percentage='80'/>
        <Skill logo='https://www.docker.com/wp-content/uploads/2023/08/logo-dont-stretch.svg' percentage='80'/>
        <Skill logo='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' percentage='90'/>
      </div>
    </motion.div>
  );
}

export default Skills;
