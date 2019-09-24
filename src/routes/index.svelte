<svelte:head>
	<title>Verifikasi</title>
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		// const res = await this.fetch(`persetujuan_nasabah/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
	const valid = true;
</script>


{#if valid}
<div class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height:100vh;">
		<p class=" text-center text-light mt-5 pt-5">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
		<input  class="form-control mb-2" type="password" placehoder="Password">
		<a href="pdfviewer"><button class="btn btn-block btn-secondary" >Masuk</button></a>
	</div>
</div>
{/if}

{#if !valid}
<div class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height:100vh;">
		<p class=" text-center text-light mt-5 pt-5">Maaf link sudah tidak berlaku</p>
	</div>
</div>
{/if}


	