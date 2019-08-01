
-- table of users listed
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name text,
	password text
);
\! echo "\nusers table created\n";

-- table of apartments listed
CREATE TABLE IF NOT EXISTS novels (
	id SERIAL PRIMARY KEY,
	name text,
	url text
);
\! echo "\nnovels table created\n";

-- table of guests linked listed
CREATE TABLE IF NOT EXISTS user_novels (
	id SERIAL PRIMARY KEY,
	user_id integer,
	novel_id integer
);
\! echo "\nuser_novels table created\n";