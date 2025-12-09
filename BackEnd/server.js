const cors = require("cors");
const express = require("express");
const jogosRouter = require("./controllers/jogo_controller");
const generosRouter = require("./controllers/genero_controller");
const plataformasRouter = require("./controllers/plataforma_controller");
const path = require('path');

const app = express();

app.use('/imagens', express.static(path.join(__dirname, 'imagens')));
app.use(express.json());
app.use(cors());

const PORT = 3002;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}.`));

app.use("/jogos", jogosRouter);
app.use("/generos", generosRouter);
app.use("/plataformas", plataformasRouter);