import express from 'express';
import homeController from '../controllers/homeController.js';

const route = express.Router();

route.get('/', homeController);

export default route;
