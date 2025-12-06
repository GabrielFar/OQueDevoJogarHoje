const express = require("express");
const jogoService = require("../services/jogo_service");

const jogoRouter = express.Router();

// POST /jogo - Criar novo jogo
jogoRouter.post("/", jogoService.criaJogo);

// GET /jogos - Retornar todos os jogos
jogoRouter.get("/todos", jogoService.retornaTodosJogos);

// GET /jogo/:id - Retornar jogo por ID
jogoRouter.get("/:id", jogoService.retornaJogoPorId);

// PUT /jogo/:id - Atualizar jogo
jogoRouter.put("/:id", jogoService.atualizaJogo);

// DELETE /jogo/:id - Deletar jogo
jogoRouter.delete("/:id", jogoService.deletaJogo);

module.exports = jogoRouter;
