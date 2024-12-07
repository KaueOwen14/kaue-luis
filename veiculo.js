const express = require('express');
const route = express.Router();

// Rota POST - Adicionar um novo veículo
route.post('/veiculo/', (req, res) => {
    const { nome, fabricante, ano, combustivel, cor, preco } = req.body;
    const id = veiculos.length + 1;
    const novoVeiculo = { id, nome, fabricante, ano, combustivel, cor, preco };
    veiculos.push(novoVeiculo);
    res.status(201).json(novoVeiculo);
});

// Rota PUT - Atualizar o preço de um veículo
route.put('/veiculo/', (req, res) => {
    const { id, preco } = req.body;
    res.status(200).send('Preço do veículo atualizado com sucesso.');
});

// Rota DELETE - Excluir um veículo
route.delete('/veiculo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.status(202).send(`O veículo de ID ${id} foi excluído com sucesso.`);
});

module.exports = route;
