const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');


router.post('/produto',produtoController.createProduto);
router.get('/produto', produtoController.listAllProdutos);
router.get('/produto/:id',produtoController.findProdutoById);
router.put('/produto/:id',produtoController.updateProdutoById);
router.delete('/produto/:id',produtoController.deleteProdutoById);

module.exports = router;

