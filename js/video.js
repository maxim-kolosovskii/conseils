const q = selector => document.querySelector(selector),
    on = 'addEventListener'

// Fullscreen setting
const fullscreen = ()=> {
    var elem = q('#myContainer')
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
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
    // myPlayer.scrollIntoView({ behavior: 'smooth', block: 'start'});
    myPlayer.play();
    videoManagement.classList.add("management-on");
}
function onPause() {
    myPlayer.classList.remove("playing");
    myPlayer.pause();
}
function onClose() {
    myPlayer.classList.remove("playing");
    videoManagement.classList.remove("management-on");
    myPlayer.pause();
}
function theEnd(){
    // console.log("The End.")
    videoManagement.classList.remove("management-on");
}
q('#btnFull')[on]('click', fullscreen)
q('#btnPlay')[on]('click', onPlay)
q('#btnClose')[on]('click', onClose)
q('#btnPause')[on]('click', ()=> {
    // console.log(myPlayer);
    if (myPlayer.paused) {
        onPlay();
    } else {
        onPause();
    }
})

