import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity:0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded xl:w-[250px] xl:h-[100px] object-cover object-center'
        src='https://lejka.dk/media/x4bolqg5/lejka-logo.svg'
        alt=''
      />
      <div className='px-0 md:px-10 ml-12'>
        <h4 className='text-4xl font-ligth'>Jr. Frontend Web Developer</h4>
        <p className='font-bold text-2xl mt-1 ml-6'>LEJKA - Copenhagen, Denmark 📍 </p>
        <div className='flex space-x-2 my-2 justify-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-11 w-11 rounded'
            src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
            alt=''
          />
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
            className='h-11 w-11 rounded'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzISA1LJp-A8R8sqO5CTC3g5AV57-DFz1D6A&usqp=CAU'
            alt=''
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-11 w-11 rounded'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
            alt=''
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-11 w-11 rounded'
            src='data:image/png;base64,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'
            alt=''
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-11 w-10 rounded'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/1200px-Ruby_on_Rails_logo.svg.png'
            alt=''
          />
        </div>
        <p className='py-5 text-gray-400 dark:text-gray-400'>
          Start date:  August '22
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg '>
          <li>
            It's a new project, we designed, developed and tested from scratch an interface for the administration panel.
          </li>
          <li>
            Other Techs Stack: Azure DevOps · Figma Prototype
          </li>
        </ul>
      </div>
    </article>
  );
}
