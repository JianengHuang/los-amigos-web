import DishContainer from '@components/DishContainer';
import getDishes from 'utils/getDishes';
import getCategories from 'utils/getCategories';

export default async function Home() {
	const [categories, dishes] = await Promise.all([
		getCategories(),
		getDishes(),
	]);

	const categorizedDishes = categories.map((category) => ({
		id: category.id,
		category: category.category,
		dishes: dishes.filter((dish) => dish.category === category.category),
	}));

	return (
		<div className="mt-3">
			{categorizedDishes.map((category) => (
				<div key={category.id}>
					<h2 className="mx-2 text-2xl capitalize">{category.category}</h2>
					{category.dishes.map((dish) => (
						<DishContainer key={dish.id} dish={dish} />
					))}
					<hr className="m-auto my-4 w-3/4" />
				</div>
			))}
		</div>
	);
}
