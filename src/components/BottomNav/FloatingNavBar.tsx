'use client';

import { CardContainer, CardItem } from '@/components/ui/acertinity-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/context/theme-context';
import { BsMoon, BsSun } from 'react-icons/bs';

import { Button } from '../../components/ui/button';

const FloatingNavBar = ({
	menus,
}: {
	menus: {
		tip: string;
		icons: any;
		link: string;
	}[];
}) => {
	const { theme, toggleTheme } = useTheme();
	const handleClick = (link: string) => {
		const section = document.getElementById(link);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div className="hover:scale-105 fixed   z-50 bottom-10 left-6 right-6 transition-all ease-linear">
			<CardContainer className="max-md:w-full ">
				<CardItem
					className={`glass-container bg-white dark:bg-white/10 border dark:border-white/20 bg-opacity-25 backdrop-blur-2xl pt-4   rounded-full  w-full items-center justify-evenly scale-0 shadow-xl flex flex-row gap-3 py-4 px-2`}
				>
					{menus.map((menu) => (
						<TooltipProvider key={menu.link}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant={'menu'}
										size={'menuicon'}
										className={'transition-all hover:scale-125 max-md:scale-100 ease-linear'}
										onClick={() => handleClick(menu.link)}
										// asChild
									>
										{menu.icons}
									</Button>
								</TooltipTrigger>
								<TooltipContent>{menu.tip}</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}
					<div className="bg-primary w-[1px] h-10"></div>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant={'menu'}
									size={'menuicon'}
									className={'transition-all hover:scale-125 max-md:scale-100 ease-linear'}
									onClick={toggleTheme}
									// asChild
								>
									{theme === 'light' ? <BsSun /> : <BsMoon />}
								</Button>
							</TooltipTrigger>
							<TooltipContent>Mode</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</CardItem>
			</CardContainer>
		</div>
	);
};

export default FloatingNavBar;
