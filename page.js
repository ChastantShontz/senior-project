// Functions

function changePage(x, event) {
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
      var category = document.getElementsByClassName("category")[i].id;
      toggleSection(category, event);
      toggleGrid(category, event);
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

function toggleSection(x, event) {
  var category = x;
  if (event.type == "load") {
    if ((eval("sessionStorage." + category + "Open") == 1) || (eval("sessionStorage." + category + "Open") == undefined)) {
      document.getElementById(category).open = true;
    }
    else if (eval("sessionStorage." + category + "Open") == 2) {
      document.getElementById(category).open = false;
    }
  }
  else if (event.type == "click") {
    if ((eval("sessionStorage." + category + "Open") == 1) || (eval("sessionStorage." + category + "Open") == undefined)) {
      eval("sessionStorage." + category + "Expand = 2");
    }
    else if (eval("sessionStorage." + category + "Open") == 2) {
      eval("sessionStorage." + category + "Expand = 1");
    }
  }
}

function toggleGrid(x, event) {
  var category = x;
  if (event.type == "load") {
    if ((eval("sessionStorage." + category + "Expand") == 2) || (eval("sessionStorage." + category + "Expand") == undefined)) {
      for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
        if (j >= 6) {
          document.getElementsByClassName(category + "GridItem")[j].style.display = "none";
        }
      }
    }
    else if (eval("sessionStorage." + category + "Expand") == 1) {
      for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
        if (j >= 6) {
          document.getElementsByClassName(category + "GridItem")[j].style.display = "block";
        }
      }
    }
  }
  else if (event.type == "click") {
    if ((eval("sessionStorage." + category + "Expand") == 2) || (eval("sessionStorage." + category + "Expand") == undefined)) {
      for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
        if (j >= 6) {
          document.getElementsByClassName(category + "GridItem")[j].style.display = "block";
        }
      }
      eval("sessionStorage." + category + "Expand = 1");
    }
    else if (eval("sessionStorage." + category + "Expand") == 1) {
      for (var j = 0; j < document.getElementsByClassName(category + "GridItem").length; j++) {
        if (j >= 6) {
          document.getElementsByClassName(category + "GridItem")[j].style.display = "none";
        }
      }
      eval("sessionStorage." + category + "Expand = 2");
    }
  }
}
