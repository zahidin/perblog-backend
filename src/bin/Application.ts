import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import responseTime from 'response-time';
import { createServer, Server as HTTPServer } from 'http';
import parser from 'body-parser';
import compression from 'compression';
import routes from '../routes';
import { createConnection, Connection } from 'typeorm';
import ConfigApp from '@/config/app';

export class Server {
    private httpServer: HTTPServer;
    private app: Application;
    private readonly PORT = ConfigApp.APP_PORT || 5000;

    constructor() {
        this.initialize();
    }

    private initialize(): void {
        this.app = express();
        this.httpServer = createServer(this.app);

        this.configureApp();
        this.configureRoutes();
        this.configureDatabase();
    }

    private configureApp(): void {
        this.app.use(responseTime());
        this.app.use(parser.json());
        this.app.use(compression());
    }

    private configureRoutes(): void {
        this.app.get('/check', (req: Request, res: Response) => {
            res.status(200).json({ success: true, status: 'UP !!!' });
        });
        this.app.use('/api/v1', routes);
    }

    private async configureDatabase(): Promise<any> {
        const connection: Connection = await createConnection();
    }

    public listen(callback: (port: number | string) => void): void {
        this.httpServer.listen(this.PORT, () => {
            callback(this.PORT);
        });
    }
}
