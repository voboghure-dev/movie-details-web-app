const homeController = (req, res) => {
	res.render('index', { url: req.protocol + '://' + req.headers.host });
};

export default homeController;
