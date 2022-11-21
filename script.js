// Javascript
window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth
  myheight = window.innerHeight

document.getElementById('full-size-h').innerHTML = 'Screen: ' + myWidth + "x" + myheight + ' px' ;
document.getElementById('h').innerHTML = 'Screen: ' + myWidth + "x" + myheight + ' px' ;
}
