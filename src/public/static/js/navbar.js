//JS para el Navbar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const loginBtn = document.querySelector(".dropdown");
const dropdown = document.querySelector(".dropdown-content");

navToggle.addEventListener("click", ()=> {
  navMenu.classList.toggle("nav-menu_visible"); /*muestra o no el menu*/

  if (navMenu.classList.contains ("nav-menu_visible")){
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

/*------------------------------------------------------------*/
// JS para el btn Login
document.querySelector(".nav-menu-item.dropdown").addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdown-content");
  if (dropdown.style.opacity == 0) {
    dropdown.style.opacity = 1;
  } else {
    dropdown.style.opacity = 0;
  }
});