/*
* ===========================================
* Export model functions as a module
* ===========================================
*/



module.exports = (pool) => {
    // inserts new user + pw into users table (returns boolean
    let getUserNovels = (userid, callback) => {

        let query = 'SELECT user_novels.user_id, user_novels.novel_id, novels.name, novels.url, novels.uploader_id, novels.source FROM user_novels INNER JOIN novels ON (user_novels.novel_id = novels.id) WHERE user_novels.user_id = $1'
        let value = [userid];


        pool.query(query, value, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);

            }else{
                console.log(`query successful!!`);
                // console.log(queryResult.rows);
                // console.log(`query : ${queryResult}`);
                if( queryResult.rows.length > 0 ){
                    // console.log(`query : ${queryResult.rows}`);
                    callback(null, queryResult.rows);
                }else{
                    console.log(`query : failed to get novels`);
                    callback(null, false);
                }
            }
        });
    };

    let setFollowedNovels = (data, callback) => {
        let query = 'INSERT INTO user_novels (user_id, novel_id) VALUES ($1,$2) RETURNING *'
        let values = [data.userId, data.novel];


        pool.query(query, values,(error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);

            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    console.log(`query : failed to add`);
                    callback(null, null);
                }
            }
        });
    };

    let unfollowNovels = (data, callback) => {
        let query = 'DELETE FROM user_novels WHERE novel_id = $1 RETURNING id'
        let values = [data.novelId];

        pool.query(query, values,(error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    console.log(`query : queryResult.rows`);
                    callback(null, queryResult.rows);
                }else{
                    console.log(`query : failed to delete`);
                    callback(null, null);
                }
            }
        });
    };

    return {
        getUserNovels,
        setFollowedNovels,
        unfollowNovels
        }
};