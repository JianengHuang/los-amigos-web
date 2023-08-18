'use client';

import Image from 'next/image';
import { useState } from 'react';
import Sidebar from './Sidebar';

const BurgerMenuIcon = () => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
	return (
		<>
			<div
				className="z-20 mx-3 my-3 max-h-[30px] max-w-[30px] cursor-pointer rounded-3xl
				hover:bg-gray-200 md:m-6 md:max-h-[40px] md:max-w-[40px]"
				onClick={() => setSidebarIsOpen((sidebarIsOpen) => !sidebarIsOpen)}
			>
				<Image
					src="/icons/burger-icon.svg"
					alt="burger-icon"
					width="30"
					height="30"
					className="md:h-[40px] md:w-[40px]"
				/>
			</div>
			<Sidebar
				sidebarIsOpen={sidebarIsOpen}
				setSidebarIsOpen={setSidebarIsOpen}
			/>
		</>
	);
};

export default BurgerMenuIcon;
