import Image from 'next/image';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CableCar, DatabaseBackup, FolderClock, Home, LampDesk, LayoutList, SmartphoneNfc } from 'lucide-react';
import { Paintbrush2 } from 'lucide-react';

import css from '/public/icons/css.svg';
import docker from '/public/icons/docker.svg';
import express from '/public/icons/expressjs-dark.svg';
import figma from '/public/icons/figma-dark.svg';
import git from '/public/icons/git.svg';
import github from '/public/icons/github-square.svg';
import html from '/public/icons/html.svg';
import javascript from '/public/icons/javascript.svg';
import mongo from '/public/icons/mongodb.svg';
import mysql from '/public/icons/mysql-dark.svg';
import netlify from '/public/icons/netlify-dark.svg';
import nextjs from '/public/icons/nextjs-dark.svg';
import node from '/public/icons/nodejs-dark.svg';
import react from '/public/icons/react-dark.svg';
import tailwindcss from '/public/icons/tailwindcss-dark.svg';
import typescript from '/public/icons/typescript.svg';
import vercel from '/public/icons/vercel-dark.svg';

export const sections = [
	{
		content: (
			<p className="my-20">
				<b className="text-primary">Sahil</b>, a software engineer, with <b className="text-primary">2+ years</b>{' '}
				experience. Specializing in <b className="text-primary">full-stack</b> development, passionate about innovative
				solutions. Let&apos;s create impactful technology together.
			</p>
		),
	},
];

export const badges = ['Front End', 'Back End', 'Full Stack'];
export const sentence = 'From Design to Code with Sahil';
export const menus = [
	{
		icons: <Home className="w-4 h-4" />,
		tip: 'Home',
		link: 'home',
	},
	{
		icons: <CableCar className="w-4 h-4 text-primary" />,
		tip: 'Skills',
		link: 'skills',
	},
	{
		icons: <FolderClock className="w-4 h-4 text-primary" />,
		tip: 'Experience',
		link: 'experience',
	},
	{
		icons: <LayoutList className="w-4 h-4 text-primary" />,
		tip: 'Projects',
		link: 'projects',
	},

	{
		icons: <SmartphoneNfc className="w-4 h-4 text-primary" />,
		tip: 'Contact',
		link: 'contact',
	},
];

export const skills = [
	{
		name: 'FullStack',
		style: 'bg-gradient-to-b from-gray-700 to-gray-900  text-white',
		icon: <LampDesk className="w-4 h-4" />,
	},
	{
		name: 'FrontEnd',
		style: 'bg-gradient-to-b from-gray-700 to-gray-900  text-white',
		icon: <Paintbrush2 className="w-4 h-4" />,
	},
	{
		name: 'Backend',
		style: 'bg-gradient-to-b from-gray-700 to-gray-900 text-white',
		icon: <DatabaseBackup className="w-4 h-4" />,
	},
];
export const iconMappings = [
	{ id: 3, name: 'CSS', icon: css },
	{ id: 5, name: 'Docker', icon: docker },
	{ id: 6, name: 'Express.js', icon: express },
	{ id: 7, name: 'Figma', icon: figma },
	{ id: 9, name: 'Git', icon: git },
	{ id: 10, name: 'GitHub', icon: github },
	{ id: 11, name: 'HTML', icon: html },
	{ id: 13, name: 'JavaScript', icon: javascript },
	{ id: 17, name: 'MongoDB', icon: mongo },
	{ id: 18, name: 'MySQL', icon: mysql },
	{ id: 19, name: 'Netlify', icon: netlify },
	{ id: 20, name: 'Next.js', icon: nextjs },
	{ id: 21, name: 'Node.js', icon: node },
	{ id: 25, name: 'React', icon: react },
	{ id: 28, name: 'Tailwind CSS', icon: tailwindcss },
	{ id: 29, name: 'TypeScript', icon: typescript },
	{ id: 30, name: 'Vercel', icon: vercel },
];

export const skillIcons = iconMappings.map(({ id, name, icon }) => ({
	id,
	name,
	icon: (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="cursor-none rounded-2xl">
					<Image
						key={id}
						src={icon}
						alt={`${name} Icon`}
						className="border border-white/20 bg-slate-400/40 w-10 h-10 rounded-2xl"
					/>
				</TooltipTrigger>
				<TooltipContent>{name}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
}));

export const attraction = ['better ', 'modern ', 'awesome ', 'Dynamic ', 'Interactive '];
