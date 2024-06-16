type Dish = {
  id: string;
  dishId: number;
  name: string;
  ingredients: string[];
  price: number;
  priority: number;
  image: string;
  description: string;
  category: string;
  allergens: number[];
  isRecommended: boolean;
  mightContain: number[];
};

export default Dish;
