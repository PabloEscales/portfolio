import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl dark:text-gray-300'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://avatars.githubusercontent.com/u/99145971?s=400&u=246cbac8cac7075cc6c11db113b18b3636e5d1f2&v=4'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'
      />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold dark:text-gray-300'>A <span className='underline decoration-[#F7AB0A]'>brief</span>{' '}
            background
          </h4>
          <p className='text-xl dark:text-gray-400'>
            +3 years of expertise as a Cloud Engineer/DevOps.
          </p>
          <p className='text-xl dark:text-gray-400'>
            I’ve focused my career on cloud technology, having worked with the main providers (GCP, AWS, and Azure).
          </p>
          <p className='text-xl dark:text-gray-400'>
            My main tech stack includes Terragrunt, Terraform, Docker, Kubernetes, ArgoCD, Helm, GitHub Actions and Jenkins among others.
          </p>
          <p className='text-xl dark:text-gray-400'>
            Driven by continuous learning, I stay open to new technologies and embrace innovative challenges.
          </p>
        </div>
    </motion.div>
  );
}
