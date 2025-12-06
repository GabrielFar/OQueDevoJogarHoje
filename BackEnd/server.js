const express = require("express");
const jogosRouter = require("./controllers/jogo_controller");

const app = express();
app.use(express.json());

const PORT = 3002;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}.`));

app.use("/jogos", jogosRouter);