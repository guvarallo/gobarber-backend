import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database'; //We import the connection from createConnection

const app = express();

app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server on ${PORT}`));
