const express = require('express');
const {
    getAllDataFn,
    createFn,
    getSingleDataFn,
    updateFn,
    deleteFn,
} = require('../controller/shared');
const Category = require('../models/categorySchema');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllDataFn(Category));
categoryRouter.get('/:id', getSingleDataFn(Category));
categoryRouter.post('/', createFn(Category));
categoryRouter.put('/:id', updateFn(Category));
categoryRouter.delete('/:id', deleteFn(Category));

module.exports = categoryRouter;
