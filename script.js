// Get all accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-btn');

// Add click event listener to each button
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the panel visibility
        const panelId = this.nextElementSibling.id;
        togglePanel(panelId);
    });
});

// Function to toggle panel visibility
function togglePanel(panelId) {
    var panel = document.getElementById(panelId);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// Function to verificarRespuesta1
function verificarRespuesta1() {
    const respuestaInput = document.getElementById('respuesta1').value.trim().toLowerCase();
    const feedback = document.getElementById('respuesta1-feedback');

    if (respuestaInput === 'seguridad ofensiva') {
        feedback.textContent = '¡Respuesta correcta!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Respuesta incorrecta. Intenta de nuevo.';
        feedback.style.color = 'red';
    }
}
