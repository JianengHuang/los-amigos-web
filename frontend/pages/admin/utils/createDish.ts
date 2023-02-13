import { Dish, FilteredDish } from '../../../typings';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { AlertStatus } from '@chakra-ui/react';

interface ActionsType {
  setStatus: Dispatch<SetStateAction<AlertStatus>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setLoading: (value: SetStateAction<boolean>) => void;
}

const createDish = (
  newValues: FilteredDish,
  { setStatus, setMessage, setLoading }: ActionsType
) => {
  axios
    .post('http://localhost:4000/dish/createdish', newValues, {
      withCredentials: true,
    })
    .then((res: AxiosResponse) => {
      console.log(res);
      if (res.status === 200) {
        setStatus('success');
        setMessage('Plato creado correctamente');
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

export default createDish;
