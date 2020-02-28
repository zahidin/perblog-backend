import { Response } from 'express';

export default interface IController {
    create(): Response;
    show(): Response;
    delete(): Response;
    update(): Response;
}
