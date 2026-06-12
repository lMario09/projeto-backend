import express from "express";

const router =express.Router();

router.get('/', (req, res) => {

    let name = 'Luis Mário';
    let age = 17;
    
    res.json({name, age})

})

export default router;