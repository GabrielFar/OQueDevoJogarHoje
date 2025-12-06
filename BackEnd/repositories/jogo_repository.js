const { jogos } = require("../database");

// Função para obter todos os Jogos
const obterTodosJogos = () => {
	return jogos;
};

// Função para obter jogo por ID
const obterJogoPorId = (id) => {
	const result = jogos.find(jogo => jogo.id === id);
	return result || null;
};

// Função para criar um novo jogo
const criarJogo = (jogo) => {
	db.query("INSERT INTO jogo (id, nome, email) VALUES ($1, $2, $3)", [
		jogo.id,
		jogo.nome,
		jogo.email,
	]);
	return jogo;
};

// Função para atualizar um jogo
const atualizarJogo = (jogo) => {
	try {
		// Atualizar o jogo
		db.query("UPDATE jogo SET nome = $1, email = $2 WHERE id = $3", [
			jogo.nome,
			jogo.email,
			jogo.id,
		]);

		// Retornar o jogo atualizado
		const result = db.query(
			"SELECT id, nome, email FROM jogo WHERE id = $1",
			[jogo.id],
		);

		return result[0];
	} catch (error) {
		throw error;
	}
};

// Função para deletar um jogo
const deletarJogo = (jogo) => {
	try {
		// Deletar o jogo
		db.query("DELETE FROM jogo WHERE id = $1", [jogo.id]);

		return jogo;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	obterTodosJogos,
	obterJogoPorId,
	criarJogo,
	atualizarJogo,
	deletarJogo,
};
