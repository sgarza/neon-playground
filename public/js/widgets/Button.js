/** @jsx NeoWidget.h */

Class('Button').inherits(Widget)({
  prototype : {
    init : function init(config) {
      Widget.prototype.init.call(this, config);

      var button = this;

      this.element = new NeoWidget({
        state : {
          title : 'Fetch new data',
          count : 0
        },

        build : function() {
          return  <div>
                    <button>{this.state.title}</button>
                    <p>{'Fetched ' + this.state.count}</p>
                  </div>
        }
      });

      this.bind('fetched', function() {
        button.element.update({
          count : button.element.state.count + 1
        });
      });
    },

    render : function render(element) {
      this.element.render(element);
    }
  }
})
