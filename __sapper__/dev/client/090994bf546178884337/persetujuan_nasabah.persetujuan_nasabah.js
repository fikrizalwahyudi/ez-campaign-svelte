(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["persetujuan_nasabah"],{

/***/ "./src/routes/persetujuan_nasabah/index.svelte":
/*!*****************************************************!*\
  !*** ./src/routes/persetujuan_nasabah/index.svelte ***!
  \*****************************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/persetujuan_nasabah/index.svelte generated by Svelte v3.9.2 */


const file = "src/routes/persetujuan_nasabah/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1frg2tf-style';
	style.textContent = "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYHBlcnNldHVqdWFuX25hc2FiYWguanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihwb3N0cyA9PiB7XG5cdFx0XHRyZXR1cm4geyBwb3N0cyB9O1xuXHRcdH0pO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBwb3N0cztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdHVsIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5QZXJzZXR1anVhbiBOYXNhYmFoPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzPVwibXQtNSBtYi01IHB0LTVcIj5cblx0PHVsPlxuXHRcdDxsaT48YSByZWw9J3ByZWZldGNoJyBocmVmPSdwZXJzZXR1anVhbl9uYXNhYmFoL3N5YXJhdC1kYW4ta2V0ZW50dWFuJz5TeWFyYXQgZGFuIEtldGVudHVhbjwvYT48L2xpPlxuXHRcdDxsaT48YSByZWw9J3ByZWZldGNoJyBocmVmPSdwZXJzZXR1anVhbl9uYXNhYmFoL3RhYmVsLW1hbmZhYXQtcHJ1cHJpbWUtaGVhbHRoY2FyZS1wbHVzJz5UYWJlbCBNYW5mYWF0IFBSVVByaW1lIEhlYWx0aGNhcmUgUExVUzwvYT48L2xpPlxuXHRcdDxsaT48YSByZWw9J3ByZWZldGNoJyBocmVmPSdwZXJzZXR1anVhbl9uYXNhYmFoL2luZm9ybWFzaS1uby1jbGFpbS1ib251cyc+SW5mb3JtYXNpIE5vIENsYWltIEJvbnVzIChOQ0IpPC9hPjwvbGk+XG5cdFx0PGxpPjxhIHJlbD0ncHJlZmV0Y2gnIGhyZWY9J3BlcnNldHVqdWFuX25hc2FiYWgvcGVyaGl0dW5nYW4tcHJvLXJhdGUnPlBlcmhpdHVuZ2FuIFBybyBSYXRhPC9hPjwvbGk+XG5cdFx0PGxpPjxhIHJlbD0ncHJlZmV0Y2gnIGhyZWY9J3BlcnNldHVqdWFuX25hc2FiYWgvaW5mb3JtYXNpLXBlbmdlY3VhbGlhbic+SW5mb3JtYXNpIFBlbmdlY3VhbGlhbjwvYT48L2xpPlxuXHQ8L3VsPlxuPC9kaXY+XG5cdDxwIGNsYXNzPVwiIHRleHQtanVzdGlmeSBtdC01XCI+4oCcU2F5YSBkZW5nYW4gaW5pIG1lbnlldHVqdWkgcGVydWJhaGFuIFBvbGlzIHNlc3VhaSBkZW5nYW4gTWFuZmFhdCBLZXNlaGF0YW4geWFuZyB0ZXJ0ZXJhIHBhZGEgcGVuYXdhcmFuIGluaSwgZGFuIGFrYW4gZGlwcm9zZXMgdGFucGEgbWVsYWx1aSBwZXJtaW50YWFuIHBlbWVyaWtzYWFuIGtlc2VoYXRhbiBqaWthIHN0YXR1cyBQb2xpcyB0ZXRhcCBha3RpZiBzZXJ0YSBzZXN1YWkgZGVuZ2FuIHN5YXJhdCBkYW4ga2V0ZW50dWFuLuKAnTwvcD5cblx0PHAgY2xhc3M9XCIgdGV4dC1qdXN0aWZ5IG10LTVcIj5LbGlrIFNldHVqdSB1bnR1ayBwZW5nYWp1YW4gcGVydWJhaGFuIFBvbGlzIGluaTwvcD5cbjxuYXZiYXIgIGNsYXNzPVwibmF2YmFyIGJnLWxpZ2h0IGZpeGVkLWJvdHRvbVwiPlxuXHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cdFx0XG5cdFx0PHNtYWxsIGNsYXNzPVwiZm9udC1pdGFsaWMgZm9udC13ZWlnaHQtc21hbCBtYi0yXCI+UGVuYXdhcmFuIGluaSBiZXJsYWt1IGhpbmdnYSBkZC1tbS15eSBwdWt1bCBoaDptbS48L3NtYWxsPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNvbC02XCI+XG5cdFx0PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0ncGVyc2V0dWp1YW5fbmFzYWJhaC90aWRhay1zZXR1anUnPjxidXR0b24gYmxvY2sgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnlcIj5UaWRhayBTZXR1anU8L2J1dHRvbj48L2E+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiY29sLTZcIj5cblx0XHQ8YSByZWw9J3ByZWZldGNoJyBocmVmPSdwZXJzZXR1anVhbl9uYXNhYmFoL3NldHVqdSc+PGJ1dHRvbiBibG9jayBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLWRhbmdlclwiPlNldHVqdTwvYnV0dG9uPjwvYT5cblx0PC9kaXY+XG48L25hdmJhcj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUMsRUFBRSxlQUFDLENBQUMsQUFDSCxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQixXQUFXLENBQUUsR0FBRyxBQUNqQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, div0, ul, li0, a0, t1, t2, li1, a1, t3, t4, li2, a2, t5, t6, li3, a3, t7, t8, li4, a4, t9, t10, p0, t11, t12, p1, t13, t14, navbar, div1, small, t15, t16, div2, a5, button0, t17, t18, div3, a6, button1, t19;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Syarat dan Ketentuan");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Tabel Manfaat PRUPrime Healthcare PLUS");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Informasi No Claim Bonus (NCB)");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Perhitungan Pro Rata");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Informasi Pengecualian");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("“Saya dengan ini menyetujui perubahan Polis sesuai dengan Manfaat Kesehatan yang tertera pada penawaran ini, dan akan diproses tanpa melalui permintaan pemeriksaan kesehatan jika status Polis tetap aktif serta sesuai dengan syarat dan ketentuan.”");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Klik Setuju untuk pengajuan perubahan Polis ini");
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			navbar = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("navbar");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			small = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("small");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Penawaran ini berlaku hingga dd-mm-yy pukul hh:mm.");
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Tidak Setuju");
			t18 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t19 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Setuju");
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n\n");

			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { id: true, class: true }, false);
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "UL", { class: true }, false);
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {}, false);
			var li0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li0);

			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li0_nodes, "A", { rel: true, href: true }, false);
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "Syarat dan Ketentuan");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(ul_nodes, "\n\t\t");

			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {}, false);
			var li1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li1);

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li1_nodes, "A", { rel: true, href: true }, false);
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "Tabel Manfaat PRUPrime Healthcare PLUS");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(ul_nodes, "\n\t\t");

			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {}, false);
			var li2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li2);

			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li2_nodes, "A", { rel: true, href: true }, false);
			var a2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a2);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a2_nodes, "Informasi No Claim Bonus (NCB)");
			a2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(ul_nodes, "\n\t\t");

			li3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {}, false);
			var li3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li3);

			a3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li3_nodes, "A", { rel: true, href: true }, false);
			var a3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a3);

			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a3_nodes, "Perhitungan Pro Rata");
			a3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(ul_nodes, "\n\t\t");

			li4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", {}, false);
			var li4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li4);

			a4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li4_nodes, "A", { rel: true, href: true }, false);
			var a4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a4);

			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a4_nodes, "Informasi Pengecualian");
			a4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			li4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\t");

			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);

			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "“Saya dengan ini menyetujui perubahan Polis sesuai dengan Manfaat Kesehatan yang tertera pada penawaran ini, dan akan diproses tanpa melalui permintaan pemeriksaan kesehatan jika status Polis tetap aktif serta sesuai dengan syarat dan ketentuan.”");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\t");

			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);

			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "Klik Setuju untuk pengajuan perubahan Polis ini");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			navbar = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "NAVBAR", { class: true }, false);
			var navbar_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(navbar);

			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(navbar_nodes, "DIV", { class: true }, false);
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			small = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "SMALL", { class: true }, false);
			var small_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(small);

			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(small_nodes, "Penawaran ini berlaku hingga dd-mm-yy pukul hh:mm.");
			small_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(navbar_nodes, "\n\t");

			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(navbar_nodes, "DIV", { class: true }, false);
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);

			a5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "A", { rel: true, href: true }, false);
			var a5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a5);

			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a5_nodes, "BUTTON", { block: true, class: true }, false);
			var button0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button0);

			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button0_nodes, "Tidak Setuju");
			button0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t18 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(navbar_nodes, "\n\t");

			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(navbar_nodes, "DIV", { class: true }, false);
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);

			a6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "A", { rel: true, href: true }, false);
			var a6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a6);

			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a6_nodes, "BUTTON", { block: true, class: true }, false);
			var button1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button1);

			t19 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button1_nodes, "Setuju");
			button1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			navbar_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Persetujuan Nasabah";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "href", "persetujuan_nasabah/syarat-dan-ketentuan");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 26, 6, 427);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li0, file, 26, 2, 423);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "href", "persetujuan_nasabah/tabel-manfaat-pruprime-healthcare-plus");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 27, 6, 529);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li1, file, 27, 2, 525);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "href", "persetujuan_nasabah/informasi-no-claim-bonus");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a2, file, 28, 6, 667);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li2, file, 28, 2, 663);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a3, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a3, "href", "persetujuan_nasabah/perhitungan-pro-rate");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a3, file, 29, 6, 783);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li3, file, 29, 2, 779);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a4, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a4, "href", "persetujuan_nasabah/informasi-pengecualian");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a4, file, 30, 6, 885);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li4, file, 30, 2, 881);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-1frg2tf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 25, 1, 416);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "id", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "mt-5 mb-5 pt-5");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 24, 0, 371);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", " text-justify mt-5");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 33, 1, 1000);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", " text-justify mt-5");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 34, 1, 1282);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(small, "class", "font-italic font-weight-smal mb-2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(small, file, 38, 2, 1438);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "col-12");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 36, 1, 1412);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "block", "");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "class", "btn btn-block btn-secondary");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 41, 60, 1635);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a5, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a5, "href", "persetujuan_nasabah/tidak-setuju");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a5, file, 41, 2, 1577);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "col-6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 40, 1, 1555);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "block", "");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "class", "btn btn-block btn-danger");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 44, 54, 1794);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a6, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a6, "href", "persetujuan_nasabah/setuju");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a6, file, 44, 2, 1742);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "col-6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 43, 1, 1720);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(navbar, "class", "navbar bg-light fixed-bottom");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(navbar, file, 35, 0, 1364);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li3, a3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ul, li4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li4, a4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a4, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t10, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t12, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t14, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, navbar, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(navbar, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, small);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(small, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(navbar, t16);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(navbar, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, a5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a5, button0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button0, t17);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(navbar, t18);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(navbar, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, a6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a6, button1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button1, t19);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t10);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t12);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t14);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(navbar);
			}
		}
	};
}

function preload({ params, query }) {
	return this.fetch(`persetujuan_nasabah.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;

	const writable_props = ['posts'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Persetujuan_nasabah> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
	};

	return { posts };
}

class Persetujuan_nasabah extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1frg2tf-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["posts"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.posts === undefined && !('posts' in props)) {
			console.warn("<Persetujuan_nasabah> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Persetujuan_nasabah>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Persetujuan_nasabah>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Persetujuan_nasabah);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9wZXJzZXR1anVhbl9uYXNhYmFoL2luZGV4LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1EsU0FBUyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDM0MsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQ2pGLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ25CLEVBQUUsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7O0NBSU0sTUFBSSxpQkFBSyxDQUFDIiwiZmlsZSI6IjA5MDk5NGJmNTQ2MTc4ODg0MzM3L3BlcnNldHVqdWFuX25hc2FiYWgucGVyc2V0dWp1YW5fbmFzYWJhaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBwZXJzZXR1anVhbl9uYXNhYmFoLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocG9zdHMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgcG9zdHMgfTtcblx0XHR9KTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgcG9zdHM7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UGVyc2V0dWp1YW4gTmFzYWJhaDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cbjxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzcz1cIm10LTUgbWItNSBwdC01XCI+XG5cdDx1bD5cblx0XHQ8bGk+PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0ncGVyc2V0dWp1YW5fbmFzYWJhaC9zeWFyYXQtZGFuLWtldGVudHVhbic+U3lhcmF0IGRhbiBLZXRlbnR1YW48L2E+PC9saT5cblx0XHQ8bGk+PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0ncGVyc2V0dWp1YW5fbmFzYWJhaC90YWJlbC1tYW5mYWF0LXBydXByaW1lLWhlYWx0aGNhcmUtcGx1cyc+VGFiZWwgTWFuZmFhdCBQUlVQcmltZSBIZWFsdGhjYXJlIFBMVVM8L2E+PC9saT5cblx0XHQ8bGk+PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0ncGVyc2V0dWp1YW5fbmFzYWJhaC9pbmZvcm1hc2ktbm8tY2xhaW0tYm9udXMnPkluZm9ybWFzaSBObyBDbGFpbSBCb251cyAoTkNCKTwvYT48L2xpPlxuXHRcdDxsaT48YSByZWw9J3ByZWZldGNoJyBocmVmPSdwZXJzZXR1anVhbl9uYXNhYmFoL3BlcmhpdHVuZ2FuLXByby1yYXRlJz5QZXJoaXR1bmdhbiBQcm8gUmF0YTwvYT48L2xpPlxuXHRcdDxsaT48YSByZWw9J3ByZWZldGNoJyBocmVmPSdwZXJzZXR1anVhbl9uYXNhYmFoL2luZm9ybWFzaS1wZW5nZWN1YWxpYW4nPkluZm9ybWFzaSBQZW5nZWN1YWxpYW48L2E+PC9saT5cblx0PC91bD5cbjwvZGl2PlxuXHQ8cCBjbGFzcz1cIiB0ZXh0LWp1c3RpZnkgbXQtNVwiPuKAnFNheWEgZGVuZ2FuIGluaSBtZW55ZXR1anVpIHBlcnViYWhhbiBQb2xpcyBzZXN1YWkgZGVuZ2FuIE1hbmZhYXQgS2VzZWhhdGFuIHlhbmcgdGVydGVyYSBwYWRhIHBlbmF3YXJhbiBpbmksIGRhbiBha2FuIGRpcHJvc2VzIHRhbnBhIG1lbGFsdWkgcGVybWludGFhbiBwZW1lcmlrc2FhbiBrZXNlaGF0YW4gamlrYSBzdGF0dXMgUG9saXMgdGV0YXAgYWt0aWYgc2VydGEgc2VzdWFpIGRlbmdhbiBzeWFyYXQgZGFuIGtldGVudHVhbi7igJ08L3A+XG5cdDxwIGNsYXNzPVwiIHRleHQtanVzdGlmeSBtdC01XCI+S2xpayBTZXR1anUgdW50dWsgcGVuZ2FqdWFuIHBlcnViYWhhbiBQb2xpcyBpbmk8L3A+XG48bmF2YmFyICBjbGFzcz1cIm5hdmJhciBiZy1saWdodCBmaXhlZC1ib3R0b21cIj5cblx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuXHRcdFxuXHRcdDxzbWFsbCBjbGFzcz1cImZvbnQtaXRhbGljIGZvbnQtd2VpZ2h0LXNtYWwgbWItMlwiPlBlbmF3YXJhbiBpbmkgYmVybGFrdSBoaW5nZ2EgZGQtbW0teXkgcHVrdWwgaGg6bW0uPC9zbWFsbD5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuXHRcdDxhIHJlbD0ncHJlZmV0Y2gnIGhyZWY9J3BlcnNldHVqdWFuX25hc2FiYWgvdGlkYWstc2V0dWp1Jz48YnV0dG9uIGJsb2NrIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5XCI+VGlkYWsgU2V0dWp1PC9idXR0b24+PC9hPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNvbC02XCI+XG5cdFx0PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0ncGVyc2V0dWp1YW5fbmFzYWJhaC9zZXR1anUnPjxidXR0b24gYmxvY2sgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYW5nZXJcIj5TZXR1anU8L2J1dHRvbj48L2E+XG5cdDwvZGl2PlxuPC9uYXZiYXI+Il0sInNvdXJjZVJvb3QiOiIifQ==