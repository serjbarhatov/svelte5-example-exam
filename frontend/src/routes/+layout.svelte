<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen flex-col justify-between">
	<header class="bg-orange-50">
		<h1 class="p-4 text-lg">🐍 Veterinarian</h1>
	</header>

	<main>
		{@render children?.()}
	</main>

	<footer class="">
		<p class="p-2 text-center">Made with ❤️</p>
	</footer>
</div>

<style>
</style>
