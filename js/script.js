let burgerBtn = document.querySelector(".header__burger-menu");
let menu = document.querySelector(".header");
burgerBtn.addEventListener("click", (event) => {
    menu.classList.toggle("header--open")
})