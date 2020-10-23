
const { request } = require("../app");
const db = require("../config/database");


exports.createNoticia = async(req,res) => {
  const { autor, titulo, descricao } = req.body;
  const { rows } = await db.query(
    "INSERT INTO noticia ( autor, titulo, descricao) VALUES ($1, $2, $3)",
    [autor,titulo,descricao]
  );

  res.status(201).send({
    message: "Cadastrado com Sucesso",
    body: {
      noticia: { autor, titulo, descricao }
    },
  });
};

exports.listAllNoticias = async(req, res) => {
  const response = await db.query('SELECT * FROM noticia ORDER BY autor ASC');
  res.status(200).send(response.rows);
};

exports.findNoticiaById = async(req,res) => {
  const id_noticia = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM noticia WHERE id_noticia = $1', [id_noticia]);
  res.status(200).send(res.rows);
};

exports.updateNoticiaById = async(req,res) => {
  const id_noticia = parseInt(req.params.id);
  const { autor, titulo, descricao }= req.body; 

  const response = await db.query(
    "UPDATE noticia SET autor = $1, titulo = $2, descricao = $3 WHERE id_noticia = $4",
    [autor, titulo, descricao, id_noticia]
  );

  res.status(200).send({ message:"Alteração foi um sucesso" });
};

exports.deleteNoticiaById = async(req,res) => {
  const id_noticia = parseInt(req.params.id);
  await db.query('DELETE FROM noticia WHERE id_noticia = $1', [id_noticia]);
  res.status(200).send({ message:'Notícia deletada', id_noticia });
}