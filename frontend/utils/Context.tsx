import Axios from 'axios';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import UserInterface from '../interfaces/UserInterface';
import Layout from '../components/Layout';

export type ContextInterface = UserInterface | undefined;

export const SelectedContext = createContext<any>(undefined);
export const SelectedContextUpdate = createContext<() => void>(() => {});

export const useUser = () => {
  return useContext(SelectedContext);
};

export const useUserUpdate = () => {
  return useContext(SelectedContextUpdate);
};

export const ContextProvider = (props: PropsWithChildren<any>) => {
  const [user, setUser] = useState<ContextInterface>(undefined);
  const updateUser = () => {
    // Axios.get('http://localhost:4000/user/getuser', {
    //   withCredentials: true,
    // }).then((res) => {
    //   setUser(res.data);
    // });
    setUser({ email: 'jianeng6@gmail.com', isAdmin: true });
  };
  return (
    <SelectedContext.Provider value={user}>
      <SelectedContextUpdate.Provider value={updateUser}>
        <Layout>{props.children}</Layout>
      </SelectedContextUpdate.Provider>
    </SelectedContext.Provider>
  );
};
