'use client';

import Button from '@components/Button';
import { useState } from 'react';
import { CategorizedDishes } from 'types/CategorizedDishes';
import DishContainerClient from '@components/DishContainerClient';
import useSetCategorizedDishes from 'hooks/useSetCategorizedDishes';
import { Category } from 'types/Category';
import useSetCategories from 'hooks/useSetCategories';

const Admin = () => {
	const [categoryClicked, setCategoryClicked] = useState(false);
	const [categorizedDishes, setCategorizedDishes] = useState<
		CategorizedDishes[]
	>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useSetCategorizedDishes(setCategorizedDishes);
	useSetCategories(setCategories);

	return (
		<>
			<div className="my-4 flex flex-row items-center justify-center gap-4">
				<Button
					text="Platos"
					color="bg-green-200"
					fontSize="text-3xl"
					onClick={() => {
						setCategoryClicked(false);
					}}
				/>
				<Button
					text="Categorias"
					color="bg-orange-200"
					fontSize="text-3xl"
					onClick={() => {
						setCategoryClicked(true);
					}}
				/>
			</div>

			<hr />
			<hr />
			<hr />

			{!categoryClicked ? (
				<div className="mt-3">
					{categorizedDishes.map((category) => (
						<div key={category.id}>
							<h2 className="mx-2 text-2xl capitalize">{category.category}</h2>
							{category.dishes.map((dish) => (
								<DishContainerClient key={dish.id} dish={dish} />
							))}
							<hr className="m-auto my-4 w-3/4" />
						</div>
					))}
				</div>
			) : (
				<div className="mt-6 flex flex-col items-center justify-center gap-2">
					{categories.map((category) => (
						<div
							key={category.id}
							className="w-auto cursor-move rounded-lg bg-orange-200 p-2 text-2xl"
							draggable
						>
							{category.category}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Admin;
