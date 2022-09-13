interface Dish {
  id: number;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  category: string;
}

type DishInterface = Dish | undefined;

export default DishInterface;
