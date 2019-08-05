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

    app.get('/webnosser/:user', users.profile);
    app.get('/webnosser/:user/feeds', users.feeds);
    app.get('/webnosser/:user/royalr', users.royal);
    app.get('/webnosser/:user/asiano', users.asian);

    app.get('/webnosser/:user/logout', users.logout);

    app.post('/webnosser/:user/feeds/add', users.add);
    app.post('/webnosser/:user/feeds/:id/follow', users.follow);
    app.put('/webnosser/:user/feeds/:id',users.edit)
    app.delete('/webnosser/:user/feeds/:id/unfollow', users.unfollow);
    app.delete('/webnosser/:user/feeds/:id/delete', users.delete);




};