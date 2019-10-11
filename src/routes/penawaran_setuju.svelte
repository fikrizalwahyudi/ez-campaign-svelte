<script>

import Input from '../../node_modules/sveltestrap/src/Input';
import Button from '../../node_modules/sveltestrap/src/Button';
import Navbar from '../../node_modules/sveltestrap/src/Navbar';

export let action_setuju;

    let verification = '';      
    let countdown;
    let countdown_number;

    function kirimulang() {
        countdown_number = 6;
        waiting();
    }

    function waiting() {
        if(countdown_number > 0) {
            countdown_number--;
            document.getElementById('countdown_text').innerHTML = countdown_number;
            if(countdown_number > 0) {
                countdown = setTimeout( waiting, 1000);
                document.getElementById("kirimulang").style.display = "none";
                document.getElementById("waiting").style.display = "block";
            }else{
                document.getElementById("kirimulang").style.display = "block";
                document.getElementById("waiting").style.display = "none"; 
            }
        }
    }    

</script>

    <div id="container" class="mt-5 mb-5 pt-5 animate-bottom text-center" >
        <h5>Verifikasi Persetujuan</h5>
        <p class="text-center">Kami telah mengirim kode verifikasi via sms melalui no handphone anda. Masukkan kode verifikasi anda :</p>        
        <Button id="kirimulang" class="btn btn-danger btn-block mt-2" on:click={kirimulang} style="display:block">Kirim Ulang Kode Verifikasi</Button>
        <Button id="waiting" class="btn btn-secondary btn-block mt-2" style="display:none" disabled>Kirim Ulang Kode Verifikasi <span id="countdown_text"></span></Button>
    </div>

    <form method="post" id="roles" on:submit|preventDefault={action_setuju}>  
        <Input type="text" bind:value={verification} placeholder="Verification Code" />
        <Navbar class="navbar bg-white fixed-bottom shadow-lg">
            <input type="submit" class="btn btn-block btn-danger" disabled={!verification} value="Submit"/>
        </Navbar>
    </form>

    


