\c uni_review_dev
CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS universities
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  country TEXT,
  page VARCHAR(255),
  completed BOOLEAN,
  user_id INT REFERENCES users(id)
);