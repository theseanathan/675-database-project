# GETS every Team ID and their Average Home Game Score
SELECT M.home_team_id as "Team ID", AVG(M.home_team_goal) as "Average score at Home" from `Match` M
GROUP BY M.home_team_id;

# GETS Every Team name and Team ID who has played in a home game
SELECT T.team_name as "Team Name", T.team_id as "Team ID" FROM Team T
INNER JOIN `Match` M ON T.team_id = M.home_team_id
GROUP BY T.team_id;

# CREATES View of Team ID and Team name who has played in a Home Game
CREATE VIEW `Team Name ID` AS 
SELECT T.team_name as "Team Name", T.team_id as "Team ID" FROM Team T
INNER JOIN `Match` M ON T.team_id = M.home_team_id
GROUP BY T.team_id;

SELECT * FROM `Team Name ID`;

# Gets the Average Score of the team provided for all their Home games
SELECT AVG(M.home_team_goal) as "Average score for Team" from `Match` M
GROUP BY M.home_team_id
HAVING M.home_team_id = "#INPUT#";

# GETS the team name of the team that has the MOST goals in all their home games
SELECT T.team_name as "Team Name" from Team T 
INNER JOIN `Match` M ON T.team_id = M.home_team_id 
WHERE T.team_id = (SELECT M2.home_team_id FROM `Match` M2        
    GROUP BY M2.home_team_id        
    HAVING SUM(M2.home_team_goal) >= ALL(SELECT SUM(M3.home_team_goal) FROM `Match` M3
        GROUP BY M3.home_team_id))
GROUP BY T.team_name;

# GETS the team names for teams who have not played any home games.
SELECT T.team_name from Team T
WHERE T.team_id NOT IN (SELECT M.home_team_id FROM `Match` M)
GROUP BY T.team_name;
