import Axios from 'axios';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import userInterface from '../interfaces/userInterface';

export const SelectedContext = createContext<Partial<userInterface>>({});

export const ContextProvider = (props: PropsWithChildren<any>) => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    Axios.get('http://localhost:4000/user', { withCredentials: true }).then(
      (res) => {
        setUser(res.data);
      }
    );
  }, []);
  return (
    <SelectedContext.Provider value={user!}>
      {props.children}
    </SelectedContext.Provider>
  );
};
