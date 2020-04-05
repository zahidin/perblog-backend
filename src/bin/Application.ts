import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import responseTime from 'response-time';
import { createServer, Server as HTTPServer } from 'http';
import parser from 'body-parser';
import compression from 'compression';
import routes from '@/routes';
import { createConnection } from 'typeorm';
import ConfigApp from '@/config/app';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '@/docs';

export class Server {
    private httpServer: HTTPServer;
    private app: Application;
    private readonly PORT = ConfigApp.APP_PORT || 5000;
    private readonly MOODE = ConfigApp.APP_MODE || '';

    constructor() {
        this.initialize();
    }

    private initialize(): void {
        this.configureDatabase();

        this.app = express();
        this.httpServer = createServer(this.app);

        this.configureApp();
        this.configureRoutes();
        this.configureSwagger();
    }

    private configureApp(): void {
        this.app.use(cors());
        this.app.use(helmet());
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

    private configureSwagger(): void {
        if (this.MOODE === 'development')
            this.app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
    }

    private async configureDatabase(): Promise<void> {
        await createConnection();
    }

    public listen(callback: (port: number) => void): void {
        this.httpServer.listen(this.PORT, () => {
            callback(this.PORT);
        });
    }
}
