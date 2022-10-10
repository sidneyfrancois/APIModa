import "reflect-metadata";
require("dotenv").config();
import express from "express";
import { routes } from "./routes";

// Criação da conexão com o banco de dados através do TypeORM
import "./database";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server ModaAPI is running");
});
