const { jogos } = require("../database");

// Função para obter todos os Jogos
const obterTodosJogos = () => {
	return jogos;
};

// Função para obter jogo por ID
const obterJogoPorId = (id) => {
	const result = jogos.find(jogo => jogo.id == id);
	return result || null;
};

// Função para criar um novo jogo
const criarJogo = (jogo) => {
	const jogoExistente = obterJogoPorId(jogo.id);
	
	if (jogoExistente) {
		return null;
	}

	jogos.push(jogo);
	return jogo;
};

// Função para atualizar um jogo
const atualizarJogo = (jogo) => {
	const jogoExistente = jogos.find(j => j.id == jogo.id);
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
	const index = jogos.findIndex(j => j.id == jogo.id);
	if (index == -1) {
		return null;
	}
	const retornarJogo = jogos[index];
	jogos.splice(index, 1);
	return retornarJogo;
};

// Função auxiliar para deletar generos e plataformas associadas a um jogo
const deletarGeneroEPlataforma = (chaveEstrangeira, ehGenero) => {
	let removido = false;
	for (let i = jogos.length - 1; i >= 0; i--) {
		if (ehGenero && jogos[i].generoId == chaveEstrangeira) {
			jogos[i].generoId = null;
			removido = true;
		} else if (jogos[i].plataformasId.includes(chaveEstrangeira)) {
			jogos[i].plataformasId = jogos[i].plataformasId.filter(id => id !== chaveEstrangeira);
			removido = true;
		}
	}
	return removido;
};

module.exports = {
	obterTodosJogos,
	obterJogoPorId,
	criarJogo,
	atualizarJogo,
	deletarJogo,
	deletarGeneroEPlataforma
};
