import React from 'react';

import OrbitingCircles from '@/components/magicui/orbiting-circles';

type IconKeys = keyof typeof Icons;

export function SkillSection() {
	return (
		<div className="relative flex h-[640px] w-[640px] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background dark:bg-transparent">
			<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black w-full">
				Skills
			</span>
			{Object.keys(Icons).map((key, index) => (
				<React.Fragment key={key}>
					<OrbitingCircles
						className="size-[30px] border-none bg-transparent"
						duration={22.5 - (index + 1)}
						delay={20}
						radius={17 * (index + 1) * 2}
						key={key}
					>
						{Icons[key as IconKeys]()}
					</OrbitingCircles>
				</React.Fragment>
			))}
		</div>
	);
}

type IconType = {
	html: () => JSX.Element;
	css: () => JSX.Element;
	javascript: () => JSX.Element;
	typescript: () => JSX.Element;
	react: () => JSX.Element;
	nextjs: () => JSX.Element;
	nodejs: () => JSX.Element;
	expressjs: () => JSX.Element;
	monogodb: () => JSX.Element;
};

const Icons: IconType = {
	html: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_64)">
				<path
					d="M92 0H28.25C12.717 0 0.125 12.592 0.125 28.125V91.875C0.125 107.408 12.717 120 28.25 120H92C107.533 120 120.125 107.408 120.125 91.875V28.125C120.125 12.592 107.533 0 92 0Z"
					fill="#E14E1D"
				/>
				<path
					d="M22.625 17.8125L26.6609 63.0905H78.5563L76.8148 82.5108L60.1058 87.0286L43.4281 82.5173L42.313 70.0477H27.2844L29.4336 94.0856L60.1025 102.604L90.8103 94.0856L94.9273 48.1195H40.355L38.9848 32.7867H96.2839L97.625 17.8125H22.625Z"
					fill="white"
				/>
				<path
					d="M60.125 17.8125H22.625L26.6609 63.0905H60.125V48.1195H40.355L38.9848 32.7867H60.125V17.8125ZM60.125 87.022L60.1058 87.0286L43.4281 82.5173L42.313 70.0477H27.2844L29.4336 94.0856L60.1025 102.604L60.1255 102.597L60.125 87.022Z"
					fill="#EBEBEB"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_64">
					<rect width="120" height="120" fill="white" transform="translate(0.125)" />
				</clipPath>
			</defs>
		</svg>
	),
	css: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_3_28)">
				<path
					d="M92.375 0H28.625C13.092 0 0.5 12.592 0.5 28.125V91.875C0.5 107.408 13.092 120 28.625 120H92.375C107.908 120 120.5 107.408 120.5 91.875V28.125C120.5 12.592 107.908 0 92.375 0Z"
					fill="#0277BD"
				/>
				<path
					d="M25.6967 48.1177L27.0383 63.0905H60.545V48.1177H25.6967ZM60.5445 17.8125H23L24.3612 32.7853H60.5445V17.8125ZM60.5445 102.582V87.0038L60.4789 87.0211L43.8036 82.5187L42.7377 70.5769H27.7072L29.8048 94.0866L60.4756 102.601L60.5445 102.582Z"
					fill="#EBEBEB"
				/>
				<path
					d="M78.9303 63.0905L77.1922 82.5089L60.493 87.0164V102.593L91.1881 94.0866L91.4131 91.5567L94.9316 52.1386L95.2967 48.1177L98 17.8125H60.493V32.7853H81.5909L80.2287 48.1177H60.493V63.0905H78.9303Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_3_28">
					<rect width="120" height="120" fill="white" transform="translate(0.5)" />
				</clipPath>
			</defs>
		</svg>
	),
	javascript: () => (
		<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_69)">
				<path
					d="M91.875 0H28.125C12.592 0 0 12.592 0 28.125V91.875C0 107.408 12.592 120 28.125 120H91.875C107.408 120 120 107.408 120 91.875V28.125C120 12.592 107.408 0 91.875 0Z"
					fill="#F0DB4F"
				/>
				<path
					d="M31.5525 100.281L40.7353 94.7231C42.5072 97.8642 44.1187 100.522 47.9845 100.522C51.69 100.522 54.0262 99.0727 54.0262 93.4345V55.0917H65.3034V93.5939C65.3034 105.274 58.4568 110.59 48.4678 110.59C39.4467 110.59 34.2103 105.918 31.552 100.28M71.4286 99.0722L80.6104 93.7561C83.0278 97.7034 86.1693 100.603 91.7268 100.603C96.3998 100.603 99.3792 98.2669 99.3792 95.0447C99.3792 91.1784 96.3183 89.8087 91.1629 87.5541L88.3443 86.3452C80.2083 82.882 74.8111 78.532 74.8111 69.3492C74.8111 60.8911 81.2554 54.4467 91.3247 54.4467C98.4937 54.4467 103.649 56.9442 107.354 63.4687L98.5739 69.1073C96.6403 65.6437 94.5468 64.2745 91.3247 64.2745C88.0218 64.2745 85.9275 66.3689 85.9275 69.1073C85.9275 72.4903 88.0218 73.86 92.8547 75.9548L95.6737 77.1628C105.259 81.2714 110.656 85.4592 110.656 94.8834C110.656 105.034 102.682 110.591 91.9687 110.591C81.4973 110.591 74.7309 105.597 71.4286 99.0722Z"
					fill="#323330"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_69">
					<rect width="120" height="120" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	typescript: () => (
		<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_73)">
				<path
					d="M91.875 0H28.125C12.592 0 0 12.592 0 28.125V91.875C0 107.408 12.592 120 28.125 120H91.875C107.408 120 120 107.408 120 91.875V28.125C120 12.592 107.408 0 91.875 0Z"
					fill="#007ACC"
				/>
				<path
					d="M26.5364 60.398L26.4984 65.3123H42.1172V109.693H53.1656V65.3123H68.7844V60.4931C68.7844 57.8264 68.7277 55.598 68.6513 55.5408C68.5941 55.4648 59.0892 55.4264 47.5655 55.4456L26.5941 55.5028L26.5364 60.398ZM96.8283 55.3631C99.8756 56.1253 102.2 57.4777 104.333 59.6869C105.438 60.8681 107.076 63.0206 107.209 63.5348C107.247 63.6872 102.028 67.192 98.8664 69.1538C98.752 69.2302 98.2945 68.7347 97.7803 67.973C96.2377 65.7253 94.6186 64.7536 92.1422 64.5825C88.5042 64.3345 86.1614 66.2395 86.1806 69.4205C86.1806 70.3538 86.3138 70.9059 86.6949 71.6681C87.4945 73.3252 88.9805 74.3156 93.6474 76.3345C102.238 80.0302 105.914 82.4681 108.2 85.9345C110.752 89.8013 111.323 95.9728 109.59 100.563C107.685 105.554 102.961 108.944 96.3136 110.068C94.2567 110.43 89.3803 110.373 87.1711 109.973C82.3519 109.116 77.7806 106.735 74.9616 103.611C73.8567 102.392 71.7042 99.2109 71.8378 98.9822C71.8945 98.9063 72.39 98.6016 72.9422 98.2777C73.4756 97.973 75.495 96.8109 77.3995 95.7061L80.8472 93.7059L81.5709 94.7728C82.5806 96.3155 84.7898 98.43 86.1234 99.1345C89.9517 101.154 95.2092 100.868 97.7995 98.5444C98.9044 97.5347 99.3614 96.487 99.3614 94.9444C99.3614 93.5536 99.1899 92.9442 98.4661 91.8966C97.5328 90.5634 95.6283 89.4394 90.2184 87.0966C84.0281 84.4298 81.3614 82.7728 78.9234 80.1441C77.5139 78.6206 76.1803 76.1822 75.6281 74.1441C75.1711 72.4491 75.0567 68.2013 75.4186 66.487C76.6945 60.5063 81.2091 56.3348 87.7233 55.0964C89.8378 54.6966 94.7517 54.8489 96.8283 55.3631Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_73">
					<rect width="120" height="120" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	react: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_120)">
				<path
					d="M92 0H28.25C12.717 0 0.125 12.592 0.125 28.125V91.875C0.125 107.408 12.717 120 28.25 120H92C107.533 120 120.125 107.408 120.125 91.875V28.125C120.125 12.592 107.533 0 92 0Z"
					fill="#242938"
				/>
				<path
					d="M60.1255 68.8833C64.9555 68.8833 68.8705 64.9678 68.8705 60.1383C68.8705 55.3088 64.9555 51.3933 60.1255 51.3933C55.2959 51.3933 51.3805 55.3088 51.3805 60.1383C51.3805 64.9678 55.2959 68.8833 60.1255 68.8833Z"
					fill="#00D8FF"
				/>
				<path
					d="M60.1259 42.3577C71.8672 42.3577 82.7745 44.0424 90.9987 46.8741C100.908 50.2852 107 55.4559 107 60.1383C107 65.0175 100.543 70.5108 89.9023 74.0363C81.8577 76.7016 71.2714 78.0928 60.1259 78.0928C48.6987 78.0928 37.8777 76.7869 29.742 74.0067C19.4492 70.4888 13.25 64.9247 13.25 60.1383C13.25 55.4939 19.0672 50.363 28.8369 46.957C37.0916 44.0789 48.268 42.3577 60.1241 42.3577H60.1259Z"
					stroke="#00D8FF"
					strokeWidth="3"
				/>
				<path
					d="M44.6473 51.2991C50.5133 41.1281 57.4212 32.5209 63.9828 26.8116C71.8878 19.9317 79.4112 17.2373 83.4669 19.5759C87.6936 22.0134 89.2269 30.3516 86.9651 41.3306C85.2565 49.6308 81.1719 59.4961 75.6036 69.1514C69.8947 79.0505 63.358 87.772 56.8859 93.4289C48.6964 100.588 40.7787 103.178 36.6326 100.787C32.6094 98.4689 31.0709 90.8653 33.0012 80.7005C34.632 72.1116 38.7247 61.5698 44.6455 51.2991H44.6473Z"
					stroke="#00D8FF"
					strokeWidth="3"
				/>
				<path
					d="M44.6619 69.1772C38.7795 59.0175 34.7745 48.7322 33.103 40.1963C31.0906 29.9114 32.5133 22.0481 36.5656 19.7025C40.7886 17.2575 48.7775 20.0935 57.1597 27.5363C63.4972 33.1631 70.0049 41.6274 75.5891 51.2733C81.3144 61.163 85.6053 71.1825 87.2746 79.6144C89.3867 90.285 87.6772 98.438 83.5349 100.836C79.5158 103.163 72.1606 100.699 64.318 93.9502C57.6917 88.2483 50.6024 79.4382 44.6619 69.1772Z"
					stroke="#00D8FF"
					strokeWidth="3"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_120">
					<rect width="120" height="120" fill="white" transform="translate(0.125)" />
				</clipPath>
			</defs>
		</svg>
	),
	nextjs: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_116)">
				<path
					d="M92.125 0H28.375C12.842 0 0.25 12.592 0.25 28.125V91.875C0.25 107.408 12.842 120 28.375 120H92.125C107.658 120 120.25 107.408 120.25 91.875V28.125C120.25 12.592 107.658 0 92.125 0Z"
					fill="#242938"
				/>
				<path
					d="M57.1801 13.1503C56.9786 13.1686 56.3369 13.2328 55.7594 13.2783C42.4441 14.4788 29.9716 21.6638 22.0717 32.7066C17.6734 38.8467 14.8595 45.8114 13.7969 53.1891C13.4214 55.7644 13.3755 56.5252 13.3755 60.0164C13.3755 63.5082 13.4214 64.2689 13.7973 66.8438C16.3445 84.4482 28.8723 99.2396 45.8626 104.72C48.9053 105.7 52.1125 106.369 55.7598 106.772C57.1806 106.928 63.3203 106.928 64.7411 106.772C71.0369 106.076 76.3703 104.518 81.6306 101.833C82.4369 101.421 82.593 101.31 82.4828 101.219C82.4097 101.164 78.9728 96.5541 74.8492 90.9825L67.353 80.8561L57.9592 66.9539C52.7908 59.311 48.5387 53.0606 48.5017 53.0606C48.4651 53.0517 48.4286 59.2285 48.4103 66.7706C48.3826 79.9763 48.3737 80.5078 48.2087 80.8191C47.9706 81.2681 47.7873 81.4514 47.402 81.6535C47.1091 81.7997 46.8522 81.8274 45.4684 81.8274H43.8831L43.4612 81.5616C43.2001 81.398 42.9879 81.1669 42.8472 80.8927L42.655 80.4802L42.6737 62.1061L42.7009 43.7227L42.985 43.365C43.1317 43.1728 43.4434 42.9253 43.6633 42.8063C44.0387 42.623 44.1855 42.6047 45.7708 42.6047C47.6406 42.6047 47.9519 42.6778 48.438 43.2094C48.5753 43.3561 53.6612 51.0174 59.7466 60.2456C65.9072 69.5864 72.0716 78.9247 78.2397 88.2605L85.6628 99.5053L86.0387 99.2578C89.365 97.095 92.8844 94.0158 95.6702 90.8081C101.599 83.9991 105.421 75.6966 106.704 66.8438C107.08 64.2689 107.125 63.5082 107.125 60.0164C107.125 56.5252 107.08 55.7644 106.704 53.1891C104.156 35.5847 91.6286 20.7938 74.6383 15.3136C71.6416 14.3419 68.4526 13.673 64.8784 13.2699C63.9986 13.178 57.9409 13.0777 57.1806 13.1508M76.3703 41.505C76.81 41.7249 77.1677 42.1463 77.2961 42.586C77.3692 42.8246 77.3875 47.9199 77.3692 59.4024L77.3416 75.8799L74.4367 71.4258L71.5225 66.9722V54.9947C71.5225 47.251 71.559 42.8977 71.6139 42.6867C71.7606 42.1739 72.0812 41.7708 72.5214 41.5322C72.8969 41.34 73.0347 41.3213 74.4733 41.3213C75.8298 41.3213 76.068 41.34 76.3703 41.505Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_116">
					<rect width="120" height="120" fill="white" transform="translate(0.25)" />
				</clipPath>
			</defs>
		</svg>
	),
	nodejs: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_143)">
				<path
					d="M92.5 0H28.75C13.217 0 0.625 12.592 0.625 28.125V91.875C0.625 107.408 13.217 120 28.75 120H92.5C108.033 120 120.625 107.408 120.625 91.875V28.125C120.625 12.592 108.033 0 92.5 0Z"
					fill="#242938"
				/>
				<path
					d="M56.8178 14.5856C59.1236 13.2661 62.1264 13.26 64.4299 14.5856C76.0183 21.1341 87.6105 27.6717 99.197 34.2239C101.377 35.4516 102.834 37.8769 102.812 40.388V79.7841C102.828 82.3992 101.227 84.8827 98.9275 86.0822C87.377 92.5945 75.8322 99.1144 64.2836 105.627C61.9309 106.972 58.8677 106.868 56.5877 105.412C53.125 103.405 49.6563 101.407 46.1931 99.4022C45.4853 98.9803 44.6875 98.6447 44.1878 97.9584C44.6298 97.3631 45.4197 97.2891 46.0614 97.0289C47.5066 96.5691 48.8345 95.8312 50.162 95.1155C50.4981 94.8858 50.9078 94.9739 51.2299 95.1792C54.1909 96.877 57.1263 98.6245 60.0972 100.306C60.7309 100.672 61.3727 100.186 61.9145 99.8841C73.2489 93.4777 84.5973 87.0961 95.9303 80.6878C96.3503 80.4858 96.5824 80.04 96.5481 79.5802C96.5561 66.5841 96.55 53.5861 96.5524 40.5895C96.6002 40.0683 96.2983 39.5883 95.8263 39.3745C84.3161 32.8922 72.8111 26.4005 61.3028 19.9167C61.1035 19.7795 60.8673 19.7059 60.6254 19.7055C60.3834 19.7051 60.147 19.7779 59.9472 19.9144C48.4384 26.4005 36.9363 32.8988 25.4275 39.3802C24.9573 39.5944 24.6419 40.0664 24.6977 40.5895C24.7 53.5861 24.6977 66.5841 24.6977 79.582C24.6777 79.8065 24.727 80.0318 24.839 80.2274C24.951 80.423 25.1202 80.5796 25.3239 80.6761C28.3947 82.4175 31.4697 84.1467 34.5428 85.8825C36.2744 86.8139 38.3997 87.368 40.3075 86.6541C41.9903 86.0503 43.1702 84.3323 43.1383 82.5455C43.1542 69.6253 43.1303 56.7033 43.15 43.7845C43.1078 43.2112 43.652 42.7373 44.2099 42.7917C45.6855 42.7814 47.163 42.7716 48.6386 42.7955C49.2545 42.7814 49.6783 43.3992 49.6024 43.9767C49.5963 56.9789 49.6183 69.9811 49.5925 82.9828C49.5963 86.4483 48.1727 90.2189 44.9673 91.9144C41.0191 93.9595 36.1384 93.5259 32.2375 91.5647C28.8606 89.8791 25.6375 87.8897 22.3206 86.0841C20.0153 84.8911 18.4216 82.3978 18.438 79.7845V40.388C18.4136 37.8248 19.9295 35.3555 22.1763 34.1456C33.7248 27.6286 45.2716 21.1059 56.8178 14.5856Z"
					fill="#81CD39"
				/>
				<path
					d="M66.8931 41.8758C71.9298 41.5514 77.3219 41.6836 81.8542 44.1651C85.3638 46.0664 87.3091 50.0573 87.3709 53.9559C87.273 54.4814 86.7231 54.7715 86.2211 54.7354C84.76 54.7336 83.298 54.7556 81.8369 54.7256C81.2167 54.7495 80.8567 54.1781 80.7789 53.6301C80.3589 51.7645 79.3412 49.9172 77.5858 49.0172C74.8905 47.6681 71.7658 47.7361 68.8267 47.7642C66.6812 47.8776 64.3741 48.0637 62.5562 49.3251C61.1608 50.2809 60.737 52.2103 61.2348 53.7642C61.7045 54.8798 62.9922 55.2398 64.0464 55.5717C70.1162 57.1594 76.5484 57.0009 82.5025 59.0901C84.9677 59.9418 87.3789 61.5979 88.2227 64.1789C89.3266 67.6383 88.8428 71.7726 86.3814 74.5495C84.3855 76.8347 81.4787 78.0787 78.5795 78.7542C74.7227 79.6144 70.72 79.6364 66.8031 79.2544C63.1202 78.8344 59.2872 77.8669 56.4442 75.3576C54.0128 73.2464 52.8255 69.9567 52.9431 66.7823C52.9713 66.2461 53.5052 65.872 54.0189 65.9161C55.4903 65.9044 56.9622 65.9001 58.4336 65.9184C59.0219 65.8762 59.4573 66.3844 59.4878 66.9384C59.7588 68.7154 60.4267 70.5811 61.9769 71.6344C64.9675 73.5642 68.7208 73.432 72.1455 73.4859C74.9828 73.3603 78.168 73.3223 80.4831 71.4468C81.7047 70.3772 82.0666 68.5875 81.7366 67.0481C81.3789 65.7483 80.0191 65.1426 78.8514 64.7465C72.8594 62.8514 66.355 63.539 60.4211 61.3954C58.0117 60.5442 55.682 58.9345 54.7567 56.4595C53.4653 52.9565 54.0569 48.6234 56.7761 45.9408C59.4273 43.2712 63.2542 42.2433 66.8931 41.8758Z"
					fill="#81CD39"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_143">
					<rect width="120" height="120" fill="white" transform="translate(0.625)" />
				</clipPath>
			</defs>
		</svg>
	),
	expressjs: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_139)">
				<path
					d="M92.625 0H28.875C13.342 0 0.75 12.592 0.75 28.125V91.875C0.75 107.408 13.342 120 28.875 120H92.625C108.158 120 120.75 107.408 120.75 91.875V28.125C120.75 12.592 108.158 0 92.625 0Z"
					fill="#242938"
				/>
				<path
					d="M107.625 85.7517C106.26 86.2685 104.754 86.2675 103.39 85.7489C102.026 85.2302 100.899 84.2298 100.223 82.9369C95.9747 76.5774 91.2834 70.5047 86.7745 64.3017L84.8194 61.6955C79.4503 68.8889 74.0812 75.7955 69.1814 82.9631C68.5432 84.1989 67.4775 85.1605 66.1829 85.6688C64.8883 86.1771 63.453 86.1974 62.1445 85.7259L82.2914 58.6983L63.5517 34.2764C64.9007 33.7893 66.3764 33.7826 67.7297 34.2574C69.0831 34.7322 70.2311 35.6595 70.98 36.8827C75.3323 43.2427 80.1544 49.3153 84.9497 55.7531C89.7717 49.3674 94.5412 43.2684 98.9981 36.9609C99.6399 35.7453 100.706 34.8079 101.994 34.3274C103.282 33.8468 104.702 33.8565 105.983 34.3547L98.7112 43.9983C95.4534 48.2986 92.2477 52.6252 88.8595 56.8214C88.5863 57.0658 88.3678 57.3651 88.2182 57.6997C88.0685 58.0343 87.9912 58.3967 87.9912 58.7632C87.9912 59.1298 88.0685 59.4922 88.2182 59.8268C88.3678 60.1614 88.5863 60.4606 88.8595 60.705C95.0887 68.9672 101.265 77.2552 107.625 85.7517ZM13.875 58.3594C14.4225 55.7531 14.7609 52.912 15.517 50.2538C20.0259 34.2249 38.4005 27.5522 51.0413 37.4827C58.4433 43.2952 60.2939 51.5311 59.9292 60.8095H18.2278C17.55 77.3859 29.513 87.3942 44.812 82.2858C47.2938 81.398 49.5154 79.9061 51.2763 77.9449C53.0373 75.9837 54.2821 73.6149 54.8986 71.0522C55.7067 68.4459 57.0098 68.003 59.4858 68.7586C59.0781 71.9316 57.9563 74.9709 56.2048 77.6479C54.4533 80.3249 52.1176 82.5699 49.3734 84.2142C44.8395 86.6938 39.6376 87.6762 34.5117 87.0208C29.3857 86.3655 24.5983 84.106 20.8341 80.5655C17.11 76.3783 14.8582 71.0875 14.4225 65.5008C14.4225 64.6149 14.0836 63.7284 13.9012 62.8945C13.884 61.3829 13.8753 59.8711 13.875 58.3594ZM18.2798 57.2386H55.9936C55.7587 45.2236 48.1744 36.7008 38.062 36.623C26.8027 36.4664 18.7491 44.8064 18.2536 57.1866L18.2798 57.2386Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_139">
					<rect width="120" height="120" fill="white" transform="translate(0.75)" />
				</clipPath>
			</defs>
		</svg>
	),
	monogodb: () => (
		<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_5_98)">
				<path
					d="M92.5 0H28.75C13.217 0 0.625 12.592 0.625 28.125V91.875C0.625 107.408 13.217 120 28.75 120H92.5C108.033 120 120.625 107.408 120.625 91.875V28.125C120.625 12.592 108.033 0 92.5 0Z"
					fill="#023430"
				/>
				<path
					d="M80.8623 50.4333C75.9231 28.6453 65.6294 22.845 63.0034 18.7448C61.9205 16.9386 60.9613 15.061 60.1323 13.125C59.9936 15.0609 59.7386 16.2797 58.0933 17.7478C54.79 20.693 40.7603 32.1258 39.5795 56.8819C38.4794 79.9641 56.5483 94.1967 58.9352 95.6681C60.7708 96.5714 63.0063 95.6873 64.097 94.8581C72.8069 88.8806 84.7075 72.9441 80.8717 50.4333"
					fill="#10AA50"
				/>
				<path
					d="M60.8805 83.377C60.4258 89.0901 60.1 92.4098 58.945 95.6747C58.945 95.6747 59.703 101.114 60.2355 106.875H62.1194C62.5688 102.818 63.2549 98.7903 64.1744 94.8131C61.7355 93.6131 60.9742 88.3903 60.8805 83.377Z"
					fill="#B8C4C2"
				/>
				<path
					d="M64.1711 94.8164C61.7064 93.6778 60.9934 88.3448 60.8837 83.377C61.4931 75.1819 61.6708 66.9604 61.4162 58.7465C61.2869 54.4369 61.4772 18.8287 60.3545 13.6153C61.1226 15.381 62.0075 17.0936 63.0034 18.7415C65.6294 22.845 75.9264 28.6453 80.8623 50.4333C84.7075 72.9056 72.8716 88.8 64.1711 94.8164Z"
					fill="#12924F"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5_98">
					<rect width="120" height="120" fill="white" transform="translate(0.625)" />
				</clipPath>
			</defs>
		</svg>
	),
};
