import { Dish } from './Dish';

export type CategorizedDishes = {
	id: string;
	category: string;
	dishes: Dish[];
};
