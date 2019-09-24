<script>
	const valid = true;
</script>


<svelte:head>
	<title>Verifikasi</title>
</svelte:head>

{#if valid}
	<div class="row">
		<div class="col-12 bg-danger mt-5 pt-5 " style="height:100vh;">
			<p class=" text-center text-light mt-5 pt-5">Masukkan Password Anda</p>
			<input  class="form-control mb-2" type="password" placehoder="Password">
			<a href="generatepdf"><button class="btn btn-block btn-secondary" >Masuk</button></a>
		</div>
	</div>
{/if}

{#if !valid}
	<div class="row">
		<div class="col-12 bg-danger mt-5 pt-5 " style="height:100vh;">
			<p class=" text-center text-light mt-5 pt-5">Maaf link sudah tidak berlaku</p>
			<!-- <input  class="form-control mb-2" type="password" placehoder="Password"> -->
			<!-- <a href="generatepdf"><button class="btn btn-block btn-secondary" >Masuk</button></a> -->
		</div>
	</div>
{/if}




	