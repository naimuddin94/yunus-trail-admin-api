const express = require('express');
const {
    getAllDataFn,
    createFn,
    getSingleDataFn,
    updateFn,
    deleteFn,
    getUserRoleFn,
} = require('../controller/shared');
const User = require('../models/userSchema');

const userRouter = express.Router();

userRouter.get('/', getAllDataFn(User));
userRouter.get('/:id', getSingleDataFn(User));
userRouter.get('/role/:email', getUserRoleFn(User));
userRouter.post('/', createFn(User));
userRouter.put('/:id', updateFn(User));
userRouter.delete('/:id', deleteFn(User));

module.exports = userRouter;
