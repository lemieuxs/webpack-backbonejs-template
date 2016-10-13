var Backbone = require('backbone');
var Home = require('./views/home');

var Router = Backbone.Router.extend({
    routes: {
        '' : 'home'
    }
});

var router = new Router();

router.on('route:home', function() {
    var homeView = new Home();
    homeView.render();
});

module.exports = router;