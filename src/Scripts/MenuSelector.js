let scroll = 0;
let isGone = false;

let inchVid = document.getElementById('LogoIntro');
let inch = document.getElementById('Intro');

//that loop that runs a function every 10ms
let MainLoop = setInterval(function() {
    //If its done playing destroy the video
    if (inchVid.ended && !isGone) {
        inch.remove();
        isGone = true;
    }

}, 10);