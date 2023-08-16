import Link from 'next/link';
import Image from 'next/image';
import BurgerMenuIcon from './BurgerMenuIcon';

const Navbar = () => {
	return (
		<>
			<div className="absolute h-14 w-full bg-red-300 md:h-20"></div>
			<div className="relative flex">
				<BurgerMenuIcon />
				<div className="z-10 flex w-full flex-row items-center justify-center">
					<Link href="/" className="flex select-none flex-row">
						<Image
							width="75"
							height="75"
							src="/logo/centered-transparent-happy-300.png"
							alt="los amigos logo"
						/>
						<div className="m-1 hidden md:mx-5 md:flex md:flex-col md:content-center md:justify-center">
							<h1 className="text-2xl font-semibold leading-5">
								Restaurante Los Amigos
							</h1>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
