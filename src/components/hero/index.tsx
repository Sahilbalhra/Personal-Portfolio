'use client';

import Link from 'next/link';

import ThreeDCard from '@/components/ui/Card/ThreeDCard';
import { Button } from '@/components/ui/button';
import { BorderButton } from '@/components/ui/moving-border';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { sentence, skills } from '@/lib/data';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

import { SubTitle } from './SubTitle';

const Hero = () => {
	return (
		<div id="home" className="flex justify-center items-center bg-transparent w-full mb-28 ">
			<div className="flex flex-col-reverse px-4 md:flex-row md:items-center justify-evenly md:gap-10 md:px-4 ">
				<div className="flex flex-col w-full md:w-2/3 gap-10 pb-10 md:pt-44 md:items-start">
					<TextGenerateEffect
						words={sentence}
						className="text-center text-[30px] md:text-5xl md:text-left"
						width="w-full max-md:text-sm"
					/>
					<SubTitle />
					<div className="flex flex-row  gap-2 flex-wrap w-full items-center md:items-start md:justify-start justify-center">
						{skills.map((skill, index) => (
							<BorderButton
								key={index}
								className="bg-primary text-white dark:text-black px-2 py-1 text-xs rounded-full flex flex-row gap-2 items-center"
							>
								{skill.icon}
								{skill.name}
							</BorderButton>
						))}
					</div>
					<div className="flex flex-row gap-6 w-full flex-wrap justify-center md:justify-start">
						<Link href="https://github.com/Sahilbalhra" target="_blank">
							<Button className=" rounded-full py-6 flex flex-row gap-2 text-md">
								GitHub <FaGithub className="w-6 m-0 h-6" />
							</Button>
						</Link>
						<Link href="https://www.linkedin.com/in/sahilbalhra/" target="_blank">
							<Button className="rounded-full py-6 flex flex-row gap-2 text-md" variant={'outline'}>
								{' '}
								LinkedIn <FaLinkedin className="w-6 m-0 h-6" />
							</Button>
						</Link>
						<Link href="/CV.pdf" target="_blank" download>
							<Button className="rounded-full py-6 flex flex-row gap-2 text-md" variant={'secondary'}>
								{' '}
								Resume <FaDownload className="w-6 m-0 h-6" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="px-8 md:px-0 py-10 md:pt-44 w-full md:w-1/3 md:flex h-fit items-center">
					<ThreeDCard />
				</div>
			</div>
		</div>
	);
};
export default Hero;
