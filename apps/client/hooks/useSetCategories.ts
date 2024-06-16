import { Dispatch, SetStateAction, useEffect } from 'react';
import { Category } from 'types/Category';
import getCategories from 'utils/getCategories';

export default function useSetCategories(
	setCategories: Dispatch<SetStateAction<Category[]>>,
) {
	useEffect(() => {
		(async () => {
			const categories = await getCategories();
			await setCategories(categories);
		})();
	}, []);
}
