const imageURLs = [
    "https://64.media.tumblr.com/4aef6c34e6b445d992ecc2d8847c43b1/1d2644683a6afe5d-66/s400x600/6aee96a645e94d82ab6663d8efda4ad34f5ced9c.png",
    "https://64.media.tumblr.com/0471047733fb595fa7029e63861ea74b/0d54cc9e0b18629e-56/s1280x1920/feea2bd31cb536cccf427b459309395adbc0fbb2.png",
    "https://64.media.tumblr.com/40861a2784652df208202bf1972eef0c/f98f8bca8302bead-3d/s2048x3072/ab9da0864686b98a35633cbef9b3a2e556765e6b.png"
];
const altTexts = [
    "Pixel art of a black cat with a purple collar and golden eyes.",
    "An ominous reflective Bing Bong from video game 'Peak' levitating a red and purple cube.",
    "Fairy Tail characters Natsu, Gray, Happy, and Erza drawn as if in photos during a beach day."
];

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

    prevBtn.addEventListener("click", function() {
        prev();
        swapImg();
    });
    nextBtn.addEventListener("click", function() {
        next();
        swapImg();
    });
});