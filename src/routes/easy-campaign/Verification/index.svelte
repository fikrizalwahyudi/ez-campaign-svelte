<svelte:head>
	<title>Verifikasi Password</title>
</svelte:head>

<script>
    import CampaignOutput from '../../easy-campaign/CampaignOutput/index';
	import * as Verification from '../../easy-campaign/Verification/Verification';	
	import Alert from '../../../components/Alert'; 
	import Loading from '../../../components/Loading'; 
	import Input from '../../../../node_modules/sveltestrap/src/Input';
	import Button from '../../../../node_modules/sveltestrap/src/Button';
	// var loading;
	// var attempt = 3; 


	
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

<div id="verification" class="row justify-content-center">
	<div class="col-12 bg-danger" style="height: 100%; position: fixed;">
		<div class="row mt-5 justify-content-center align-items-center text-white">
			<div class="col-md-6">
				<div class="col-md-12">
					<form id="validate" class="form mt-5 pt-5" on:submit|preventDefault={Verification.validate_password} method="post">
						<div id="failed" style="display:none"><Alert/></div>
						<div id="loading" style="display:none"><Loading/></div>
						<p class="text-center">Masukkan Password Anda dengan format sebagai berikut XXXXDDMmm</p>
						<p class="text-center">Contoh (432115May)</p>
						<ul class="text-justify">
							<li>XXXX adalah 4 digit terakhir dari no. Polis Nasabah</li>
							<li>DD adalah 2 digit tanggal lahir Pemegang Polis</li>
							<li>Mmm adalah tiga huruf pertama bulan lahir Pemegang Polis dalam Bahasa Inggris. Huruf pertama adalah huruf besar dan selanjutnya huruf kecil, contoh Dec, May, Jun</li>
						</ul>
						<div class="form-group">
							<Input type="password" name="password" id="password" class="mb-2" placeholder="Password" required />
						</div>
						<div class="form-group">
							<input type="submit" id="submit" class="btn btn-block btn-secondary" value="Submit"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

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
		
			
