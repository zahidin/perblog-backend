import { Router } from 'express';
import PostController from './controller/postController';

const router = Router();
const controller = new PostController();

router.get('/post/:slug', controller.show);
router.get('/posts', controller.showAll);
router.put('/post/:slug', controller.update);
router.post('/post', controller.create);
router.delete('/post/:id', controller.delete);

module.exports = router;
