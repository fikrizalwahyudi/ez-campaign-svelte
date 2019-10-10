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
<style>
</style>
<div id="container" class="mt-5 mb-5 pt-5 animate-bottom text-center" >
    <h5>Mengapa pengajuan ini tidak disetujui ?</h5>
</div>
    <form method="post" id="roles" on:submit|preventDefault={action_tidaksetuju}>
        <div class="animate-bottom text-justify" >
            <CustomInput type="radio" id="Alasan 1" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." />
            <CustomInput type="radio" id="Alasan 2" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." />
            <CustomInput type="radio" id="Alasan 3" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." />
            <CustomInput type="radio" id="Alasan 4" name="customRadio" label="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." />  
        </div>
        <Navbar class="navbar bg-white fixed-bottom shadow-lg">
            <input type="submit" form="roles" id="submit" class="btn btn-block btn-danger" value="Submit" disabled/>
        </Navbar>
    </form>
