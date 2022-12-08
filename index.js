let topRange = 200; // measure from the top of the viewport to X pixels down
let edgeMargin = 20; // margin above the top or margin from the end of the page
let animationTime = 1200; // time in milliseconds
let contentTop = [];

$(document).ready(function () {
  $(".middle")
    .find("a")
    .each(function () {
      contentTop.push($($(this).attr("href")).offset().top);
    });

  $(window).scroll(function () {
    let winTop = $(window).scrollTop();
    let bodyHt = $(document).height();
    let vpHt = $(window).height() + edgeMargin; // viewport height + margin
    $.each(contentTop, function (i, loc) {
      if (
        loc > winTop - edgeMargin &&
        (loc < winTop + topRange || winTop + vpHt >= bodyHt)
      ) {
        $("a").removeClass("active").eq(i).addClass("active");
      }
    });
  });
});

const nav = document.querySelector(".nav");
// const menuItems = document.querySelectorAll(".menuItem");
const navDrawer = document.querySelector(".navDrawer");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(event) {
  event.stopPropagation();
  event.preventDefault();
  nav.classList.add("showMenu");
}

function closeMenu() {
  nav.classList.remove("showMenu");
}

// Stops body clicks from closing nav if cliks are inside the nav
nav.addEventListener("click", function (e) {
  e.stopPropagation();
});

navDrawer.addEventListener("click", toggleMenu);

document.body.addEventListener("click", closeMenu);
