import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { MdOutlineWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import wordanalyticsImg from '@/../public/wordanalytics.png';
import Steaming from '@/../public/Steaming Book.png'
import Intro from '@/../public/IntroImg.jpg';

export const links = [
    {
        name: 'Home',
        hash: '#home',
        icon:React.createElement(AiFillHome),
    },
    {
        name: 'About',
        hash: '#about',
        icon:React.createElement(AiFillInfoCircle),
    },
    {
        name: 'Projects',
        hash: '#projects',
        icon:React.createElement(BsPersonWorkspace),
    },
    {
        name: 'Skills',
        hash: '#skills',
        icon:React.createElement(GiSkills),
    },
    {
        name: 'Experience',
        hash: '#experience',
        icon:React.createElement(MdOutlineWork),
    },
    {
        name: 'Contact',
        hash: '#contact',
        icon:React.createElement(IoMdContact),
    },
] as const;

export const experiencesData = [
    {
        title: 'SDE Intern',
        company: 'Marvio360',
        location: 'Pune, Maharashtra',
        description:
            'Streamlining the online booking process to ensure it is both easy and efficient for customers. Implementing a responsive design approach, ensuring the website functions seamlessly across various screen dimensions and devices while maintaining optimal functionality.Developing multiple informative pages within the website to provide users with a comprehensive understanding of its offerings and features',
        icon: React.createElement(LuGraduationCap),
        date: 'April 2022 - Sept 2022',
    },
    {
        title: 'FrontEnd engineerr',
        location: 'Noida , Uttar Pradesh',
        company: 'Turns',
        description:
            'Developed a comprehensive marketing software solution for targeted communication, including email and text messaging, based on user segments. ntegrated a robust business manager functionality, encompassing reporting, order creation, and more, to streamline operations and enhance user experience.',
        icon: React.createElement(CgWorkAlt),
        date: 'Dec 2022 - Dec 2023',
    },
    {
        title: 'SDE-1',
        location: 'Noida , Uttar Pradesh',
        company: 'Turns',
        description:
            'Developed geofenced functionality to facilitate route creation, catering to the needs of laundromat business owners and their drivers.  Implemented automatic driver assignment feature to streamline operations. Implemented multi-role authentication system for enhanced security. Designed and implemented a Refresh Token mechanism to ensure a seamless experience for laundromat business owners.',
        icon: React.createElement(FaReact),
        date: 'Jan 2024 - present',
    },
] as const;

export const projectsData = [
    {
        title: 'Streaming App',
        description: 'I have developed a streaming application, similar to Amazon Prime, that leverages the power of the TMDB API to fetch movie information and the YouTube API to play trailers on a React Player.',
        tags: ['React', 'Next.js', 'Firebase', 'Tailwind',],
        imageUrl: Steaming,
    },
    {
        title: 'Journey',
        description: 'A full-stack MERN web application that combines the power of React.js, React-Router-DOM, Redux, Material UI, JSON Web Tokens (JWT), Google Authentication, MongoDB, Multer, Express, and Node.js.',
        tags: ['React', 'Javascript', 'Next.js', 'Tailwind', 'Redux', 'MongoDB', 'Express'],
        imageUrl: Intro,
    },
    {
        title: 'Word Analytics',
        description:
            'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
        tags: ['React', 'Next.js', 'Tailwind', 'Framer'],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Git',
    'Tailwind',
    'Material UI',
    'Shadcn UI',
    'MongoDB',
    'Redux',
    'GraphQL',
    'Apollo',
    'Express',
    // 'PostgreSQL',
    // 'Python',
    // 'Django',
    'Framer Motion',
] as const;
