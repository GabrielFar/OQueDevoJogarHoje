const db = require("../database");

const obterTodosUsuarioPermissoes = async () => {
  const query = `
    SELECT up.email, up.id_permissao, u.nome, p.descricao
    FROM usuario_permissao up
    JOIN usuario u ON up.email = u.email
    JOIN permissao p ON up.id_permissao = p.id
  `;
  const { rows } = await db.query(query);

  // Mapeia para estrutura similar ao ORM
  return rows.map((row) => ({
    email: row.email,
    id_permissao: row.id_permissao,
    Usuario: { email: row.email, nome: row.nome },
    Permissao: { id: row.id_permissao, descricao: row.descricao },
  }));
};

const obterPermissoesPorUsuario = async (email) => {
  const query = `
    SELECT p.* FROM permissao p
    JOIN usuario_permissao up ON p.id = up.id_permissao
    WHERE up.email = $1
  `;
  const { rows } = await db.query(query, [email]);
  
  // Retorna array de permissões
  return rows;
};

const obterUsuariosPorPermissao = async (id_permissao) => {
  const query = `
    SELECT u.* FROM usuario u
    JOIN usuario_permissao up ON u.email = up.email
    WHERE up.id_permissao = $1
  `;
  const { rows } = await db.query(query, [id_permissao]);
  return rows;
};

const criarUsuarioPermissao = async (usuarioPermissao) => {
  const { rows } = await db.query(
    "INSERT INTO usuario_permissao (email, id_permissao) VALUES ($1, $2) RETURNING *",
    [usuarioPermissao.email, usuarioPermissao.id_permissao]
  );
  return rows[0];
};

const deletarUsuarioPermissao = async (usuarioPermissao) => {
  await db.query(
    "DELETE FROM usuario_permissao WHERE email = $1 AND id_permissao = $2",
    [usuarioPermissao.email, usuarioPermissao.id_permissao]
  );
  return usuarioPermissao;
};

const verificarPermissaoUsuario = async (email, id_permissao) => {
  const { rows } = await db.query(
    "SELECT * FROM usuario_permissao WHERE email = $1 AND id_permissao = $2",
    [email, id_permissao]
  );
  return rows.length > 0;
};

module.exports = {
  obterTodosUsuarioPermissoes,
  obterPermissoesPorUsuario,
  obterUsuariosPorPermissao,
  criarUsuarioPermissao,
  deletarUsuarioPermissao,
  verificarPermissaoUsuario,
};