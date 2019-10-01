<script>
    import CampaignOutput from '../routes/CampaignOutput/index';
	import * as PDFGenerator from '../routes/CampaignOutput/PDFGenerator';
	
	var loading;
	var attempt = 3; 	
	
	function verification() {
		var password = document.getElementById("password").value;
		if (password == "admin"){
			loading = setTimeout(showPage, 3000);
			document.getElementById("failed").style.display = "none";
			document.getElementById("verification").style.display = "block";
			document.getElementById("loader").style.display = "block";
			document.getElementById("content").style.display = "none";
			return false;
		}
		else{
			attempt --;// Decrementing by one.
			document.getElementById("failed").style.display = "block";
			// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("submit").disabled = true;
			return false;
			}
		}
	}

    function showPage() {
	document.getElementById("verification").style.display = "none";
	document.getElementById("failed").style.display = "none";
	document.getElementById("loader").style.display = "none";
	document.getElementById("content").style.display = "block";
	PDFGenerator.initPDFViewer("outputPDFMix.pdf");
	}

	export let action;
</script>

<div id="verification" class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height: 100%; position: fixed;">
		<form id="validate" method="post">
			<div id="failed" class="alert alert-danger text-center float-center" role="alert" style="display:none">
				<strong>Verification code Wrong!</strong>
			</div>
			<div id="container"style="margin:0; animated-bottom">
				<p class=" text-center text-light mt-5 pt-5">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
				<input id="password" name="password" class="form-control mb-2" type="password" placehoder="Password" required>
				<input type="button" class="btn btn-block btn-secondary" value="Submit" id="submit" on:click={verification}/>
				<div id="loader" class="animate-bottom" style="display:none;"></div>
			</div>
		</form>
	</div>
</div>


<div  id="content" class=" animate-bottom">	
	<CampaignOutput {action}/>
</div>
