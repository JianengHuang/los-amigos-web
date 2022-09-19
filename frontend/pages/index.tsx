import { Box, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import useFetchDishes from '../components/NavBar/hooks/useFetchDishes';
import DishInterface from '../interfaces/DishInterface';

const Home: NextPage = () => {
  const [dishes, setDishes] = useState<any>([]);
  useFetchDishes(setDishes);
  return (
    <>
      <SimpleGrid minChildWidth='120px' spacing='20px' margin={10}>
        {dishes.map((dish: any) => (
          <Box key={dish.id} bg='tomato'>
            {Object.keys(dish)
              .filter((key) => key !== '_id' && key !== '__v')
              .map((key: any, index: number) => (
                  <p key={index}>
                    <em>{dish[key]}</em>
                  </p>
              ))}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
