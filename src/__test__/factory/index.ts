import 'module-alias/register';
import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { createServer, Server as HttpServer } from 'http';
import ConfigApp from '@/config/app';
import express from 'express';
import supertest from 'supertest';
import routes from '@/routes';
import parser from 'body-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import responseTime from 'response-time';
import helmet from 'helmet';
dotenv.config();

export class TestFactory {
    private _app: express.Application;
    private _connection: Connection;
    private _server: HttpServer;

    public get app(): supertest.SuperTest<supertest.Test> {
        return supertest(this._app);
    }

    public get connection(): Connection {
        return this._connection;
    }

    public get server(): HttpServer {
        return this._server;
    }

    private configureApp(): void {
        this._app.use(cors());
        this._app.use(helmet());
        this._app.use(responseTime());
        this._app.use(parser.json());
        this._app.use(compression());
    }

    /**
     *  Connect to Database and Start the Server
     */
    public async init(): Promise<void> {
        this._connection = await createConnection();
        this._app = express();
        this.configureApp();
        this._app.use('/api/v1', routes);
        this._server = createServer(this._app).listen(ConfigApp.APP_PORT);
    }

    /**
     *  Close Server and Database Connection
     */
    public async close(): Promise<void> {
        this._server.close();
        this._connection.close();
    }
}
