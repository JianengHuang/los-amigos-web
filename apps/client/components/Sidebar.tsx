'use client';

import useOutsideClick from 'hooks/useOutsideClick';
import { Dispatch, SetStateAction, useRef } from 'react';
import Image from 'next/image';
import SidebarElement from './SidebarElement';
import { usePathname } from 'next/navigation';

type PropsType = {
	sidebarIsOpen: boolean;
	setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }: PropsType) => {
	const boxRef = useRef(null);
	const pathname = usePathname();
	useOutsideClick(boxRef, sidebarIsOpen, () => setSidebarIsOpen(false));
	return (
		<div
			ref={boxRef}
			className={`${
				sidebarIsOpen ? 'translate-x-0' : '-translate-x-full'
			} fixed left-0 top-0 z-50 flex h-screen w-64 flex-col rounded-r-3xl bg-yellow-200 shadow-2xl duration-300 ease-in-out`}
		>
			<div
				className={`${
					sidebarIsOpen ? 'translate-x-0' : '-translate-x-full'
				} fixed m-3 flex max-h-9 w-[104px]  cursor-pointer flex-row items-center 
				justify-center gap-2 rounded-md bg-red-200 pl-1 hover:bg-red-400 md:m-6 md:w-[125px]`}
				onClick={() => setSidebarIsOpen(false)}
			>
				<Image
					src="/icons/cross-icon.svg"
					alt="cross icon"
					height="25"
					width="25"
					className="md:h-[30px] md:w-[30px]"
				/>
				<p className="text-2xl text-red-900 md:text-3xl">Cerrar</p>
			</div>
			<div className="relative top-24 flex flex-col gap-3">
				<SidebarElement name="Carta" href="/" pathname={pathname} />
				<SidebarElement name="Admin" href="/admin" pathname={pathname} />
			</div>
		</div>
	);
};

export default Sidebar;
