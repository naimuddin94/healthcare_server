import express from 'express';
import { validateRequest } from '../../middleware';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';

const router = express.Router();

router.route('/').post(validateRequest(AuthValidation.loginSchema), AuthController.login)


export const AuthRoutes = router;