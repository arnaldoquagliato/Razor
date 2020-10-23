const router = require('express-promise-router')();
const noticiaController = require('../controllers/noticia.controller');


router.post('/noticia',noticiaController.createNoticia);
router.get('/noticia', noticiaController.listAllNoticias);
router.get('/noticia/:id',noticiaController.findNoticiaById);
router.put('/noticia/:id',noticiaController.updateNoticiaById);
router.delete('/noticia/:id',noticiaController.deleteNoticiaById);

module.exports = router;

