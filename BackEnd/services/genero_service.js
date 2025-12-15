const generoRepository = require("../repositories/genero_repository");
const jogoRepository = require("../repositories/jogo_repository")

// Função para retornar todos os generos
const retornaTodosGeneros = async (req, res) => {
  try {
    const generos = await generoRepository.obterTodosGeneros();
    res.status(200).json({ generos: generos });
  } catch (error) {
    console.log("Erro ao buscar generos:", error);
    res.sendStatus(500);
  }
};

// Função para criar um novo genero
const criaGenero = async (req, res) => {
  const { id, nome } = req.body;
  console.log({ id, nome });
  try {
    if (!id || !nome) {
      return res
        .status(400)
        .json({ message: "ID e nome são obrigatórios." });
    }

    const genero = await generoRepository.criarGenero({
      id,
      nome,
    });
    
		if (!genero) {
			return res.status(409).json({ message: "Já existe um genero cadastrado com este ID." });
		}

    res.status(201).json(genero);
  } catch (error) {
    console.log("Erro ao criar genero:", error);
    res.sendStatus(500);
  }
};

// Função para atualizar um genero
const atualizaGenero = async (req, res) => {
  const { nome } = req.body;
  const id = parseInt(req.params.id);
  try {
    const generoAtualizado = await generoRepository.atualizarGenero({
      id,
      nome,
    });

    if (generoAtualizado) {
      res.status(200).json(generoAtualizado);
    } else {
      res.status(404).json({ message: "Genero não encontrado" });
    }
  } catch (error) {
    console.log("Erro ao atualizar genero:", error);
    res.sendStatus(500);
  }
};

// Função para deletar um genero
const deletaGenero = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const generoRemovido = await generoRepository.deletarGenero({ id });

    if (generoRemovido) {
      res.status(200).json({
        message: "genero removido com sucesso.",
        genero: generoRemovido,
      });
    } else {
      res.status(404).json({ message: "Genero não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao deletar genero:", error);
    res.status(500).json({ message: "Erro ao deletar genero" });
  }
};

// Função para buscar genero por ID
const retornaGeneroPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const genero = await generoRepository.obterGeneroPorId({
      id,
    });

    if(jogoRepository.deletarGeneroEPlataforma(id, true)){
      console.log("Genero removido de jogos relacionados.");
    }

    if (genero) {
      res.status(200).json(genero);
    } else {
      res.status(404).json({ message: "geneGo não encontrado." });
    }
  } catch (error) {
    console.log("Erro ao buscar genero:", error);
    res.sendStatus(500);
  }
};

module.exports = {
  retornaTodosGeneros,
  criaGenero,
  atualizaGenero,
  deletaGenero,
  retornaGeneroPorId,
};
