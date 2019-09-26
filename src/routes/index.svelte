<svelte:head>
	<title>Verifikasi</title>
</svelte:head>

<script context="module">
	
	function validate()  {
		var pw = document.loginform.pword.value;
		var password = "password";
		
        if (pw == password) {
			window.href('pdfviewer');		
			return true;			
        }
        else {
			alert ("Verification unsuccessful, please check your verification code");
			return false;
		}
  	}
	export async function preload({ params, query }) {
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
	
	const valid = true;
</script>


{#if valid}
<div class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height:100vh;">
		<form name="loginform" on:submit={validate} action="pdfviewer" method="post">
			<p class=" text-center text-light mt-5 pt-5">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
			<input class="form-control mb-2" type="password" name="pword" placeholder="Password">
			<input class="btn btn-block btn-secondary" type="submit" value="Masuk"/>
		</form>
	</div>
</div>
{/if}

{#if !valid}
<div class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height:100vh;">
		<p class=" text-center text-light mt-5 pt-5">Maaf link sudah tidak berlaku</p>
	</div>
</div>
{/if}


