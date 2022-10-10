"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
// Criação da conexão com o banco de dados através do TypeORM
require("./database");
const app = (0, express_1.default)();
app.use(cors_1.default);
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(process.env.PORT || 3000, () => console.log("Servier ModaAPI is running"));
