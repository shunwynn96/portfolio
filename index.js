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
const navToggle = document.querySelector(".navToggle");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function openMenu(event) {
  event.stopPropagation();
  event.preventDefault();
  nav.classList.add("show");
  navToggle.classList.add("hidden");
}

function closeMenu() {
  nav.classList.remove("show");
  navToggle.classList.remove("hidden");
}

// Stops body clicks from closing nav if cliks are inside the nav
nav.addEventListener("click", function (e) {
  e.stopPropagation();
});

navToggle.addEventListener("click", openMenu);
document.body.addEventListener("click", closeMenu);

// Show "Visit Site" when hovering over a project
let projects = document.querySelectorAll(".project-card");

projects.forEach((project) => {
  let button = project.querySelector(".visit-btn");

  project.addEventListener("mouseover", () =>
    button.classList.remove("hidden")
  );
  project.addEventListener("mouseout", () => button.classList.add("hidden"));
});
