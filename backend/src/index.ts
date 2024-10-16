import express, { Express, Request, Response } from 'express';
import { PORT } from './secrets';
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';


const app: Express = express();
app.use(cors());

app.use(express.json())

app.use('/api', rootRouter)


export const prismaClient = new PrismaClient({
    log: ['query']
})

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');
})