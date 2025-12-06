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
	db.query("INSERT INTO jogo (id, nome, generoId, plataformasId, tempo, imagem) VALUES ($1, $2, $3, $4, $5, $6)", [
		jogo.id,
		jogo.nome,
		jogo.generoId,
		jogo.plataformasId,
		jogo.tempo,
		jogo.imagem,
	]);
	return jogo;
};

// Função para atualizar um jogo
const atualizarJogo = (jogo) => {
	try {
		// Atualizar o jogo
		db.query("UPDATE jogo SET nome = $1, generoId = $2, plataformasId = $3, tempo = $4, imagem = $5 WHERE id = $6", [
			jogo.nome,
			jogo.generoId,
			jogo.plataformasId,
			jogo.tempo,
			jogo.imagem,
			jogo.id,
		]);

		// Retornar o jogo atualizado
		const result = db.query(
			"SELECT id, nome, generoId, plataformasId, tempo, imagem FROM jogo WHERE id = $1",
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
