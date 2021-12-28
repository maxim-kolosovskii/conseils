const q = selector => document.querySelector(selector),
    on = 'addEventListener'

// Fullscreen setting
const fullscreen = ()=> {
    var elem = q('#myContainer')
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        // console.log(fullscreen);
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}
document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
        myPlayer.classList.add("fullscreen");
    } else {
        myPlayer.classList.remove("fullscreen");
    }
});

// Buttons behavior
function onPlay() {
    myPlayer.classList.add("playing");
    myPlayer.scrollIntoView({ behavior: 'smooth', block: 'start'});
    myPlayer.play();
}
function onPause() {
    myPlayer.classList.remove("playing");
    myPlayer.pause();
}
q('#btnFull')[on]('click', fullscreen)
q('#btnPlay')[on]('click', onPlay)
q('#btnPause')[on]('click', ()=> {
    // console.log(myPlayer);
    if (myPlayer.paused) {
        onPlay();
    } else {
        onPause();
    }
})