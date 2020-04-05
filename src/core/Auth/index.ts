import { Router } from 'express';
import AuthController from './controller/authController';
import Middleware from '@/global/middleware';

const middleware = new Middleware();
const router = Router();
const controller = new AuthController();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/logout', [middleware.checkJwt], controller.logout);

module.exports = router.use('/authentication', router);
