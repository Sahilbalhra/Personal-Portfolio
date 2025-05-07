import Image from 'next/image';

import React from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CableCar, DatabaseBackup, FolderClock, Home, LampDesk, LayoutList, SmartphoneNfc } from 'lucide-react';
import { Paintbrush2 } from 'lucide-react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

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

export const experiencesData = [
	{
    title: 'SDE Intern',
    company: 'Marvio360',
    location: 'Pune, Maharashtra',
    description: [
      'Streamlined the online booking process to enhance user experience and operational efficiency.',
      'Implemented responsive design principles, ensuring seamless functionality across various devices and screen sizes.',
      'Developed multiple informative pages to provide users with comprehensive insights into the company\'s offerings and features.'
    ],
	techStack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'MUI','Bootstrap'],
    icon: React.createElement(LuGraduationCap),
    date: 'April 2022 – September 2022'
  },
  {
    title: 'Frontend Engineer',
    company: 'Turns',
    location: 'Noida, Uttar Pradesh',
    description: [
      'Engineered a comprehensive marketing software solution facilitating targeted communication via email and SMS, tailored to user segments.',
      'Integrated a robust business management module encompassing reporting, order creation, and more, streamlining operations and enhancing user experience.'
    ],
	techStack: ['HTML5', 'CSS3', 'JavaScript','TypeScript', 'React.js', 'Axios', 'Material-UI','TailwindCSS'],
    icon: React.createElement(CgWorkAlt),
    date: 'December 2022 – December 2023'
  },
  {
    title: 'SDE-1',
    company: 'Turns',
    location: 'Noida, Uttar Pradesh',
    description: [
      'Developed geofencing functionality to facilitate route creation, catering to the needs of laundromat business owners and their drivers.',
      'Implemented an automatic driver assignment feature to streamline operations.',
      'Established a multi-role authentication system to enhance security.',
      'Designed and implemented a Refresh Token mechanism to ensure a seamless experience for laundromat business owners.'
    ],
	techStack: ['HTML5', 'CSS3', 'JavaScript','TypeScript', 'React.js','NodeJS','MUI','TailwindCSS'],
    icon: React.createElement(CgWorkAlt),
    date: 'January 2024 – January 2025'
  },
  {
    title: 'Software Engineer',
    company: 'Pine Labs',
    location: 'Noida, Uttar Pradesh',
    description: [
      'Developed scalable and maintainable front-end applications using React.js.',
      'Built reusable UI components to ensure consistent styling across projects.',
      'Implemented robust form validation and error handling using React Hook Form, improving data integrity and user experience.',
      'Optimized API interactions by creating custom React hooks, enhancing code clarity and reusability by 25%.',
      'Integrated Axios interceptors for centralized request and response handling, strengthening security and improving communication efficiency.',
      'Leveraged Generative AI tools for rapid UI prototyping and code optimization, resulting in a 15% faster delivery cycle.'
    ],
	techStack: ['HTML5', 'CSS3', 'JavaScript','TypeScript', 'React.js','NodeJS','TailwindCSS','Graphql','Apollo', 'React Hook Form', 'Axios','Redux','Jest', 'React Testing Library'],

    icon: React.createElement(FaReact),
    date: 'January 2025 –  Present'
  }
] as const;

export const projects = [
	{
		name: 'E-book Client',
		description:
			'An interactive web application designed for book enthusiasts, allowing users to browse a vast collection of e-books. Users can download books for offline reading, provide reviews, and authenticate their accounts for a personalized experience. The platform ensures a smooth and intuitive user interface, making it easy to discover new books and manage their reading lists.',
		features: [
			'Extensive book catalog',
			'Book downloads for offline reading',
			'User-generated reviews and ratings',
			'Secure user authentication and personalized recommendations',
		],
		technologies: ['Next.js', 'TypeScript', 'NextAuth', 'Tailwind CSS', 'MongoDB'],
		links: {
			demo: 'https://ebook-client.vercel.app/',
			github: 'https://github.com/Sahilbalhra/E-book-Client',
		},
		image: '/images/Ebook-client.webp',
	},
	{
		name: 'E-book Dashboard',
		description:
			'A comprehensive management dashboard tailored for authors and administrators. This tool empowers users to manage their book listings efficiently, including adding new titles, updating existing content, and deleting outdated or irrelevant books. It also provides robust review management features, allowing authors to respond to user feedback and maintain the quality of the content.',
		features: [
			'Book management (Add, Edit, Delete)',
			'Review moderation and responses',
			'User-friendly admin interface',
			'Real-time updates and notifications',
		],
		technologies: ['React', 'ShadCN UI', 'React Query', 'Axios', 'Tailwind CSS', 'Node.js'],
		links: {
			demo: 'https://ebookdashboard.netlify.app/',
			github: 'https://github.com/Sahilbalhra/E-book-Dashboard',
		},
		image: '/images/EBook-dashboard.webp',
	},
	{
		name: 'NextIMDB',
		description:
			'A dynamic movie database application that allows users to explore upcoming releases, current hits, and all-time favorites. With powerful search capabilities, users can easily find information about their favorite movies, including ratings, trailers, and reviews. The application is designed to keep movie enthusiasts informed about the latest trends in cinema.',
		features: [
			'Upcoming movie previews',
			'Current box office hits',
			'Top-rated movie lists',
			'Comprehensive search functionality',
		],
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'TMDB API'],
		links: {
			demo: 'https://next-imdb-jet.vercel.app/',
			github: 'https://github.com/Sahilbalhra/Next_Imdb/tree/master',
		},
		image: '/images/IMDB.webp',
	},
	{
		name: 'Scratch-book',
		description:
			"A collaborative platform where users can express their creativity by drawing, sharing, and downloading ideas. This project fosters a community-driven environment where users can contribute to each other's work, building upon ideas and creating unique digital art. The platform supports real-time collaboration and offers various tools for drawing and sketching.",
		features: [
			'Collaborative drawing environment',
			'Downloadable artwork',
			'Real-time contributions and feedback',
			'Variety of drawing tools and templates',
		],
		technologies: ['React', 'Node.js', 'Socket.io', 'Canvas API', 'Tailwind CSS'],
		links: {
			demo: 'https://scratch-book.vercel.app/',
			github: 'https://github.com/Sahilbalhra/Scratch-book',
		},
		image: '/images/SkretchBook.webp',
	},
	{
		name: 'UniFormat',
		description:
			'A versatile media conversion tool that allows users to transform images and videos into various formats. This project is designed for users who need to quickly and easily convert media files to meet specific requirements. The application supports a wide range of formats and provides options for customizing the output settings to ensure compatibility across different platforms.',
		features: [
			'Image and video conversion',
			'Support for multiple file formats',
			'Customizable output settings',
			'Fast and efficient processing',
		],
		technologies: ['Node.js', 'Express', 'FFmpeg', 'React', 'Tailwind CSS'],
		links: {
			demo: 'https://uni-format.vercel.app/',
			github: 'https://github.com/Sahilbalhra/UniFormat',
		},
		image: '/images/UniFormat.webp',
	},
];
