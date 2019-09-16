<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
	import { onMount } from 'svelte';

	onMount(() => {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
		document.getElementById("dates").innerHTML =  dateTime;

	})


	//  onMount(() => {
	//  	document.getElementsByName("container_terms")[0].addEventListener("scroll", checkScrollHeight, false);
	//  	function checkScrollHeight() {
	//  		var agreementTextElement = document.getElementsByName("container_terms")[0];
	//  		if (agreementTextElement.clientHeight + agreementTextElement.scrollTop >= agreementTextElement.scrollHeight) {
	//  			document.getElementsByName("agree")[0].disabled = false;	
	//  		}
	//  	}
	//  });
</script>

<style>
	main {
		position: relative;
		max-width: 100%;
		background-color: white;
		padding: 1em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>