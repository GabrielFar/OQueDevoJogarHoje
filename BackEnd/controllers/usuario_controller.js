const express = require("express");
const usuarioService = require("../services/usuario_service");

const usuarioRouter = express.Router();

usuarioRouter.post("/", usuarioService.criaUsuario);

usuarioRouter.get("/todos", usuarioService.retornaTodosUsuarios);

usuarioRouter.get("/:email", usuarioService.retornaUsuarioPorEmail);

usuarioRouter.get("/:email/permissoes", usuarioService.retornaUsuarioComPermissoes);

usuarioRouter.put("/:email", usuarioService.atualizaUsuario);

usuarioRouter.delete("/:email", usuarioService.deletaUsuario);

module.exports = usuarioRouter;