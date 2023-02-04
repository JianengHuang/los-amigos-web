import { Box, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import useFetchDishes from '../components/NavBar/hooks/useFetchDishes';

const Home: NextPage = () => {
  const [dishes, setDishes] = useState<any>([]);
  useFetchDishes(setDishes);
  const [link, setLink] = useState('/images/27.jpg');
  return (
    <>
      <SimpleGrid minChildWidth='120px' spacing='20px' margin={10}>
        {dishes?.map((dish: any) => (
          <Box key={dish._id} bg='tomato'>
            {Object.keys(dish)
              .filter(
                (key) => key !== '_id' && key !== '__v' && key !== 'image'
              )
              .map((key: any, index: number) => {
                return (
                  <p key={index}>
                    {key}: {dish[key]}
                  </p>
                );
              })}
            <Image
              src={dish['image']}
              alt={dish.name}
              height='100'
              width='100'
            />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
