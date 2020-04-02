/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

fs.readdir(path.join(__dirname, './../core/'), (err, dir) => {
    dir.forEach(dir2 => {
        fs.readdir(path.join(__dirname, `./../core/${dir2}`), (err, controller) => {
            controller.forEach(file => {
                const routes = require(path.join(__dirname, `../.../../core/${dir2}`));
                app.use(routes);
            });
        });
    });
});

export default app;
