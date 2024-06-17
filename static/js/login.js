// JS para el botón de mostrar contraseña de los form

const inputIcon = document.querySelector(".eye-icon");
const inputPassword = document.querySelector(".input__field");

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("fa-eye-slash");
  inputIcon.classList.toggle("fa-eye");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});

/*******************************************************************************/