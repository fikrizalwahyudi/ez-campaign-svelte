<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<br><br><br>
<img src="logo.jpg"  style="width: 220px; height:200px; opacity:0.4;"class="rounded mx-auto d-block mt-5" alt="logo"/>
<h1 class="text-danger text-center">{status}</h1>
<h5 class="text-bold text-center">{error.message}</h5>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
