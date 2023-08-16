'use client';

import useOutsideClick from 'hooks/useOutsideClick';
import { Dispatch, SetStateAction, useRef } from 'react';
import Image from 'next/image';

type PropsType = {
	setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ setSidebarIsOpen }: PropsType) => {
	const boxRef = useRef(null);
	useOutsideClick(boxRef, () => setSidebarIsOpen(false));
	return (
		<div
			ref={boxRef}
			className="fixed z-50 h-full w-64 rounded-r-3xl bg-yellow-200 shadow-2xl"
		>
			<div
				className="m-3 flex w-[104px] cursor-pointer flex-row gap-2 rounded-md bg-red-200 pl-1 hover:bg-red-400"
				onClick={() => setSidebarIsOpen(false)}
			>
				<Image
					src="/icons/cross-icon.svg"
					alt="cross icon"
					height="25"
					width="25"
				/>
				<p className="text-2xl text-red-900">Cerrar</p>
			</div>
		</div>
	);
};

export default Sidebar;
