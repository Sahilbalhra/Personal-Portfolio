'use client';

import React from 'react';

import { iconMappings } from '@/lib/data';

import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
	return (
		<div className="my-8 rounded-md flex flex-col antialiased bg-white  dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards items={iconMappings} direction="right" speed="slow" pauseOnHover={false} className="my-2" />
			<InfiniteMovingCards items={iconMappings} direction="left" speed="slow" pauseOnHover={false} className="my-2" />
			<InfiniteMovingCards items={iconMappings} direction="right" speed="slow" pauseOnHover={false} className="my-2" />
		</div>
	);
}
