import fs from 'fs';
import React from 'react';
import { Dish } from 'types/Dish';
import Image from 'next/image';

type Props = {
	dish: Dish;
};

const DishContainer = ({ dish }: Props) => {
	let dishSrc = '/images/fallback.jpg';
	if (fs.existsSync(dish.image)) {
		dishSrc = dish.image;
	}
	return (
		<div className="m-3 grid max-w-xl grid-cols-[100px_1fr] gap-4 rounded-xl bg-red-100">
			<Image
				src={dishSrc}
				alt={dish.name}
				width={100}
				height={100}
				className="m-3 rounded-xl"
				priority={false}
			/>
			<div className="mx-3 my-2 leading-8">
				<h3 className="h-6 text-lg font-bold capitalize">{dish.name}</h3>
				<div>
					<p>{dish.price}€</p>
				</div>
				<div className="leading-5">
					<p>{dish.description}</p>
				</div>
			</div>
		</div>
	);
};

export default DishContainer;
