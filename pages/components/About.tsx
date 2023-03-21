import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://media.licdn.com/dms/image/D4E03AQEhxd1sIBQHcA/profile-displayphoto-shrink_800_800/0/1665647070561?e=1683158400&v=beta&t=k1bIk9YogzhXmgYxqKYOZucrng-HQx5-W9sqJnNehC0'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'
      />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold dark:text-gray-300'>A <span className='underline decoration-[#F7AB0A]'>brief</span>{' '}
            background
          </h4>
          <p className='text-base dark:text-gray-400'>
            I'm a Frontend Web Developer with 12 years of experience in Real Estate Legal Management. My passion for problem solving and creative solutions inspired me to change my career path and transition from Lawyer to Developer. Happy with this change, I've been working with React and Next Js for more than a year with a focus on Web Development and UX-UI.
          </p>
        </div>
    </motion.div>
  );
}
