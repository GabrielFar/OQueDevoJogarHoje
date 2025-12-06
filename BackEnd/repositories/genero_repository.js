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
	db.query("INSERT INTO genero (id, nome) VALUES ($1, $2)", [
		genero.id,
		genero.nome
	]);
	return genero;
};

// Função para atualizar um genero
const atualizarGenero = (genero) => {
	try {
		// Atualizar o genero
		db.query("UPDATE genero SET nome = $1 WHERE id = $2", [
			genero.nome,
			genero.id,
		]);

		// Retornar o genero atualizado
		const result = db.query(
			"SELECT id, nome FROM genero WHERE id = $1",
			[genero.id],
		);

		return result[0];
	} catch (error) {
		throw error;
	}
};

// Função para deletar um genero
const deletarGenero = (genero) => {
	try {
		// Deletar o genero
		db.query("DELETE FROM genero WHERE id = $1", [genero.id]);

		return genero;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	obterTodosGeneros,
	obterGeneroPorId,
	criarGenero,
	atualizarGenero,
	deletarGenero,
};
