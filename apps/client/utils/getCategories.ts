import { Category } from 'types/Category';

export default async function getCategories(): Promise<Category[]> {
	const response = await fetch(
		`http://${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/category`,
		{
			next: {
				tags: ['category'],
			},
		},
	);
	const categories = await response.json();
	return categories.categories;
}
