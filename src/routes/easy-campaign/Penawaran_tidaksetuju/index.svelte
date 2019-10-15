<svelte:head>
	<title>Konfirmasi Penawaran Tidak Setuju</title>
</svelte:head>

<script>
import { onMount } from 'svelte';
import * as Tidaksetuju from '../Penawaran_tidaksetuju/Penawaran_tidaksetuju';
import CustomInput from '../../../../node_modules/sveltestrap/src/CustomInput';
import Input from '../../../../node_modules/sveltestrap/src/Input';
import Navbar from '../../../../node_modules/sveltestrap/src/Navbar';

// export let action_tidaksetuju;

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
            <h5 class="text-center mb-3">Pengajuan Tidak Setuju</h5>
                <div class="col-md-12">
                    <form method="post" id="roles" action="easy-campaign/Penawaran_tidaksetuju/tidaksetuju">
                    <div class="animate-bottom text-justify pt-5 pb-5" >
                        <p class="text-justify">Terima kasih atas konfirmasi anda. Mohon pilih alasan ketidaksetujuan anda atas penawaran tersebut :</p>
                        <CustomInput type="radio" id="Alasan 1" name="customRadio" label="Premi tidak sesuai." />
                        <CustomInput type="radio" id="Alasan 2" name="customRadio" label="Manfaat Kesehatan yang ditawarkan tidak sesuai." />
                        <CustomInput type="radio" id="Alasan 3" name="customRadio" label="Belum berminat atas penawaran." /><br/>
                        <p class="text-justify">Hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut.</p>
                    </div>                        
                        <input type="submit" form="roles" id="submit" class="btn btn-block btn-danger" value="Tutup" disabled/> 
                    </form>      
                </div>
			</div>
		</div>
	</div>
</div>

