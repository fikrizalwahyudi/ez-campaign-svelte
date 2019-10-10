<script>
import { onMount } from 'svelte';
import CustomInput from '../../node_modules/sveltestrap/src/CustomInput';
import Input from '../../node_modules/sveltestrap/src/Input';
import Button from '../../node_modules/sveltestrap/src/Button';
import Navbar from '../../node_modules/sveltestrap/src/Navbar';


let verification = '';
export let action_setuju;
export let action_p_setuju;
    
    onMount(() => {
            // Get refreence to span and button
           
            let spn = document.getElementById("count");
            let btn = document.getElementById("btnCounter");

          
                let count = 5;     // Set count
                let timer = null;  // For referencing the timer
               
                    (function countDown(){
                        // Display counter and start counting down
                        spn.textContent = count;
                        
                        // Run the function again every second if the count is not zero
                        if(count !== 0){
                            timer = setTimeout(countDown, 1000);
                            count--; // decrease the timer
                        } else {
                            // Enable the button
                            document.getElementById("kirimulang").style.display = "block";
                            document.getElementById("btnCounter").style.display = "none";
                            // document.getElementById("kirimulang").onclick = countDown();
                            //  btn.removeAttribute("disabled");
                        }
                    }());
                });
                    
                // function kirimulang(){
                //     let spn1 = document.getElementById("count");
                //     let btn1 = document.getElementById("btnCounter");
                //     let count1 = 5;     // Set count
                //     let timer1 = null;  // For referencing the timer
                    
                //     if (spn1) {
                //         spn1.textContent = count1;
                //     }
                //     // spn1.textContent = count1;
                        
                //         // Run the function again every second if the count is not zero
                //         if(count1 !== 0){
                //             timer1 = setTimeout(kirimulang, 1000);
                //             count1--; // decrease the timer
                //         } else {
                //             // Enable the button
                //             document.getElementById("kirimulang").style.display = "none";
                //             document.getElementById("btnCounter").style.display = "block";
                //             // document.getElementById("kirimulang").onclick = countDown();
                //             //  btn.removeAttribute("disabled");
                //         }                    
                // }
            
                
        
        
</script>

<!-- <form method="post" id="roles" on:submit|preventDefault={action_setuju}> -->
    <div id="container" class="mt-5 mb-5 pt-5 animate-bottom text-center" >
        <h5>Verifikasi Persetujuan</h5>
        <p class="text-center">Kami telah mengirim kode verifikasi via sms melalui no handphone anda. Masukkan kode verifikasi anda :</p><strong class="text-danger" id="timer"></strong> 
        <Input type="text" bind:value={verification} placeholder="Verification Code" />
        <Button id="btnCounter" class="btn btn-secondary btn-block mt-2" style="display:block" disabled>Kirim Ulang Kode Verifikasi <span id="count"></span></Button>
        <button id="kirimulang" class="btn btn-danger btn-block mt-2"  style="display:none" on:click={action_p_setuju}>Kirim Ulang Kode Verifikasi<span id="count"></span></button>
    </div>
    
    <Navbar class="navbar bg-white fixed-bottom shadow-lg">
        <Button class="btn btn-block btn-danger" on:click={action_setuju} disabled={!verification}>Submit</Button>
    </Navbar>
<!-- </form> -->


