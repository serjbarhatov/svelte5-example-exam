<script>
	import { getContext } from 'svelte';
	let { petTypes, select } = $props();
	let context = getContext('pets');
</script>

<li>
	{#each petTypes as petType}
		<button onclick={() => {context.selectedPetType = petType}} class="m-2 bg-lime-400 p-1 hover:bg-amber-300">
			{petType}
		</button>
	{/each}
</li>
