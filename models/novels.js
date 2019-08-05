/*
* ===========================================
* Export model functions as a module
* ===========================================
*/



module.exports = (pool) => {
    // inserts new user + pw into users table (returns boolean
    let addNovels = (data, callback) => {
        let query = 'INSERT INTO novels (name, url, source, uploader_id) VALUES ($1,$2,$3,$4) RETURNING id'
        let values = [data.novelName, data.url, data.source, data.userId];


        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    console.log(`query : ${data.name} added`);
                    callback(null, queryResult.rows);
                }else{
                    console.log(`query : failed to add ${novel.name}`);
                    callback(null, null);
                }
            }
        });
    };
    let editNovels = (data, callback) => {
        let query = 'DELETE FROM novels WHERE id = $1';
        let values = [data.novelId];


        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };
    let deleteNovels = (data, callback) => {
        let query = 'DELETE FROM novels WHERE id = $1 RETURNING id';
        let values = [data.novelId];


        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };
    let getAllRoyalNovels = ( callback) => {
        let query = 'SELECT * FROM novels WHERE source = $1';
        let values = ['Royal Road'];


        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };
    let getAllAsianNovels = ( callback) => {
        let query = 'SELECT * FROM novels WHERE source = $1';
        let values = ['Asianovel'];


        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log(`query successful!!`);
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };
    return {
        addNovels,
        editNovels,
        deleteNovels,
        getAllRoyalNovels,
        getAllAsianNovels


        }
};