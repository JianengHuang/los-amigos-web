'use client';

import Image from 'next/image';
import { useState } from 'react';
import Sidebar from './Sidebar';

const BurgerMenuIcon = () => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
	return (
		<>
			<div
				className="z-20 mx-3 my-3 w-full cursor-pointer"
				onClick={() => setSidebarIsOpen((sidebarIsOpen) => !sidebarIsOpen)}
			>
				<Image
					src="/icons/burger-icon.svg"
					alt="burger-icon"
					width="30"
					height="30"
				/>
			</div>
			{sidebarIsOpen && <Sidebar />}
		</>
	);
};

export default BurgerMenuIcon;
