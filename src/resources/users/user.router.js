import express from 'express'
export const userRouter = express.Router()

userRouter.get('/', (req, res) => res.send('User List'))
userRouter.get('/:id', (req, res) => {
    res.send(`User id is: ${req.params.id}`)
})
