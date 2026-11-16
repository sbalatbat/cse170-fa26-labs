const imageURLs = [
    "media/pixel-merp.png",
    "media/bingbong.png",
    "media/teamnatsu.png"
];
const altTexts = [
    "Pixel art of a black cat with a purple collar and golden eyes.",
    "An ominous reflective Bing Bong from video game 'Peak' levitating a red and purple cube.",
    "Fairy Tail characters Natsu, Gray, Happy, and Erza drawn as if in photos during a beach day."
];
const likeOff = "icons/paw-heart.png";
const likeOn = "icons/paw-heart-fill.png";

const imgOne = document.createElement("img");
imgOne.classList.add("carousel");
imgOne.src = imageURLs[0];
imgOne.alt = altTexts[0];
const imgTwo = document.createElement("img");
imgTwo.classList.add("carousel");
imgTwo.src = imageURLs[1];
imgTwo.alt = altTexts[1];
const imgThree = document.createElement("img");
imgThree.classList.add("carousel");
imgThree.src = imageURLs[2];
imgThree.alt = altTexts[2];
const images = [imgOne, imgTwo, imgThree];

const carouselImg = document.getElementsByClassName("carousel")[0];
const carouselDiv = carouselImg.parentElement;
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];
const likeBtn = document.getElementsByClassName("like-btn")[0];
let carouselIdx = 0;
let numSlides = 3;

function prev() {
    carouselIdx = (carouselIdx + numSlides - 1) % numSlides;
}

function next() {
    carouselIdx = (carouselIdx + numSlides + 1) % numSlides;
}

function swapImg() {
    carouselDiv.firstElementChild.remove();
    carouselDiv.appendChild(images[carouselIdx]);
}

document.addEventListener("DOMContentLoaded", function() {
    let likeActive = false;

    prevBtn.addEventListener("click", function() {
        prev();
        swapImg();
    });
    nextBtn.addEventListener("click", function() {
        next();
        swapImg();
    });
    carouselDiv.addEventListener("swipeleft", function() {
        next();
        swapImg();
    });
    likeBtn.addEventListener("click", function() {
        if (!likeActive) {
            likeActive = true;
            likeBtn.src = likeOn;
        } else {
            likeActive = false;
            likeBtn.src = likeOff;
        }
    })

});