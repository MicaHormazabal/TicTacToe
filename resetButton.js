let resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {

    for (let i = 0; i < 9; i++) {
        let cells = document.getElementById(i);
        cells.textContent = '';
        cells.classList.remove('winner');
    }

    jugador = 'O';
    container.addEventListener('click', manejadorEvento);
})