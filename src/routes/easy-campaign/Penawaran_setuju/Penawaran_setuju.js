export let timeoutHandle;

export function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;
function tick() {
    let counter = document.getElementById("timer");
    let current_minutes = mins-1
    seconds--;
    counter.innerHTML =
    current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if( seconds > 0 ) {
        timeoutHandle=setTimeout(tick, 1000);
        document.getElementById("kirimulang").style.display = "none";
        document.getElementById("waiting").style.display = "block";
    } else {
        document.getElementById("kirimulang").style.display = "block";
        document.getElementById("waiting").style.display = "none";
        //    document.getElementById("kirimulang").onclick = countdown();

        if(mins > 1){
        setTimeout(function () { countdown(mins - 1); }, 1000);
        }
    }
}
tick();
}

export function kirimulang(){
    countdown(5);
}