const manifestBtn = document.querySelector("#manifest");
const transmuteBtn = document.querySelector("#transmute");
const transfigBtn = document.querySelector("#transfigure");
const magicWords = [
    "Here I am. Now what do you want?", "You lost the game.", "Six seven.",
    "OooOooOoo you wanna give me money~", "You're not getting any richer per click.",
    "Man, you should get a job!", "I'm sorry I don't have any more words for you.", "Goodbye.",
    "I said goodbye.", "...", "It's joever.", ""
];
const colors = [
    "#FFABA4", "#FFBE89", "#FFF18A", "#CCFF8A", "#8AF5FF",
    "#C4A9FF", "#FFBAF9"
]

document.addEventListener('DOMContentLoaded', function() {
    let magicWordIdx = 0;
    let colorIdx = 0;
    let originalForm = true;
    let transfigContainer = transfigBtn.parentNode.querySelector("p");

    manifestBtn.addEventListener('click', (event) => {
        let manifestContainer = manifestBtn.parentNode.querySelector("p");
        manifestContainer.textContent = magicWords[magicWordIdx];
        magicWordIdx = (1 + magicWordIdx) % magicWords.length;
    });

    transmuteBtn.addEventListener('click', (event) => {
        let transmuteContainer = transmuteBtn.parentNode.querySelector("p");
        transmuteContainer.style.setProperty("color", colors[colorIdx]);
        transmuteContainer.querySelector("subscript").style.setProperty("visibility", "visible");
        setTimeout(() => {
            transmuteContainer.querySelector("subscript").style.setProperty("visibility", "hidden");
        }, 500);
        colorIdx = (1 + colorIdx) % colors.length;
    });

    transfigBtn.addEventListener('click', (event) => {
        let transfigSection = transfigBtn.parentNode;
        let newForm;
        if (originalForm) {
            transfigContainer.remove();
            newForm = document.createElement("img");
            newForm.src = "media/merp-ball.png"
            transfigSection.appendChild(newForm);
            originalForm = false;
            transfigSection.style.setProperty("align-items", "flex-start");
        } else {
            newForm = transfigSection.querySelector("img");
            newForm.remove();
            transfigSection.appendChild(transfigContainer);
            originalForm = true;
            transfigSection.style.setProperty("align-items", "center");
        }
    });
});

