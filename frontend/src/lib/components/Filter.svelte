<script>
	import { getContext } from 'svelte';
	let { petTypes } = $props();
	const handleFilterSelect = getContext('pets').handleFilterSelect;
</script>

<li>
	{#each petTypes as petType }
		<button onclick={() => {handleFilterSelect(petType)}} class="m-2 bg-lime-400 p-1 hover:bg-amber-300">{petType}</button>
	{/each}
</li>
