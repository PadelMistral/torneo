// Lista de jugadores divididos por grupos
const players = [
    { name: "Jugador 1", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 2", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 3", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 4", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 5", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 6", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 7", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 8", group: "A", points: 0, setDifference: 0 },
    { name: "Jugador 9", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 10", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 11", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 12", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 13", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 14", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 15", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 16", group: "B", points: 0, setDifference: 0 },
    { name: "Jugador 17", group: "C", points: 0, setDifference: 0 },
    { name: "Jugador 18", group: "C", points: 0, setDifference: 0 },
    { name: "Jugador 19", group: "C", points: 0, setDifference: 0 },
    { name: "Jugador 20", group: "C", points: 0, setDifference: 0 },
    { name: "Jugador 21", group: "C", points: 0, setDifference: 0 },
    { name: "Jugador 22", group: "C", points: 0, setDifference: 0 }
];

// Enfrentamientos de cada grupo (todos contra todos)
const matches = [
    // Grupo A
    { group: 'A', player1: "Jugador 1", player2: "Jugador 2" },
    { group: 'A', player1: "Jugador 3", player2: "Jugador 4" },
    { group: 'A', player1: "Jugador 5", player2: "Jugador 6" },
    { group: 'A', player1: "Jugador 7", player2: "Jugador 8" },
    // Grupo B
    { group: 'B', player1: "Jugador 9", player2: "Jugador 10" },
    { group: 'B', player1: "Jugador 11", player2: "Jugador 12" },
    { group: 'B', player1: "Jugador 13", player2: "Jugador 14" },
    { group: 'B', player1: "Jugador 15", player2: "Jugador 16" },
    // Grupo C
    { group: 'C', player1: "Jugador 17", player2: "Jugador 18" },
    { group: 'C', player1: "Jugador 19", player2: "Jugador 20" },
    { group: 'C', player1: "Jugador 21", player2: "Jugador 22" }
];

let currentMatchIndex = 0; // Índice del partido actual

// Actualizar el partido actual en la interfaz
function updateCurrentMatch() {
    const match = matches[currentMatchIndex];
    document.getElementById("current-match").textContent = `Partido actual: Grupo ${match.group} - ${match.player1} vs ${match.player2}`;
    
    // Actualizar las opciones del selector de ganadores
    const winnerSelect = document.getElementById("winner");
    winnerSelect.innerHTML = ''; // Limpiar las opciones
    const option1 = document.createElement("option");
    option1.value = match.player1;
    option1.textContent = match.player1;
    const option2 = document.createElement("option");
    option2.value = match.player2;
    option2.textContent = match.player2;
    winnerSelect.appendChild(option1);
    winnerSelect.appendChild(option2);
}

// Registrar el resultado del partido actual
function registerResult() {
    const winner = document.getElementById("winner").value;
    const loserScore = parseInt(document.getElementById("loser-score").value);
    const currentMatch = matches[currentMatchIndex];
    const loser = currentMatch.player1 === winner ? currentMatch.player2 : currentMatch.player1;

    // Actualizar puntos y diferencia de sets
    const winnerPlayer = players.find(p => p.name === winner);
    const loserPlayer = players.find(p => p.name === loser);

    winnerPlayer.points += 3; // El ganador recibe 3 puntos
    winnerPlayer.setDifference += (2 - loserScore); // Diferencia de sets
    loserPlayer.setDifference -= (2 - loserScore); // Diferencia de sets para el perdedor

    // Avanzar al siguiente partido
    currentMatchIndex++;
    if (currentMatchIndex < matches.length) {
        updateCurrentMatch();
    } else {
        document.getElementById("current-match").textContent = "Todos los partidos han sido jugados.";
    }

    // Actualizar tablas de clasificación
    updateTables();
}

// Actualizar las tablas de clasificación por grupo
function updateTables() {
    ['A', 'B', 'C'].forEach(group => {
        const tableBody = document.querySelector(`#group-${group.toLowerCase()}-table tbody`);
        tableBody.innerHTML = ''; // Limpiar tabla

        players
            .filter(p => p.group === group)
            .sort((a, b) => b.points - a.points || b.setDifference - a.setDifference)
            .forEach(player => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${player.name}</td><td>${player.points}</td><td>${player.setDifference}</td>`;
                tableBody.appendChild(row);
            });
    });
}

// Inicializar con el primer partido y actualizar las tablas
updateCurrentMatch();
updateTables();
