<svelte:head>
	<title>Verifikasi</title>
</svelte:head>

<script context="module">
	import CampaignOutput from '../routes/CampaignOutput/index';
	import Verification from '../components/Verification.svelte';
	const token = "";
	export async function preload({ params, query }) {
		console.log(query.id);
		// token = query.token;
		// // the `slug` parameter is available because
		// // this file is called [slug].svelte
		// // const res = await this.fetch(`persetujuan_nasabah/${params.slug}.json`);
		// const data = await res.json();

		// if (res.status === 200) {
		// 	return { post: data };
		// } else {
		// 	this.error(res.status, data.message);
		// }
	}
	export let action;
	// export let page = "verification";
	// event = "test";

</script>

<script>
	let page = "verification";
	const login = function(){
		// valid = true;
		
		return page = "campaign-output";
		
	}
	action = login;
</script>

{#if page === "verification"}
	<Verification {action}/>
{:else if page === "campaign-output"}
	<CampaignOutput/>
{/if}



