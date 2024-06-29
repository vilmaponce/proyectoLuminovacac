//JS para el menu aside

document.addEventListener('DOMContentLoaded', () => {
  const datosLink = document.getElementById('nav-datos');
  const cursosLink = document.getElementById('nav-cursos');
  const datosContent = document.getElementById('datos');
  const cursosContent = document.getElementById('cursos');

  datosLink.addEventListener('click', (event) => {
    event.preventDefault();
    setActiveLink(datosLink);
    showContent(datosContent, cursosContent, 'right');
  });

  cursosLink.addEventListener('click', (event) => {
    event.preventDefault();
    setActiveLink(cursosLink);
    showContent(cursosContent, datosContent, 'right');
  });

  function setActiveLink(activeLink) {
    datosLink.classList.remove('active');
    cursosLink.classList.remove('active');
    activeLink.classList.add('active');
  }

  function showContent(show, hide, direction) {
    hide.style.transform = `translateX(${direction === 'left' ? '-' : ''}100%)`;
    show.style.display = 'block';
    requestAnimationFrame(() => {
      show.style.transform = 'translateX(0)';
      hide.addEventListener('transitionend', () => {
        hide.style.display = 'none';
      }, { once: true });
    });
  }
});
/*------------------------------------------------------------*/

//JS para cargar las inscripciones en la tabla
const inscripcion = {
  area: '',
  curso: '',
  estado: ''
};

let enCurso = false;
/*------------------------------------------------------------*/
// JS que inserta los datos del alumno en "Mis Datos"
const ninckname = document.getElementById("name-user");
const nombreCompleto = document.getElementById("user-nombre-completo");
const dni = document.getElementById("user-dni");
const fecha = localStorage.getItem("nacimiento");
const nacFormateado = fecha.toString().split('T')[0];
const date = document.getElementById("user-nacimiento");
const correo = document.getElementById("user-email");
const telefono = document.getElementById("user-tel");
const address = document.getElementById("user-address");
const ciudad = document.getElementById("user-city");
const codigoPostal = document.getElementById("user-cp");

// Formatea la fecha a dd-mm-aaaa
function formatFecha(nacFormateado) {
  const fechaParts = nacFormateado.split('-');
  const dia = fechaParts[2];
  const mes = fechaParts[1];
  const ano = fechaParts[0];
  return `${dia}-${mes}-${ano}`;
}

ninckname.innerText = localStorage.getItem("nombre");
nombreCompleto.innerText = localStorage.getItem("nombre") + " " + localStorage.getItem("apellido");
dni.innerText = localStorage.getItem("dni");
date.innerText = formatFecha(nacFormateado);
correo.innerText = localStorage.getItem("email");
telefono.innerText = localStorage.getItem("telefono");
address.innerText = localStorage.getItem("calle") + " " + localStorage.getItem("num");
ciudad.innerText = localStorage.getItem("ciudad");
codigoPostal.innerText = localStorage.getItem("codigoPostal");
/*------------------------------------------------------------*/
// JS que inserta los cursos del alumno en "Mis Cursos"
async function getAllInscripciones() {

  const studentDni = localStorage.getItem("dni");

  try {
      const response = await fetch(`/luminova/list?dni=${studentDni}`);
      const inscripciones = await response.json();

      const inscripcionesList = document.getElementById('inscripciones-list');
      inscripcionesList.innerHTML = '';

      if (inscripciones.length == 0) {
          const li = document.createElement('li');
          li.textContent = '> No posee inscripciones aún. <';
          inscripcionesList.appendChild(li);
      } else {
          inscripciones.forEach(inscripcion => {
              const li = document.createElement('li');
              let estado = inscripcion.estado;
              if (estado == 1) {
                  estado = "Inscripto"
                  li.textContent = '> ID de Inscripción: ' + inscripcion.id + ' | Curso: ' + inscripcion.curso_nombre + ' | Estado: ' + estado;
                  inscripcionesList.appendChild(li);
              } else {
                  estado = "Dado de baja"
                  li.textContent = '> ID de Inscripción: ' + inscripcion.id + ' | Curso: ' + inscripcion.curso_nombre + ' | Estado: ' + estado;
                  inscripcionesList.appendChild(li);
              }
          });
      };
  } catch (error) {
      console.error('Error al obtener las inscripciones:' + error);
      alert("Error al obtener las inscripciones.");
  };
}

// Llamar a la función para obtener todas las inscripciones al cargar la página
document.addEventListener('DOMContentLoaded', getAllInscripciones);
/*------------------------------------------------------------*/

// JS para Cerrar Sesion - limpia localStorage
document.getElementById('cerrar-sesion').addEventListener('click', () => {
  // Limpiar el localStorage
  localStorage.removeItem("nombre");
  localStorage.removeItem("apellido");
  localStorage.removeItem("dni");
  localStorage.removeItem("nacimiento");
  localStorage.removeItem("genero");
  localStorage.removeItem("email");
  localStorage.removeItem("telefono");
  localStorage.removeItem("calle");
  localStorage.removeItem("num");
  localStorage.removeItem("ciudad");
  localStorage.removeItem("codigoPostal");
  localStorage.removeItem("clave");
  localStorage.clear();

  window.location.href = "../index.html"
});