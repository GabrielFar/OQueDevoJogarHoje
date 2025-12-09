const express = require("express");
const usuarioPermissaoService = require("../services/usuario_permissao_service");

const usuarioPermissaoRouter = express.Router();

usuarioPermissaoRouter.post("/", usuarioPermissaoService.criaUsuarioPermissao);

usuarioPermissaoRouter.get("/todos", usuarioPermissaoService.retornaTodosUsuarioPermissoes);

usuarioPermissaoRouter.get(
  "/usuario/:email",
  usuarioPermissaoService.retornaPermissoesPorUsuario,
);

usuarioPermissaoRouter.get(
  "/permissao/:id_permissao",
  usuarioPermissaoService.retornaUsuariosPorPermissao,
);

usuarioPermissaoRouter.get(
  "/verificar/:email/:id_permissao",
  usuarioPermissaoService.verificaPermissaoUsuario,
);

usuarioPermissaoRouter.delete(
  "/:email/:id_permissao",
  usuarioPermissaoService.deletaUsuarioPermissao,
);

module.exports = usuarioPermissaoRouter;