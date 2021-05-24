/*var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '300',
        width: '500',
        videoId: 'rTHXZj4EVAg',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange' : onPlayerStateChange

        }
    })
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}*/

const mainMenu = document.querySelector("#main-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
// const openMenu = document.querySelector()

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);

function show() {
  if (window.innerWidth < 800) {
    mainMenu.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
  }
}

function hide() {
  if (window.innerWidth < 800) {
    mainMenu.style.display = "none";
    openMenu.style.display = "flex";
  }
}
