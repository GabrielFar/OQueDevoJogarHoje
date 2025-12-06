const express = require("express");
const plataformaService = require("../services/plataforma_service");

const plataformaRouter = express.Router();

// POST /plataforma - Criar novo plataforma
plataformaRouter.post("/", plataformaService.criaPlataforma);

// GET /plataformas - Retornar todos os plataformas
plataformaRouter.get("/todos", plataformaService.retornaTodosPlataformas);

// GET /plataforma/:id - Retornar plataforma por ID
plataformaRouter.get("/:id", plataformaService.retornaPlataformaPorId);

// PUT /plataforma/:id - Atualizar plataforma
plataformaRouter.put("/:id", plataformaService.atualizaPlataforma);

// DELETE /plataforma/:id - Deletar plataforma
plataformaRouter.delete("/:id", plataformaService.deletaPlataforma);

module.exports = plataformaRouter;
