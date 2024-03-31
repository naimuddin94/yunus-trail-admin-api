const express = require('express');
const {
    getAllDataFn,
    createFn,
    getSingleDataFn,
    updateFn,
    deleteFn,
} = require('../controller/shared');
const Blog = require('../models/blogSchema');

const blogRouter = express.Router();

blogRouter.get('/', getAllDataFn(Blog));
blogRouter.get('/:id', getSingleDataFn(Blog));
blogRouter.post('/', createFn(Blog));
blogRouter.put('/:id', updateFn(Blog));
blogRouter.delete('/:id', deleteFn(Blog));

module.exports = blogRouter;
