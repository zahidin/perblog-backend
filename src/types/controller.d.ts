import { Response } from 'express';

export default interface IController {
    create(): Response;
    show(): Response;
    showAll(): Response;
    delete(): Response;
    update(): Response;
}
