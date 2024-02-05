import { get, writable } from 'svelte/store';

export type Position = { x: number; y: number };

export const shownPositions = writable<Position[]>([{ x: 0, y: 0 }]);

export const isShownPosition = ({ x, y }: Position): boolean => {
	return get(shownPositions).some((pos) => pos.x === x && pos.y === y);
};

export const updateShownPositions = (newPosition: Position): void => {
	shownPositions.update((shownPositions) => {
		console.log([...shownPositions, newPosition]);
		return [...shownPositions, newPosition];
	});
};
