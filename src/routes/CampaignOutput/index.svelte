<script context="module">

//flag case persetujuan
let flag_pdfviewer = true;
let flag_setuju = false;
let flag_tidaksetuju = false;

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
  import Setuju from '../../routes/route_setuju.svelte'
  import Tidaksetuju from '../../routes/route_tidaksetuju.svelte'
  import Button from '../../../node_modules/sveltestrap/src/Button';
  import ButtonGroup from '../../../node_modules/sveltestrap/src/ButtonGroup';
  import Navbar from '../../../node_modules/sveltestrap/src/Navbar';
  import Zoomin from '../../../node_modules/svelte-icons/fa/FaPlus';
  import Zoomout from '../../../node_modules/svelte-icons/fa/FaMinus';

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

  export let action_p_setuju;
  export let action_p_tidaksetuju;
</script>
<style>
.icon {
    color: #dc3545;
    width: 20px;
    height: 20px;
  }
</style>
<main>

{#if flag_pdfviewer}

  <div id="pdf-container">
    <div id="viewport-container"  name="container_terms" style="padding-top: 15%; padding-bottom: 26%;">
      <div  role="main" id="viewport"></div>
    </div>
  </div> 
          
  <Navbar id="pager" class="navbar bg-white fixed-bottom shadow-lg">  
      <div class="col-12">
        <p class="pt-2">Apakah anda setuju dengan penawaran ini ?</p>
        <small  class="font-italic font-weight-small">Penawaran ini berlaku hingga <small>{dateTime}</small></small>
      </div>
      <div class="col-6">
        <Button on:click={action_p_tidaksetuju} name="agree" block class="btn btn-block btn-secondary" disabled>Tidak Setuju</Button>
      </div>
      <div class="col-6">
        <Button on:click={action_p_setuju}  name="agree2" block class="btn btn-block btn-danger" disabled>Setuju</Button>
      </div>
      <Navbar id="zoom" class="navbar navbar-expand-xs fixed-bottom  shadow-sm mb-5 pb-5">  
      <ul class="navbar-nav  ml-auto">
          <div  class ="col-12  fixed mb-5">
              <Button class="btn btn-light btn-sm "><div class="icon" on:click = {zoomin}><Zoomin/></div> </Button>
              <Button class="btn btn-light btn-sm "><div class="icon" on:click = {zoomout}><Zoomout/></div></Button>
          </div>         
      </ul>
    </Navbar>  
  </Navbar>

  <div  id="setuju" style="display:none" class=" animate-bottom">	
    <Setuju />
  </div>
  
  <div  id="tidaksetuju" style="display:none" class=" animate-bottom">	 
    <Tidaksetuju/>  
  </div>
{/if}

{#if flag_setuju}
  <!-- <div  id="setuju" style="display:none" class=" animate-bottom">	 -->
  <div  id="setuju" style="display:block" class=" animate-bottom">	
    <Setuju />
  </div>
{/if}

{#if flag_tidaksetuju} 
  <!-- <div  id="tidaksetuju" style="display:none" class=" animate-bottom">	 -->
  <div  id="tidaksetuju" style="display:block" class=" animate-bottom">	 
    <Tidaksetuju/>  
  </div>
{/if}
</main>
