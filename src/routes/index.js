const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).send({
    sucess: 'true',
    message:'Opa chegou cedo'
  });
});

module.exports = router;