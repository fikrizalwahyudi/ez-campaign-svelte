<script>
    export let action;
</script>

<div class="row">
	<div class="col-12 bg-danger mt-5 pt-5 " style="height: 100%;position: fixed;">
		<p class=" text-center text-light mt-5 pt-5">Easy_Campaign_Plus.pdf is protected. Please enter a Document Open Password</p>
		<input  class="form-control mb-2" type="password" placehoder="Password">
		<button on:click={action} class="btn btn-block btn-secondary" >Submit</button>
	</div>
</div>