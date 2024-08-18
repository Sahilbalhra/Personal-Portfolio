'use client';

import React from 'react';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

import SectionHeading from '../sectionHeading';
import AboutMeCard from '../ui/Card/AboutMeCard';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className="mb-28 w-full scroll-mt-28 leading-8 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About Me</SectionHeading>
			<div className="flex flex-col px-4 md:flex-row md:items-center justify-evenly md:gap-8 md:px-4 ">
				<div className="px-8 py-8 md:px-0  md:py-0 w-full md:w-1/3 md:flex h-fit">
					<AboutMeCard />
				</div>
				<div className="flex flex-col w-full md:w-2/3 gap-2 pb-10 md:items-start">
					<p className="mb-2">
						With a <span className="font-medium text-green-500">B.Tech</span> degree in hand, I set out to transform my
						passion for programming into a career. After completing a rigorous coding bootcamp, I dove headfirst into{' '}
						<span className="font-medium text-green-500">full-stack web development</span>. My core expertise lies in{' '}
						<span className="font-medium text-green-500">React, Next.js, Node.js, and MongoDB</span>, and I&apos;m
						actively honing my skills in <span className="font-medium text-green-500">TypeScript</span>.
					</p>
					<p className="mb-2">
						The problem-solving aspect of coding is what fuels my drive—there&apos;s nothing quite like the moment when
						everything clicks into place. Currently, I&apos;m channeling my energy into mastering{' '}
						<span className="font-medium text-green-500">React Native</span> for mobile app development, constantly
						pushing the boundaries of what I can create.
					</p>
					<p className="mb-2">
						<span>When I&apos;m not coding</span> ,My downtime is spent playing video games, watching movies, and
						enjoying moments with my dog.
					</p>
					<p>
						I&apos;m always seeking opportunities that challenge my abilities and allow me to make a significant impact.
						My mission is to collaborate with dynamic teams, leveraging
						<span className="font-medium text-green-500"> cutting-edge technology </span>
						to bring innovative ideas to life.
					</p>
				</div>
			</div>
		</motion.section>
	);
}
