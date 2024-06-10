import express from 'express';
import path from 'path';
import route from './routes/routes.js';

const app = express();
const port = 4000;

// setup static file
app.use(express.static(path.join(process.cwd(), 'public')));

// setup ejs template
app.set('view engine', 'ejs');
app.set('views', 'views');

// route
app.get('/', route);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
