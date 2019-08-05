/*
test queries
*/

\! echo "\nshow users table";
\! echo "=========================================================================== \n";
SELECT * FROM users;
\! echo "\nshow novels table";
\! echo "=========================================================================== \n";
SELECT * FROM novels;
\! echo "\nshow user_novels table\n";
\! echo "=========================================================================== \n";
SELECT * FROM user_novels;




\! echo "\nshow all novels that (user_id=1) is following ";
\! echo "\n=========================================================================== \n";
SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 1;

\! echo "\nshow all novels that (user_id=2) is following \n";
\! echo "=========================================================================== \n";
SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 2;

\! echo "\nshow all novels that (user_id=3) is following \n";
\! echo "=========================================================================== \n";
SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 3;

\! echo "\nshow all novels that (user_id=4) is following \n";
\! echo "=========================================================================== \n";
SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 4;

\! echo "\nshow all novels that (user_id=5) is following \n";
\! echo "=========================================================================== \n";
SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 5;

\! echo "\nshow all novels that (user_id=6) is following \n";
\! echo "=========================================================================== \n";
SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 6;

SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 7;




-- SELECT id, name, TO_CHAR(last_login :: DATE, 'Mon dd yyyy') lastlogin, TO_CHAR(account_created :: DATE, 'Mon dd yyyy') created  FROM users WHERE name= 'hafiz';

-- DELETE FROM user_novels WHERE novel_id = $1 AND user_id = (SELECT id FROM users WHERE name = $2) RETURNING id;