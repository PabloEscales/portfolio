import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter ({
      words: [
        `Hi, I'm Pablo Escales`,
        `creativy-driven-developer.tsx`,
        `<who-enjoy-coding />`
      ],
    loop: true,
    delaySpeed: 2000,
    });

  return (
    <div>
      <span>{text}</span>
      <Cursor cursorColor='#F7AB0A' />
    </div>
  )
}
