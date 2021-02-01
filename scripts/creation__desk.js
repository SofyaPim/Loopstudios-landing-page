const galleryCard = [{
        title: "Deep earth",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-deep-earth.jpg"
    },
    {
        title: "Night arcade",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-night-arcade.jpg"
    },
    {
        title: "Soccer team VR",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-soccer-team.jpg"
    },
    {
        title: "The grid",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-grid.jpg"
    }, {
        title: "From up above VR",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-from-above.jpg"
    },
    {
        title: "Pocket borealis",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-pocket-borealis.jpg"
    },
    {
        title: "The curiosity",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-curiosity.jpg"
    },
    {
        title: "Make it fisheye",
        photo: "https://sofyapim.github.io/Loopstudios-landing-page/images/desktop/image-fisheye.jpg"
    },
];

function cardTemplate(card) {
    return `
    <div class="creations__gallery__card" >
    <h3 class="card-header" >${card.title}</h3>
    <img src="${card.photo}">
     </div>
     `

};


document.querySelector(".creations__gallery").innerHTML = ` 
${galleryCard.map(cardTemplate).join('')}`