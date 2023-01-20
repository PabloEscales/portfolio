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
        src='https://media-exp1.licdn.com/dms/image/D4E03AQEhxd1sIBQHcA/profile-displayphoto-shrink_200_200/0/1665647070561?e=1676505600&v=beta&t=oXIcSRF8jCEwxalObDD-mgZge0bBBWEqVCtF-QrkHB8'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'
      />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold dark:text-gray-300'>A <span className='underline decoration-[#F7AB0A]'>brief</span>{' '}
            background
          </h4>
          <p className='text-base dark:text-gray-400'>
          Creativity driven developer, passionate about technology and innovation.
          I enjoy challenges and seek a creative approach to problem solving.
          My goal is to work in a place where, I can train, grow and develop skills in order to project myself both professionally  and personally.
          </p>
        </div>
    </motion.div>
  );
}
