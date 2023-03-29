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
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl dark:text-gray-300'>
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
          <p className='text-xl dark:text-gray-400'>
            Working and programming in React and Next Js.
            My recent background allows me to understand the point of view from the creation of a project to its execution.

            My passion for technology and creative solutions inspired me to change my career path and transition from Lawyer to Web Developer.

            +10 years of experience in Real Estate Legal Management.
          </p>
        </div>
    </motion.div>
  );
}
