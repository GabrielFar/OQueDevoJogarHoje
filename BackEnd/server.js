const express = require("express");
const cors = require("cors");
const path = require('path');
const session = require("express-session");
const passport = require("passport");
const jogosRouter = require("./controllers/jogo_controller");
const generosRouter = require("./controllers/genero_controller");
const plataformasRouter = require("./controllers/plataforma_controller");
const authRouter = require("./controllers/auth_controller");
const usuarioRouter = require("./controllers/usuario_controller");
const permissaoRouter = require("./controllers/permissao_controller");
const usuarioPermissaoRouter = require("./controllers/usuario_permissao_controller");

const authService = require("./services/auth_service");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/imagens', express.static(path.join(__dirname, 'imagens')));

app.use(
    session({
        secret: "uma_chave_secreta_para_a_loja_de_jogos",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.use(passport.initialize());
app.use(passport.session());

authService.configureLocalStrategy();
authService.configureJwtStrategy();
authService.configureSerialization();

const PORT = 3002;
app.listen(PORT, () => console.log(`Servidor de Jogos rodando na porta ${PORT}.`));

app.use("/", authRouter);

app.use("/jogos", jogosRouter);
app.use("/generos", generosRouter);
app.use("/plataformas", plataformasRouter);

app.use("/usuario", usuarioRouter);
app.use("/permissao", permissaoRouter);
app.use("/usuario_permissao", usuarioPermissaoRouter);