/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/112px-Microsoft_icon.svg.png',
      webLink: 'https://microsoft-quiz.vercel.app/',
      name: 'Microsoft Quiz PL-900 Certificate',
      description: 'Develop with React, TypeScript & Zustand',
      repositoryLink: 'https://github.com/PabloEscales/microsoft-quiz'
    },
    {
      logo: 'https://static.vecteezy.com/system/resources/previews/012/627/815/original/3d-popcorn-striped-bucket-cinema-snack-movie-entertainment-concept-high-quality-isolated-3d-render-free-png.png',
      webLink: 'https://best-movies-search.vercel.app/',
      name: 'Best Movies',
      description: 'Develop with React, using API from omdbapi.com 🎬',
      repositoryLink: 'https://github.com/PabloEscales/best-movies-search'
    },
    {
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      webLink: 'https://google-search-cloned.netlify.app',
      name: 'Clone of Google Search',
      description: 'Develop with HTML & CSS using google.com',
      repositoryLink: 'https://github.com/PabloEscales/Harvard-CS50-Web'
    },
    {
      logo: 'https://i.pinimg.com/originals/dd/c9/35/ddc9358efc51a43ae8e3ccbbed194b1e.png',
      webLink: 'https://github.com/PabloEscales/HappyPaw',
      name: 'Happy Paw',
      description: 'Develop with Ruby on Rails, JavaScript and Bootstrap',
      repositoryLink: 'https://github.com/PabloEscales/HappyPaw'
    },
    {
      webLink: 'https://github.com/PabloEscales/VansRent',
      logo: 'https://images.vexels.com/media/users/3/147714/isolated/preview/170dd97407c2f0c4400ded807aed5af1-icone-plano-de-veiculo-de-campervan.png',
      name: 'Vans Rent',
      description: 'Develop with Ruby on Rails, JavaScript and Bootstrap',
      repositoryLink: 'https://github.com/PabloEscales/VansRent'
    }
  ];

  return (
    <div
    // initial={{ opacity: 0 }}
    // whileInView={{ opacity: 1 }}
    // transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl dark:text-gray-300'>
        Frontend Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <img
              style={{width: "220px", borderRadius: "7px"}}
              // initial={{
              //   y: -300,
              //   opacity: 0,
              // }}
              // transition={{ duration: 1.2 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              src={project.logo}
              alt={project.name}
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                {i + 1} of {projects.length}:
                </span>{' '}
                <a href={project.webLink} target='_blank' rel='noreferrer'>{project.name}</a>
              </h4>
                <h2 className='text-xl font-semibold text-start'>
                  {project.description} <br/><br/>
                </h2>
              <a href={project.repositoryLink} target="_blank" rel="noreferrer">
                <span className='text-lg text-center md:text-left'>
                  <SocialIcon
                  url={project.repositoryLink}
                  fgColor='gray'
                  bgColor='transparent'
                  target="_blank"
                  style={{ marginLeft: "-12px"}}
                  />Repository code
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/80 dark:bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
}

export default Projects;
