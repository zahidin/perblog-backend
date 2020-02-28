import { Router } from 'express';
import PostController from './controller/postController';

const router = Router();
const controller = new PostController();

// router.get('/posts', controller.showAll);
router.post('/post', controller.create);

module.exports = router;
