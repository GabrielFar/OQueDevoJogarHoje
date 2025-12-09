const db = require("../database");

const obterTodasPermissoes = async () => {
  const { rows } = await db.query("SELECT * FROM permissao");
  return rows;
};

const obterPermissaoPorId = async (id) => {
  const { rows } = await db.query("SELECT * FROM permissao WHERE id = $1", [
    id,
  ]);
  return rows[0];
};

const obterPermissaoPorDescricao = async (descricao) => {
  const { rows } = await db.query(
    "SELECT * FROM permissao WHERE descricao = $1",
    [descricao]
  );
  return rows[0];
};

const criarPermissao = async (permissao) => {
  const { rows } = await db.query(
    "INSERT INTO permissao (id, descricao) VALUES ($1, $2) RETURNING *",
    [permissao.id, permissao.descricao]
  );
  return rows[0];
};

const atualizarPermissao = async (permissao) => {
  const { rows } = await db.query(
    "UPDATE permissao SET descricao = $1 WHERE id = $2 RETURNING *",
    [permissao.descricao, permissao.id]
  );
  return rows[0];
};

const deletarPermissao = async (permissao) => {
  await db.query("DELETE FROM permissao WHERE id = $1", [permissao.id]);
  return permissao;
};

module.exports = {
  obterTodasPermissoes,
  obterPermissaoPorId,
  obterPermissaoPorDescricao,
  criarPermissao,
  atualizarPermissao,
  deletarPermissao,
};