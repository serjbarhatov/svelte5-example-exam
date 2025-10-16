<script>
	import { getContext } from 'svelte';
	let { petTypes } = $props();
</script>

<li>
	{#each petTypes as petType }
		<button class="m-2 bg-lime-400 p-1 hover:bg-amber-300">{petType}</button>
	{/each}
</li>
