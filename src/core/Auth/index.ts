import { Router } from 'express';
import AuthController from './controller/authController';

const router = Router();
const controller = new AuthController();

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router.use('/authentication', router);
