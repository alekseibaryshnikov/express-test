const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

/* app.use((req, res, next) => {
    res.render('page.hbs', {
        pageTitle: 'Site is updating...',
        pageHeader: 'Site is updating.',
        pageContent: 'Site is updating. Please come later.'
    });
}); */

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


app.listen(3000, () => {
    console.log('Server started on port 3000');
});