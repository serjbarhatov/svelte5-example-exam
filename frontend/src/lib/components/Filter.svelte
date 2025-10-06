<script>
	import { getContext } from 'svelte';
	let { petTypes } = $props();
</script>

<li>
	<button class="m-2 bg-lime-400 p-1 hover:bg-amber-300">All</button>
	{#each petTypes as petType}
		<button class="m-2 bg-lime-400 p-1 hover:bg-amber-300">
			{petType}
		</button>
	{/each}
</li>
