class NewsController {
    index(req, res) {
        res.render('pages/news');
    }
    show(req, res) {
        res.send('Send Detail!');
    }
}
export default NewsController;
