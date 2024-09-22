// Lista de participantes
const participantes = [
    "Mario / Carlos", "Peri / Raico", "Adri / Javi", "Juanan / Victor", 
    "Angelo / Jose Luis", "David / Luis", "Paco / Rafa", "DavidM / SergioM",
    "Vissen / Sergio", "Jaime / Manu", "Victor / Jaime"
];

// Horarios de los partidos
const horariosDia1 = ["16:00", "17:15", "18:30", "19:45"];
const horariosDia2 = ["10:00", "11:15", "12:30", "17:30"];
const horariosDia3 = ["10:00", "11:15"];

// Función para generar select con participantes
function generarSelect() {
    const select = document.createElement('select');
    participantes.forEach(participante => {
        const option = document.createElement('option');
        option.textContent = participante;
        select.appendChild(option);
    });
    return select;
}

// Función para generar una fila de partido
function generarFila(hora, diaId) {
    const fila = document.createElement('tr');

    const tdHora = document.createElement('td');
    tdHora.className = 'time';
    tdHora.textContent = hora;

    const tdPartido = document.createElement('td');
    const select1 = generarSelect();
    const select2 = generarSelect();
    tdPartido.innerHTML = `${select1.outerHTML} vs ${select2.outerHTML}`;

    const tdAcciones = document.createElement('td');
    const btnFijar = document.createElement('button');
    btnFijar.textContent = 'Fijar';
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'Borrar';

    btnFijar.onclick = () => fijarPartido(tdPartido, select1.value, select2.value);
    btnBorrar.onclick = () => borrarPartido(tdPartido);

    tdAcciones.appendChild(btnFijar);
    tdAcciones.appendChild(btnBorrar);

    fila.appendChild(tdHora);
    fila.appendChild(tdPartido);
    fila.appendChild(tdAcciones);

    document.querySelector(`#${diaId} table tbody`).appendChild(fila);
}

// Función para fijar partido
function fijarPartido(tdPartido, jugador1, jugador2) {
    tdPartido.innerHTML = `${jugador1} vs ${jugador2}`;
}

// Función para borrar partido
function borrarPartido(tdPartido) {
    tdPartido.innerHTML = `${generarSelect().outerHTML} vs ${generarSelect().outerHTML}`;
}

// Generar partidos dinámicamente para Día 1
horariosDia1.forEach(hora => generarFila(hora, 'dia1'));
// Generar partidos dinámicamente para Día 2
horariosDia2.forEach(hora => generarFila(hora, 'dia2'));
// Generar partidos dinámicamente para Día 3
horariosDia3.forEach(hora => generarFila(hora, 'dia3'));
