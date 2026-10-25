// button elements
const manifestBtn = document.querySelector("#manifest");
const transmuteBtn = document.querySelector("#transmute");
const transfigBtn = document.querySelector("#transfigure");
// preset states
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
// game logic states
const ninePlusTen = 21;
let clicks = 0;
let bombed = false;
let fixManifest = false;
let fixTransmute = false;
let fixTransfig = false;
// stars
const urls = ["./icons/star-1.svg", "./icons/star-2.svg", "./icons/star-3.svg"];
const classes = ["star-1", "star-2", "star-3"];


/**
 * Triggers physics when enough clicks accumulated.
 * @param {int} numClicks total number of button clicks
 */
function checkForConsequences(numClicks) {
    if (numClicks > ninePlusTen) {
        bombed = true;
        natesPhysicsBomb();
    }
}

/**
 * Disables physics when in each spell button clicked. Resets game state. Reveals link to lab directory.
 */
function checkForFix() {
    if (bombed && fixManifest && fixTransmute && fixTransfig) {
        alert("You did it!");
        window.stopPagePhysics();

        clicks = 0;
        bombed = false;
        fixManifest = false;
        fixTransmute = false;
        fixTransfig = false;
        transfigBtn.parentNode.querySelector("subscript").style.visibility = "visible";
        setTimeout(() => {
            transfigBtn.parentNode.querySelector("subscript").style.visibility = "hidden";
        }, 800);
        document.querySelector("a").style.visibility = "visible";
    }
}

/**
 * Enables physics.
 */
function natesPhysicsBomb() {
    (()=>{window.stopPagePhysics?.();let A=[...document.querySelectorAll('body *')].map(e=>[e,e.getBoundingClientRect()]).filter(([e,r])=>r.width&&r.height&&getComputedStyle(e).visibility!='hidden').map(([e,r])=>{let t=Math.random()*6.283;return{e,r,w:r.width,h:r.height,x:0,y:0,v:Math.cos(t)*180,u:Math.sin(t)*180,m:1/(r.width*r.height),c:[],s:e.style.cssText}}),M=new Map(A.map(a=>[a.e,a])),R=[];for(let a of A){let p=a.e.parentElement;while(p&&!M.has(p))p=p.parentElement;a.p=M.get(p);(a.p?a.p.c:R).push(a);a.x=a.r.left-(a.p?a.p.r.left+a.p.e.clientLeft:0);a.y=a.r.top-(a.p?a.p.r.top+a.p.e.clientTop:0);a.X=a.x;a.Y=a.y;a.i=getComputedStyle(a.e).display=='inline'&&!/^(IMG|INPUT|SVG|VIDEO|CANVAS|BUTTON|SELECT|TEXTAREA)$/.test(a.e.tagName);if(a.i)a.e.style.position='relative'}let Q=g=>{for(let i=0;i<g.length;i++)for(let j=i+1;j<g.length;j++){let a=g[i],b=g[j],x=b.x+b.w/2-a.x-a.w/2,y=b.y+b.h/2-a.y-a.h/2,h=(a.w+b.w)/2-Math.abs(x),v=(a.h+b.h)/2-Math.abs(y);if(h<=0||v<=0)continue;let nx=h<v?Math.sign(x)||1:0,ny=h<v?0:Math.sign(y)||1,k=(h<v?h:v)/(a.m+b.m);a.x-=nx*k*a.m;a.y-=ny*k*a.m;b.x+=nx*k*b.m;b.y+=ny*k*b.m;let d=(b.v-a.v)*nx+(b.u-a.u)*ny;if(d<0){let z=-2*d/(a.m+b.m);a.v-=z*nx*a.m;a.u-=z*ny*a.m;b.v+=z*nx*b.m;b.u+=z*ny*b.m}}};let B=a=>{let w=a.p?a.p.e.clientWidth:innerWidth,h=a.p?a.p.e.clientHeight:innerHeight;if(a.w>=w)a.v=0;else if(a.x<0||a.x+a.w>w){a.x=Math.max(0,Math.min(w-a.w,a.x));a.v*=-1}if(a.h>=h)a.u=0;else if(a.y<0||a.y+a.h>h){a.y=Math.max(0,Math.min(h-a.h,a.y));a.u*=-1}};let t=performance.now(),id;function F(n){let d=Math.min((n-t)/1000,1/30);t=n;for(let a of A){a.x+=a.v*d;a.y+=a.u*d;B(a)}Q(R);for(let a of A)Q(a.c);for(let a of A){B(a);let x=a.x-a.X,y=a.y-a.Y;if(a.i){a.e.style.left=x+'px';a.e.style.top=y+'px'}else a.e.style.translate=x+'px '+y+'px'}id=requestAnimationFrame(F)}window.stopPagePhysics=()=>{cancelAnimationFrame(id);for(let a of A)a.e.style.cssText=a.s;delete window.stopPagePhysics};id=requestAnimationFrame(F)})();
}

/**
 * Create a star at given (x,y) position on the client.
 * @param {*} x Client x position
 * @param {*} y Client y position
 * @returns 
 */
function createStar(x, y) {
    const star = document.createElement("img");
    const idx = Math.floor(Math.random() * classes.length);
    star.classList.add("star", classes[idx]);
    star.setAttribute("src", urls[idx])
    star.setAttribute("style", `
        position: fixed;
        top: ${y}px;
        left: ${x}px;
    `);
    document.querySelector("body").appendChild(star);
    setTimeout(() => star.remove(), 800);
    return star;
}

/**
 * Star animation generated from a mouse click.
 * @param {*} clickEvent button click event
 */
function starExplosion(clickEvent) {
    for (let i = 0; i < 45; i++) {
        const star = createStar(clickEvent.clientX, clickEvent.clientY);

        star.animate(
            [
                {
                    transform: "translate(0px, 0px)",
                    opacity: 1, 
                },
                {
                    transform: `translate(
                        ${Math.random()* 700 - 500}px,
                        ${Math.random()* 700 - 500}px
                    )`,
                    opacity: 0, 
                },
            ],
            {
                duration: 800,
                iterations: 1,
                easing: "ease-out"
            }
        );
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let magicWordIdx = 0;
    let colorIdx = 0;
    let originalForm = true;
    let transfigContainer = transfigBtn.parentNode.querySelector("p");

    manifestBtn.addEventListener('click', (event) => {
        starExplosion(event);
        let manifestContainer = manifestBtn.parentNode.querySelector("p");
        manifestContainer.textContent = magicWords[magicWordIdx];
        magicWordIdx = (1 + magicWordIdx) % magicWords.length;
        clicks++;
        if (bombed) {
            fixManifest = true;
            checkForFix();
        } else {
            checkForConsequences(clicks);
        }
    });

    transmuteBtn.addEventListener('click', (event) => {
        let transmuteContainer = transmuteBtn.parentNode.querySelector("p");
        transmuteContainer.style.setProperty("color", colors[colorIdx]);
        transmuteContainer.querySelector("subscript").style.setProperty("visibility", "visible");
        setTimeout(() => {
            transmuteContainer.querySelector("subscript").style.visibility = "hidden";
        }, 500);
        colorIdx = (1 + colorIdx) % colors.length;
        clicks++;
        if (bombed) {
            fixTransmute = true;
            checkForFix();
        } else {
            checkForConsequences(clicks);
        }
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
        clicks++;
        if (bombed) {
            fixTransfig = true;
            checkForFix();
        } else {
            checkForConsequences(clicks);
        }
    });
});

