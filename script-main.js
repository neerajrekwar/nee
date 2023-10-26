// // Javascript

/* window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

document.getElementById("screen-fit").innerHTML = 'Screen: ' + myWidth + "x" + myHeight + ' px';
}
*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}
// const insteadIAmOk = new  Accepted("asal mein","ek tarfa",["..."])