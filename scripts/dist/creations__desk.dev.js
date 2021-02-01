"use strict";

var galleryCard = [{
  title: "Deep earth",
  photo: "/images/desktop/image-deep-earth.jpg"
}, {
  title: "Night arcade",
  photo: "/images/desktop/image-night-arcade.jpg"
}, {
  title: "Soccer team VR",
  photo: "/images/desktop/image-soccer-team.jpg"
}, {
  title: "The grid",
  photo: "/images/desktop/image-grid.jpg"
}, {
  title: "From up above VR",
  photo: "/images/desktop/image-from-above.jpg"
}, {
  title: "Pocket borealis",
  photo: "/images/desktop/image-pocket-borealis.jpg"
}, {
  title: "The curiosity",
  photo: "/images/desktop/image-curiosity.jpg"
}, {
  title: "Make it fisheye",
  photo: "/images/desktop/image-fisheye.jpg"
}];

function cardTemplate(card) {
  return "\n    <div class=\"creations__gallery__card\" >\n    <h3 class=\"card-header\" >".concat(card.title, "</h3>\n    <img src=\"").concat(card.photo, "\">\n     </div>\n     ");
}

;
document.querySelector(".creations__gallery").innerHTML = " \n".concat(galleryCard.map(cardTemplate).join(''));