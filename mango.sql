-- Store usernames and corresponding passwords -> encrypt if necessary (security purposes)
-- Users, volunteer opportunities, matches, etc.
-- *Define relationships between tables

CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    skills TEXT
);

CREATE TABLE Opportunities (
    opportunity_id INT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    required_skills TEXT
);

CREATE TABLE Matches (
    match_id INT PRIMARY KEY,
    user_id INT,
    opportunity_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (opportunity_id) REFERENCES Opportunities(opportunity_id)
);
