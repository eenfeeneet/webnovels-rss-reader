/*
* ===========================================
* Export model functions as a module
* ===========================================
*/



module.exports = (pool) => {
    // inserts new user + pw into users table (returns boolean
    let newUser = (newuser, callback) => {

        let query = 'INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *'
        let arr = [newUser.name, newUser.password];


        pool.query(query, (error, queryResult) => {
            if( error ){
                console.log("query unsuccessful");
                callback(error, null);

            }else{
                console.log("query successful");
                if( queryResult.rows.length > 0 ){

                    callback(null, queryResult.rows);


                }else{
                    callback(null, null);
                }
            }
        });
    };
    // check for existing usernames returns boolean
    let existingUser = (name, callback) => {
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
                    callback(null, false);
                }
            }
        });
    };


    return {
        checkExistingUser: existingUser,
        registerNewUser: newUser,

        }
};