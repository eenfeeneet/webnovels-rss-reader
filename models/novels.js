/*
* ===========================================
* Export model functions as a module
* ===========================================
*/



module.exports = (pool) => {
    // inserts new user + pw into users table (returns boolean
    let addNovels = (data, callback) => {
        let query = 'INSERT INTO novels (name, url) VALUES ($1,$2) RETURNING id'
        let values = [data.name, data.url];


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


    return {
        addNovels,


        }
};