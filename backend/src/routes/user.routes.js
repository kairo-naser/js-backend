import {Router } from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js';
import { loginValidate, logoutValide, registerValidate } from '../middleware/user.middleware.js';

const userRouter = Router();


userRouter.post('/register',registerValidate,registerUser);
userRouter.post('/login',loginValidate, loginUser);
userRouter.post('/logout',logoutValide, logoutUser)



export default userRouter;