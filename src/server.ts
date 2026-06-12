import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import produtosRouter from './routes/produtos.js';
import voosRouter from './routes/voos.js';
import pingRouter from './routes/ping.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

server.use('/', router);
server.use('/produtos', produtosRouter);
server.use('/voos', voosRouter);
server.use('/ping', pingRouter);

server.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});