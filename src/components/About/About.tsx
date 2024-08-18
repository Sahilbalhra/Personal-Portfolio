import React from 'react';

import { BookMarked } from 'lucide-react';

const AboutSection = () => {
	return (
		<section>
			<div className="flex flex-col items-center gap-4  w-full z-50  ">
				<div className="sticky top-0 px-6 py-2  z-40 font-light text-center text-2xl leading-snug tracking-wider  backdrop-blur-2xl w-fit rounded-full">
					My Education
				</div>
				<div className="flex flex-col gap-10  w-full lg:flex-row lg:gap-10  items-center justify-center mx-auto">
					<div className="flex flex-col w-96 text-black dark:text-white   px-10 py-4 bg-white dark:bg-primary/40 dark:backdrop-blur-3xl tracking-wider rounded-xl">
						<div className="flex flex-row gap-2 lg:flex-row items-center md:flex-col">
							<BookMarked size={100} className="text-black dark:text-white" />
							<div className="flex flex-col">
								<div className=" text-sm font-semibold">Bachelor of Technology</div>
								<div className="text-xs font-semibold"> 2018 - 2024</div>
							</div>
						</div>
						<div className="flex flex-col gap-2 py-4 text-xs">
							<div className="font-semibold">
								University Institute of Engineering & Technology (UIET), Maharshi Dayanand University,
							</div>
							<div className="font-semibold"> Rohtak Delhi Road, near Delhi bypass, Rohtak, Haryana 124001</div>
						</div>
					</div>
				</div>
			</div>
			<p>
				Passionate about crafting exceptional digital experiences, I leveraged my BTech foundation to dive deep into
				programming. A coding bootcamp honed my full-stack development skills, with a particular emphasis on React,
				Next.js, Node.js, and MongoDB. TypeScript adds another dimension to my coding arsenal.
			</p>
			<p>
				I excel at transforming complex challenges into elegant solutions. My ability to quickly grasp new technologies
				and deliver high-quality code sets me apart. I&apos;m excited to explore React Native to expand my expertise
				into mobile app development.
			</p>
			<p>
				Beyond coding, I&apos;m a curious mind with a love for learning. History, philosophy, and music enrich my
				perspective. I believe this well-rounded approach fosters innovative thinking and problem-solving.
			</p>
		</section>
	);
};

export default AboutSection;
