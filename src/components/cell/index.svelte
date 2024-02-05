<script lang="ts">
	import {
		isShownPosition,
		type Position,
		updateShownPositions
	} from '../../stores/shownPositions';

	export let position: Position;
	export let positionContent: number;
	let isVisible = isShownPosition(position);

	const onPositionClick = () => {
		if (!isVisible) {
			updateShownPositions(position);
		}
	};
</script>

{#key isVisible}
	<button
		class="w-10 h-10 align-middle text-center border border-sky-500 hover:bg-sky-100"
		on:click={onPositionClick}
	>
		{isVisible ? (positionContent >= 10 ? 'X' : positionContent) : ''}
	</button>
{/key}
