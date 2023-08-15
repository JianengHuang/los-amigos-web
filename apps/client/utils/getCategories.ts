export default async function getCategories() {
	const response = await fetch(
		`http://${process.env.API_HOST}:${process.env.API_PORT}/category`,
		{
			next: {
				tags: ['category'],
			},
		},
	);
	const categories = await response.json();
	return categories.categories;
}
