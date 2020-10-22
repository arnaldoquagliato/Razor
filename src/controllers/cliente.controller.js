const { uuid } = require("uuidv4");
const { request } = require("../app");
const db = require("../config/database");


exports.createCliente = async(req,res) => {
  const { nome, email, senha } = req.body;
  const { rows } = await db.query(
    "INSERT INTO cliente (nome, email, senha) VALUES ($1, $2, $3)",
    [nome, email, senha]
  );

  res.status(201).send({
    message: "Cadastrado com Sucesso",
    body: {
      cliente: { nome, email, senha }
    },
  });
};

exports.listAllClientes = async(req, res) => {
  const response = await db.query('SELECT * FROM cliente ORDER BY nome ASC');
  res.status(200).send(response.rows);
};

exports.findClienteById = async(req,res) => {
  const cliente_id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM cliente WHERE cliente_id = $1', [cliente_id]);
  res.status(200).send(res.rows);
};

exports.updateClienteById = async(req,res) => {
  const cliente_id = parseInt(req.params.id);
  const {nome, email, senha } = req.body; 

  const response = await db.query(
    "UPDATE cliente SET nome = $1, email = $2, senha = $3 WHERE cliente_id = $4",
    [nome, email, senha, cliente_id]
  );

  res.status(200).send({ message:"deu bom" });
};

exports.deleteClienteById = async(req,res) => {
  const cliente_id = parseInt(req.params.id);
  await db.query('DELETE FROM cliente WHERE cliente_id = $1', [cliente_id]);
  res.status(200).send({ message:'deletado', cliente_id });
}