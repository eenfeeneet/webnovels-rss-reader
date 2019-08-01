const sha256 = require('js-sha256');

module.exports = (db) => {
    /*
    * ===========================================
    * Controller logic
    * ===========================================
    */


    let testCallback = (req, res) => {
        res.render('errorpage');
    };

    let rootCallback = (req, res) => {
        res.redirect('/webnosser');
    };
    let indexCallback = (req, res) => {
        res.render('index');
    };
    let registerCallback = (req, res) => {
        let newUser = req.body;
        console.log(newUser)

        let hashedPass = sha256(newUser.password);
        newUser.password = hashedPass;
        console.log(hashedPass)

        //check if username exists in db
        db.usersDb.checkUserName(newUser.name, (error, result) =>{
            if(result !== null){
                console.log('that username is taken!!')
                res.redirect(`/webnosser`);
            } else {
                //register details into db
                db.usersDb.registerNewUser(newUser, (error, result) =>{
                    if(result !== null){
                        console.log('new user created!!')
                        // res.cookie('loggedin')
                        // res.cookie('user_id')
                        const data = {
                            user: result[0]
                        }
                        res.redirect(`/webnosser/`);
                    } else {
                        console.log('failed!!')
                        res.redirect(`/`);
                    }
                });
            }

        })
    };
    let loginTweedrCallback = (req, res) => {
        let returningUser = req.body;
        console.log(returningUser)

        let hashedPass = sha256(returningUser.password);
        returningUser.password = hashedPass;
        console.log(hashedPass)

        db.usersDb.getUserDetails(returningUser, (error, result) =>{
            if(result !== null){
                console.log(result[0])
                console.log('welcome back!!' + result[0].name)
                // res.cookie('loggedin')
                // res.cookie('user_id')
                const data = {
                    user: result[0]
                }
                res.render('profile', data);
            } else {
                console.log('failed!!')
                res.send(error);
            }
        });

    };
    let profileTweedrCallback = (req, res) => {
        let name = req.params.user;

        db.usersDb.getUserFromName(name, (error, result) =>{
            if(result !== null){
                console.log(result[0])
                console.log('welcome back!!' + result[0].name)
                // res.cookie('loggedin')
                // res.cookie('user_id')
                const data = {
                    user: result[0]
                }
                res.render('profile', data);
            } else {
                console.log('failed!!')

                res.send(error);
            }
        });
    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    test: testCallback,
    root: rootCallback,
    index: indexCallback,

    register: registerCallback,
    login: loginTweedrCallback,
    profile: profileTweedrCallback
  };

}