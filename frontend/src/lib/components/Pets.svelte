<script>
	import { getContext } from 'svelte';
	import Filter from './Filter.svelte';
</script>

<section class="flex flex-col">
	<h3 class="text-center">Use this filter to switch between pets</h3>
	<ul class="flex justify-center">
		<Filter />
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
		<!---Add pets here-->
	</tbody>
</table>
