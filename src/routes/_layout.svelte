<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
	import { onMount } from 'svelte';

	// function date time 
	onMount(() => {
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = "23:59";
		var dateTime = date+' '+time;
		
		document.getElementById("dates").innerHTML =  dateTime;

		document.getElementsByName("container_terms")[0].addEventListener("scroll", checkScrollHeight, false);
		function checkScrollHeight() {
			var agreementTextElement = document.getElementsByName("container_terms")[0];
			if (agreementTextElement.clientHeight + agreementTextElement.scrollTop >= agreementTextElement.scrollHeight) {
				document.getElementsByName("agree")[0].disabled = false;	
				document.getElementsByName("agree2")[0].disabled = false;	
			}
		}

	})

	// // function handling disable/enable button pdfviewer
	//  onMount(() => {
	 	
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