import * as dotenv from 'dotenv';
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
dotenv.config();

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: true,
  entities: ['src/database/entity/*.ts'],
  migrations: ['src/database/migration/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/database/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },
};

module.exports = config;
