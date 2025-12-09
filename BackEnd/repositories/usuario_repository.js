const db = require("../database");

const obterTodosUsuarios = async () => {
  const { rows } = await db.query("SELECT email, nome, senha FROM usuario");
  return rows;
};

const obterUsuarioPorEmail = async (email) => {
  const { rows } = await db.query("SELECT * FROM usuario WHERE email = $1", [
    email,
  ]);
  return rows[0];
};

// Retorna usuário com suas permissões aninhadas manualmente
const obterUsuarioComPermissoes = async (email) => {
  const query = `
    SELECT u.email, u.nome, u.senha, p.id as id_permissao, p.descricao 
    FROM usuario u
    LEFT JOIN usuario_permissao up ON u.email = up.email
    LEFT JOIN permissao p ON up.id_permissao = p.id
    WHERE u.email = $1
  `;
  
  const { rows } = await db.query(query, [email]);

  if (rows.length === 0) return null;

  // Agrupa as permissões no objeto do usuário
  const usuario = {
    email: rows[0].email,
    nome: rows[0].nome,
    senha: rows[0].senha,
    Permissao: [],
  };

  rows.forEach((row) => {
    if (row.id_permissao) {
      usuario.Permissao.push({
        id: row.id_permissao,
        descricao: row.descricao,
      });
    }
  });

  return usuario;
};

const criarUsuario = async (usuario) => {
  const { rows } = await db.query(
    "INSERT INTO usuario (email, nome, senha) VALUES ($1, $2, $3) RETURNING *",
    [usuario.email, usuario.nome, usuario.senha]
  );
  return rows[0];
};

const atualizarUsuario = async (usuario) => {
  const { rows } = await db.query(
    "UPDATE usuario SET nome = $1, senha = $2 WHERE email = $3 RETURNING *",
    [usuario.nome, usuario.senha, usuario.email]
  );
  return rows[0];
};

const deletarUsuario = async (usuario) => {
  await db.query("DELETE FROM usuario WHERE email = $1", [usuario.email]);
  return usuario;
};

module.exports = {
  obterTodosUsuarios,
  obterUsuarioPorEmail,
  obterUsuarioComPermissoes,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
};