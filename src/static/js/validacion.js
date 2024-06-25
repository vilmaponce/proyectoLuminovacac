// JS para la validación de contraseña

// Captamos el formulario
const btnFormulario = document.getElementById('registerFormBtn');
// Captamos los inputs
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const dni = document.getElementById("dni").value;
const nacimiento = document.getElementById("nacimiento").value;
const email = document.getElementById("email").value;
const telefono = document.getElementById("telefono").value;
const calle = document.getElementById("calle").value;
const num = document.getElementById("numero").value;
const ciudad = document.getElementById("ciudad").value;
const cp = document.getElementById("codigo_postal").value;
const escolaridad = document.getElementById("escolaridad").value;
const clave = document.getElementById('password');
// Expresión regular para validar los campos
let soloLetras = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let soloNumeros = /^[0-9]+$/;
let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para validar el nombre
function validarNombre() {
    if (!soloLetras.test(nombre)) {
        Swal.fire({
            text: "Por favor, ingrese un nombre válido (solo letras).",
            icon: "error"
        });
    };
};

// Función para validar el apellido
function validarApellido() {
    if (soloLetras.test(apellido)) {
        // Mostrar un mensaje de error si el apellido no es válido
        Swal.fire({
            text: "Por favor, ingrese un apellido válido (solo letras).",
            icon: "error"
        });
    };
};

// Función para validar el DNI
function validarDNI() {
   if (soloNumeros.test(dni)) {
        // Mostrar un mensaje de error si el DNI no es válido
        Swal.fire({
            text: "Por favor, ingrese un DNI válido (solo números).",
            icon: "error"
        });
    };
};

// Función para validar si se cargó la fecha de nacimiento
function validarNacimiento() {
    if (nacimiento) {
        // Mostrar un mensaje de error si el campo está vacío
        Swal.fire({
            text: "Por favor, ingrese la fecha de nacimiento.",
            icon: "error"
        });
    };
};

// Función para validar el correo electrónico
function validarEmail() {
    if (emailValido.test(email)) {
        // Mostrar un mensaje de error si el correo no es válido
        Swal.fire({
            text: "Por favor, ingrese un correo electrónico válido.",
            icon: "error"
        });
    };
};

// Función para validar el teléfono
function validarTelefono() {
    if (soloNumeros.test(telefono)) {
        // Mostrar un mensaje de error si el teléfono no es válido
        Swal.fire({
            text: "Por favor, ingrese un teléfono válido.",
            icon: "error"
        });
    };
};

// Función para validar la calle
function validarCalle() {
    if (soloLetras.test(calle)) {
        // Mostrar un mensaje de error si la calle no es válida
        Swal.fire({
            text: "Por favor, ingrese una calle válida (solo letras).",
            icon: "error"
        });
    };
};

// Función para validar el número de la dirección
function validarNumero() {
    if (soloNumeros.test(numero) || soloNumeros.test(numero).length < 2) {
        // Mostrar un mensaje de error si el número no es válidos
        Swal.fire({
            text: "Por favor, ingrese una altura válida.",
            icon: "error"
        });
    };
};

// Función para validar la ciudad
function validarCiudad() {
    if (soloLetras.test(ciudad)) {
        // Mostrar un mensaje de error si la ciudad no es válida 
        Swal.fire({
            text: "Por favor, ingrese una ciudad válida.",
            icon: "error"
        });
    };
};

// Función para validar el código postal
function validarCodigoPostal() {
    if (soloNumeros.test(cp)) {
        // Mostrar un mensaje de error si el código postal no es válido
        Swal.fire({
            text: "Por favor, ingrese un código postal válido.",
            icon: "error"
        });
    };
};

// Función para validar si se seleccionó nivel escolar
function validarEscolaridad() {
    if (escolaridad) {
        // Mostrar un mensaje de error si el campo está vacío
        Swal.fire({
            text: "Por favor, seleccione un nivel de escolaridad.",
            icon: "error"
        });
    };
};

// Funcionar que valida la contraseña
function validarClave() {
    // Capturamos el modal con los requerimientos
    const passwordModal = document.getElementById('password-modal');
    // Requerimientos de la contraseña que se encuentra en el modal (<li>)
    const passwordRequirements = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };
    // Capturamos el div que mostrará el progreso de cumplimiento de los requisitos
    const passwordProgress = document.getElementById('password-progress');

    // Comenzamos a escuchar el ingreso del dato en el input
    clave.addEventListener('input', function () {
        const value = clave.value;
        let validCount = 0;

        // Chequeamos longitud de caractéres
        if (value.length >= 8) {
            passwordRequirements.length.classList.add('checked');
            validCount++;
        } else {
            passwordRequirements.length.classList.remove('checked');
        };

        //  Chequeamos que contenga una mayúscula
        if (/[A-Z]/.test(value)) {
            passwordRequirements.uppercase.classList.add('checked');
            validCount++;
        } else {
            passwordRequirements.uppercase.classList.remove('checked');
        };

        //  Chequeamos que contenga un número
        if (/[0-9]/.test(value)) {
            passwordRequirements.number.classList.add('checked');
            validCount++;
        } else {
            passwordRequirements.number.classList.remove('checked');
        };

        // Chequeamos que contenga algun caracter especial
        if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            passwordRequirements.special.classList.add('checked');
            validCount++;
        } else {
            passwordRequirements.special.classList.remove('checked');
        };

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

        // Si se vacía el imput, ocultamos el modal
        if (value.length == 0) {
            passwordModal.style.display = 'none';
        };
    })
};

// Agregar controladores de eventos para los campos del formulario
/*
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("apellido").addEventListener("input", validarApellido);
document.getElementById("dni").addEventListener("input", validarDNI);
document.getElementById("nacimiento").addEventListener("input", validarNacimiento);
document.getElementById("email").addEventListener("input", validarEmail);
document.getElementById("telefono").addEventListener("input", validarTelefono);
document.getElementById("calle").addEventListener("input", validarCalle);
document.getElementById("numero").addEventListener("input", validarNumero);
document.getElementById("ciudad").addEventListener("input", validarCiudad);
document.getElementById("codigo_postal").addEventListener("input", validarCodigoPostal);
document.getElementById("escolaridad").addEventListener("input", validarEscolaridad);
document.getElementById("password").addEventListener("input", validarClave);
*/

// Agregar controlador de evento al formulario para validar y enviar el formulario
btnFormulario.addEventListener("click", () => {
    // Ejecutar todas las funciones de validación
    validarNombre();
    validarApellido();
    validarDNI();
    validarNacimiento();
    validarEmail();
    validarTelefono();
    validarCalle();
    validarNumero();
    validarCiudad();
    validarCodigoPostal();
    validarEscolaridad();
    validarClave();

    // Corroboramos que no haya campos vacíos
    if (!nombre ||
        !apellido ||
        !dni ||
        !email ||
        !telefono ||
        !calle ||
        !num ||
        !ciudad ||
        !cp ||
        !clave
    ) {
        Swal.fire({
            text: "Por favor, complete todos los campos.",
            icon: "error"
        });
        return;
    };

    Swal.fire({
        text: "¡Usuario creado con éxito!",
        icon: "success"
    });

    // Si todos los campos son válidos, enviamos el formulario
    /*let formularioValido = document.querySelectorAll('.error:not(:empty)').length === 0;
    if (formularioValido) {
        Swal.fire({
        text: "¡Usuario creado con éxito!",
        icon: "success"
    });
        this.submit();
        return;
    };*/
});