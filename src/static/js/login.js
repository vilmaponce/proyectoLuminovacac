// JS para el botón de mostrar contraseña de los form

const inputIcon = document.querySelector(".eye-icon");
const inputPassword = document.querySelector(".input__field");

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("fa-eye-slash");
  inputIcon.classList.toggle("fa-eye");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});

/*******************************************************************************/
// Se carga la funcion a penas carga el documento
document.addEventListener('DOMContentLoaded', function () {
  // Captamos el formulario
  const registerForm = document.getElementById('registerForm');
  // Capturamos el input de contraseña (sólo la primera)
  const passwordInput = document.getElementById('password');
  // Capturamos el modal con los requerimientos
  const passwordModal = document.getElementById('password-modal');
  // Requerimientos de la contraseña que se encuentra en el modal (<li>)
  const passwordRequirements = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special')
  };
  // Capturamos el div que msotrará el progreso de cumplimiento de los requisitos
  const passwordProgress = document.getElementById('password-progress');
  // Capturamos el modal que msotrará el mensaje en caso de error
  const errorModal = document.getElementById('error-modal');
  // Capturamos el elemento que contendrá el mensaje de error
  const errorMessage = document.getElementById('error-message');
  // Capturamos el botón para cerrar el modal de error
  const closeErrorBtn = document.getElementById('close-error');

  // Comenzamos a escuchar el ingreso del dato en el input
  passwordInput.addEventListener('input', function () {
    const value = passwordInput.value;
    let validCount = 0;

    // Chequeamos longitud de caractéres
    if (value.length >= 8) {
      passwordRequirements.length.classList.add('checked');
      validCount++;
    } else {
      passwordRequirements.length.classList.remove('checked');
    }

    //  Chequeamos que contenga una mayúscula
    if (/[A-Z]/.test(value)) {
      passwordRequirements.uppercase.classList.add('checked');
      validCount++;
    } else {
      passwordRequirements.uppercase.classList.remove('checked');
    }

    //  Chequeamos que contenga un número
    if (/[0-9]/.test(value)) {
      passwordRequirements.number.classList.add('checked');
      validCount++;
    } else {
      passwordRequirements.number.classList.remove('checked');
    }

    // Chequeamos que contenga algun caracter especial
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      passwordRequirements.special.classList.add('checked');
      validCount++;
    } else {
      passwordRequirements.special.classList.remove('checked');
    }

    // Actualizamos la barra de progreso dividida en 4 niveles de aprobación
    const progress = (validCount / 4) * 100;
    passwordProgress.style.width = `${progress}%`;

    if (validCount === 4) {
      passwordProgress.style.backgroundColor = 'green';
    } else if (validCount >= 2) {
      passwordProgress.style.backgroundColor = 'yellow';
    } else {
      passwordProgress.style.backgroundColor = 'red';
    }

    // Mostramos el modal con los requerimientos
    passwordModal.style.display = 'block';
  });

  // Capturamos el formulario
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capturamos los datos que se ingresarán
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Corroboramos que no haya campos vacíos
    if (!username || !email || !password) {
      showError('Todos los campos son obligatorios.');
      return;
    }

    // Corroboramos que la contraseña sea válida
    const passwordValid = checkPasswordRequirements(password);
    if (!passwordValid) {
      showError('La contraseña no cumple con los requisitos.');
      return;
    }

    // Mostramos un alert con el mensaje
    alert('Usuario creado con éxito!');
  });

  // Función que muestra el modal de error
  function showError(message) {
    errorMessage.textContent = message;
    errorModal.style.display = 'block';
  }

  // Funcion que cierra el modal de error
  closeErrorBtn.addEventListener('click', function () {
    errorModal.style.display = 'none';
  });

  // Función que creque si la contraseña cumple los parámetros
  function checkPasswordRequirements(password) {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  }
});
