const manifestBtn = document.querySelector("#manifest");
const transmuteBtn = document.querySelector("#transmute");
const transfigBtn = document.querySelector("#transfigure");
const magicWords = [
    "Here I am. Now what do you want?", "You lost the game.", "Six seven.",
    "OooOooOoo you wanna give me money~", "You're not getting any richer per click.",
    "Man, you should get a job!", "I'm sorry I don't have any more words for you.", "Goodbye.",
    "I said goodbye.", "...", "It's joever.", ""
];

document.addEventListener('DOMContentLoaded', function() {
    let magicWordIdx = 0;
    manifestBtn.addEventListener('click', (event) => {
        let manifestContainer = manifestBtn.parentNode.querySelector("p");
        if (magicWordIdx >= magicWords.length) {
            magicWordIdx = 0;
        }
        manifestContainer.textContent = magicWords[magicWordIdx];
        magicWordIdx++;
    });
});

