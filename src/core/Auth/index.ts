import { Router } from 'express';
import AuthController from './controller/authController';
import Middleware from './middleware';

const middleware = new Middleware();
const router = Router();
const controller = new AuthController();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/logout', controller.logout);

module.exports = router.use('/authentication', router);
