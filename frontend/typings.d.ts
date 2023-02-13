export type FilteredDish = {
  // _id?: string;
  id: string;
  name: string;
  ingredients: string;
  price: string;
  image: string;
  category: string;
  allergens: string;
  __v?: string;
};

export type Dish = {
  _id: string;
  id: string;
  name: string;
  ingredients: string;
  price: string;
  image: string;
  category: string;
  allergens: string;
  __v: string;
};
