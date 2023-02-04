import Footer from './Footer';
import Navbar from './NavBar/NavBar';
import { useUser, useUserUpdate } from '../utils/Context';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const updateuser = useUserUpdate();
  return (
    <>
      <Navbar />
      <p>Current User: {JSON.stringify(user, null, 2)}</p>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
