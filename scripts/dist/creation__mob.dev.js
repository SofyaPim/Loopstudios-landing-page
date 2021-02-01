"use strict";

var galleryCard__mob = [{
  title: "Deep earth",
  mobPhoto: "/images/mobile/image-deep-earth.jpg"
}, {
  title: "Night arcade",
  mobPhoto: "/images/mobile/image-night-arcade.jpg"
}, {
  title: "Soccer team VR",
  mobPhoto: "/images/mobile/image-soccer-team.jpg"
}, {
  title: "The grid",
  mobPhoto: "/images/mobile/image-grid.jpg"
}, {
  title: "From up above VR",
  mobPhoto: "/images/mobile/image-from-above.jpg"
}, {
  title: "Pocket borealis",
  mobPhoto: "/images/mobile/image-pocket-borealis.jpg"
}, {
  title: "The curiosity",
  mobPhoto: "/images/mobile/image-curiosity.jpg"
}, {
  title: "Make it fisheye",
  mobPhoto: "/images/mobile/image-fisheye.jpg"
}];

function cardTemplate(card) {
  return "\n   <div class=\"creations__gallery__card\">\n   <h3 class=\"card-header\" >".concat(card.title, "</h3>\n   <img src=\"").concat(card.mobPhoto, "\">\n    </div>\n    ");
}

;
document.querySelector(".creations__gallery__mob").innerHTML = " \n".concat(galleryCard__mob.map(cardTemplate).join(''));