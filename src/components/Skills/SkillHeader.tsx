import { attraction } from '@/utils/objects/Sections';

import { FlipWords } from '../ui/flip-words';

const SkillHeader = () => {
	return (
		<div className={` flex flex-col items-center text-center gap-4 px-4 mb-6`}>
			<div className="flex flex-row items-end gap-4">
				<h1 className={`text-3xl md:text-5xl font-extrabold w-full text-primary `}>
					Tech stacks for 10x
					<FlipWords words={attraction} className="text-[#22c55e] dark:text-[#22c55e]" />
					websites
				</h1>
			</div>
			<p className={`rounded-md tracking-wide text-[#acaeb1]  text-base text-center`}>
				Proficient in a Diverse Range of Tech Stacks, with a Rapid Learning Curve for Embracing New Technologies.
			</p>
		</div>
	);
};

export default SkillHeader;
