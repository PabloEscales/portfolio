import React from 'react';
// import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard2({}: Props) {
  return (
    <article className='mr-4 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden text-gray-300'>
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
          <div className="flex flex-col justify-between p-4 leading-normal mt-50">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fronten Web Developer at LEJKA</h5>
              <h4 className="text-4xl font-ligth">Jr. Frontend Web Developer</h4>
        <p className="font-bold text-2xl mt-1 ml-6">
          LEJKA - Copenhagen, Denmark 📍
        </p>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul className="list-disc space-y-4 ml-5 text-lg dark:text-gray-300">
              <li>Programming in React, Next JS and JavaScript.</li>
              <li>Consuming RESTful API.</li>
              <li>C# and .NET as a Backend server.</li>
              <li>Azure DevOps as a project management with Scrum methodology.</li>
              <li>Tailwind CSS as a main CSS framework.</li>
              <li>Testing and documentation of the realises, reporting to the CTO.</li>
              <li>Figma to create prototypes, to impruve the UX-UI.</li>
              <li>Working next to the marketing department, using the Brainstorming methodology.</li>
              <li>Other Techs Stack: Azure DevOps · Slack</li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  );
}
