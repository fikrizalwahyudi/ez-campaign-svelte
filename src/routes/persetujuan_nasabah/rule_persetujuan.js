// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	
	{
		title: '',
		slug: 'setuju',
		html: `
			<div id="container" class="mt-5 mb-5 pt-5" >
				<h5>Pengajuan Setuju</h5>
				<p class="text-justify">Pengajuan Anda telah kami terima dan akan segera diproses, hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut.</p>
				<p> Terima kasih</p>
				<navbar  class="navbar bg-white fixed-bottom shadow-lg">
					<div class="col-12">
						<a rel='prefetch' href='persetujuan_nasabah'><button  class="btn btn-block btn-danger">Tutup</button></a>
					</div>
				</navbar>
			</div>
			`
	},
	
	{
		title: '',
		slug: 'tidak-setuju',
		html: `
		<div id="container" class="mt-5 mb-5 pt-5" >
			<h5>Pengajuan Tidak Setuju</h5>
			<p>Terima kasih atas konfirmasi Anda. Hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut.</p>
			<navbar  class="navbar bg-white fixed-bottom shadow-lg">
				<div class="col-12">
					<a rel='prefetch' href='persetujuan_nasabah'><button  class="btn btn-block btn-danger">Tutup</button></a>
				</div>
			</navbar>
		</div>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
