import { Dispatch, SetStateAction, useEffect } from 'react';
import { Dish } from '../../../typings';

const useFilterDish = (
  dishes: Dish[],
  setDishes: Dispatch<SetStateAction<Dish[]>>
) => {
  useEffect(() => {
    for (let dish of dishes) {
      dish.ingredients = dish.ingredients.toString();
    }
    setDishes(dishes);
  }, [dishes, setDishes]);
};

export default useFilterDish;
