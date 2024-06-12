import express from 'express';
import { home, search } from '../controllers/homeController.js';

const route = express.Router();

route.get('/', home);

route.post('/', search);

export default route;
