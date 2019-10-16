<svelte:head>
	<title>Konfirmasi Penawaran Setuju</title>
</svelte:head>


<script>
import { onMount } from 'svelte';
import * as Setuju from '../Penawaran_setuju/Penawaran_setuju';
import Input from '../../../../node_modules/sveltestrap/src/Input';
import Button from '../../../../node_modules/sveltestrap/src/Button';
import Navbar from '../../../../node_modules/sveltestrap/src/Navbar';

  
// export let action_setuju;
let verification='';
 onMount(() => {
    Setuju.countdown(1);
});

</script>

<div class="row justify-content-center animate-bottom mt-5 pt-5" >
	<div class="col-12" style="height: 100%; position: fixed;">
		<div class="row mt-5 justify-content-center align-items-center">
			<div class="col-md-8">
				<div class="col-md-12">
                    <p class="text-center">Kode OTP (One Time Password) telah dikirimkan melalui telepon selular anda</p>
                    <p class="text-center">xxx-xxxx-1234</p>
                    <p class="text-center">berlaku: <span id="timer"></span></p>
                    <Input type="text" bind:value={verification} placeholder="Kode OTP" />   
                    <Button id="kirimulang" class="btn btn-danger btn-block mt-2" style="display:block" on:click={Setuju.kirimulang} >Kirim Ulang</Button>
                    <Button id="waiting" class="btn btn-secondary btn-block mt-2" style="display:none" disabled>Kirim Ulang</Button>
                    <a href="easy-campaign/Penawaran_setuju/setuju"><input type="submit" class="btn btn-block btn-danger" disabled={!verification} value="Ajukan"/></a>
				</div>
			</div>
		</div>
	</div>
</div>
