define([
  'backbone',
], function(Backbone){
  return Backbone.Model.extend({
    urlRoot: 'api.openbeerdatabase.com/v1/beers', // locally stored json files
    url: function() {
      return this.urlRoot + '/' + this.id + '.json';
    }
  })
});
