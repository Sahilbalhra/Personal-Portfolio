'use client';

import Link from 'next/link';

import ThreeDCard from '@/components/ui/Card/ThreeDCard';
import { Button } from '@/components/ui/button';
import { BorderButton } from '@/components/ui/moving-border';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { sentence, skills } from '@/utils/objects/Sections';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

import { SubTitle } from './SubTitle';

const Hero = () => {
	return (
		<div id="home" className="flex justify-center w-full h-screen  items-center bg-transparent max-md:h-full ">
			<div className="flex flex-col md:flex-row md:items-center justify-evenly w-full md:gap-10 px-10  md:px-4 ">
				<div className="flex flex-col w-full md:w-2/3 gap-10 py-44  md:items-start">
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
					<div className="flex flex-row gap-6 w-full">
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
				<div className="px-8 md:px-0 w-1/3 hidden lg:flex h-fit">
					<ThreeDCard />
				</div>
			</div>
		</div>
	);
};
export default Hero;
