"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
// Criação da conexão com o banco de dados através do TypeORM
require("./database");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(process.env.PORT || 3000, function () {
    console.log("Server ModaAPI is running");
});
