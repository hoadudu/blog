import newRouter from './news.js';

function route(app) {
    app.use('/news', newRouter);
}
export default route;
