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




\! echo "\nshow all novels that (user_id=1) is reading ";
\! echo "\n=========================================================================== \n";
SELECT user_novels.id, user_novels.user_id,novels.name, novels.url
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 1;

\! echo "\nshow all novels that (user_id=2) is reading \n";
\! echo "=========================================================================== \n";
SELECT user_novels.id, user_novels.user_id,novels.name, novels.url
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 2;

\! echo "\nshow all novels that (user_id=3) is reading \n";
\! echo "=========================================================================== \n";
SELECT user_novels.id, user_novels.user_id,novels.name, novels.url
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 3;

\! echo "\nshow all novels that (user_id=4) is reading \n";
\! echo "=========================================================================== \n";
SELECT user_novels.id, user_novels.user_id,novels.name, novels.url
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 4;

\! echo "\nshow all novels that (user_id=5) is reading \n";
\! echo "=========================================================================== \n";
SELECT user_novels.id, user_novels.user_id,novels.name, novels.url
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 5;

\! echo "\nshow all novels that (user_id=6) is reading \n";
\! echo "=========================================================================== \n";
SELECT user_novels.id, user_novels.user_id,novels.name, novels.url
FROM user_novels
INNER JOIN novels ON (user_novels.novel_id = novels.id)
WHERE user_novels.user_id = 6;