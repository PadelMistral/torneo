document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', () => {
        const nickname = document.getElementById('nickname').value.trim();
        const message = document.getElementById('message').value.trim();

        if (nickname && message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${nickname}: ${message}`;
            messagesContainer.appendChild(messageElement);

            // Limpiar el campo de mensaje
            document.getElementById('message').value = '';
        } else {
            alert('Por favor, introduce un apodo y un mensaje.');
        }
    });
});
