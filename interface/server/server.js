const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const port = 5000;

const db = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: '675_database'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
// global.db = db;

app.get('/dates', function(req, res ) {
    console.log('hi')
    console.log(req.query);
    res.send("messaged received");
});


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});