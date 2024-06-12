import express from 'express';
import path from 'path';
import route from './routes/routes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// setup static file
app.use(express.static(path.join(process.cwd(), 'public')));

// setup ejs template
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// route
app.use('/', route);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
