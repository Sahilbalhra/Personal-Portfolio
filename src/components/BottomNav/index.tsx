'use client';
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-context';

const BottomNavigation = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <div className='fixed bottom-2 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700 sm:hidden block'>
            <div className='mx-auto grid h-full max-w-lg grid-cols-6'>
                {links.map((link) => (
                       <motion.li
                       className='relative flex items-center justify-center'
                       key={link.hash}
                       initial={{ y: -100, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}>
                       <Link
                           className={clsx(
                               'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 text-[1.3rem]',
                               {
                                   'text-gray-950 dark:text-gray-200': activeSection === link.name,
                               }
                           )}
                           href={link.hash}
                           onClick={() => {
                               setActiveSection(link.name);
                               setTimeOfLastClick(Date.now());
                           }}>
                           {link.icon}

                           {link.name === activeSection && (
                               <motion.span
                                   className='absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800'
                                   layoutId='activeSection'
                                   transition={{
                                       type: 'spring',
                                       stiffness: 380,
                                       damping: 30,
                                   }}></motion.span>
                           )}
                       </Link>
                   </motion.li>
                    // <button
                    //     key={index}
                    //     type='button'
                    //     className={clsx(
                    //         'group inline-flex flex-col items-center justify-center rounded-s-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800',
                    //         {
                    //             'text-gray-950 dark:text-gray-200': activeSection === link.name,
                    //         }
                    //     )}
                    //     onClick={(e) => {
                    //         e.preventDefault();
                    //         setActiveSection(link.name);
                    //         setTimeOfLastClick(Date.now());
                    //     }}>
                    //     {link.icon}
                    //     <span className='sr-only'>{link.name}</span>
                    // </button>
                ))}
            </div>
        </div>
    );
};

export default BottomNavigation;
