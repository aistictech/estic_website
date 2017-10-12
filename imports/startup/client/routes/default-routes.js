// Import needed templates
import '../../../ui/layouts/default/default.js';
import '../../../ui/pages/default/';

Router.configure({
  notFoundTemplate: 'notFound_page',
});

DefaultController = RouteController.extend({
  layoutTemplate: 'default_layout',
});

// set-up all default pages routes
Router.route('/', {
  name: 'home_page',
  template: 'home_page',
  controller: 'DefaultController',
});
