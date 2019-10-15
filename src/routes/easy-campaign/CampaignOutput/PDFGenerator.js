export let currentPageIndex = 0;
export let pageMode = 50;
export let cursorIndex = Math.floor(currentPageIndex / pageMode);
export let pdfInstance = null;
export let totalPagesCount = 0;


export let today = new Date();
export let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export let time = "23:59";
export let dateTime = date+' '+time;

// export const viewport = document.querySelector("#viewport");
export const initPDFViewer = function(pdfURL) {
    pdfjsLib.getDocument(pdfURL).then(pdf => {
    pdfInstance = pdf;
    totalPagesCount = pdf.numPages;
    initPager();
    // initPageMode();
    render();
    });
};

export function onPagerButtonsClick(event) {
    const action = event.target.getAttribute("data-pager");
    
    if (action === "prev") {
    if (currentPageIndex === 0) {
        return;
    }
    currentPageIndex -= pageMode;
    if (currentPageIndex < 0) {
        currentPageIndex = 0;
    }
    render();
    }
    
    if (action === "next") {
    if (currentPageIndex === totalPagesCount - 1) {
        return;
    }
    currentPageIndex += pageMode;
    if (currentPageIndex > totalPagesCount - 1) {
        currentPageIndex = totalPagesCount - 1;
    }
    render();
    }
}

export function initPager() {
    const pager = document.querySelector("#pager");
    pager.addEventListener("click", onPagerButtonsClick);
    // I like this pattern, but this is never actually called, is it?
    return () => {
    pager.removeEventListener("click", onPagerButtonsClick);
    };
}

export function onPageModeChange(event) {
    pageMode = Number(event.target.value);
    render();
}
export function initPageMode() {
    const input = document.querySelector("#page-mode input");
    input.setAttribute("max", totalPagesCount);
    input.addEventListener("change", onPageModeChange);
    // Same here.
    return () => {
    input.removeEventListener("change", onPageModeChange);
    };
}

export function render() {
    cursorIndex = Math.floor(currentPageIndex / pageMode);
    // Could also be:
    // const startPageIndex = currentPageIndex - (currentPageIndex % pageMode);
    const startPageIndex = cursorIndex * pageMode;
    const endPageIndex =
    startPageIndex + pageMode < totalPagesCount
        ? startPageIndex + pageMode - 1
        : totalPagesCount - 1;

    const renderPagesPromises = [];
    for (let i = startPageIndex; i <= endPageIndex; i++) {
    renderPagesPromises.push(pdfInstance.getPage(i + 1));
    }

    Promise.all(renderPagesPromises).then(pages => {
    const pagesHTML = `<div style="width: ${
        pageMode > 1 ? "100%" : "100%"
    }"><canvas id="zoom"></canvas></div>`.repeat(pages.length);
    viewport.innerHTML = pagesHTML
    +'<div class= "text-justify bg-white" style="margin:35px;">'
    +'<p>Persetujuan atas pengajuan ini dilakukan dengan konfirmasi <i>one time password</i> (OTP)</p>'
    +'<p class="text-justify">"Saya dengan ini menyetujui perubahan Polis sesuai dengan Manfaat Kesehatan yang tertera pada penawaran ini, dan akan diproses tanpa melalui permintaan pemeriksaan kesehatan jika status Polis tetap aktif serta sesuai dengan syarat dan ketentuan." </p>'
    +'<p>klik <strong>Setuju</strong> untuk pengajuan perubahan Polis ini.</p>'
    +'</div>';

    pages.forEach(renderPage);

    });
}

export function renderPage(page) {
    const scale = 0.3;
    let pdfViewport = page.getViewport(scale);
    const container = viewport.children[page.pageIndex - cursorIndex * pageMode];
    pdfViewport = page.getViewport(container.offsetWidth / pdfViewport.width);
    const canvas = container.children[0];
    const context = canvas.getContext("2d");
    canvas.height = pdfViewport.height;
    canvas.width = pdfViewport.width;

    page.render({
    canvasContext: context,
    viewport: pdfViewport,
    });
}

//Zoom PDF Viewer
export function zoomin(){
    var pdfzoom = document.getElementById("viewport");
    var currWidth = pdfzoom.clientWidth;
    if(currWidth == 2500) return false;
     else{
        pdfzoom.style.width = (currWidth + 100) + "px";
    } 
}

export function zoomout(){
    var pdfzoom = document.getElementById("viewport");
    var currWidth = pdfzoom.clientWidth;
    if(currWidth == 100) return false;
     else{
        pdfzoom.style.width = (currWidth - 100) + "px";
    }
}






