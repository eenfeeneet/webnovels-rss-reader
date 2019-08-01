/*
* ===========================================
* Export model functions as a module
* ===========================================
*/



module.exports = (pool) => {
    // inserts new user + pw into users table (returns boolean
    let newUser = (user, callback) => {

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
                    callback(null, queryResult.rows);
                }else{
                    console.log("failed to add new user!!");
                    callback(null, null);
                }
            }
        });
    };
    // check for existing usernames returns boolean
    let userName = (name, callback) => {
        let query = `SELECT EXISTS (SELECT * FROM users WHERE name='${name}')`;

        pool.query(query, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);

            }else{
                console.log(queryResult.rows[0].exists);
                //if username exists
                if(queryResult.rows[0].exists){
                    // returns (null, tru)
                    callback(null, true);
                }else{
                    //if username does not exist return false
                    callback(null, null);
                }
            }
        });
    };
    // get user details from name
    let fromName = (name, callback) => {
        const query = `SELECT * FROM users WHERE name = $1`;
        const values = [name];

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);

            }else{
                console.log(queryResult.rows[0]);
                //if username exists
                if(queryResult.rows[0].name === name){
                    // returns (null, resuslts)
                    callback(null, queryResult.rows);
                }else{
                    //if username does not exist return null
                    callback(null, null);
                }
            }
        });
    };
    // get user details from form
    let userDetails = (user, callback) => {
        console.log(user);
        console.log(user.name);
        console.log(user.password);

        const query = `SELECT * FROM users WHERE name = $1`;
        const values = [user.name];

        pool.query(query, values, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);

            }else{
                console.log(queryResult.rows[0]);
                //if username exists
                if(queryResult.rows[0].name === user.name){
                    // returns (null, tru)
                    callback(null, queryResult.rows);
                }else{
                    //if username does not exist return false
                    callback(null, null);
                }
            }
        });
    };

    return {
        checkUserName: userName,
        registerNewUser: newUser,
        getUserDetails: userDetails,
        getUserFromName: fromName

        }
};