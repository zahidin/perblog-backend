import 'reflect-metadata';
import { Server } from './bin/Application';

const server = new Server();

server.listen((port: number) => {
    console.log(`Server is listening on port: ${port} 🚀`);
});
