// Functions

function changePage(x) {
  var page = x;
  if (sessionStorage.firstPage == "true") {
    sessionStorage.firstPage = "false";
    sessionStorage.skills = "open";
    sessionStorage.classes = "open";
    sessionStorage.jobs = "open";
  }
  else if (sessionStorage.firstPage == "false") {
    for (var i = 0; i < document.getElementsByClassName("navListItem").length; i++) {
      if (document.getElementsByClassName("navListItem")[i].classList.contains("currentNavListItem")) {
        document.getElementsByClassName("navListItem")[i].style.animation = "changePage .25s ease 0s 1 forwards";
        const reset = (x) => {
          setTimeout(() => (
            document.getElementsByClassName("navListItem")[x].style.animation = "none"
          ), 250);
        }
        reset(i);
      }
    }
    for (var i = 0; i < document.getElementsByClassName("category").length; i++) {
      if (eval("sessionStorage." + document.getElementsByClassName("category")[i].id) == "close") {
        document.getElementsByClassName("category")[i].open = false;
      }
    }
  }
  window.scrollTo(0, 0);
}

function resizeHeader(x) {
  var element = x;
  if ((document.getElementById(element).getBoundingClientRect().top < document.querySelector("header").getBoundingClientRect().bottom) || (document.getElementById(element).getBoundingClientRect().top > document.querySelector("header").getBoundingClientRect().bottom)) {
    var heightValue = document.getElementById(element).getBoundingClientRect().top;
    if (heightValue < 80) {
      heightValue = 80;
    }
    else if (heightValue > 160) {
      heightValue = 160;
    }
    document.querySelector("header").style.height = heightValue + "px";
    document.querySelector("header").style.transition = "height 0s ease 0s";
    document.getElementById("headshot").style.height = (heightValue - 10) + "px";
    document.getElementById("headshot").style.width = (heightValue - 10) + "px";
    document.getElementById("headshot").style.transition = "all 0s ease 0s";
  }
}

function downloadResume(x) {
  var element = x;
  const day = new Date();
  document.getElementById(element).download = "Chastant_Shontz_Resume_" + day.getFullYear() + "-" + (((+day.getMonth() + 1) < 10) ? ("0" + (+day.getMonth() + 1)) : (+day.getMonth() + 1)) + "-" + ((day.getDate() < 10) ? ("0" + day.getDate()) : (day.getDate()));
}

function toggleDetails(x) {
  var category = x;
  if (eval("sessionStorage." + category) == "open") {
    eval("sessionStorage." + category + " = \"close\"");
  }
  else if (eval("sessionStorage." + category) == "close") {
    eval("sessionStorage." + category + " = \"open\"");
  }
}
