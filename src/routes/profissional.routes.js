const router = require('express-promise-router')();
const profissionalController = require('../controllers/profissional.controller');


router.post('/profissional',profissionalController.createProfissional);
router.get('/profissional', profissionalController.listAllProfissionais);
router.get('/profissional/:id',profissionalController.findProfissionalById);
router.put('/profissional/:id',profissionalController.updateProfissionalById);
router.delete('/profissional/:id',profissionalController.deleteProfissionalById);

module.exports = router;

