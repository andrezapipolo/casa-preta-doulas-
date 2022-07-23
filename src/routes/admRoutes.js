const controller = require('../controller/admController');
const express = require('express');
const router = express.Router();


router.post('/adm',controller.createNewAdm)
router.get('/adm',controller.allAdm)
router.post('/adm/login', controller.login)
router.delete('/adm/:id', controller.deleteById)


module.exports = router