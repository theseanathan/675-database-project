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

app.get('/avgHomeGoal', function(req, res ) {
    console.log('hi')
    console.log(req.query);
    // let query = "SELECT MAX(home_team_goal), MAX(away_team_goal), season from `Match` GROUP BY season HAVING season BETWEEN `2012/2013` AND `2015,2016`";
    // let query = 'SELECT * FROM `Match` ORDER BY lid DESC LIMIT 20 OFFSET 20';
    let query = "SELECT M.home_team_id as 'team_id', AVG(M.home_team_goal) as 'avg_score_at_home' from `Match` M GROUP BY M.home_team_id";

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
    let query = "SELECT T.team_name as 'team_name', T.team_id as 'team_id' FROM Team T INNER JOIN `Match` M ON T.team_id = M.home_team_id GROUP BY T.team_id";
    console.log(query);
    db.query(query, function(err, response) {
        // should handle err but too damn late at night to.
        if(err) res.send("ERROR_DB");
        // console.log(res);        
        res.send(response);
    });
});

app.get('/playername', function(req, res ) {
    // let query = "SELECT MAX(home_team_goal), MAX(away_team_goal), season from `Match` GROUP BY season HAVING season BETWEEN `2012/2013` AND `2015,2016`";
    let id = req.query.name;
    let query = "SELECT AVG(M.home_team_goal) as 'avg_score_for_team' from `Match` M GROUP BY M.home_team_id HAVING M.home_team_id = " + id;

    console.log(query);
    db.query(query, function(err, response) {
        // should handle err but too damn late at night to.
        if(err) res.send("ERROR_DB");        
        // console.log(res);
        res.send(response);
    });
});

app.get('/mostgoals', function(req, res ) {
    // let query = "SELECT MAX(home_team_goal), MAX(away_team_goal), season from `Match` GROUP BY season HAVING season BETWEEN `2012/2013` AND `2015,2016`";
    let id = req.query.name;
    let query = "SELECT T.team_name as 'team_name' from Team T INNER JOIN `Match` M ON T.team_id = M.home_team_id WHERE T.team_id = (SELECT M2.home_team_id FROM `Match` M2 GROUP BY M2.home_team_id HAVING SUM(M2.home_team_goal) >= ALL(SELECT SUM(M3.home_team_goal) FROM `Match` M3 GROUP BY M3.home_team_id)) GROUP BY T.team_name";

    console.log(query);
    db.query(query, function(err, response) {
        // should handle err but too damn late at night to.
        if(err) res.send("ERROR_DB");        
        // console.log(res);
        res.send(response);
    });
});

app.get('/nohome', function(req, res ) {
    // let query = "SELECT MAX(home_team_goal), MAX(away_team_goal), season from `Match` GROUP BY season HAVING season BETWEEN `2012/2013` AND `2015,2016`";
    let query = "SELECT T.team_name from Team T WHERE T.team_id NOT IN (SELECT M.home_team_id FROM `Match` M) GROUP BY T.team_name DESC LIMIT 20 OFFSET 20";

    console.log(query);
    db.query(query, function(err, response) {
        // should handle err but too damn late at night to.
        if(err) res.send("ERROR_DB");        
        // console.log(res);
        res.send(response);
    });
});

// SELECT T.team_name as "Team Name" from Team T 
// INNER JOIN `Match` M ON T.team_id = M.home_team_id 
// WHERE T.team_id = (SELECT M2.home_team_id FROM `Match` M2        
// 	GROUP BY M2.home_team_id        
// 	HAVING SUM(M2.home_team_goal) >= ALL(SELECT SUM(M3.home_team_goal) FROM `Match` M3
// 		GROUP BY M3.home_team_id))
// GROUP BY T.team_name

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});