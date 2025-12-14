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
	jogos.push(jogo);
	return jogo;
};

// Função para atualizar um jogo
const atualizarJogo = (jogo) => {
	const jogoExistente = jogos.find(j => j.id === jogo.id);
	if (!jogoExistente) {
		return null;
	}
	jogoExistente.nome = jogo.nome;
	jogoExistente.generoId = jogo.generoId;
	jogoExistente.plataformasId = jogo.plataformasId;
	jogoExistente.imagem = jogo.imagem;
	jogoExistente.tempo = jogo.tempo;
	return jogoExistente;
};

// Função para deletar um jogo
const deletarJogo = (jogo) => {
	const index = jogos.findIndex(j => j.id === jogo.id);
	if (index === -1) {
		return false;
	}
	jogos.splice(index, 1);
	return true;
};

module.exports = {
	obterTodosJogos,
	obterJogoPorId,
	criarJogo,
	atualizarJogo,
	deletarJogo,
};
