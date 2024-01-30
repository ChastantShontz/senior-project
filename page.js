// Functions

function downloadResume() {
  const day = new Date();
  document.getElementById("resumeDownloadFooterLink").download = document.getElementById("resumeDownloadFooterLink").download + "_" + day.getFullYear() + "-" + (((+day.getMonth() + 1) < 10) ? ("0" + (+day.getMonth() + 1)) : (+day.getMonth() + 1)) + "-" + ((day.getDate() < 10) ? ("0" + day.getDate()) : (day.getDate()));
}
