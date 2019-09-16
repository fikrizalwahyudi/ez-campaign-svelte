<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`persetujuan_nasabah.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
	
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Persetujuan Nasabah</title>
</svelte:head>


<div id="container" class="mt-5 mb-5 pt-5">
	<ul>
		<li><a rel='prefetch' href='persetujuan_nasabah/syarat-dan-ketentuan'>Syarat dan Ketentuan</a></li>
		<li><a rel='prefetch' href='persetujuan_nasabah/tabel-manfaat-pruprime-healthcare-plus'>Tabel Manfaat PRUPrime Healthcare PLUS</a></li>
		<li><a rel='prefetch' href='persetujuan_nasabah/informasi-no-claim-bonus'>Informasi No Claim Bonus (NCB)</a></li>
		<li><a rel='prefetch' href='persetujuan_nasabah/perhitungan-pro-rate'>Perhitungan Pro Rata</a></li>
		<li><a rel='prefetch' href='persetujuan_nasabah/informasi-pengecualian'>Informasi Pengecualian</a></li>
	</ul>
</div>

	<p class=" text-justify mt-5">“Saya dengan ini menyetujui perubahan Polis sesuai dengan Manfaat Kesehatan yang tertera pada penawaran ini, dan akan diproses tanpa melalui permintaan pemeriksaan kesehatan jika status Polis tetap aktif serta sesuai dengan syarat dan ketentuan.”</p>
	<p class=" text-justify mt-5">Klik Setuju untuk pengajuan perubahan Polis ini</p>
<navbar  class="navbar bg-white fixed-bottom shadow-lg">
	<div class="col-12">
		<small class="font-italic font-weight-smal mb-2">Penawaran ini berlaku hingga : <small id="dates"></small></small>
	</div>
	<div class="col-6">
		<a rel='prefetch' href='persetujuan_nasabah/tidak-setuju'><button block class="btn btn-block btn-secondary">Tidak Setuju</button></a>
	</div>
	<div class="col-6">
		<a rel='prefetch' href='persetujuan_nasabah/setuju'><button block class="btn btn-block btn-danger">Setuju</button></a>
	</div>
</navbar>