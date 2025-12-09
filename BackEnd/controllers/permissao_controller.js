const express = require("express");
const permissaoService = require("../services/permissao_service");

const permissaoRouter = express.Router();

permissaoRouter.post("/", permissaoService.criaPermissao);

permissaoRouter.get("/todos", permissaoService.retornaTodasPermissoes);

permissaoRouter.get("/:id", permissaoService.retornaPermissaoPorId);

permissaoRouter.put("/:id", permissaoService.atualizaPermissao);

permissaoRouter.delete("/:id", permissaoService.deletaPermissao);

module.exports = permissaoRouter;