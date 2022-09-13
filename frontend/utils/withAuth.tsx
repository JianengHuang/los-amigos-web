import Login from '../pages/login';
import { ContextInterface } from '../utils/Context';
import Error from '../pages/_error';

const withAuth = (Component: any, user: ContextInterface) => {
  if (user === undefined) {
    return <Login />;
  } else if (!user.isAdmin) {
    return <Error />;
  } else {
    return <Component />;
  }
};

export default withAuth;
