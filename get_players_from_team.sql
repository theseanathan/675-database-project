SELECT * FROM player P1
INNER JOIN team T1
ON player.tid = team.tid
GROUP BY P1.tid
ORDER BY p1.tid;
