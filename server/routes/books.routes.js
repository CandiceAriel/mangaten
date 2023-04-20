import express from 'express';

import {getAllBooks, getAllCategories} from '../controllers/books.controller.js';

const bookRouter = express.Router();

bookRouter.route('/').get(getAllBooks, getAllCategories);

export default bookRouter;