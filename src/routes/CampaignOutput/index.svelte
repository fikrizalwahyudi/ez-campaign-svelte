
<svelte:head>
	<title>PDF Viewer</title>
</svelte:head>

<script context="module">

function zoomin(){
    var pdfzoom = document.getElementById("viewport");
    var currWidth = pdfzoom.clientWidth;
    if(currWidth == 2500) return false;
     else{
        pdfzoom.style.width = (currWidth + 100) + "px";
    } 
}
function zoomout(){
    var pdfzoom = document.getElementById("viewport");
    var currWidth = pdfzoom.clientWidth;
    if(currWidth == 100) return false;
     else{
        pdfzoom.style.width = (currWidth - 100) + "px";
    }
}
</script>

<script>
  import { onMount } from 'svelte';
  import * as PDFGenerator from '../../routes/CampaignOutput/PDFGenerator';

  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = "23:59";
  let dateTime = date+' '+time;
  
  onMount(() => {
    document.getElementsByName("container_terms")[0].addEventListener("scroll", checkScrollHeight, false);
    function checkScrollHeight() {
      var agreementTextElement = document.getElementsByName("container_terms")[0];
      if (agreementTextElement.clientHeight + agreementTextElement.scrollTop >= agreementTextElement.scrollHeight) {
        document.getElementsByName("agree")[0].disabled = false;	
        document.getElementsByName("agree2")[0].disabled = false;	
      }
    }
    const viewport = document.querySelector("#viewport");
    PDFGenerator.initPDFViewer("output.pdf");
  });
</script>

<main>
  <div id="pdf-container">
    <div id="viewport-container"  name="container_terms" style="padding-top: 15%; padding-bottom: 26%;">
      <div  role="main" id="viewport"></div>
    </div>
  </div> 
  <navbar id="pager" class="navbar bg-white fixed-bottom shadow-lg">
    <div class ="col-12 text-center">
      <button class ="btn btn-sm btn-secondary" on:click= {zoomin}><b>+<b/></button>
      <button class ="btn btn-sm btn-secondary" on:click= {zoomout}><b>- <b/></button>
    </div>
    <div class="col-12">
      <p>Apakah anda setuju dengan penawaran ini ?</p>
      <small  class="font-italic font-weight-small mb-2">Penawaran ini berlaku hingga <small>{dateTime}</small></small>
    </div>
    <div class="col-6">
			<a rel='prefetch' href='route_setuju'><button  name="agree2" block class="btn btn-block btn-danger" disabled>Setuju</button></a>
		</div>
    <div class="col-6">
			<a rel='prefetch' href='route_tidaksetuju'><button  name="agree" block class="btn btn-block btn-secondary" disabled>Tidak Setuju</button></a>
		</div>
  </navbar>
</main>
