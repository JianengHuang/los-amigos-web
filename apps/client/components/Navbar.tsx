import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<>
			<div className="absolute z-0 flex h-14 w-full bg-red-300" />
			<Link href="/">
				<div className="relative z-10 flex flex-row items-center justify-center">
					<Image
						width="75"
						height="75"
						src="/logo/los-amigos-happy-300.png"
						alt="los amigos logo"
					/>
					<div className="m-1 flex flex-col content-center justify-center">
						<h1 className="hidden text-xl leading-5">Restaurante Los Amigos</h1>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Navbar;
