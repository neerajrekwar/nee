// // Javascript

/* window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

document.getElementById("screen-fit").innerHTML = 'Screen: ' + myWidth + "x" + myHeight + ' px';
}
*/
const buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', () => {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('active');
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    }
})
// const insteadIAmOk = new  Accepted("asal mein","ek tarfa",["..."])
