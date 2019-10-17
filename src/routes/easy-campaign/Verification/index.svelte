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
</script>

<div id="verification" class="row justify-content-center">
	<div class="col-12 bg-danger" style="height: 100%; position: fixed;">
		<div class="row mt-5 justify-content-center align-items-center text-white">
			<div class="col-md-6 animate-bottom">
				<div class="col-md-12">
				<div id="failed" style="display:none"><Alert/></div>
					<form id="validate" class="form mt-5 pt-5" on:submit|preventDefault={Verification.validate_password} method="post">
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