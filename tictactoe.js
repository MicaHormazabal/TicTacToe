let container = document.getElementById('container');
let casilla = '';
let jugador = 'O';

let manejadorEvento = (e) => {
    let htmlCollection = e.target.children; //array con colección de elementos dentro del elem clickeado

    //si el array está vacío, o el elem tiene id (no es p) => es un div vacío
    if (htmlCollection.length === 0 && e.target.id != '') {
            
        clickedCell = document.getElementById(e.target.id);
        mark(clickedCell);

        if (chequearGanador()) {
            
            container.removeEventListener('click', manejadorEvento);
        }
    }
}

//Inserta letra
let mark = (cell) => {
    jugador = turnoJugador(jugador);
    let elemP = document.createElement('p');
    elemP.textContent = jugador;
    cell.append(elemP);
}

//Selecciona de quién es el turno
function turnoJugador(jugador) {

    jugador = (jugador === 'X' ? 'O' : 'X');
    return jugador;
}

let chequearGanador = () => {

    let contenidoCasillas = [];
    let hayGanador = true;

    for (let i = 0; i < 9; i++) {
        contenidoCasillas[i] = document.getElementById(i).textContent;
    }

    if (contenidoCasillas[0] != '' && contenidoCasillas[0] == contenidoCasillas[1] && contenidoCasillas[1] == contenidoCasillas [2]) {
        // fila 1
        for (let i = 0; i <= 2; i++) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[3] != '' && contenidoCasillas[3] == contenidoCasillas[4] && contenidoCasillas[4] == contenidoCasillas [5]) {
        // fila 2
        for (let i = 3; i <= 5; i++) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[6] != '' && contenidoCasillas[6] == contenidoCasillas[7] && contenidoCasillas[7] == contenidoCasillas [8]) {
        // fila 3
        for (let i = 6; i <= 8; i++) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[0] != '' && contenidoCasillas[0] == contenidoCasillas[3] && contenidoCasillas[3] == contenidoCasillas [6]) {
        //columna 1
        for (let i = 0; i <= 6; i+=3) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[1] != '' && contenidoCasillas[1] == contenidoCasillas[4] && contenidoCasillas[4] == contenidoCasillas [7]) {
        //columna 2
        for (let i = 1; i <= 7; i+=3) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[2] != '' && contenidoCasillas[2] == contenidoCasillas[5] && contenidoCasillas[5] == contenidoCasillas [8]) {
        //columna 3
        for (let i = 2; i <= 8; i+=3) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[0] != '' && contenidoCasillas[0] == contenidoCasillas[4] && contenidoCasillas[4] == contenidoCasillas [8]) {
        //diagonal  izq - der
        for (let i = 0; i <= 8; i+=4) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else if (contenidoCasillas[2] != '' && contenidoCasillas[2] == contenidoCasillas[4] && contenidoCasillas[4] == contenidoCasillas [6]) {
        //diagonal der - izq
        for (let i = 2; i <= 6; i+=2) {
            let winner = document.getElementById(i);
            winner.classList.add('winner');            
        }

    } else {
        hayGanador = false;
    }

    return hayGanador;
}

container.addEventListener('click', manejadorEvento);