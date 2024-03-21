import React from 'react';
// import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard2({}: Props) {
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
      className="w-32 h-32 xl:w-[140px] rounded object-cover object-center"
      src="https://media.licdn.com/dms/image/C4D0BAQFiyyEUZjtqTg/company-logo_200_200/0/1630489561779/gft_group_logo?e=1718841600&v=beta&t=fOOvKAfjFTH3bkv8eWVitiAJx43dWwjKRteleMzsqwk"
      alt="GFT logo"
    />
    <div className="px-0 md:px-10 ml-12">
      <h4 className="pb-2 text-xl font-ligth bg-blue">Cloud DevOps Engineer</h4>
      <h4 className="text-l font-ligth bg-blue">
        📍 GFT Technologies - Barcelona, Spain
      </h4>
      <p className="pb-5 pt-2 dark:text-gray-300">
        <span className='underline decoration-[#F7AB0A]/50'>📅</span> Oct '23 - Present
      </p>
      <ul className="list-disc space-y-2 ml-5 text-lg dark:text-gray-300">
        <li>Utilizing Terraform as IaC to architect and deploy cloud environments
          on both AWS and Azure platforms.
        </li>
        <li>CI/CD processes through Jenkins pipelines.</li>
        <li>Utilizing Docker and Kubernetes as main orchestration and containers
          technologies.
        </li>
        <li>Maven and Helm as core packages and deployment technologies.</li>
        <li>Other Techs Stack: GitLab · Teams · Lens </li>
      </ul>
    </div>
  </article>
  );
}
