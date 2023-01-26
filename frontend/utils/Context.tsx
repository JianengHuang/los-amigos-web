import Axios from 'axios';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import UserInterface from '../interfaces/UserInterface';

export type ContextInterface = UserInterface | undefined;

export const SelectedContext = createContext<ContextInterface>(undefined);

export const ContextProvider = (props: PropsWithChildren<any>) => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    Axios.get('http://localhost:4000/user/getuser', {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    });
  });
  return (
    <SelectedContext.Provider value={user}>
      {props.children}
    </SelectedContext.Provider>
  );
};
