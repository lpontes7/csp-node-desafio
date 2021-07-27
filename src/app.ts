import "reflect-metadata";
import * as express from 'express'
import { router } from './routes'
import { createConnection } from "typeorm";


createConnection({
    type: "mysql",
    host: process.env.BD_HOST,
    port: parseInt(process.env.BD_PORT, 10),
    username: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}']
}).then(connection => {
}).catch(error => console.log(error));


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.set('port', 3000)

export { app }