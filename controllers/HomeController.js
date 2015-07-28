var casual = require('casual');

var HomeController = Class('HomeController')({
  prototype : {
    init : function (){
      this._initRouter();
      return this;
    },

    _initRouter : function() {
      application.router.route('/')
        .get(this.index);

      application.router.route('/getData')
        .get(this.getData);
    },

    index : function(req, res, next) {
      res.render('home/index.html', { layout : 'application' });
    },

    getData : function getData(req, res, next) {
      var data = {
        title : casual.title,
        name : casual.full_name,
        username : casual.username,
        password : casual.password,
        bio : casual.catch_phrase,
        phone : casual.phone
      }

      res.json(data);
    }
  }
});

module.exports = new HomeController();
