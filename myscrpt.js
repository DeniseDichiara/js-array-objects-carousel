

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselElement = document.querySelector('div.carousel');
console.log(carouselElement);

let i = 0;


images.forEach((element, index) => {i++
    if (index==0||index==5) {

        console.log(element.title)

    carouselElement.innerHTML += ` <div class=" = i === 1 carousel-item.active" : "carousel-item"> ` ;
    }

    ` <div class="carousel-item">
        <img src="./img/${images[element.image]}" alt="Crousel slide" width="60%">
        </div>  
        
        if((i % 5) == 0) {
            <div></div>
        }` ;
});


/**carouselElement.innerHTML += ` <div class="carousel-item.active">
                                    <img src="${images[0]}" alt="Crousel slide" width="60%">
                                </div>  ` ;


/**
 * <div class="carousel-item.active">
        <img src="" alt="" width="60%">
    </div>
 */