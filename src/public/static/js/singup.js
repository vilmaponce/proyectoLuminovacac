// JS para el Navbar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const loginBtn = document.querySelector(".dropdown");
const dropdown = document.querySelector(".dropdown-content");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible"); /*muestra o no el menu*/

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

/*******************************************************************************/
// JS para el botón de mostrar contraseña de los form

const inputIcon = document.querySelector(".eye-icon");
const inputPassword = document.querySelector(".input__field");

inputIcon.addEventListener("click", () => {
    inputIcon.classList.toggle("fa-eye-slash");
    inputIcon.classList.toggle("fa-eye");
    inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});