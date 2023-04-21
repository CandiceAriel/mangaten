import express from 'express';

import {getAllBooks, getBooksByID} from '../controllers/books.controller.js';

const bookRouter = express.Router();

bookRouter.route('/').get(getAllBooks);
bookRouter.route('/:id').get(getBooksByID);

export default bookRouter;