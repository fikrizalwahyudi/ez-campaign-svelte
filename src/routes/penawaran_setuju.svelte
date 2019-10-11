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
        
        <p class="text-center">Kode OTP (One Time Password) telah dikirimkan melalui telepon selular Anda</p>
        <p class="text-center">xxx-xxxx-1234</p>
        <p class="text-center">berlaku:<span id="countdown_text"></span></p>
                
        <Button id="kirimulang" class="btn btn-danger btn-block mt-2" on:click={kirimulang} style="display:block">Kirim Ulang</Button>
        <Button id="waiting" class="btn btn-secondary btn-block mt-2" style="display:none" disabled>Kirim Ulang</Button>
    </div>

    <form method="post" id="roles" on:submit|preventDefault={action_setuju}>  
        <Input type="text" bind:value={verification} placeholder="Kode OTP" />
        <Navbar class="navbar bg-white fixed-bottom shadow-lg">
            <input type="submit" class="btn btn-block btn-danger" disabled={!verification} value="Ajukan"/>
        </Navbar>
    </form>

    


