define([
  'backbone',
  'jquery',
  'underscore'
], function(Backbone, $, _) {

  return Backbone.View.extend({
    _propsExist: function (attrs) {
      if (attrs.hasOwnProperty('description') && attrs.hasOwnProperty('name') && attrs.hasOwnProperty('id'))
        return true;
      return false;
    },
    initialize: function () {
      this.template = _.template("<h3><%= id %>: <%= name %></h3><p><%= description %></p>");
      this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
      if (this._propsExist(this.model.attributes))
        this.$el.html(this.template(this.model.attributes));

      return this;
    }
  });
});
