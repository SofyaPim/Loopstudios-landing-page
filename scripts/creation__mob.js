const galleryCard__mob = [{
        title: "Deep earth",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-deep-earth.jpg"
    },
    {
        title: "Night arcade",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-night-arcade.jpg"
    },
    {
        title: "Soccer team VR",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-soccer-team.jpg"
    },
    {
        title: "The grid",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-grid.jpg"
    }, {
        title: "From up above VR",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-from-above.jpg"
    },
    {
        title: "Pocket borealis",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-pocket-borealis.jpg"
    },
    {
        title: "The curiosity",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-curiosity.jpg"
    },
    {
        title: "Make it fisheye",
        mobPhoto: "https://sofyapim.github.io/Loopstudios-landing-page/images/mobile/image-fisheye.jpg"
    },
];



function cardTemplate(card){
    return `
   <div class="creations__gallery__card">
   <h3 class="card-header" >${card.title}</h3>
   <img src="${card.mobPhoto}">
    </div>
    `
   
   };


document.querySelector(".creations__gallery__mob").innerHTML = ` 
${galleryCard__mob.map(cardTemplate).join('')}`