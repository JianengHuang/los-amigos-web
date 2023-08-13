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
		<div className="m-3 grid grid-cols-[100px_1fr] bg-slate-500">
			<Image src={dishSrc} alt={dish.name} width={100} height={100} />
			<div>
				<p>{dish.name}</p>
				<p>{dish.description}</p>
				<p>{dish.price}</p>
				<p>{dish.category}</p>
			</div>
		</div>
	);
};

export default DishContainer;
