import React from 'react';
import BackgroundCircles from '../components/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter ({
      words: [
        `Hi, I'm Pablo Escales`,
        `creativy-driven-developer.tsx`,
        `<who-enjoy-the way of new coding />`
      ],
    loop: true,
    delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <h2 className='text-xl font-burtons dark:text-gray-500'>Jr. Frontend Developer</h2>
      <h1>
        <span className='text-xl font-burtons dark:text-gray-400'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  )
}
