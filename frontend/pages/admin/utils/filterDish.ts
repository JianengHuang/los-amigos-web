import { Dispatch, SetStateAction } from 'react';
import { Dish } from '../../../typings';

const filterDish = (
  dishes: Dish[],
  setDishes: Dispatch<SetStateAction<Dish[]>>
) => {
  for (const dish of dishes) {
    dish.ingredients = dish.ingredients.toString();
  }
  return dishes;
};

export default filterDish;
