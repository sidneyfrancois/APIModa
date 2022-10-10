"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
require("dotenv").config();
var rootDir = process.env.NODE_ENV === "development" ? "src" : "build";
var extensionFile = process.env.NODE_ENV === "development" ? "ts" : "build";
var config = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    entities: [
        rootDir + "/database/entities/*.".concat(extensionFile)
    ],
    migrations: [
        rootDir + "/database/migrations/*.".concat(extensionFile)
    ],
    cli: {
        "migrationsDir": './' + rootDir + "/database/migrations"
    }
};
(0, typeorm_1.createConnection)(config).catch(function (error) { return console.log(error); });
