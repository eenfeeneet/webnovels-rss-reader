/*
Seeding tables with info
*/

/* hafiz password : 1234*/
INSERT INTO users (name, password) VALUES('hafiz', '0fabe337e5da14fb9b56981862217ae5ce4cdc56545cdbb42a8a43536222f95f');
/* jim password : 0000*/
INSERT INTO users (name, password) VALUES('jim', 'ed0eb6a11f479d7ebc4ae6a9322c632d6d268e3237ff7073f5394c9e4c8aa2ae');
/* jim password : 1111*/
INSERT INTO users (name, password) VALUES('jack', 'e0ac57dd44aa5b5c3121bd74c3447e826d71a575347a5cfaa62e0cd5b2b226a7');
/* jim password : 2222*/
INSERT INTO users (name, password) VALUES('jonny', 'a755d9d49e11a463631c240fa7cffa8862cd5cde99c2a540bfdd03d3ab1b2e3e');
/* jim password : 3333*/
INSERT INTO users (name, password) VALUES('jenny', '0832b7c762f96e361a8f4b04fdaffa2c86e58819a2ebaa343960e69bf6bc18ad');
/* jim password : 4444*/
INSERT INTO users (name, password) VALUES('jacqueline', '023745f69f5c854b3acb8de50c2368bd786ca47a37606e7dc79846b35a732daf');
/* jim password : 5555*/
INSERT INTO users (name, password) VALUES('joey', 'c8303aefe87acaa954ac1bee7577773fe46de28b34e1cbc52f84bd1c1221b83b');
\! echo "\nusers table populated\n";


INSERT INTO novels (name, url, source, uploader_id) VALUES('The Legend of Randidly Ghosthound', 'https://www.royalroad.com/fiction/syndication/11209', 'Royal Road', 1);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Savage Divinity', 'https://www.royalroad.com/fiction/syndication/5701', 'Royal Road', 1);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Cultivation Chat Group', 'https://read.asianovel.com/series/cultivation-chat-group/rss', 'Asianovel', 1);

INSERT INTO novels (name, url, source, uploader_id) VALUES('Hero Demon Synthesis', 'https://www.royalroad.com/fiction/syndication/24909', 'Royal Road', 2);

INSERT INTO novels (name, url, source, uploader_id) VALUES('There is no Epic Loot here, Only Puns.', 'https://www.royalroad.com/fiction/syndication/15935', 'Royal Road', 3);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Delve', 'https://www.royalroad.com/fiction/syndication/25225', 'Royal Road',3);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Super Minion', 'https://www.royalroad.com/fiction/syndication/21410', 'Royal Road',3);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Mother of Learning', 'https://www.royalroad.com/fiction/syndication/21220', 'Royal Road', 3);

INSERT INTO novels (name, url, source, uploader_id) VALUES('The Wandering Inn', 'https://www.royalroad.com/fiction/syndication/10073', 'Royal Road', 4);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Reincarnation Of The Strongest Sword God', 'https://read.asianovel.com/series/reincarnation-of-the-strongest-sword-god/rss', 'Asianovel',4);

INSERT INTO novels (name, url, source, uploader_id) VALUES('Tempest of the Stellar War', 'https://read.asianovel.com/series/tempest-of-the-stellar-war/rss', 'Asianovel', 5);
INSERT INTO novels (name, url, source, uploader_id) VALUES('War God Asura', 'https://read.asianovel.com/series/war-god-asura/rss', 'Asianovel', 5);
INSERT INTO novels (name, url, source, uploader_id) VALUES('Martial God Asura', 'https://read.asianovel.com/series/martial-god-asura/rss', 'Asianovel', 5);
INSERT INTO novels (name, url, source, uploader_id) VALUES('I Alone Level-Up', 'https://read.asianovel.com/series/i-alone-level-up/rss', 'Asianovel', 5);

INSERT INTO novels (name, url, source, uploader_id) VALUES('True Martial World', 'https://read.asianovel.com/series/true-martial-world', 'Asianovel', 6);

INSERT INTO novels (name, url, source, uploader_id) VALUES('Necromancers Guide to Magic', 'https://read.asianovel.com/series/necromancers-guide-to-magic/rss', 'Asianovel', 7);



\! echo "\nnovels table populated\n";

INSERT INTO user_novels (user_id, novel_id) VALUES(1, 1);
INSERT INTO user_novels (user_id, novel_id) VALUES(1, 2);
INSERT INTO user_novels (user_id, novel_id) VALUES(1, 3);
INSERT INTO user_novels (user_id, novel_id) VALUES(1, 7);
INSERT INTO user_novels (user_id, novel_id) VALUES(1, 8);

INSERT INTO user_novels (user_id, novel_id) VALUES(2, 3);
INSERT INTO user_novels (user_id, novel_id) VALUES(2, 4);

INSERT INTO user_novels (user_id, novel_id) VALUES(3, 1);
INSERT INTO user_novels (user_id, novel_id) VALUES(3, 1);


INSERT INTO user_novels (user_id, novel_id) VALUES(4, 1);
INSERT INTO user_novels (user_id, novel_id) VALUES(4, 2);
INSERT INTO user_novels (user_id, novel_id) VALUES(4, 3);

INSERT INTO user_novels (user_id, novel_id) VALUES(5, 1);
INSERT INTO user_novels (user_id, novel_id) VALUES(5, 5);
INSERT INTO user_novels (user_id, novel_id) VALUES(5, 8);

INSERT INTO user_novels (user_id, novel_id) VALUES(6, 2);
INSERT INTO user_novels (user_id, novel_id) VALUES(6, 3);
INSERT INTO user_novels (user_id, novel_id) VALUES(6, 4);
INSERT INTO user_novels (user_id, novel_id) VALUES(6, 5);
INSERT INTO user_novels (user_id, novel_id) VALUES(6, 6);
INSERT INTO user_novels (user_id, novel_id) VALUES(6, 7);

\! echo "\nuser_novels linked table populated\n";