import Link from 'next/link';

type PropsType = {
	name: string;
	href: string;
	pathname: string;
};

const SidebarElement = ({ name, href, pathname }: PropsType) => {
	return (
		<Link href={href}>
			<div
				className={`${
					pathname === href
						? 'cursor-default bg-gray-400'
						: 'bg-gray-50 shadow-xl hover:bg-gray-200'
				} text-3xl`}
			>
				<aside className="pl-4">{name}</aside>
			</div>
		</Link>
	);
};

export default SidebarElement;
