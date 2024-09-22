function openModal(player) {
    var modal = document.getElementById('modal-' + player);
    var playerPhoto = document.querySelector('img[alt="' + player + '"]');
    
    // Calculamos la posición del modal basado en la foto del jugador
    var rect = playerPhoto.getBoundingClientRect();
    modal.style.left = (rect.right + window.scrollX) + 'px';
    modal.style.top = (rect.top + window.scrollY) + 'px';
    modal.style.display = 'block';
}

function closeModal(player) {
    var modal = document.getElementById('modal-' + player);
    modal.style.display = 'none';
}

// Cierra el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};
