<svelte:head>
	<title>Easy-Campaign</title>
</svelte:head>

<script context="module">
	import CampaignOutput from '../routes/CampaignOutput/index';
	import Verification from '../components/Verification.svelte';
	import Setuju from '../routes/route_setuju';
	import Tidaksetuju from '../routes/route_tidaksetuju';
	import PTidaksetuju from '../routes/penawaran_tidaksetuju';
	import Psetuju from '../routes/penawaran_setuju';
	import Alert from '../components/Alert';
	import Loading from '../components/Loading';

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
	export let action_setuju;
	export let action_tidaksetuju;
	export let action_p_setuju;   
	export let action_p_tidaksetuju;
   
</script>

<script>

	let page = "verification";
	const login = function(){
		return page= "campaign-output";
	// let password = "admin";
	// onMount(() => {    
	// 	let password = document.getElementById("password").value;
	// 	if (password == "admin"){
	// 		return page = "campaign-output";	
	// 	}
	// 	else{
	// 		let alert = '<Alert/>'
	// 		document.write(alert);
	// 	}
	// });
			
		
	}
	const setuju = function(){
		return page = "setuju";
	}
	const tidaksetuju = function(){
		return page = "tidaksetuju";
	}
	const p_tidaksetuju = function(){
		return page = "p_tidaksetuju";
	}
	const p_setuju = function(){
		return page = "p_setuju";
	}

	action = login;
	action_setuju = setuju;
	action_tidaksetuju = tidaksetuju;
	action_p_setuju = p_setuju;
	action_p_tidaksetuju = p_tidaksetuju;

</script>

{#if page === "verification"}
	<Verification {action}/>
{:else if page === "campaign-output"}
	<CampaignOutput {action_p_setuju} {action_p_tidaksetuju}/>
{:else if page === "p_setuju"}
	<Psetuju {action_setuju} />
{:else if page === "p_tidaksetuju"}
	<PTidaksetuju {action_tidaksetuju}/>
{:else if page === "setuju"}
	<Setuju/>
{:else if page === "tidaksetuju"}
	<Tidaksetuju/>

{/if}



