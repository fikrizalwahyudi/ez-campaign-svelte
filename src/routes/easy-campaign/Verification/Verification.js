export function validate_password() {
    var x = document.forms["validate"]["password"].value;
    if (x == "admin123") {
        document.getElementById("failed").style.display = "none";
        document.getElementById("loading").style.display = "block";
        location.replace("easy-campaign/CampaignOutput");
      return true;
    } else {
        document.getElementById("failed").style.display = "block";
    }
  }