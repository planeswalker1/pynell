(function () {

  // hamburger menu
  var hamburgerMenu = document.querySelector("#menu-hamburger");

  var responsiveNav = document.querySelector(".responsive-nav");

  hamburgerMenu.addEventListener("click", function () {
    responsiveNav.classList.toggle("responsive-nav__show");

    // animation of hamburger menu

    var rects = hamburgerMenu.querySelectorAll("rect");

    rects.forEach(function (rect, index) {
      rect.classList.toggle("hamburger-menu__rect" + (index + 1))
    })
  });


})();
