import Axios from 'axios';
import { useEffect } from 'react';
import DishInterface from '../../../interfaces/DishInterface';

const useFetchDishes = (setDishes: any) => {
  useEffect(() => {
    Axios.get('http://localhost:4000/dish/getall')
      .then((response) => {
        setDishes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log('Error fetching dishes');
      });
  });
};

export default useFetchDishes;
