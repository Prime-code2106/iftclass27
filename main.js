function redirectToSignUp() {
    window.location.href = 'ift2.html';
}

var hamburger = document.querySelector('.hamburger-menu')
var mobilee = document.querySelector('.mobileview')

function showclass() {
    hamburger.classList.toggle('show')
    mobilee.classList.toggle('mobilesection')
}