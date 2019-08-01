/*
Seeding tables with info
*/

INSERT INTO users (name, password) VALUES('Jim', '0000');
INSERT INTO users (name, password) VALUES('Jack', '1111');
INSERT INTO users (name, password) VALUES('Jonny', '2222');
\! echo "\nusers table populated\n";

INSERT INTO novels (name, url) VALUES('The Legend of Randidly Ghosthound', 'https://www.royalroad.com/fiction/syndication/11209');
INSERT INTO novels (name, url) VALUES('Savage Divinity', 'https://www.royalroad.com/fiction/syndication/5701');
INSERT INTO novels (name, url) VALUES('Veratales', 'https://veratales.com/feed');

\! echo "\nnovels table populated\n";

INSERT INTO user_novels (user_id, novel_id) VALUES(1, 1);
INSERT INTO user_novels (user_id, novel_id) VALUES(1, 2);
INSERT INTO user_novels (user_id, novel_id) VALUES(1, 3);
INSERT INTO user_novels (user_id, novel_id) VALUES(2, 3);
INSERT INTO user_novels (user_id, novel_id) VALUES(3, 1);
\! echo "\nuser_novels linked table populated\n";