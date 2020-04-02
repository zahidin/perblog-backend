import { Router } from 'express';
import PostController from './controller/postController';
import Middleware from './middleware';

const router = Router();
const controller = new PostController();
const middleware = new Middleware();

router.get('/post/:slug', controller.show);
router.get('/posts', controller.showAll);
router.put('/post/:slug', controller.update);
router.post('/post', [middleware.checkJwt], controller.create);
router.delete('/post/:id', controller.delete);

module.exports = router;
