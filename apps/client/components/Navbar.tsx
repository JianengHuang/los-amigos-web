import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<>
			<div className="absolute z-0 flex h-14 w-full bg-red-300">
				<Image
					src="/icons/burger-icon.svg"
					alt="burger-icon"
					width="30"
					height="30"
					className="mx-3 cursor-pointer"
				/>
			</div>
			<div className="relative flex flex-row items-center justify-center">
				<Link href="/">
					<Image
						width="75"
						height="75"
						src="/logo/centered-transparent-happy-300.png"
						alt="los amigos logo"
						className="select-none"
					/>
					<div className="m-1 flex hidden flex-col content-center justify-center">
						<h1 className="text-xl leading-5">Restaurante Los Amigos</h1>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
