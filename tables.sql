
-- table of users listed
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name text,
	password text,
	last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	account_created DATE NOT NULL
);
\! echo "\nusers table created\n";

-- table of apartments listed
CREATE TABLE IF NOT EXISTS novels (
	id SERIAL PRIMARY KEY,
	name text,
	url text,
	source text,
	uploader_id integer
);
\! echo "\nnovels table created\n";

-- table of guests linked listed
CREATE TABLE IF NOT EXISTS user_novels (
	id SERIAL PRIMARY KEY,
	user_id integer,
	novel_id integer
);
\! echo "\nuser_novels table created\n";



-- CREATE TABLE IF NOT EXISTS testusers (
-- 	id SERIAL PRIMARY KEY,
-- 	name text,
-- 	password text,
-- 	last_login DATE,
-- 	logout TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 	account_created DATE NOT NULL
-- );

--  SELECT TO_CHAR(account_created :: DATE, 'Mon dd, yyyy') FROM testusers;
--    to_char
-- --------------
--  Aug 05, 2019
--  Apr 28, 2016
-- (2 rows)

-- SELECT account_created FROM testusers;
--  account_created
-- -----------------
--  2019-08-05
--  2016-04-28
-- (2 rows)

-- SELECT EXTRACT(ISODOW FROM account_created) FROM testusers;
--  date_part
-- -----------
--          1
--          4
-- (2 rows)

-- SELECT EXTRACT(DOW FROM account_created) FROM testusers;
--  date_part
-- -----------
--          1
--          4
-- (2 rows)

-- SELECT EXTRACT(TIME FROM account_created) FROM testusers;
--  date_part
-- -----------
--          1
--          4
-- (2 rows)

-- INSERT INTO testusers (name, password, account_created) VALUES('hafiz', '0fabe337e5da14fb9b56981862217ae5ce4cdc56545cdbb42a8a43536222f95f', now());

-- INSERT INTO testusers (name, password, account_created) VALUES('jim', 'ed0eb6a11f479d7ebc4ae6a9322c632d6d268e3237ff7073f5394c9e4c8aa2ae', '2016-04-28');