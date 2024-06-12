import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Home
const home = (req, res) => {
	res.render('home', { url: req.protocol + '://' + req.headers.host });
};

// Search movie
const search = (req, res) => {
	let movie_name = req.body.movie_name;
	let apiKey = process.env.APIKEY;
	axios
		.get(`http://www.omdbapi.com/?t=${movie_name}&apikey=${apiKey}`)
		.then((result) => {
			res.render('home', { url: req.protocol + '://' + req.headers.host, data: result.data });
		})
		.catch((err) => {
			console.log(err);
		});
};

export { home, search };
