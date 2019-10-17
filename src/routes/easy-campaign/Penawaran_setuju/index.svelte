<svelte:head>
	<title>Konfirmasi Penawaran Setuju</title>
</svelte:head>


<script>
import { onMount } from 'svelte';
import * as Setuju from '../Penawaran_setuju/Penawaran_setuju';
import Input from '../../../../node_modules/sveltestrap/src/Input';
import Button from '../../../../node_modules/sveltestrap/src/Button';
import Navbar from '../../../../node_modules/sveltestrap/src/Navbar';
	import Loading from '../../../components/Loading'; 

  
// export let action_setuju;
let verification='';
 onMount(() => {
    Setuju.count_otp();
});

</script>

<div class="row justify-content-center animate-bottom mt-5 pt-5" >
	<div class="col-12" style="height: 100%; position: fixed;">
		<div class="row mt-5 justify-content-center align-items-center">
			<div class="col-md-8">
				<div class="col-md-12">
                    <p class="text-center">Kode OTP (One Time Password) telah dikirimkan melalui telepon selular anda</p>
                    <p class="text-center">xxx-xxxx-1234</p>
                    <p class="text-center" id="expire"></p>
					<strong id="failed" class="text-danger text-center" style="display:none">OTP Code Wrong !</strong>
				<form name="validate" on:submit|preventDefault={Setuju.validate_otp} method="post">
                    <Input type="text" bind:value={verification} placeholder="Kode OTP" name="otp" /> 
					<input type="submit" class="btn btn-block btn-danger mt-2 mb-2" disabled={!verification} value="Ajukan"/> 
				</form> 
                    <Button id="kirimulang" class="btn btn-danger btn-block mt-2" style="display:block" on:click={Setuju.kirimulang} >Kirim Ulang</Button>
                    <Button id="waiting" class="btn btn-secondary btn-block mt-2" style="display:none" disabled>Kirim Ulang <span id="count_kirimulang"></span></Button>
				</div>
			</div>
		</div>
	</div>
</div>
