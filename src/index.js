import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express();
const port = 1104;
import route from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPublic = path.join(__dirname, 'public');
app.use(express.static(dirPublic));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views/layouts'),
        partialsDir: [
            //  path to your partials
            path.join(__dirname, 'views/partials'),
        ],
    }),
);
console.log(path.join(__dirname, 'views/layouts/partials'));
app.set('view engine', 'hbs');

const viewFolder = path.join(__dirname, 'views');
app.set('views', viewFolder);

route(app);

app.get('/trang-chu', (req, res) => {
    res.render('pages/home');
});

app.listen(port, () => {
    console.log(`Dang lang nghe http://localhost:${port}`);
});
