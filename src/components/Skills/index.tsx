'use client';

import React from 'react';

import { motion } from 'framer-motion';

import SectionHeading from '../sectionHeading';
import SkillHeader from './SkillHeader';
import { SkillSection } from './SkillSection';
import { InfiniteMovingCardsDemo } from './SkillsCards';

const Skills = () => {
	return (
		<section className="w-full mb-28 scroll-mt-28 sm:mb-40" id="skills">
			<motion.div
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
				}}
				className="div"
			>
				<SectionHeading>My skills</SectionHeading>
			</motion.div>
			<div className="p-12 bg-white dark:bg-transparent">
				<SkillHeader />
				<div className="  my-2 hidden md:flex justify-center">
					<SkillSection />
				</div>
				<div className="my-2">
					<InfiniteMovingCardsDemo />
				</div>
			</div>
		</section>
	);
};

export default Skills;
