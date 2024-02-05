// Functions

function changePage(x) {
  var page = x;
  if (sessionStorage.firstPage == "true") {
    sessionStorage.firstPage = "false";
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
  }
  if (page == "resume") {
    for (var i = 0; i < document.getElementsByClassName("category").length; i++) {
      if (eval("sessionStorage." + document.getElementsByClassName("category")[i].id + "Open") == "closed") {
        document.getElementsByClassName("category")[i].open = false;
      }
    }
    for (var i = 0; i < document.getElementsByClassName("category").length; i++) {
      var category = document.getElementsByClassName("category")[i].id;
      if ((eval("sessionStorage." + category + "Toggle") == "collapsed") || (eval("sessionStorage." + category + "Toggle") == undefined)) {
        for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
          if (j >= 6) {
            document.getElementsByClassName(category + "GridItem")[j].style.display = "none";
          }
        }
        eval("sessionStorage." + category + "Toggle = \"collapsed\"");
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

function toggleSection(x) {
  var category = x;
  if ((eval("sessionStorage." + category + "Open") == "open") || (eval("sessionStorage." + category + "Open") == undefined)) {
    eval("sessionStorage." + category + "Open = \"closed\"");
  }
  else if (eval("sessionStorage." + category + "Open") == "closed") {
    eval("sessionStorage." + category + "Open = \"open\"");
  }
}

function toggleGrid(x) {
  var category = x;
  if ((eval("sessionStorage." + category + "Toggle") == "collapsed") || (eval("sessionStorage." + category + "Toggle") == undefined)) {
    for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
      if (j >= 6) {
        document.getElementsByClassName(category + "GridItem")[j].style.display = "block";
      }
    }
    eval("sessionStorage." + category + "Toggle = \"expanded\"");
  }
  else if (eval("sessionStorage." + category + "Toggle") == "expanded") {
    for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
      if (j >= 6) {
        document.getElementsByClassName(category + "GridItem")[j].style.display = "none";
      }
    }
    eval("sessionStorage." + category + "Toggle = \"collapsed\"");
  }
}
