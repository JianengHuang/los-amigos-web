import DishContainer from '@components/DishContainer';
import { Suspense } from 'react';
import getDishes from 'utils/getDishes';
import Loading from './loading';
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
		<div>
			<h1>Menu</h1>
			{categorizedDishes.map((category) => (
				<div key={category.id}>
					<h2>{category.category}</h2>
					<Suspense fallback={<Loading />}>
						{category.dishes.map((dish) => (
							<DishContainer key={dish.id} dish={dish} />
						))}
					</Suspense>
					<hr />
				</div>
			))}
		</div>
	);
}
