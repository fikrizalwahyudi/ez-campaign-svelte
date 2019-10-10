<script>
    import CampaignOutput from '../routes/CampaignOutput/index';
	import * as PDFGenerator from '../routes/CampaignOutput/PDFGenerator';
	import Alert from '../components/Alert' 
	import Input from '../../node_modules/sveltestrap/src/Input';
	import Button from '../../node_modules/sveltestrap/src/Button';
	// var loading;
	// var attempt = 3; 
	export let action;

	
	// function verification() {
	// 	let password = document.getElementById("password").value;
	// 	if (password == "admin"){
	// 		let alert = '<Alert/>'
	// 		return false;
	// 	}
	// 	else{
	// 		let alert = '<Alert/>'
	// 		return false;
			
	// 	}
	// }

    // function showPage() {
	// document.getElementById("verification").style.display = "none";
	// document.getElementById("failed").style.display = "none";
	// document.getElementById("loader").style.display = "none";
	// document.getElementById("content").style.display = "block";
	// PDFGenerator.initPDFViewer("outputPDFMix.pdf");
	// }
	

</script>

<div id="verification" class="row">
	<div class="col-12 bg-danger mt-4 pt-5 " style="height: 100%; position: fixed;">
		<!-- <form id="validate" method="post" on:submit|preventDefault={verification}>
			<Alert id="failed" class="text-center" color="danger" style="display:none">
				<strong >Verification code Wrong!</strong>
			</Alert>
			<div id="container"style="margin:0;" class="animated-bottom">
				<p class=" text-center text-light mt-5 pt-5">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
				<Input type="password" name="password" id="password" class="mb-2" placeholder="Verification Code" required />
				<input type="submit" id="submit" class="btn btn-block btn-secondary" value="Submit"/>
				<div id="loader" class="animate-bottom" style="display:none;"></div>
			</div>
		</form> -->
		<form id="validate" method="post" on:submit|preventDefault={action} class="mt-5 pt-5">
			<p class=" text-center text-light">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
			<Input type="password" name="password" id="password" class="mb-2" placeholder="Verification Code" required autofocus />
			<input type="submit" id="submit" class="btn btn-block btn-secondary" value="Submit"/>
		</form>
	</div>
</div>

