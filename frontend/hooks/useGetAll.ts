import Axios from 'axios';
import { useEffect } from 'react';
import { Dish } from '../typings';

const useGetAll = (item: string, items: any[], setItem: (value: Array<any>) => void) => {
  useEffect(() => {
    Axios.get(`http://localhost:4000/${item}/getall`, { withCredentials: true })
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, [item, setItem]);
};

export default useGetAll;
function filterItem(items: any[]): any[] {
  throw new Error('Function not implemented.');
}

