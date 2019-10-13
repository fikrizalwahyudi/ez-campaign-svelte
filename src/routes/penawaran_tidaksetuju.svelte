<script>
import { onMount } from 'svelte';
import CustomInput from '../../node_modules/sveltestrap/src/CustomInput';
import Input from '../../node_modules/sveltestrap/src/Input';
import Navbar from '../../node_modules/sveltestrap/src/Navbar';

export let action_tidaksetuju;

  onMount(() => {
      let form = document.getElementById('roles');
        form.addEventListener('change', function(e) {
        if (e.target !== e.currentTarget) {
            let target = e.target;
            let label = target.nextSibling;
            let display = document.getElementById('display');
            let btn = document.querySelector('[type=submit]');
            btn.disabled = false;
            roleDist(target.value);
        }
    }, false);  
  });
</script>

        


<div class="row justify-content-center animate-bottom">
	<div class="col-12" style="height: 100%; position: fixed;">
		<div class="row mt-5 pt-5 justify-content-center align-items-center">
			<div id="container" class="col-md-6">
            <h5 class="text-center mb-3">Mengapa pengajuan ini tidak disetujui ?</h5>
                <div class="col-md-12">
                    <form method="post" id="roles" on:submit|preventDefault={action_tidaksetuju}>
                    <div class="animate-bottom text-justify pt-5 pb-5" >
                        <CustomInput type="radio" id="Alasan 1" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." /><br/>
                        <CustomInput type="radio" id="Alasan 2" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." /><br/>
                        <CustomInput type="radio" id="Alasan 3" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." /><br/>
                        <CustomInput type="radio" id="Alasan 4" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." />
                    </div>                        
                        <input type="submit" form="roles" id="submit" class="btn btn-block btn-danger" value="Submit" disabled/> 
                    </form>      
                </div>
			</div>
		</div>
	</div>
</div>

