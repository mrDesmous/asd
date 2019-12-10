const express = require('express');
const router = express.Router();
const db = require('../models'); 
const Cargo = db.Cargo;
//const Categoria = require('../models').Categoria;

// prueba
// router.get('/', function(req, res, next) {
//     res.render('cargo', { title: 'Express' });
//   });

//METODO : GET >> CARGO
router.get('/', function(req, res){
    Cargo.findAll()
    .then(
        function(data){
            // console.log('Ruta Cargo');
            res.json(data);            
        }
    ).catch(function(err) {
        res.status(404).json({error: err});
    });
})

//METODO : GET : ID >> CARGO
router.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Cargo.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
})

//METODO : POST >> CARGO
router.post('/', async function(req, res) {
    try{
        const nCargo = await Cargo.create(req.body);
        res.json(Cargo);
    } catch(err){
        res.status(404).json({error: err});
    }
});

//METODO : PUT >> CARGO
router.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Cargo.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//METODO : DELETE >> CARGO
router.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Cargo.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = router;