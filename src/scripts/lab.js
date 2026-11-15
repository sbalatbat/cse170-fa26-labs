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

function prev() {
    let swapImg = document.createElement("img");
    let original = document.getElementsByClassName("carousel")[0];
    let container = original.parentElement;
    original.remove();
    let idx = parseInt(original.id) - 1;
    if (idx < 0) {
        idx = imageURLs.length - 1;
    }
    swapImg.id = idx;
    swapImg.classList.add("carousel");
    swapImg.src = imageURLs[idx];
    swapImg.alt = altTexts[idx];
    container.appendChild(swapImg);
}

function next() {
    let swapImg = document.createElement("img");
    let original = document.getElementsByClassName("carousel")[0];
    let container = original.parentElement;
    original.remove();
    let idx = parseInt(original.id) + 1;
    if (idx >= imageURLs.length) {
        idx = 0;
    }
    swapImg.id = idx;
    swapImg.classList.add("carousel");
    swapImg.src = imageURLs[idx];
    swapImg.alt = altTexts[idx];
    container.appendChild(swapImg);
}