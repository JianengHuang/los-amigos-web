import { AlertStatus } from '@chakra-ui/react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { Dish } from '../../../typings';

interface ActionsType {
  setStatus: Dispatch<SetStateAction<AlertStatus>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setLoading: (value: SetStateAction<boolean>) => void;
}

const editDish = (
  newValues: Dish,
  { setStatus, setMessage, setLoading }: ActionsType
) => {
  const id = newValues._id;
  axios
    .post(`http://localhost:4000/dish/editDish/${id}`, newValues, {
      withCredentials: true,
    })
    .then((res: AxiosResponse) => {
      console.log(res);
      if (res.status === 200) {
        setStatus('success');
        setMessage('Plato editado correctamente');
      } else {
        setStatus('error');
        setMessage(res.data);
      }
      setLoading(false);
    })
    .catch((err: AxiosError) => {
      setStatus('error');
      console.log('error', err);
      setMessage(err.message);
      setLoading(false);
    });
};

export default editDish;
