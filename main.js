function redirectToSignUp() {
    window.location.href = 'ift2.html';
}

var hamburger = document.querySelector('.hamburger-menu')
var mobile = document.querySelector('.mobilesection')

function showclass() {
    hamburger.classList.toggle('show')
    mobile.classList.toggle('mob')
}