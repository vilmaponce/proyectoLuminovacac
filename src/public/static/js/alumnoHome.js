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

/*------------------------------------------------------------*/
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