document.addEventListener("DOMContentLoaded", menuBurger);
let coll = document.getElementsByClassName("questions-item-question");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
function menuBurger() {
    let burger = document.querySelector(".mobile-menu__open")
    let mobileMenu = document.querySelector(".mobile-menu")
    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    })
}
