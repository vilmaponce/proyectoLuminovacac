// JS que muestra actividades a inscribirse según nivel escolar

// Opciones de Deporte
const deportesDiv = document.getElementById('deportes');
const natacion = document.getElementById('natacionDiv');
const basket = document.getElementById('basketDiv');
const futbol = document.getElementById('futbolDiv');
const atletismo = document.getElementById('atletismoDiv');
// Opciones de Arte
const artisticoDiv = document.getElementById('arte');
const teatro = document.getElementById('teatroDiv');
const musica = document.getElementById('musicaDiv');
const pinturaDibujo = document.getElementById('pintura_dibujoDiv');
// Opciones de Academico
const academicoDiv = document.getElementById('academico');
const ciencias = document.getElementById('cienciasDiv');
const lectura = document.getElementById('lecturaDiv');
const debate = document.getElementById('debateDiv');
// Opciones de Voluntariado
const voluntariadoDiv = document.getElementById('comunitario');
const hospitales = document.getElementById('hospitalesDiv');
const refugiosAnimales = document.getElementById('refugiosDiv');
// Opciones de Idiomas
const idiomasDiv = document.getElementById('idiomas');
const ingles = document.getElementById('inglesDiv');
const frances = document.getElementById('francesDiv');
const aleman = document.getElementById('alemanDiv');
// Opcion de Huerta
const huertaDiv = document.getElementById('huertaDiv');
const huerta = document.getElementById('huertaInputDiv');

// Captar el nivel escolar seleccionado
function nivelEscolar() {
    // Select de nivel escolar
    const selectNivel = document.getElementById('estudios').value;
    const actividades = document.getElementById('actividades');
    //console.log(selectNivel);
    //console.log(actividades);

    // Muestra u oculta el contenedor de actividades
    actividades.classList.remove('hidden');
    if (selectNivel == '') {
        actividades.classList.add('hidden');
    }

    // Si el nivel educativo es: INICIAL
    if (selectNivel == 'inicial') {
        atletismo.classList.add('hidden');
        ciencias.classList.add('hidden');
        debate.classList.add('hidden');
        voluntariadoDiv.classList.add('hidden');
    };

    // Si el nivel educativo es: PRIMARIO
    if (selectNivel == 'primario') {       
        debate.classList.add('hidden');
        hospitales.classList.add('hidden');
    };

    // Si el nivel educativo es: SECUNDARIO (muestra todas las opciones)
    if ((selectNivel == 'secundario')) {
        atletismo.classList.remove('hidden');
        ciencias.classList.remove('hidden');
        debate.classList.remove('hidden');
        voluntariadoDiv.classList.remove('hidden');
        hospitales.classList.remove('hidden');
    };
};

/*------------------------------------------------------------*/