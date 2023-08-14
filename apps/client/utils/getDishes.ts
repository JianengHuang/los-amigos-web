export default async function getDishes() {
	const response = await fetch(
		`http://${process.env.API_HOST}:${process.env.API_PORT}/dish`,
		{
			cache: 'no-cache',
		},
	);
	const dishes = await response.json();
	return dishes.dishes;
}
