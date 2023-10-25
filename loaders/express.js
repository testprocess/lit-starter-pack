import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from "helmet"
import { engine } from 'express-handlebars';


import mainRouter from '../routes/main.js';

export async function init (app) {
    app.engine("hbs",
        engine({
            extname: "hbs",
            defaultLayout: false
        })
    );
    app.set('trust proxy', 1);
    app.set("view engine", "hbs");    
    app.set('views','./views');
    app.disable('x-powered-by');

    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                "script-src": ["'self'", "*.jsdelivr.net", "'unsafe-inline'", "'unsafe-eval'"],
                'img-src': ["'self'", 'data:', 'blob:', '*.daumcdn.net', '*.kakaocdn.net'],

            },
        },
    }));
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(cookieParser());

    app.use((err, req, res, next) => {
       res.status(500).send({
            msg: "server error"
       })
    })

    app.use('/dist', express.static('dist'));
    app.use('/', mainRouter);
    return app;
}
