const sha256 = require('js-sha256');
const SALT = "crazy shit meant to confuse me";

module.exports = (db) => {
    /*
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let testCallback = (req, res) => {

    };
    let mainCallback = (req, res) => {
        const checkCookie = req.cookies.usrLogged
        console.log(checkCookie)
        const hashedUserLogged = sha256('loggedout' + SALT);
        if(checkCookie === hashedUserLogged){
            console.log("no user logged in")
            res.render('main');
        } else if(checkCookie === undefined){
            console.log("no cookie detected")
            res.render('main');
        } else {
            db.usersDb.getAllUserName((error, result) =>{
                if(result === null){
                        console.log('failed!!')
                        console.log(error)
                        const data = {
                            status: '502 Bad Gateway',
                            msg: 'Failed to log in'
                        }
                        res.status(502).render(`errorpage`, data);
                } else {
                    let userNow;
                    const hNames = result.map(user=>{
                        let hashedName = sha256(user.name + 'loggedin' + SALT);
                        if(hashedName === checkCookie){
                            return userNow = user.name
                        }
                    })
                    res.redirect(`/webnosser/${userNow}`);
                }
            })
        }

    };
    let errorCallback = (req, res) => {
        console.log(path)
        console.log("should not be here")
        res.render('errorpage');
    };

    let rootCallback = (req, res) => {
        res.render('root');
    };
    // let mainCallback = (req, res) => {
    //     res.render('main');
    // };




    let registerCallback = (req, res) => {
        let newUser = req.body;
        console.log(newUser)

        let hashedPass = sha256(newUser.password + SALT);
        newUser.password = hashedPass;

        //check if username exists in db
        db.usersDb.checkUserName(newUser.name, (error, result) =>{
            if(result !== null){
                console.log('That username already exists')
                console.log(error)
                const data = {
                    status: '400 Bad Request',
                    msg: 'That username already exists'
                }
                res.status(400).render(`errorpage`, data);
            } else {
                console.log('That username does not exists')
                //register details into db
                db.usersDb.registerNewUser(newUser, (error, result) =>{
                    if(result === null){
                        console.log('failed!!')
                        console.log(error)
                        const data = {
                            status: '502 Bad Gateway',
                            msg: 'Failed to create account'
                        }
                        res.status(502).render(`errorpage`, data);
                    } else {
                        console.log(result)
                        console.log('new account created!!')
                        const data = {
                            user: result[0]
                        }
                        res.redirect(`/webnosser/`);
                    }
                });
            }
        })
    };

    let loginCallback = (req, res) => {
        let returningUser = req.body;
        const username = returningUser.name;
        let hashedPass = sha256(returningUser.password +SALT);
        returningUser.password = hashedPass;
        console.log(returningUser)
        console.log("Check if username exists")
        // check if user entered a valid username
        db.usersDb.checkUserName(username, (error, result) =>{
            // if results of query returns nothing send error
            if(result === null){
                console.log('That username does not exists')
                console.log(error)
                const data = {
                    status: '404 Not Found',
                    msg: 'That username does not exists'
                }
                res.status(404).render(`errorpage`, data);
            } else {
                console.log('That username exists')
                // get users details validate password entered
                db.usersDb.getUserDetails(username, (error, result) =>{
                    if(result === null){
                        console.log('failed!!')
                        console.log(error)
                        const data = {
                            status: '502 Bad Gateway',
                            msg: 'Failed to log in'
                        }
                        res.status(502).render(`errorpage`, data);
                    } else{
                        console.log("check for password match")
                        console.log(result)
                        //check if password entered, matches password in db
                        if(result[0].password === hashedPass ){
                            console.log('Password Matches!!')
                            console.log(`welcome back ${result[0].name}!!`)

                            // hash users name with 'loggedin' and SALT
                            // has users id with SALT
                            const hashedUserLogged = sha256(result[0].name + 'loggedin' + SALT);
                            const hashedId = sha256(result[0].id + SALT);

                            res.cookie('usrLogged', hashedUserLogged )
                            res.cookie('userId', hashedId)

                            res.redirect(`/webnosser/${result[0].name}`);
                        } else {
                            console.log('Wrong Password!!')
                            console.log(error)
                            const data = {
                                status: '400 Bad Request',
                                msg: 'Wrong Password!!'
                            }
                            res.status(400).render(`errorpage`, data);
                        }
                    }
                });
            }
        })
    };



    let profileCallback = (req, res) => {
        let userName = req.params.user;
        console.log(userName)
        console.log(req.cookies.usrLogged)

        const hashedUserLogged = sha256(userName + 'loggedin' + SALT);
        const checkCookie = req.cookies.usrLogged

        if(checkCookie === hashedUserLogged){
            console.log("it matches!")
            db.usersDb.getUserDetails(userName, (error, result) =>{
                if(result !== null){

                    const userData = {
                        name: result[0].name,
                        id: result[0].id
                    }
                    console.log(userData.id)
                    // after validation
                    // get all user novels
                    db.userNovelsDb.getUserNovels(userData.id, (error, result) =>{
                        // if user has no novels in their list
                        // do this
                        if(result === false){
                            console.log('User has no novels in their list')
                            console.log(result)


                            const fullData = {
                                user: userData,
                                novels: result
                            }
                            res.render('profile', fullData);

                        // if user has novels in their list
                        // do this
                        } else if(result !== null) {
                            console.log(result)
                            console.log(result.rows)

                            const fullData = {
                                user: userData,
                                novels: result
                            }
                            res.render('profile', fullData);

                        }else {
                            console.log('failed!!')
                            console.log(error)
                            const data = {
                                status: '502 Bad Gateway',
                                msg: 'invalid response'
                            }
                            res.status(502).render(`errorpage`, data);
                        }
                    });

                } else {
                    console.log('failed!!')
                    console.log(error)
                    const data = {
                        status: '400 Bad Request',
                        msg: 'failed to login'
                    }
                    res.status(400).render(`errorpage`, data);
                }
            });
        } else{
            console.log("You is unauthorized")

            const data = {
                status: '401 Unauthorized',
                msg: 'There was an error. Please Login to your account'
            }
            res.status(401).render(`errorpage`, data);
        }
    };
    let feedCallback = (req, res) => {
        let userName = req.params.user;
        console.log(userName)
        console.log(req.cookies.usrLogged)

        const hashedUserLogged = sha256(userName + 'loggedin' + SALT);
        const checkCookie = req.cookies.usrLogged

        if(checkCookie === hashedUserLogged){
            console.log("it matches!")
            db.usersDb.getUserDetails(userName, (error, result) =>{
                if(result !== null){

                    const userData = {
                        name: result[0].name,
                        id: result[0].id
                    }
                    console.log(userData.id)
                    // after validation
                    // get all user novels
                    db.userNovelsDb.getUserNovels(userData.id, (error, result) =>{
                        // if user has no novels in their list
                        // do this
                        if(result === false){
                            console.log('User has no novels in their list')
                            console.log(result)


                            const fullData = {
                                user: userData,
                                novels: result
                            }
                            res.render('feedsettings', fullData);

                        // if user has novels in their list
                        // do this
                        } else if(result !== null) {
                            console.log(result)
                            console.log(result.rows)

                            const fullData = {
                                user: userData,
                                novels: result
                            }
                            res.render('feedsettings', fullData);

                        }else {
                            console.log('failed!!')
                            console.log(error)
                            const data = {
                                status: '502 Bad Gateway',
                                msg: 'invalid response'
                            }
                            res.status(502).render(`errorpage`, data);
                        }
                    });

                } else {
                    console.log('failed!!')
                    console.log(error)
                    const data = {
                        status: '400 Bad Request',
                        msg: 'failed to login'
                    }
                    res.status(400).render(`errorpage`, data);
                }
            });
        } else{
            console.log("You is unauthorized")

            const data = {
                status: '401 Unauthorized',
                msg: 'There was an error. Please Login to your account'
            }
            res.status(401).render(`errorpage`, data);
        }
    };
    let logoutCallback = (req, res) => {
        console.log('preparing to logout')
        console.log(req.cookies)
        const hashedUserLogged = sha256('loggedout' + SALT);
        res.clearCookie('userId');
        res.cookie('usrLogged', hashedUserLogged)
        res.redirect(301,'/webnosser')
    };

    let addCallback = (req, res) => {
        let id = req.params.id
        let inputNovelData = req.body;
        const data = {
            userid: id,
            name: inputNovelData.name,
            url: inputNovelData.url
        }
        // insert novels data into novels db
        db.novelsDb.addNovels(data, (error, result) =>{
            if(result === null){
                console.log('There was an error')
                console.log(error)
                const data = {
                    status: '502 Bad Gateway',
                    msg: 'Failed to add novel'
                }
                res.status(502).render(`errorpage`, data);
            } else {
                console.log(result[0].id)
                const noveldata = {
                    user: data.userid,
                    novel: result[0].id
                }
                db.userNovelsDb.addNovels(noveldata, (error, result) =>{
                    if(result === null){
                        console.log('There was an error')
                        console.log(error)
                        const data = {
                            status: '502 Bad Gateway',
                            msg: 'There was an error'
                        }
                        res.status(502).render(`errorpage`, data);
                    } else {
                        res.redirect(301,'/webnosser/check')
                    }
                })
            }
        })
    };
    let deleteCallback = (req, res) => {
        let uName = req.params.user
        let nId = req.params.novelId


        const data = {
            userName: uName,
            novelId: nId
        }

        // insert novels data into novels db
        db.userNovelsDb.deleteNovels(data, (error, result) =>{
            if(result === null){
                console.log('There was an error')
                console.log(error)
                const data = {
                    status: '502 Bad Gateway',
                    msg: 'Failed to delete novel'
                }
                res.status(502).render(`errorpage`, data);
            } else {
                res.send("deleted")
            }
        })
    };



  /*
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    test: testCallback,
    // check: checkCallback,
    error: errorCallback,
    root: rootCallback,
    main: mainCallback,
    register: registerCallback,
    login: loginCallback,
    logout: logoutCallback,
    profile: profileCallback,
    feeds: feedCallback,
    add: addCallback,
    delete: deleteCallback
  };

}