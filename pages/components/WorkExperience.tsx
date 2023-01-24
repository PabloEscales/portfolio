import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ExperienceCard2 from './ExperienceCard2';


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div

    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 justify-center p-10 snap-x snap-mandatory scrollbar-thin mt-24'>
        <ExperienceCard />
        <ExperienceCard2 />
      </div>
    </motion.div>
  );
}

export default WorkExperience
