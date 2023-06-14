import express from 'express';
import {json} from 'body-parser';
import mongoose from 'mongoose';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handlers';
import { NotFoundError } from './errors/not-found-error';



const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req,res)=>{
    throw new NotFoundError();
})

app.use(errorHandler);

const start =async ()=>{
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    } catch (error) {
        console.error(error);
    }
    console.log('Connected to Mongodb')
    app.listen(3000, ()=>{
        console.log('--> Auth app listening on port 3000');
    });
};

start();
