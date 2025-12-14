const { generos } = require("../database");

// Função para obter todos os generos
const obterTodosGeneros = () => {
	return generos;
};

// Função para obter genero por ID
const obterGeneroPorId = (id) => {
	const result = generos.find(genero => genero.id === id);
	return result || null;
};

// Função para criar um novo genero
const criarGenero = (genero) => {
	generos.push(genero);
	return genero;
};

// Função para atualizar um genero
const atualizarGenero = (genero) => {
	const generoExistente = generos.find(g => g.id === genero.id);
	if (!generoExistente) {
		return null;
	}

	generoExistente.nome = genero.nome;
	return generoExistente;
};

// Função para deletar um genero
const deletarGenero = (genero) => {
	const index = generos.findIndex(g => g.id === genero.id);
	if (index === -1) {
		return false;
	}
	generos.splice(index, 1);
	return true;
};

module.exports = {
	obterTodosGeneros,
	obterGeneroPorId,
	criarGenero,
	atualizarGenero,
	deletarGenero,
};
