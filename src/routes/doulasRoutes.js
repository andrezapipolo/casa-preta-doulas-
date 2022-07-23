const express = require ('express');
const controller = require('../controller/doulasController.js');

const router = express.Router();

router.get('/', controller.getDoulas);
router.get('/estado', controller.getByEstado);
router.get('/cidade', controller.getByCidade);
router.get('/:id', controller.getIdDoula);
router.post('/add', controller.createDoula);
router.patch('/:id', controller.updateDoula);
router.delete('/:id', controller.deleteDoulas)


module.exports = router;