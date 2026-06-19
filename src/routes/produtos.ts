import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({produtos: [{id: 1, name: 'teclado xyz', price: 1399}]});
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    res.json({id, name: 'teclado xyz', price: 1399});
});

router.post('/', (req, res) => {
    const {name, price} = req.body;

    res.status(201).json({
        mensagem: 'Produto criado com sucesso',
        produto: {
            id: 1,
            name,
            price
        }
    });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, price} = req.body;

    if (!name || !price) {
        return res.status(400).json({mensagem: 'Nome e preço são obrigatórios'});
    }

    res.json({
        mensagem: 'Produto atualizado com sucesso',
        produto: {
            id,
            name,
            price
        }
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    res.json({
        mensagem: 'Produto excluído com sucesso'
    });
});

export default router;