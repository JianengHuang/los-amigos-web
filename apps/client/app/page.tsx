import DishContainer from '@components/DishContainer';
import { Suspense } from 'react';
import { Dish } from 'types/Dish';
import getDishes from 'utils/getDishes';
import Loading from './loading';

export default async function Home() {
	const response = await getDishes();
	const dishes: Dish[] = response;

	return (
		<div>
			<h1>Menu</h1>
			{dishes.map((dish) => (
				<Suspense key={dish.dishId} fallback={<Loading />}>
					<DishContainer dish={dish} />
				</Suspense>
			))}
		</div>
	);
}
