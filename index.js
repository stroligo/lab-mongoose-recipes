//ARQUIVO PRINCIPAL
import express from "express";
import * as dotenv from "dotenv";
//import { uuid } from "uuidv4"; Gerador de ID
import connect from "./config/db.config.js";

//Routes - USER
import recipesRoute from "./routes/recipes.routes.js";

//habilitar o servidor a ter variáveis de ambiente
dotenv.config();
//configura a porta
const port = 3005;
//Roda o express
const app = express();
//configurar o servidor para aceitar JSON
app.use(express.json());
//conectando ao banco de dados
connect();

app.use("/recipes", recipesRoute);

// SERVIDOR RODANDO
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
