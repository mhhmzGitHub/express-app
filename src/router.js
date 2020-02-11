import express from 'express'

export const router = express.Router()

import { userRouter } from './resources/users/user.router'
import userController from './resources/users/user.controller'

router.get('/', (req, res) => res.send('Hello from router.js'))
router.get('/about',(req, res) => res.send('About Page'))

router.get('/signin', (req, res) => res.send('Sign In'))
router.post('/signup', userController.createaUser)
router.use('/users', userRouter)
