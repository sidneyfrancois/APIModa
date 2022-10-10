import { Connection, createConnection, getConnectionOptions } from "typeorm";

require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ? "src" : "build";
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "build";

const config: any = {
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
  entities: [rootDir + `/database/entities/*.${extensionFile}`],
  migrations: [rootDir + `/database/migrations/*.${extensionFile}`],
  cli: {
    migrationsDir: rootDir + "/database/migrations",
  },
};

createConnection(config).catch((error) => console.log(error));
