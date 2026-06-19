import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    res.json({alunos: [{id: 1, name: 'Luis Mário', age: 17}]});
});

route.get('/:id', (req, res) => {
    const {id} = req.params;

    res.json({id, name: 'Luis Mário', age: 17});
});

route.post('/', (req, res) => {
    const {name, age} = req.body;

    res.status(201).json({
        mensagem: 'Aluno criado com sucesso',
        aluno: {
            id: 1,
            name,
            age
        }
    });
});

route.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, age} = req.body;

    if (!name || !age) {
        return res.status(400).json({mensagem: 'Nome e idade são obrigatórios'});
    }

    res.json({
        mensagem: 'Aluno atualizado com sucesso',
        aluno: {
            id,
            name,
            age
        }
    });
});

route.delete('/:id', (req, res) => {
    const {id} = req.params;

    res.json({
        mensagem: 'Aluno excluído com sucesso'
    });
});

export default route;