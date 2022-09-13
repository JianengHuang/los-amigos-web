import type { NextPage } from 'next';
import { useState } from 'react';
import useFetchDishes from '../components/NavBar/hooks/useFetchDishes';
import DishInterface from '../interfaces/DishInterface';

const Home: NextPage = () => {
  const [dishes, setDishes] = useState<any>([]);
  useFetchDishes(setDishes);
  return (
    <>
      {dishes?.map((dish: any, index: number) => (
        <p key={index}>{dish}</p>
      ))}
    </>
  );
};

export default Home;
