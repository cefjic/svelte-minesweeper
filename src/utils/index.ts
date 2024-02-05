import type { Position } from '../stores/shownPositions';

const doesCellExists = ({ x, y, array }: { x: number; y: number; array: number[][] }) => {
	return array[x] && array[x][y] !== undefined;
};

const generateMinePosition = (width: number) => Math.floor(Math.random() * width);

const generateMinesPositions = (nbMines: number, width: number) => {
	return Array.from({ length: nbMines }).reduce<Position[]>((acc) => {
		let x = generateMinePosition(width);
		let y = generateMinePosition(width);

		while (acc.some((pos) => pos.x === x && pos.y === y)) {
			x = generateMinePosition(width);
			y = generateMinePosition(width);
		}

		return [...acc, { x, y }];
	}, []);
};

const setMines = (array: number[][], nbMines: number, width: number) => {
	const minesPositions = generateMinesPositions(nbMines, width);

	minesPositions.forEach(({ x, y }) => {
		const directions = [
			{ x: x - 1, y },
			{ x: x + 1, y },
			{ x, y: y - 1 },
			{ x, y: y + 1 },
			{ x: x - 1, y: y - 1 },
			{ x: x + 1, y: y + 1 },
			{ x: x - 1, y: y + 1 },
			{ x: x + 1, y: y - 1 }
		];

		directions.forEach(({ x, y }) => {
			if (doesCellExists({ x, y, array })) {
				array[x][y] += 1;
			}
		});

		array[x][y] = 10;
	});

	return array;
};

const buildInitialArray = (width: number) =>
	Array.from({ length: width }, () => Array.from({ length: width }, () => 0));

export const buildMinesweeper = (width: number, nbMines: number) => {
	return setMines(buildInitialArray(width), nbMines, width);
};
