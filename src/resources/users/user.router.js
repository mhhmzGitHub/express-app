import express from 'express'
import userController from './user.controller'
export const userRouter = express.Router()

userRouter
    .route('/')
    .get(userController.getUsers)
    .post(userController.createaUser)
    
userRouter
    .route('/:id')
    .put(userController.updateUser)
