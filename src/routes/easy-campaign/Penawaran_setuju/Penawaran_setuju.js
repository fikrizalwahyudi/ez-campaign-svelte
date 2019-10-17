
export let timeoutHandle;
export let x;
export function count_otp(){

    let countDownDate = new Date(Date.now() + 302000).getTime(); // Update the count down every 1 second
    x = setInterval(function() { // Get todays date and time
        let now = new Date().getTime();
        let distance = countDownDate - now;// Find the distance between now and the count down date
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));   // Time calculations for days, hours, minutes and seconds
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("expire").innerHTML = minutes + ":" + seconds;   // Output the result in an element with id="demo"
        if (distance < 0) {  // If the count down is over, write some text 
            clearInterval(x);
            document.getElementById("expire").innerHTML = "OTP Code EXPIRED !";
        }
    }, 1000);
}


export function kirimulang(){
    clearInterval(x);
    count_otp();
    let countDownDate = new Date(Date.now() + 62000).getTime(); // Update the count down every 1 second
    let y = setInterval(function() { // Get todays date and time
        let now = new Date().getTime();
        let distance = countDownDate - now;// Find the distance between now and the count down date
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));   // Time calculations for days, hours, minutes and seconds
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("count_kirimulang").innerHTML = minutes + ":" + seconds;   // Output the result in an element with id="demo"
        document.getElementById("waiting").style.display = "block";
        document.getElementById("kirimulang").style.display = "none";
        if (distance < 0) {  // If the count down is over, write some text 
            clearInterval(y);
            document.getElementById("waiting").style.display = "none";
            document.getElementById("kirimulang").style.display = "block";
        }
    }, 1000);
    
}


export function validate_otp() {
    var x = document.forms["validate"]["otp"].value;
    if (x == "123") {
        document.getElementById("failed").style.display = "none";
        location.replace("easy-campaign/Penawaran_setuju/setuju");
      return true;
    } else {
        document.getElementById("failed").style.display = "block";
    }
  }