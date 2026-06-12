import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({produtos: []});
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    res.json({id, name: 'teclado xyz', price: 1399});
});

export default router;