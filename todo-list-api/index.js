const express = require('express');
const bodyParser = require('body-parser');

// settings
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// routes
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// routes
const todoRoutes = require('./routes/todos');

// use routes
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server up & running on port ${port}`);
});