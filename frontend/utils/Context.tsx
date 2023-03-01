import Axios from 'axios';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import UserInterface from '../interfaces/userInterface';
import Layout from '../components/Layout';
import Test from '../pages/test';

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
    Axios.get('http://localhost:4000/user/getuser', {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    });
  };
  return (
    <SelectedContext.Provider value={user}>
      <SelectedContextUpdate.Provider value={updateUser}>
        {props.children}
      </SelectedContextUpdate.Provider>
    </SelectedContext.Provider>
  );
};
