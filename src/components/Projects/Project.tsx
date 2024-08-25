'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useRef } from 'react';

// import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers2 } from 'lucide-react';

import { Button } from '../ui/button';

type Project = {
	name: string;
	description: string;
	features: string[];
	technologies: string[];
	links: {
		demo: string;
		github: string;
	};
	image: string;
};

export default function Project({ name, description, technologies, links, image, features }: Project) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				// opacity: opacityProgess,
			}}
			className="group sm:mb-8 last:mb-0 "
		>
			<section className="bg-white w-full border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 ">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[75%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{name}</h3>
					<div className="w-full rounded-md my-4 overflow-hidden">
						<Image
							src={image}
							alt="Project I worked on"
							quality={95}
							width={200}
							height={200}
							className="sm:hidden w-full"
						/>
					</div>
					<p className="mt-2 leading-relaxed tracking-wider">{description}</p>
					<ul className="mt-2 list-disc">
						{features.map((tag, index) => (
							<li className="list-item leading-relaxed ms-3" key={index}>
								{tag}
							</li>
						))}
					</ul>
					<div className="mt-2 flex gap-4">
						<Link href={links.demo} target="_blank">
							<Button className="rounded-full py-6 flex flex-row gap-2 text-md" variant={'outline'}>
								Demo <Layers2 />
							</Button>
						</Link>
						<Link href={links.github} target="_blank">
							<Button className="rounded-full py-6 flex flex-row gap-2 text-md" variant={'link'}>
								View Code
							</Button>
						</Link>
					</div>
					<ul className="flex flex-wrap mt-4 gap-2 ">
						{technologies.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<div className="w-[25%]">
					<Image
						src={image}
						alt="Project I worked on"
						quality={95}
						width={200}
						height={200}
						className="absolute hidden sm:block top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
					/>
				</div>
			</section>
		</motion.div>
	);
}
