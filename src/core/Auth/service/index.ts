import { authRepository } from '@/core/Auth/repository';
import AuthService from './authService';

export const authService = new AuthService(authRepository);
