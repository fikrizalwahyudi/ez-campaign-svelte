
<script>
    import CampaignOutput from '../routes/CampaignOutput/index';
	import * as PDFGenerator from '../routes/CampaignOutput/PDFGenerator';
	
    var loading;

    function Load() {
	loading = setTimeout(showPage, 3000);
	
	document.getElementById("verification").style.display = "block";
    document.getElementById("loader").style.display = "block";
	document.getElementById("content").style.display = "none";
	}

    function showPage() {
	document.getElementById("verification").style.display = "none";
	document.getElementById("loader").style.display = "none";
	document.getElementById("content").style.display = "block";
	PDFGenerator.initPDFViewer("output.pdf");
	}
	export let action;
</script>

<div id="verification" class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height: 100%; position: fixed;">
		<div  id="container" class="mt-5 mb-5 pt-5" style="margin:0;">
			<p class=" text-center text-light mt-5 pt-5">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
			<input  class="form-control mb-2" type="password" placehoder="Password">
			<button on:click={Load} class="btn btn-block btn-secondary" >Submit</button>

			<div id="loader" style="display:none;"></div>
		</div>
	</div>
</div>

<div  id="content" class=" animate-bottom">	
	<CampaignOutput {action}/>
</div>
