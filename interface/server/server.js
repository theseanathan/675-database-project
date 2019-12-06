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

app.get('/dates', function(req, res ) {
    console.log('hi')
    console.log(req.query);
    // let query = "SELECT MAX(home_team_goal), MAX(away_team_goal), season from `Match` GROUP BY season HAVING season BETWEEN `2012/2013` AND `2015,2016`";
    let query = 'SELECT * FROM `Match` ORDER BY lid DESC LIMIT 20 OFFSET 20';

    db.query(query, function(err, response) {
        // should handle err but too damn late at night to.
        if(err) res.send("ERROR_DB");        
        console.log(response);
        res.send(response);
    });
});

app.get('/heights', function(req, res ) {
    console.log(req.query);
    // let query = "SELECT MAX(home_team_goal), MAX(away_team_goal), season from `Match` GROUP BY season HAVING season BETWEEN `2012/2013` AND `2015,2016`";
    let query = 'SELECT * FROM Player ORDER BY pid DESC LIMIT 20 OFFSET 20';
    console.log(query);
    db.query(query, function(err, response) {
        // should handle err but too damn late at night to.
        if(err) res.send("ERROR_DB");        
        res.send(response);
    });
});


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});