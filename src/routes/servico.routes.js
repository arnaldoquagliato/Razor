const router = require('express-promise-router')();
const servicoController = require('../controllers/servico.controller');


router.post('/servico',servicoController.createServico);
router.get('/servico', servicoController.listAllServicos);
router.get('/servico/:id',servicoController.findServicoById);
router.put('/servico/:id',servicoController.updateServicoById);
router.delete('/servico/:id',servicoController.deleteServicoById);

module.exports = router;

