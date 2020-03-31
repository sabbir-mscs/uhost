$(document).ready(function () {

  //! Initialize WOW
  new WOW().init();

});
var backdrop = document.querySelector(".backdrop");
var popup = document.querySelector(".popup");
var popupNobtn = document.querySelector(".popup__action--negative");
var selectPlanButtons = document.querySelectorAll(".package button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav_li--CTA");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // popup.style.display = "block";
    // backdrop.style.display = "block";
    // !  styling using 'open' class
    popup.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closepopup();
});

if (popupNobtn) {
  popupNobtn.addEventListener("click", closepopup);
}

function closepopup() {
  // popup.style.display = "none";
  // backdrop.style.display = "none";
  if (popup) {
    popup.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener('animationstart', function (event) {
  console.log("animation started", event);
})
ctaButton.addEventListener('animationend', function (event) {
  console.log("animation ended", event);
})
ctaButton.addEventListener('animationiteration', function (event) {
  console.log("animation iteration", event);
})