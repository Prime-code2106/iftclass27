function redirectToSignUp() {
    window.location.href = 'ift2.html';
}

var hamburger = document.querySelector('.hamburger-menu')
var mobilee = document.querySelector('.mobileview')
var bars = document.getElementsByClassName('menubars')

function showclass() {
    hamburger.classList.toggle('show')
    mobilee.style.visibility = 'visible';
    
    
}

bars.addEventListener('click', removeclass = () => {
    if(mobilee.style.visibility == 'visible') {
        mobilee.style.visibility = 'hidden'
    } else {
        mobilee.style.visibility = 'visible';
    }
    
})


document.addEventListener("DOMContentLoaded", function () {
    // Select the element that will be clicked
    let clickElement = document.querySelector(".show");

    // Select the target element to be hidden
    let targetElement = document.getElementById("mobile");

    // Add event listener for the click event
    clickElement.addEventListener("click", function () {
        targetElement.style.visibility = "hidden";
    });
});
