const router = require('express-promise-router')();
const clienteController = require('../controllers/cliente.controller');


router.post('/cliente',clienteController.createCliente);
router.get('/cliente', clienteController.listAllClientes);
router.get('/cliente/:id',clienteController.findClienteById);
router.put('/cliente/:id',clienteController.updateClienteById);
router.delete('/cliente/:id',clienteController.deleteClienteById);

module.exports = router;

