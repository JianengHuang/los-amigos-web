import { useEffect, Dispatch, SetStateAction } from 'react';
import { CategorizedDishes } from 'types/CategorizedDishes';
import getCategories from 'utils/getCategories';
import getDishes from 'utils/getDishes';

export default function useSetCategorizedDishes(
	setCategorizedDishes: Dispatch<SetStateAction<CategorizedDishes[]>>,
) {
	useEffect(() => {
		(async () => {
			const [dishes, categories] = await Promise.all([
				getDishes(),
				getCategories(),
			]);
			await setCategorizedDishes(
				categories.map((category) => ({
					id: category.id,
					category: category.category,
					dishes: dishes.filter((dish) => dish.category === category.category),
				})),
			);
		})();
	}, []);
}
