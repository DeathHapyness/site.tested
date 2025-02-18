// Seleciona o botão pelo ID
const loginButton = document.getElementById('loginButton');

// Adiciona um evento de clique ao botão
loginButton.addEventListener('click', function() {
    // Redireciona para outra página (ou aba) ao clicar
    // Para abrir em uma nova aba, usamos o "_blank"
    window.open('https://www.booking.com/index.html?aid=1535066&label=PT-BR_Travel_Edge_Tiles', '_blank'); // Substitua o URL pelo desejado
});
