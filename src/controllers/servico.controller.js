
const { request } = require("../app");
const db = require("../config/database");


exports.createServico = async(req,res) => {
  const { nome, preco, tipo } = req.body;
  const { rows } = await db.query(
    "INSERT INTO servico ( nome, preco, tipo) VALUES ($1, $2, $3)",
    [nome,preco,tipo]
  );

  res.status(201).send({
    message: "Cadastrado com Sucesso",
    body: {
      servico: { nome, preco, tipo }
    },
  });
};

exports.listAllServicos = async(req, res) => {
  const response = await db.query('SELECT * FROM servico ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

exports.findServicoById = async(req,res) => {
  const id_servico = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM servico WHERE id_servico = $1', [id_servico]);
  res.status(200).send(res.rows);
};

exports.updateServicoById = async(req,res) => {
  const id_servico = parseInt(req.params.id);
  const { tipo, nome, preco }= req.body; 

  const response = await db.query(
    "UPDATE servico SET tipo = $1, nome = $2, preco = $3 WHERE id_servico = $4",
    [tipo, nome, preco, id_servico]
  );

  res.status(200).send({ message:"Alteração foi um sucesso" });
};

exports.deleteServicoById = async(req,res) => {
  const id_servico = parseInt(req.params.id);
  await db.query('DELETE FROM servico WHERE id_servico = $1', [id_servico]);
  res.status(200).send({ message:'Servico deletado', id_servico });
}