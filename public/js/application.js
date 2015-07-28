require('neon');
require('neon/stdlib');

var jQuery = require('./vendor/jquery-2.0.3.js');
window.jQuery = jQuery;
window.$ = jQuery;

require('./vendor/Widget.js');
require('neowidget');

window.validate = require('validate');

require('./../css/style.css');


// Widgets

window.application = new Widget({
  name : 'application'
});

require('./widgets/Button.js');
require('./widgets/Form.js');
