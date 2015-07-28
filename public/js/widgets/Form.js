/** @jsx NeoWidget.h */

Class('Form').inherits(Widget)({
  prototype : {
    init : function init(config) {
      Widget.prototype.init.call(this, config);

      var form = this;

      this.appendChild(new Button({
        name : 'button'
      }));

      // Override jQueryElement set by Widget.prototype.init
      this.element = new NeoWidget({
        state :  {
          title : null,
          name : null,
          username : null,
          password : null,
          bio : null,
          phone : null
        },

        build : function() {
          return  <div class="form">
                    <p>
                      <label>Title</label>
                      <input type="text" value={this.state.title} />
                    </p>
                    <p>
                      <label>Name</label>
                      <input type="text" value={this.state.name} />
                    </p>
                    <p>
                      <label>Username</label>
                      <input type="text" value={this.state.username} />
                    </p>
                    <p>
                      <label>Password</label>
                      <input type="text" value={this.state.password} />
                    </p>
                    <p>
                      <label>Bio</label>
                      <input type="text" value={this.state.bio} />
                    </p>
                    <p>
                      <label>Phone</label>
                      <input type="text" value={this.state.phone} />
                    </p>
                    {form.button.element.virtualNode}
                  </div>
        }
      });

      $(this.element.HTMLElement.querySelector('button')).bind('click', function() {
        $.ajax({
          method : 'get',
          url : '/getData',
          format : 'json',
          success : function(data) {
            form.button.dispatch('fetched');
            form.element.update(data);
          }
        })
      })
    },

    // Override Widget.prototype.render
    render : function render(element) {
      this.element.render(element);
    }
  }
})
