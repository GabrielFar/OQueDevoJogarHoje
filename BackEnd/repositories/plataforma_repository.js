const { plataformas } = require("../database");

// Função para obter todos os plataformas
const obterTodasPlataformas = () => {
	return plataformas;
};

// Função para obter plataforma por ID
const obterPlataformaPorId = (id) => {
	const result = plataformas.find(plataforma => plataforma.id === id);
	return result || null;
};

// Função para criar um novo plataforma
const criarPlataforma = (plataforma) => {
	db.query("INSERT INTO plataforma (id, nome) VALUES ($1, $2)", [
		plataforma.id,
		plataforma.nome
	]);
	return plataforma;
};

// Função para atualizar um plataforma
const atualizarPlataforma = (plataforma) => {
	try {
		// Atualizar o plataforma
		db.query("UPDATE plataforma SET nome = $1 WHERE id = $2", [
			plataforma.nome,
			plataforma.id,
		]);

		// Retornar o plataforma atualizado
		const result = db.query(
			"SELECT id, nome FROM plataforma WHERE id = $1",
			[plataforma.id],
		);

		return result[0];
	} catch (error) {
		throw error;
	}
};

// Função para deletar um plataforma
const deletarPlataforma = (plataforma) => {
	try {
		// Deletar o plataforma
		db.query("DELETE FROM plataforma WHERE id = $1", [plataforma.id]);

		return plataforma;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	obterTodasPlataformas,
	obterPlataformaPorId,
	criarPlataforma,
	atualizarPlataforma,
	deletarPlataforma,
};
