const jogoRepository = require("../repositories/jogo_repository");

// Função para retornar todos os jogos
const retornaTodosJogos = async (req, res) => {
	try {
		const jogos = await jogoRepository.obterTodosJogos();
		res.status(200).json({ jogos: jogos });
	} catch (error) {
		console.log("Erro ao buscar jogos:", error);
		res.sendStatus(500);
	}
};

// Função para criar um novo jogo
const criaJogo = async (req, res) => {
	const { id, nome, email } = req.body;
	console.log({ id, nome, email });
	try {
		if (!id || !nome || !email) {
			return res
				.status(400)
				.json({ message: "ID, nome e email são obrigatórios." });
		}

		const jogo = await jogoRepository.criarJogo({
			id,
			nome,
			email,
		});
		res.status(201).json(jogo);
	} catch (error) {
		console.log("Erro ao criar Jogo:", error);
		res.sendStatus(500);
	}
};

// Função para atualizar um jogo
const atualizaJogo = async (req, res) => {
	const { nome, email } = req.body;
	const id = parseInt(req.params.id);
	try {
		const jogoAtualizado = await jogoRepository.atualizarJogo({
			id,
			nome,
			email,
		});

		if (jogoAtualizado) {
			res.status(200).json(jogoAtualizado);
		} else {
			res.status(404).json({ message: "Jogo não encontrado" });
		}
	} catch (error) {
		console.log("Erro ao atualizar Jogo:", error);
		res.sendStatus(500);
	}
};

// Função para deletar um jogo
const deletaJogo = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const jogoRemovido = await jogoRepository.deletarJogo({ id });

		if (jogoRemovido) {
			res.status(200).json({
				message: "Jogo removido com sucesso.",
				Jogo: jogoRemovido,
			});
		} else {
			res.status(404).json({ message: "Jogo não encontrado" });
		}
	} catch (error) {
		console.error("Erro ao deletar Jogo:", error);
		res.status(500).json({ message: "Erro ao deletar Jogo" });
	}
};

// Função para buscar Jogo por ID
const retornaJogoPorId = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const jogo = await jogoRepository.obterJogoPorId({
			id,
		});

		if (jogo) {
			res.status(200).json(jogo);
		} else {
			res.status(404).json({ message: "Jogo não encontrado." });
		}
	} catch (error) {
		console.log("Erro ao buscar Jogo:", error);
		res.sendStatus(500);
	}
};

module.exports = {
	retornaTodosJogos,
	criaJogo,
	atualizaJogo,
	deletaJogo,
	retornaJogoPorId,
};
