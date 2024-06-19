
// Función para validar el nombre
function validarNombre() {
    console.log("Validando nombre...");
    // Obtener el valor del campo de entrada de nombre
    let nombre = document.getElementById("nombre").value;
    // Expresión regular para validar que solo contenga letras (mayúsculas o minúsculas)
    let nombrePattern = /^[A-Za-z]+$/;
    // Comprobar si el nombre está vacío o no coincide con el patrón
    if (nombre.trim() === "" || !nombrePattern.test(nombre)) {
        document.getElementById("errorNombre").innerText = "Por favor, ingresa un nombre válido (solo letras).";
        document.getElementById("errorNombre").style.color = "red";
    } else {
        // Limpiar el mensaje de error si el nombre es válido
        document.getElementById("errorNombre").innerText = "";
    }
}

// Función para validar el apellido
function validarApellido() {
    // Obtener el valor del campo de entrada de apellido
    let apellido = document.getElementById("apellido").value;
    // Expresión regular para validar que solo contenga letras (mayúsculas o minúsculas)
    let apellidoPattern = /^[A-Za-z]+$/;
    if (apellido.trim() === "" || !apellidoPattern.test(apellido)) {
        // Mostrar un mensaje de error si el apellido no es válido
        document.getElementById("errorApellido").innerText = "Por favor, ingresa un apellido válido (solo letras).";
        document.getElementById("errorApellido").style.color = "red";
    } else {
        // Limpiar el mensaje de error si el apellido es válido
        document.getElementById("errorApellido").innerText = "";
    }
}

// Función para validar la calle
function validarCalle() {
    // Obtener el valor del campo de entrada de calle
    let calle = document.getElementById("calle").value;
    // Expresión regular para validar que solo contenga letras y espacios
    let soloLetrasPattern = /^[a-zA-Z\s]*$/;
    if (calle.trim() === "" || !soloLetrasPattern.test(calle)) {
        // Mostrar un mensaje de error si la calle no es válida
        document.getElementById("errorCalle").innerText = "Por favor, ingresa una calle válida (solo letras).";
        document.getElementById("errorCalle").style.color = "red";
    } else {
        document.getElementById("errorCalle").innerText = "";
    }
}

// Función para validar el número de la dirección
function validarNumero() {
    // Obtener el valor del campo de entrada de número
    let numero = document.getElementById("numero").value;
    // Expresión regular para validar que solo contenga números
    let soloNumerosPattern = /^\d+$/; // Expresión regular para solo números
    if (numero.trim() === "" || !soloNumerosPattern.test(numero)) {
        // Mostrar un mensaje de error si el número no es válidos
        document.getElementById("errorNumero").innerText = "Por favor, ingresa un número válido (solo números).";
        document.getElementById("errorNumero").style.color = "red";
    } else {
        // Limpiar el mensaje de error si el número es válido
        document.getElementById("errorNumero").innerText = "";
    }
}

// Función para validar la ciudad
function validarCiudad() {
    // Obtener el valor del campo de entrada de ciudad
    let ciudad = document.getElementById("ciudad").value;
    // Expresión regular para validar que solo contenga letras y espacios
    let soloLetrasPattern = /^[a-zA-Z\s]*$/;
    // Comprobar si la ciudad está vacía o no coincide con el patrón
    if (ciudad.trim() === "" || !soloLetrasPattern.test(ciudad)) {
        // Mostrar un mensaje de error si la ciudad no es válida 
        document.getElementById("errorCiudad").innerText = "Por favor, ingresa una ciudad válida (solo letras).";
        document.getElementById("errorCiudad").style.color = "red";
    } else {
        // Limpiar el mensaje de error si la ciudad es válida
        document.getElementById("errorCiudad").innerText = "";
    }
}

// Función para validar el código postal
function validarCodigoPostal() {
    // Obtener el valor del campo de entrada de código postal
    let codigoPostal = document.getElementById("codigo_postal").value;
    // Expresión regular para validar que solo contenga números
    let soloNumerosPattern = /^\d+$/; // Expresión regular para solo números
    if (codigoPostal.trim() === "" || !soloNumerosPattern.test(codigoPostal)) {
        // Mostrar un mensaje de error si el código postal no es válido
        document.getElementById("errorCodigoPostal").innerText = "Por favor, ingresa un código postal válido (solo números).";
        document.getElementById("errorCodigoPostal").style.color = "red";
    } else {
        // Limpiar el mensaje de error si el código postal es válido
        document.getElementById("errorCodigoPostal").innerText = "";
    }
}

// Función para validar el correo electrónico
function validarEmail() {
    // Obtener el valor del campo de entrada de correo electrónico
    let email = document.getElementById("email").value;
    // Expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Comprobar si el correo electrónico no coincide con el patrón
    if (!emailPattern.test(email)) {
        // Mostrar un mensaje de error si el correo electrónico no es válido
        document.getElementById("errorEmail").innerText = "Por favor, ingresa un correo electrónico válido.";
        document.getElementById("errorEmail").style.color = "red";
    } else {
        // Limpiar el mensaje de error si el correo electrónico es válido
        document.getElementById("errorEmail").innerText = "";
    }
}

// Función para validar el teléfono
function validarTelefono() {
    // Obtener el valor del campo de entrada de teléfono
    let telefono = document.getElementById("telefono").value;
     // Expresión regular para validar que solo contenga números
    let telefonoPattern = /^\d+$/; // Expresión regular para solo números
     // Comprobar si el teléfono está vacío o no coincide con el patrón
    if (telefono.trim() === "" || !telefonoPattern.test(telefono)) {
        // Mostrar un mensaje de error si el teléfono no es válido
        document.getElementById("errorTelefono").innerText = "Por favor, ingresa un número de teléfono válido (solo números).";
        document.getElementById("errorTelefono").style.color = "red";
    } else {
        document.getElementById("errorTelefono").innerText = "";
    }
}

// Función para validar actividades
function validarActividades() {
    // Variable para verificar si se han seleccionado actividades
    let actividadesSeleccionadas = false;
    // Obtener todas las actividades seleccionadas mediante checkboxes
    let actividades = document.querySelectorAll('.actividades input[type="checkbox"]');
    // Iterar sobre las actividades para comprobar si alguna está seleccionada
    actividades.forEach(function (actividad) {
        if (actividad.checked) {
            actividadesSeleccionadas = true;
        }
    });
    // Comprobar si no se han seleccionado actividades
    if (!actividadesSeleccionadas) {
        // Mostrar un mensaje de error si no se han seleccionado actividades
        document.getElementById("errorActividades").innerText = "Por favor, selecciona al menos una actividad.";
        document.getElementById("errorActividades").style.color = "red";
    } else {
         // Limpiar el mensaje de error si se han seleccionado actividades
        document.getElementById("errorActividades").innerText = "";
    }
}

// Agregar controladores de eventos para los campos del formulario
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("apellido").addEventListener("input", validarApellido);
document.getElementById("calle").addEventListener("input", validarCalle);
document.getElementById("numero").addEventListener("input", validarNumero);
document.getElementById("ciudad").addEventListener("input", validarCiudad);
document.getElementById("codigo_postal").addEventListener("input", validarCodigoPostal);
document.getElementById("email").addEventListener("input", validarEmail);
document.getElementById("telefono").addEventListener("input", validarTelefono);

// Agregar controlador de evento al formulario para validar y enviar el formulario
document.getElementById("registroForm").addEventListener("submit", function (event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Ejecutar todas las funciones de validación
    validarNombre();
    validarApellido();
    validarCalle();
    validarNumero();
    validarCiudad();
    validarCodigoPostal();
    validarEmail();
    validarTelefono();
    validarActividades();

    // Si todos los campos son válidos, enviar el formulario

    let formularioValido = document.querySelectorAll('.error:not(:empty)').length === 0;
    if (formularioValido) {
        alert("Formulario enviado con éxito");
        this.submit();
    }

});
