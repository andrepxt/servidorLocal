const http = require("http");

// Configurações do servidor
const hostname ='localHost'; // Endereço local
const port = 3000; // Porta onde o servidor vai estar disponível

// Criar o servidor
const server = http.createServer((req, res) => {
    // Configurar cabeçalho das respostas
    res.statusCode = 200; // Código HTTP para "OK"
    res.setHeader('Content-Type', 'text/plain'); // Tipo de resposta

    // Enviar a resposta
    res.end('Oii, mundo! Bem-vindx ao meu servidor de JavaScript!');
});

// Iniciar servidor
server.listen(port, hostname, () => {
    console.log('Servidor rodando em http://${hostname}:${port}/');
});