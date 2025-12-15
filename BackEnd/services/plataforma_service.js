const plataformaRepository = require("../repositories/plataforma_repository");
const jogoRepository = require("../repositories/jogo_repository")

// Função para retornar todos os plataformas
const retornaTodosPlataformas = async (req, res) => {
  try {
    const plataformas = await plataformaRepository.obterTodasPlataformas();
    res.status(200).json({ plataformas: plataformas });
  } catch (error) {
    console.log("Erro ao buscar plataformas:", error);
    res.sendStatus(500);
  }
};

// Função para criar um novo plataforma
const criaPlataforma = async (req, res) => {
  const { id, nome } = req.body;
  console.log({ id, nome });
  try {
    if (!id || !nome) {
      return res
        .status(400)
        .json({ message: "ID e nome são obrigatórios." });
    }

    const plataforma = await plataformaRepository.criarPlataforma({
      id,
      nome,
    });

		if (!plataforma) {
			return res.status(409).json({ message: "Já existe uma plataforma cadastrada com este ID." });
		}

    res.status(201).json(plataforma);
  } catch (error) {
    console.log("Erro ao criar plataforma:", error);
    res.sendStatus(500);
  }
};

// Função para atualizar um plataforma
const atualizaPlataforma = async (req, res) => {
  const { nome } = req.body;
  const id = parseInt(req.params.id);
  try {
    const plataformaAtualizado = await plataformaRepository.atualizarPlataforma({
      id,
      nome,
    });

    if (plataformaAtualizado) {
      res.status(200).json(plataformaAtualizado);
    } else {
      res.status(404).json({ message: "plataforma não encontrado" });
    }
  } catch (error) {
    console.log("Erro ao atualizar plataforma:", error);
    res.sendStatus(500);
  }
};

// Função para deletar um plataforma
const deletaPlataforma = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const plataformaRemovido = await plataformaRepository.deletarPlataforma({ id });

    if(jogoRepository.deletarGeneroEPlataforma(id, false)){
      console.log("Plataforma removida de jogos relacionados.");
    }

    if (plataformaRemovido) {
      res.status(200).json({
        message: "plataforma removido com sucesso.",
        plataforma: plataformaRemovido,
      });
    } else {
      res.status(404).json({ message: "plataforma não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao deletar plataforma:", error);
    res.status(500).json({ message: "Erro ao deletar plataforma" });
  }
};

// Função para buscar plataforma por ID
const retornaPlataformaPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const plataforma = await plataformaRepository.obterPlataformaPorId({
      id,
    });

    if (plataforma) {
      res.status(200).json(plataforma);
    } else {
      res.status(404).json({ message: "geneGo não encontrado." });
    }
  } catch (error) {
    console.log("Erro ao buscar plataforma:", error);
    res.sendStatus(500);
  }
};

module.exports = {
  retornaTodosPlataformas,
  criaPlataforma,
  atualizaPlataforma,
  deletaPlataforma,
  retornaPlataformaPorId,
};
