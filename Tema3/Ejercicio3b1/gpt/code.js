"use strict";

function toggleAnswer(question) {
    const answer = question.querySelector('.answer');
    const questionText = question.querySelector('.question-text');
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        questionText.style.display = 'none';
    } else {
        answer.style.display = 'none';
        questionText.style.display = 'block';
    }
}

// Función para mostrar/ocultar todas las respuestas al hacer clic en "Ver Resultado"
const verResultadoButton = document.getElementById('verResultado');
verResultadoButton.addEventListener('click', () => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        toggleAnswer(question);
    });
});