const express = require("express");
const generoService = require("../services/genero_service");

const generoRouter = express.Router();

// POST /genero - Criar novo genero
generoRouter.post("/", generoService.criaGenero);

// GET /generos - Retornar todos os generos
generoRouter.get("/todos", generoService.retornaTodosGeneros);

// GET /genero/:id - Retornar genero por ID
generoRouter.get("/:id", generoService.retornaGeneroPorId);

// PUT /genero/:id - Atualizar genero
generoRouter.put("/:id", generoService.atualizaGenero);

// DELETE /genero/:id - Deletar genero
generoRouter.delete("/:id", generoService.deletaGenero);

module.exports = generoRouter;
