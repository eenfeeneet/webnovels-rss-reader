module.exports = (app, allModels) => {


/*
*  =========================================
*  =========================================
*  =========================================
*  =========================================
*    ALL ROUTES FOR POKEMON CONTROLLER
*  =========================================
*  =========================================
*  =========================================
*/

    // require the controller

    const users = require('./controllers/webnosser')(allModels);





    app.get('/', users.root);
    app.get('/webnosser', users.main);
    app.get('/webnosser/error', users.error);
    //app.get('/webnosser/check', users.check);



    app.post('/webnosser/register', users.register);
    app.post('/webnosser/login', users.login);
    app.get('/webnosser/logout', users.logout);
    app.get('/webnosser/:user', users.profile);
    app.get('/webnosser/:user/feeds', users.feeds);

    app.post('/webnosser/:id/novels/add', users.add);
    app.delete('/webnosser/:user/feeds/:novelId', users.delete);



};