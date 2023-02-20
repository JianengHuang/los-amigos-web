import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Dish } from '../../../typings';

interface Props {
  dish: Dish;
}

const DishContainer = ({ dish }: Props) => {
  console.log(dish);
  return (
    <>
      {dish && Object.keys(dish)
        .filter((key) => key !== '_id' && key !== '__v' && key !== 'image')
        .map((key) => (
          <Box bg='purple.200' key={dish._id}>
            <Text as='i'>{(key === "")}</Text>
            <Text>{dish[key as keyof Dish]}</Text>
          </Box>
        ))}
    </>
  );
};

export default DishContainer;
