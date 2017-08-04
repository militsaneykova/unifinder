-- \c uni_review_dev
CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
);

CREATE TABLE IF NOT EXISTS universities
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  country TEXT,
  webpage_url VARCHAR(255),
  user_id INT REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS notes
(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
universities_id INT REFERENCES universities(id),
description VARCHAR (255)
);


