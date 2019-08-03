/*
* ===========================================
* Export model functions as a module
* ===========================================
*/



module.exports = (pool) => {
    // check for existing usernames returns boolean
    let checkUserName = (username, callback) => {
        let query = `SELECT EXISTS (SELECT * FROM users WHERE name= $1)`;
        let values = [username]

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                console.log(queryResult.rows[0].exists);
                //if username exists
                if(queryResult.rows[0].exists){
                    console.log("query : name exists ");
                    console.log(queryResult.rows[0])
                    // returns (null, true)
                    callback(null, queryResult.rows);
                }else{
                    console.log("query : name does not exist ");
                    //if username does not exist return false
                    callback(null, null);
                }
            }
        });
    };
    // inserts new user + pw into users table
    let registerNewUser = (user, callback) => {

        console.log(user);
        console.log(user.name);
        console.log(user.password);
        let query = 'INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *'
        let arr = [user.name, user.password];

        pool.query(query, arr, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful:" + error);
                callback(error, null);
            }else{
                console.log("query successful");
                if( queryResult.rows.length > 0 ){
                    console.log('new user added!!')

                    callback(null, queryResult.rows[0]);
                }else{
                    console.log("failed to add new user!!");
                    callback(null, null);
                }
            }
        });
    };
    // get userid from username
    let getUserId = (username, callback) => {

        const query = `SELECT id FROM users WHERE name = $1`;
        const values = [username];

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                if(queryResult.rows.length > 0){
                    console.log("query: " + queryResult.rows);
                    callback(null, queryResult.rows);
                }else{
                    console.log("query: null");
                    callback(null, null);
                }
            }
        });
    };
    // get username from userid
    let getUserName = (userid, callback) => {

        const query = `SELECT name FROM users WHERE id = $1`;
        const values = [userid];

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                if(queryResult.rows.length > 0){
                    console.log("query: " + queryResult.rows);
                    callback(null, queryResult.rows);
                }else{
                    console.log("query: null");
                    callback(null, null);
                }
            }
        });
    };
    // get user password from username
    let getUserPassword = (username, callback) => {

        const query = `SELECT password FROM users WHERE name = $1`;
        const values = [username];

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                if(queryResult.rows.length > 0){
                    console.log("query: " + queryResult.rows);
                    callback(null, queryResult.rows);
                }else{
                    console.log("query: null");
                    callback(null, null);
                }
            }
        });
    };
    // get user details from form
    let getUserDetails = (username, callback) => {

        const query = `SELECT * FROM users WHERE name = $1`;
        const values = [username];

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                if(queryResult.rows.length > 0){
                    console.log("query: " + queryResult.rows[0]);
                    callback(null, queryResult.rows);
                }else{
                    console.log("query: null");
                    callback(null, null);
                }
            }
        });
    };
    let getAllUserId = (callback) => {

        const query = `SELECT id FROM users`;

        pool.query(query, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                //if username exists
                if(queryResult.rows.length > 0){
                    console.log("returning query");
                    callback(null, queryResult.rows);
                }else{
                    console.log("query: null");
                    callback(null, null);
                }
            }
        });
    };
    let getAllUserName = (callback) => {

        const query = `SELECT name FROM users`;

        pool.query(query, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);
            }else{
                console.log("query successful");
                //if username exists
                if(queryResult.rows.length > 0){
                    console.log("returning query");
                    console.log("query: " + queryResult.rows);
                    callback(null, queryResult.rows);
                }else{
                    console.log("query: null");
                    callback(null, null);
                }
            }
        });
    };


    return {

        checkUserName,
        registerNewUser,
        getUserId,
        getUserName,
        getUserPassword,
        getUserDetails,
        getAllUserId,
        getAllUserName,
    }
};