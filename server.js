const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('page.hbs', {
            pageTitle: 'Home page',
            pageHeader: 'Header for Page',
            pageContent: 'Some page content.'
        }
    );
});

app.get('/about', (req, res) => {
    res.render('page.hbs', {
            pageTitle: 'About page',
            pageHeader: 'Header for About Page',
            pageContent: 'Some About page content.'
        }
    );
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});