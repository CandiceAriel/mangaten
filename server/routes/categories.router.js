import express from 'express';

import { getAllCategories, getCategoriesByID } from '../controllers/categories.controller.js';

const categoryRouter = express.Router();

categoryRouter.route('/').get(getAllCategories);
categoryRouter.route("/:id").get(getCategoriesByID);

export default categoryRouter;