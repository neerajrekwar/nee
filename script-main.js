// // Javascript

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

document.getElementById("screen-fit").innerHTML = 'Screen: ' + myWidth + "x" + myHeight + ' px';
}

// const insteadIAmOk = new  Accepted("asal mein","ek tarfa",["..."])