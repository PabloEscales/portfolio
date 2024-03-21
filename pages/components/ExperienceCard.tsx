/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] px-4 pb-2 pt-6 hover:opacity-100 opacity-70 transition-opacity duration-200 overflow-hidden text-gray-300">
      <img
        // initial={{
        //   y: -100,
        //   opacity: 0,
        // }}
        // transition={{ duration: 1.2 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        className="w-32 h-32 xl:w-[270px] rounded object-cover object-center"
        src="https://lejka.dk/media/x4bolqg5/lejka-logo.svg"
        alt="Lejka logo"
      />
      <div className="px-0 md:px-10 ml-12">
        <h4 className="pb-2 text-xl font-ligth bg-blue">Frontend Web Developer</h4>
        <h4 className="text-l font-ligth bg-blue">
          📍 LEJKA - Copenhagen, Denmark
        </h4>
        <p className="pb-5 pt-2 dark:text-gray-300">
          <span className='underline decoration-[#F7AB0A]/50'>📅</span> Jul '22 - Jul '23
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg dark:text-gray-300">
          <li>Programming in React, Next JS and JavaScript.</li>
          <li>C# and .NET as a Backend server.</li>
          <li>Azure DevOps as a project management with Scrum methodology.</li>
          <li>Tailwind CSS as a main CSS framework.</li>
          <li>Testing and documentation of the project, reporting to the CTO.</li>
          <li>Figma to create prototypes, to impruve the UX-UI.</li>
          <li>Other Techs Stack: GitHub · Slack · Canvas </li>
        </ul>
      </div>
    </article>
  );
}
