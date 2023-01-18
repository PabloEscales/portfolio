/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
// import web1  from '../public/web1.png';
import { useState } from 'react';
import { motion } from "framer-motion";
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={ darkMode ? "dark text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80" : "h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200 scrollbar-thumb-[#F7AB0A]/80" }>
      <Head>
        <title>Pablo | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-[rgb(36,36,36)]'>
          <nav className='sticky top-0 p-5 flex justify-between z-20 max-w-7xl mx-auto xl:items-center'>
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 1.5
              }}>
              <SocialIcon
               url="https://linkedin.com/jaketrent"
               fgColor='gray'
               bgColor='transparent'
              />
              <SocialIcon
                url="https://github.com/jaketrent"
                fgColor='gray'
                bgColor='transparent'
              />
              <SocialIcon
                url="https://facebook.com/jaketrent"
                fgColor='gray'
                bgColor='transparent'
              />

            </motion.div>


            {/* <Link href='#contact'> */}
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 1.5
                }}
              >
                <ul className='flex items-center'>
                  <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-400'/></li>
                  <li>
                    <a className='bg-yellow-500/80 text-black px-4 py-2 rounded-md ml-8 dark:text-gray-800' href='#'>
                      ✉️
                    </a>
                  </li>
                </ul>
              </motion.div>
            {/* </Link> */}
          </nav>
        <section id="hero" className='snap-start dark:text-gray-400'>
            <Hero />
        </section>

        <section id='about' className='snap-center dark:text-gray-400'>
          <About />
        </section>

        <section id='experience' className='snap-center dark:text-gray-400'>
          <WorkExperience />
        </section>

        <section id='skills' className='snap-start dark:text-gray-400'>
            <Skills />
        </section>

        <section id='projects' className='snap-start dark:text-gray-400'>
          <Projects />
        </section>

        <section id='Contact' className='snap-start dark:text-gray-400'>
          <ContactMe />
        </section>

        <Link href='#hero'>
          <footer className='sticky bottom-5 cursor-pointer'>
            <div className='flex items-center justify-center'>
              {/* <img
                className='h-10 w-auto rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'
                alt=''
              /> */}
            </div>
          </footer>
        </Link>
      </main>
    </div>
  );
}
