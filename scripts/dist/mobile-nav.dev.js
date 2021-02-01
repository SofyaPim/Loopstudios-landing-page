"use strict";

var mobile_nav = document.querySelector(".mobile-nav");
var menu_line = document.querySelectorAll(".mobile-nav span");
var desktop_nav = document.querySelector(".desktop-nav");
mobile_nav.addEventListener("click", function openMenu(e) {
  menu_line[0].classList.toggle('topLineMenu');
  menu_line[1].classList.toggle('bottomLineMenu');
  menu_line[2].classList.toggle('hidden');
  desktop_nav.classList.toggle('mobile-menu');
});