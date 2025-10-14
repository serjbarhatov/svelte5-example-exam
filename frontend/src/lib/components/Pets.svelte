<script>
	import { setContext } from 'svelte';
	import Filter from './Filter.svelte';
	let { allPets } = $props();
	let selectedPetType = $state('All');
	const handleFilterSelect = (s) => {
		selectedPetType = s;
	};
	setContext('pets', {handleFilterSelect});
</script>

<section class="flex flex-col">
	<h3 class="text-center">Use this filter to switch between pets</h3>
	<ul class="flex justify-center">
		<Filter petTypes = {allPets.petTypes}/>
	</ul>
</section>
<h2 class="my-6 text-center text-2xl">Dogs selected</h2>
<table class="w-full table-auto border-separate text-center">
	<thead class="border-y-4">
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Icon</th>
		</tr>
	</thead>
	<tbody class="text-xs">
		{#each allPets.pets as pet}
			{#if selectedPetType == pet.type || selectedPetType == 'All'}
				<tr>
					<td>{pet.name}</td>
					<td>{pet.type}</td>
					<td>{pet.icon}</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
