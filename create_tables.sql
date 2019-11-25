CREATE TABLE Country (
    cid INT NOT NULL,
    name VARCHAR(55) NOT NULL,
    PRIMARY KEY (cid),
    UNIQUE KEY country_name (name)
);

CREATE TABLE League (
    lid INT NOT NULL,
    cid INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (lid),
    FOREIGN KEY (cid) REFERENCES Country (cid) ON DELETE CASCADE,
    UNIQUE KEY league_name (name)
);

CREATE TABLE Team (
    tid INT NOT NULL,
    team_id INT NOT NULL,
    team_name VARCHAR(55) NOT NULL,
    PRIMARY KEY (tid),
    UNIQUE KEY team_name (name)
)

CREATE TABLE Match (
    mid INT NOT NULL,
    lid INT NOT NULL,
    cid INT NOT NULL,
    home_team_id INT NOT NULL,
    guest_team_id INT NOT NULL,
    home_team_goal INT NOT NULL,
    guest_team_goal INT NOT NULL,
    PRIMARY KEY (mid),
    FOREIGN KEY (lid) REFERENCES League (lid) ON DELETE NO ACTION ON UPDATE CASCADE,
    FOREIGN KEY (cid) REFERENCES Country (cid) ON DELETE NO ACTION ON UPDATE CASCADE,
    FOREIGN KEY (home_team_id) REFERENCES Team (tid) ON DELETE NO ACTION ON UPDATE CASCADE,
    FOREIGN KEY (guest_team_id) REFERENCES Team (tid) ON DELETE NO ACTION ON UPDATE CASCADE,
);

CREATE TABLE Player (
    pid INT NOT NULL,
    player_name VARCHAR(255) NOT NULL,
    player_id INT NOT NULL,
    birthday DATE NOT NULL,
    PRIMARY KEY (pid),
    UNIQUE KEY player_name (player_name)
);
