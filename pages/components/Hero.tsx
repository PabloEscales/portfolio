import Link from 'next/link';
import React from 'react';
import BackgroundCircles from '../components/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter ({
      words: [
        `Hi, I'm Pablo Escales`,
        `creativy-driven-developer.tsx`,
        `< who-enjoy-the way of new coding />`
      ],
      loop: true,
      delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      <div className='z-20'>
        <h2 className='mt-9 text-sm uppercase text--gray-500 pb-2 tracking-[11px] dark:text-gray-400'>
          Jr. Full-Stack Web Developer
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
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
