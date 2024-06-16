import { RefObject, useEffect } from 'react';

export default function useOutsideClick(
	ref: RefObject<HTMLDivElement>,
	condition: boolean,
	callback: () => void,
) {
	const handleClick = ({ target }: MouseEvent): void => {
		if (condition && ref.current && !ref.current.contains(target as Node)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, [condition]);
}
