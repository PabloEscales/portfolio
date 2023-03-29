import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden text-gray-300'>
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
        <p className='font-bold text-2xl mt-1 ml-6'>LEJKA - Copenhagen, Denmark 📍</p>
        <div className='flex space-x-2 my-2 justify-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-11 w-11 rounded'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
            alt=''
          />
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
            src='data:image/png;base64,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'
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
            className='h-11 w-11 rounded'
            src='https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667'
            alt=''
          />
        </div>
        <p className='py-5 dark:text-gray-300'>
          Date:  August '22 - Present
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg dark:text-gray-300'>
          <li>
            New project from scratch, designing with Figma, programming with React - Next Js, and testing the interface.
            We used Azure DevOps as a server and project management.
          </li>
          <li>
            Other Techs Stack: Tailwindcss · Slack
          </li>
        </ul>
      </div>
    </article>
  );
}
