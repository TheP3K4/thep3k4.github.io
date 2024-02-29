// Get all accordion titles
const accordionTitles = document.querySelectorAll('.accordion-title');

// Add click event listener to each title
accordionTitles.forEach(title => {
    title.addEventListener('click', function() {
        // Toggle the panel visibility
        const panel = this.nextElementSibling;
        panel.classList.toggle('show');
    });
});

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
