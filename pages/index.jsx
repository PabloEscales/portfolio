/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1  from '../public/web1.png';
import web2  from '../public/web2.png';
import web3  from '../public/web3.png';
import web4  from '../public/web4.png';
import web5  from '../public/web5.png';
import web6  from '../public/web6.png';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Pablo | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-gray-400'>Work In Progress</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-400'/></li>
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:text-gray-800' href='#'>Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Pablo M. Escales</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300'>Frontend Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
                Creativity driven developer, passionate about technology and innovation. I enjoy challenges and seek a creative approach to problem solving.
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-600'>
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
              <Image src={deved} layout='fill' objectFit='cover'/>
            </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl py-1 dark:text-gray-400'>Skills and Techs</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
                <span className='text-teal-500'> Agencies </span>
                consulted for<span className='text-teal-500'> startups </span> and collaborated with talented people.
              </p>
            </div>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
                <Image src={design} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Desings</h3>
                <p className='py-2'>
                  Creating elegant designs suited for your need designs theory.
                </p>
                <h4 className='py-4 text-teal-600'>Desigin tools I use</h4>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Ilustrator</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
                <Image src={code} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Desings</h3>
                <p className='py-2'>
                  Creating elegant designs suited for your need designs theory.
                </p>
                <h4 className='py-4 text-teal-600'>Desigin tools I use</h4>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Ilustrator</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
                <Image src={consulting} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Desings</h3>
                <p className='py-2'>
                  Creating elegant designs suited for your need designs theory.
                </p>
                <h4 className='py-4 text-teal-600'>Desigin tools I use</h4>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Ilustrator</p>
              </div>
            </div>
          </section>
            <section>
              <div>
                <h3 className='text-3xl py-1 dark:text-gray-300'>Portfolio</h3>
                <h2 className='text-2xl py-1 text-teal-500'>Happy Paw </h2>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
                  
                  It's a <span className='text-teal-500'>P2P</span> platform that allows people to connect between people available to take care of your pets 😃.
                  <span className='text-teal-500'> happypaw.cloud</span> 💻
                </p>
              </div>
              <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'>
                  <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
                </div>
                <div className='basis-1/3 flex-1'>
                  <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'70%'} layout='responsive' />
                </div>
                <div className='basis-1/3 flex-1'>
                  <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
                </div>
                <div className='basis-1/3 flex-1'>
                  <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
                </div>
                <div className='basis-1/3 flex-1'>
                <div>
                <h2 className='text-2xl py-1 text-teal-500'>VansRent</h2>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
                  
                Welcome to VansRent 🚐. It's a <span className='text-teal-500'>P2P </span> platform that allows people to connect to rent their vans.
                <span className='text-teal-500'> vansrent.herokuapp.com</span> 💻
                </p>
              </div>
                  <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
                </div>
                <div className='basis-1/3 flex-1'>
                  <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
                </div>
              </div>
            </section>
        </main>
      </div>
  );
}
