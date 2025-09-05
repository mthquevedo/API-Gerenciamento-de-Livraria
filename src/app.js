import express from "express";
import db from "./config/dbConnect.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import verficadorDeconexao from "./middlewares/verficadorDeConexao.js";
import routes from "./routes/index.js";

verficadorDeconexao(db);

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorDeErros);

export default app;