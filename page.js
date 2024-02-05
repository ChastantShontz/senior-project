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
      if (document.getElementsByClassName(category + "GridItem").length < 6) {
        document.getElementById(category + "Grid").style.marginBottom = "0";
        document.getElementById(category + "ButtonCont").style.display = "none";
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

function toggleSection(x, event) {
  var category = x;
  if (event.type == "load") {
    if ((eval("sessionStorage." + category + "Open") == 1) || (eval("sessionStorage." + category + "Open") == undefined)) {
      openSection(category);
    }
    else if (eval("sessionStorage." + category + "Open") == 2) {
      closeSection(category);
    }
  }
  else if (event.type == "click") {
    if (eval("sessionStorage." + category + "Open") == 1) {
      eval("sessionStorage." + category + "Open = 2");
    }
    else if (eval("sessionStorage." + category + "Open") == 2) {
      eval("sessionStorage." + category + "Open = 1");
    }
  }
}

function openSection(x) {
  var category = x;
  document.getElementById(category).open = true;
  eval("sessionStorage." + category + "Open = 1");
}

function closeSection(x) {
  var category = x;
  document.getElementById(category).open = false;
  eval("sessionStorage." + category + "Open = 2");
}

function toggleGrid(x, event) {
  var category = x;
  if (event.type == "load") {
    if (eval("sessionStorage." + category + "Expand") == 1) {
      expandGrid(category);
    }
    else if ((eval("sessionStorage." + category + "Expand") == 2) || (eval("sessionStorage." + category + "Expand") == undefined)) {
      collapseGrid(category);
    }
  }
  else if (event.type == "click") {
    if (eval("sessionStorage." + category + "Expand") == 1) {
      collapseGrid(category);
    }
    else if (eval("sessionStorage." + category + "Expand") == 2) {
      expandGrid(category);
    }
  }
}

function expandGrid(x) {
  var category = x;
  for (var i = 0; i < document.getElementsByClassName(category + "GridItem").length; i++) {
    if (i >= 6) {
      document.getElementsByClassName(category + "GridItem")[i].style.display = "block";
    }
  }
  document.getElementById(category + "Button").innerHTML = "See Less <span class=\"categoryArrow upArrow " + category + "Arrow\" id=\"" + category + "UpArrow\">&#65087;</span>";
  document.getElementById(category + "Button").ariaLabel = "Collapse the '" + (category.charAt(0)).toUpperCase() + category.substring(1) + "' section";
  eval("sessionStorage." + category + "Expand = 1");
}

function collapseGrid(x) {
  var category = x;
  for (var i = 0; i < document.getElementsByClassName(category + "GridItem").length; i++) {
    if (i >= 6) {
      document.getElementsByClassName(category + "GridItem")[i].style.display = "none";
    }
  }
  document.getElementById(category + "Button").innerHTML = "See More <span class=\"categoryArrow downArrow " + category + "Arrow\" id=\"" + category + "DownArrow\">&#65088;</span>";
  document.getElementById(category + "Button").ariaLabel = "Expand the '" + (category.charAt(0)).toUpperCase() + category.substring(1) + "' section";
  eval("sessionStorage." + category + "Expand = 2");
}
