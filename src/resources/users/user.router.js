import express from 'express'
import userController from './user.controller'
export const userRouter = express.Router()

userRouter
    .route('/')
    .get(userController.getUsers)
    .post(userController.createaUser)
 

userRouter.get('/:id', (req, res) => {
    res.send(`User id is: ${req.params.id}`)
})
