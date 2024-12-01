const openMenu = document.querySelector('#menu-open');
const closeMenu = document.querySelector('#menu-close');
const menuLinks = document.querySelectorAll('.nav-menu ul a');

// Open menu
openMenu.addEventListener("click", () => {
    document.body.classList.add("show-menu");
});

// Close menu
closeMenu.addEventListener("click", () => {
    document.body.classList.remove("show-menu");
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-menu");
    });
});
