import express from "express";
import { createUserController, deleteUserController, getAllUserController, updateUserController } from "../controllers/userController.js";

import formatDateMiddleware from '../middlewares/dateFormatter.js';

const userRouter = express.Router();

// http://localhost:8000/users/api/portfolio/experience/create
userRouter.post('/' ,createUserController,formatDateMiddleware)

// http://localhost:8000/users/api/portfolio/experience/
userRouter.get('/' ,getAllUserController)

// http://localhost:8000/users/api/portfolio/experience/delete
userRouter.delete('/:experienceId' ,deleteUserController)

// http://localhost:8000/users/api/portfolio/experience/update
userRouter.put('/:experienceId' ,updateUserController,formatDateMiddleware)



export default userRouter;