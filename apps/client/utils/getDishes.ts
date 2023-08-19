import { Dish } from 'types/Dish';

export default async function getDishes(): Promise<Dish[]> {
	const response = await fetch(
		`http://${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/dish`,
		{
			next: {
				tags: ['dish'],
			},
		},
	);
	const dishes = await response.json();
	return dishes.dishes;
}
