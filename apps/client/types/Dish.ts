export type Dish = {
	id: string;
	dishId: number;
	name: string;
	description: string;
	ingredients: string[];
	price: number;
	image: string;
	category: string;
	allergens: number[];
	mightContain: number[];
	isRecommended: boolean;
	createdAt: Date;
	updatedAt: Date;
};
