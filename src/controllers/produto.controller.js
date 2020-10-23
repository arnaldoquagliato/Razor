
const { request } = require("../app");
const db = require("../config/database");


exports.createProduto = async(req,res) => {
  const { nome, preco, tipo } = req.body;
  const { rows } = await db.query(
    "INSERT INTO produto ( nome, preco, tipo) VALUES ($1, $2, $3)",
    [nome,preco,tipo]
  );

  res.status(201).send({
    message: "Cadastrado com Sucesso",
    body: {
      produto: { nome, preco, tipo }
    },
  });
};

exports.listAllProdutos = async(req, res) => {
  const response = await db.query('SELECT * FROM produto ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

exports.findProdutoById = async(req,res) => {
  const id_produtos_de_beleza = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM produto WHERE id_produtos_de_beleza = $1', [id_produtos_de_beleza]);
  res.status(200).send(res.rows);
};

exports.updateProdutoById = async(req,res) => {
  const id_produto_de_beleza = parseInt(req.params.id);
  const { tipo, nome, preco }= req.body; 

  const response = await db.query(
    "UPDATE produto SET tipo = $1, nome = $2, preco = $3 WHERE id_produtos_de_beleza = $4",
    [tipo, nome, preco, id_produtos_de_beleza]
  );

  res.status(200).send({ message:"Alteração foi um sucesso" });
};

exports.deleteProdutoById = async(req,res) => {
  const id_produtos_de_beleza = parseInt(req.params.id);
  await db.query('DELETE FROM produto WHERE id_produtos_de_beleza = $1', [id_produtos_de_beleza]);
  res.status(200).send({ message:'Produto deletado', id_produtos_de_beleza });
}