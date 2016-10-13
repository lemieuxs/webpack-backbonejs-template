var template = require('../../templates/home.html');
var Backbone = require('backbone');

var Home = Backbone.View.extend({
    el: '#page-wrapper',
    initialize: function()
    {

    },
    render : function()
    {
        this.$el.html(template);
    }
});

module.exports = Home;