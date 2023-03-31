//Event Listener for Navigation Toggle
document.getElementById("nav-toggle-btn").addEventListener("click", function () {
    document.body.classList.toggle("nav-toggle-active");
    this.classList.toggle("fa-list");
    this.classList.toggle("fa-x");
})

//Back to top button
const toggleBTT = () => {
    if (window.scrollY > 200) {
        document.getElementById("BTT").classList.add("active");
    } else {
        document.getElementById("BTT").classList.remove("active");
    }
}
//Add event listener on window so it effects on scroll
window.addEventListener("scroll", toggleBTT);