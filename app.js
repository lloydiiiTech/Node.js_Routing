const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/address', (req, res) => {
    res.render('address');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/fullname', (req, res) => {
    res.render('fullname');
});
app.get('/moreinfo', (req, res) => {
    res.render('moreinfo');
});
app.post('/contact', (req, res) => {
    res.send('Form submitted!');
});






app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});