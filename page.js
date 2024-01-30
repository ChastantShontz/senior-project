// Functions

function changePage() {
  if (sessionStorage.firstPage == "true") {
    sessionStorage.firstPage = "false";
  }
  else if (sessionStorage.firstPage == "false") {
    for (var i = 0; i < document.getElementsByClassName("navLink").length; i++) {
      if (document.getElementsByClassName("navLink")[i].classList.contains("currentNavLink")) {
        document.getElementsByClassName("navLink")[i].style.animation = "changePage .25s ease 0s 1 forwards";
        setTimeout(() => (
          document.getElementsByClassName("navLink")[i].style.animation = "none"
        ), 250);
      }
    }
  }
}

function downloadResume() {
  const day = new Date();
  document.getElementById("resumeDownloadFooterLink").download = document.getElementById("resumeDownloadFooterLink").download + "_" + day.getFullYear() + "-" + (((+day.getMonth() + 1) < 10) ? ("0" + (+day.getMonth() + 1)) : (+day.getMonth() + 1)) + "-" + ((day.getDate() < 10) ? ("0" + day.getDate()) : (day.getDate()));
}
