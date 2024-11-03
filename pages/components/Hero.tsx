/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import BackgroundCircles from '../components/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import { motion } from 'framer-motion';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter ({
      words: [
        `Hi there! I'm Pablo Escales`,
        `Working on Cloud and DevOps practices`
      ],
      loop: true,
      delaySpeed: 1500,
    });

  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'
        alt=''
      />
      <div className='z-20'>
        <h2 className='ml-5 mt-6 text-sm uppercase text--gray-500 pb-2 tracking-[11px] dark:text-gray-400'>
            Cloud DevOps
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3 dark:text-gray-300'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
