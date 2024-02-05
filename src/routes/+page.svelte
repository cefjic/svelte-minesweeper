<script lang="ts">
	import { get } from 'svelte/store';
	import '../app.css';
	import Cell from '../components/cell/index.svelte';
	import { buildMinesweeper } from '../utils';
	import { shownPositions } from '../stores/shownPositions';

	const width = 10;
	const nbMines = 10;

	const array = buildMinesweeper(width, nbMines);
	$: positions = get(shownPositions);
</script>

<div>
	{JSON.stringify(positions)}
	<div class="border-2 border-sky-500 m-auto mt-10 grid grid-cols-10 w-[400px]">
		{#each array as line, x}
			{#each line as i, y}
				<Cell position={{ x, y }} positionContent={i} />
			{/each}
		{/each}
	</div>
</div>
