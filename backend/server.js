const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware CORS
app.use(cors());
// Parser para JSON
app.use(express.json());

// Array para armazenar pedidos temporariamente
const pedidos = [];

// Rota de login
app.post('/login', (req, res) => {
    const { login, senha } = req.body;

    // Lógica de autenticação (substitua pelo seu próprio código)
    if (login === 'adminjurassic' && senha === '1') {
        res.json({ logado: true });
    } else {
        res.json({ logado: false });
    }
});

// Rota para salvar pedidos
app.post('/salvar-pedido', (req, res) => {
    const dadosPedido = req.body;
    // Adiciona o pedido ao array de pedidos
    pedidos.push(dadosPedido);
    console.log('Pedido recebido e salvo:', dadosPedido);
    res.json({ message: 'Pedido recebido e salvo com sucesso.' });
});

app.get('/buscar-pedidos', (req, res) => {
    // Retorna a lista de pedidos
    res.json(pedidos);
});

// Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
