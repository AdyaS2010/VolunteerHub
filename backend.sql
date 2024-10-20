-- Users Table
-- Stores user information -> hashed passwords for security implemented
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100),
    skills TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Opportunities Table
-- Stores details about volunteer opportunities
CREATE TABLE Opportunities (
    opportunity_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    required_skills TEXT,
    location VARCHAR(100),
    experience_level VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Matches Table
-- Stores matches between users & opportunities 
CREATE TABLE Matches (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    opportunity_id INT,
    matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (opportunity_id) REFERENCES Opportunities(opportunity_id)
);

-- Sessions Table
-- Manages user sessions for (user) authentication 
CREATE TABLE Sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    session_token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Sample Data
-- Insert sample data into Users table
INSERT INTO Users (username, password_hash, email, name, skills)
VALUES 
('john_doe', 'hashed_password_1', 'john@example.com', 'John Doe', 'Healthcare, Teaching'),
('jane_smith', 'hashed_password_2', 'jane@example.com', 'Jane Smith', 'Environment, Animal Care');

-- Insert sample data into Opportunities table
INSERT INTO Opportunities (title, description, required_skills, location, experience_level)
VALUES 
('Healthcare Assistant', 'Assist in healthcare facilities', 'Healthcare', 'New York', 'Adults with certain qualifications'),
('Environmental Volunteer', 'Help with environmental conservation', 'Environment', 'California', 'Teens');

-- Matching Query
-- Query to find matches based on skills -> Find matches based on user skills and opportunity requirements. 
SELECT u.username, o.title
FROM Users u
JOIN Opportunities o ON FIND_IN_SET(o.required_skills, u.skills) > 0;

