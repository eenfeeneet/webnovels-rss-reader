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

    const webnosserControllerCallbacks = require('./controllers/webnosser')(allModels);




    app.get('/', webnosserControllerCallbacks.root);
    app.get('/webnosser', webnosserControllerCallbacks.index);


    app.post('/webnosser/register', webnosserControllerCallbacks.register);
    app.post('/webnosser/login', webnosserControllerCallbacks.login);
    app.post('/webnosser/login', webnosserControllerCallbacks.login);
    app.get('/webnosser/:user', webnosserControllerCallbacks.profile);

    app.get('/test', webnosserControllerCallbacks.test);

};