<script>
import { onMount } from 'svelte';
import Input from '../../node_modules/sveltestrap/src/Input';
import Button from '../../node_modules/sveltestrap/src/Button';
import Navbar from '../../node_modules/sveltestrap/src/Navbar';

export let action_setuju;

let verification = '';              
function kirimulang(){
        let timeoutHandle;
        function countdown(minutes) {
            let seconds = 60;
            let mins = minutes;
        function tick() {
            let counter = document.getElementById("timer");
            let current_minutes = mins-1
            seconds--;
            counter.innerHTML =
            current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if( seconds > 0 ) {
                timeoutHandle=setTimeout(tick, 1000);
                document.getElementById("kirimulang").style.display = "none";
                document.getElementById("waiting").style.display = "block";
            } else {
                document.getElementById("kirimulang").style.display = "block";
                document.getElementById("waiting").style.display = "none";
                //    document.getElementById("kirimulang").onclick = countdown();

                if(mins > 1){
                setTimeout(function () { countdown(mins - 1); }, 1000);
                }
            }
        }
        tick();
    }
    countdown(5);
}
</script>
<div class="row justify-content-center animate-bottom mt-5 pt-5">
	<div class="col-12" style="height: 100%; position: fixed;">
		<div class="row mt-5 justify-content-center align-items-center">
			<div class="col-md-8">
				<div class="col-md-12">
                    <p class="text-center">Kode OTP (One Time Password) telah dikirimkan melalui telepon selular anda</p>
                    <p class="text-center">xxx-xxxx-1234</p>
                    <p class="text-center">berlaku: <span id="timer"></span></p>
                    <Input type="text" bind:value={verification} placeholder="Kode OTP" />   
                    <Button id="kirimulang" class="btn btn-danger btn-block mt-2" style="display:block" on:click={kirimulang} >Kirim Ulang</Button>
                    <Button id="waiting" class="btn btn-secondary btn-block mt-2" style="display:none" disabled>Kirim Ulang</Button>
                    <input type="submit" class="btn btn-block btn-danger" disabled={!verification} on:click={action_setuju} value="Ajukan"/>
				</div>
			</div>
		</div>
	</div>
</div>
