const respuesta1Feedback = document.getElementById('respuesta1-feedback');
const respuesta2Feedback = document.getElementById('respuesta2-feedback');
const respuesta3Feedback = document.getElementById('respuesta3-feedback');

function verificarRespuesta1() {
  const respuestaInput = document.getElementById('respuesta1').value.trim().toLowerCase();

  if (respuestaInput === 'seguridad ofensiva') {
    respuesta1Feedback.textContent = '¡Respuesta correcta!';
    respuesta1Feedback.style.color = 'green';
  } else {
    respuesta1Feedback.textContent = 'Respuesta incorrecta. Intenta de nuevo. La respuesta correcta es "seguridad ofensiva".';
    respuesta1Feedback.style.color = 'red';
  }
}

function verificarRespuesta2() {
  const respuestaInput = document.getElementById('respuesta2').value.trim().toLowerCase();

  if (respuestaInput.includes('gobuster') && respuestaInput.includes('directorios')) {
    respuesta2Feedback.textContent = '¡Respuesta correcta! Has utilizado correctamente GoBuster para encontrar directorios ocultos en el sitio web de FakeBank.';
    respuesta2Feedback.style.color = 'green';
  } else {
    respuesta2Feedback.textContent = 'Respuesta incorrecta. Intenta de nuevo. La respuesta correcta incluye el uso de GoBuster para encontrar directorios.';
    respuesta2Feedback.style.color = 'red';
  }
}

function verificarRespuesta3() {
  const respuestaInput = document.getElementById('respuesta3').value.trim().toLowerCase();

  if (respuestaInput.includes('gobuster') && respuestaInput.includes('archivo')) {
    respuesta3Feedback.textContent = '¡Respuesta correcta! Has utilizado correctamente GoBuster para encontrar un archivo específico en el sitio web de FakeBank.';
    respuesta3Feedback.style.color = 'green';
  } else {
    respuesta3Feedback.textContent = 'Respuesta incorrecta. Intenta de nuevo. La respuesta correcta incluye el uso de GoBuster para encontrar un archivo específico.';
    respuesta3Feedback.style.color = 'red';
  }
}

function togglePanel(panel) {
  panel.classList.toggle('show');
}

function init() {
  // ... (código para inicializar otras funciones) ...
}

init();
