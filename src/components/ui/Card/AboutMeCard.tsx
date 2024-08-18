'use client';

import Image from 'next/image';

import React from 'react';

import { CardContainer, CardItem } from '@/components/ui/acertinity-card';

function AboutMeCard() {
	return (
		<CardContainer className="shadow-xl inter-var shadow-black/40 rounded-b-xl max-w-fit hover:shadow-none">
			<CardItem
				className="w-[300] border dark:border-black/[0.2] border-black/[0.1] rounded-xl bg-primary "
				translateZ="100"
			>
				<div className="flex flex-row gap-2 py-2 pl-4">
					<div className="w-3 h-3 transition-all ease-linear bg-red-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
					<div className="w-3 h-3 transition-all ease-linear bg-yellow-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
					<div className="w-3 h-3 transition-all ease-linear bg-green-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
				</div>
				<Image
					src={'/about_me.png'}
					height="300"
					width="300"
					className="object-cover rounded-b-xl group-hover/card:shadow-xl"
					alt="thumbnail"
				/>
			</CardItem>
		</CardContainer>
	);
}

export default AboutMeCard;
