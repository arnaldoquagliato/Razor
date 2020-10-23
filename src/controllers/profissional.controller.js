
const { request } = require("../app");
const db = require("../config/database");


exports.createProfissional = async(req,res) => {
  const { nome, email, senha } = req.body;
  const { rows } = await db.query(
    "INSERT INTO profissional (nome, email, senha) VALUES ($1, $2, $3)",
    [nome, email, senha]
  );

  res.status(201).send({
    message: "Cadastrado com Sucesso",
    body: {
      profissional: { nome, email, senha }
    },
  });
};

exports.listAllProfissionais = async(req, res) => {
  const response = await db.query('SELECT * FROM profissional ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

exports.findProfissionalById = async(req,res) => {
  const id_profissional = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM profissional WHERE id_profissional = $1', [id_profissional]);
  res.status(200).send(res.rows);
};

exports.updateProfissionalById = async(req,res) => {
  const id_profissional = parseInt(req.params.id);
  const {nome, email, senha } = req.body; 

  const response = await db.query(
    "UPDATE profissional SET nome = $1, email = $2, senha = $3 WHERE id_profissional = $4",
    [nome, email, senha, id_profissional]
  );

  res.status(200).send({ message:"Alteração foi um sucesso" });
};

exports.deleteProfissionalById = async(req,res) => {
  const id_profissional = parseInt(req.params.id);
  await db.query('DELETE FROM profissional WHERE id_profissional = $1', [id_profissional]);
  res.status(200).send({ message:'Profissional deletado!', id_profissional });
}