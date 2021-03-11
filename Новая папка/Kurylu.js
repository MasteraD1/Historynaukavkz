const q = selector => document.querySelector(selector),
      on = 'addEventListener'

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

q('#btnFull')[on]('click', fullscreen)
q('#btnPlay')[on]('click', ()=>myPlayer.play())
q('#btnPause')[on]('click', ()=>myPlayer.pause())