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
	plataformas.push(plataforma);
	return plataforma;
};

// Função para atualizar um plataforma
const atualizarPlataforma = (plataforma) => {
	const plataformaExistente = plataformas.find(p => p.id === plataforma.id);
	if (!plataformaExistente) {
		return null;
	}
	plataformaExistente.nome = plataforma.nome;
	return plataformaExistente;
};

// Função para deletar um plataforma
const deletarPlataforma = (plataforma) => {
	const index = plataformas.findIndex(p => p.id === plataforma.id);
	if (index === -1) {
		return false;
	}
	plataformas.splice(index, 1);
	return true;
};

module.exports = {
	obterTodasPlataformas,
	obterPlataformaPorId,
	criarPlataforma,
	atualizarPlataforma,
	deletarPlataforma,
};
