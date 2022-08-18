import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href='/home'>Home</Link>
      <Link href='/login'>login</Link>
      <Link href='/profile'>profile</Link>
      <Link href='/register'>register</Link>
    </nav>
  );
};

export default Navbar;
