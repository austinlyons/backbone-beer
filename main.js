// installed with bower
require.config({
  paths: {
    "jquery": "lib/jquery/dist/jquery",
    "underscore": "lib/underscore/underscore",
    "backbone": "lib/backbone/backbone",
  }
});

require(['models/beer', 'views/beer'], function(BeerModel, BeerView){
  $(document).ready(function() {
    var beers = []; // could use backbone collections instead
    var views = [];
    _.each([1, 2, 3], function(id) {
      var model = new BeerModel({id: id});
      model.fetch();
      beers.push(model);
      views.push(new BeerView({model: model}));
    });

    _.each(views, function(view) {
      $("#container").append(view.render().$el);
    });
  });
});
