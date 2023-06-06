// hamburger + X select HTML
const hamburger = document.querySelector(".hamburger");
const closeBurger = document.getElementById("close");
const blur = document.querySelector(".blur")
//mobile wrapper + list
const nav = document.querySelector(".mobile");
const mobileNav = document.querySelectorAll(".nav__list--mobile");

// adds + removes hamburger menu
hamburger.addEventListener("click", showMenu);
closeBurger.addEventListener("click", closeMenu)

//opens menu when clicked on hamburger
function showMenu(){
    nav.classList.toggle("active");
    closeBurger.classList.toggle("show");
    hamburger.classList.toggle("hidden");
    blur.classList.toggle("go");
}

// closes menu when clicked on X
function closeMenu(){
    nav.classList.remove("active");
    closeBurger.classList.remove("show");
    hamburger.classList.remove("hidden");
    blur.classList.remove("go");
}

// closes menu when clicked on links
mobileNav.forEach(event => event.addEventListener("click", () => {
    nav.classList.remove("active");
    closeBurger.classList.remove("show");
    hamburger.classList.remove("hidden");
    blur.classList.remove("go");
}))

