import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction} from 'express';
import 'express-async-errors';

import routes from '@shared/infra/http/routes';
import AppError from '@shared/errors/AppError'

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.log(err.message);

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Errror',
    });
})

app.listen(3333, () => {
    console.log("Server run on port 3333");
})