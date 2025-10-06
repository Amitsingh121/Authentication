import express from 'express';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import core from 'cors';
import {connection } from './database/dbConnectio.js';
export const app = express();

config({path: './config.env'});

app.use(core({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
connection(); 