<script>
	import { setContext } from 'svelte';
	import Pets from '$lib/components/Pets.svelte';
	let { data } = $props();
</script>

<section class="flex flex-col">
	<h1 class="mb-8 text-center text-2xl">Welcome to all the pets in the Veterinarian</h1>
	<Pets allPets={data} />
</section>
