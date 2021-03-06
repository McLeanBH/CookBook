import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes', function() {
    this.route('edit');
    this.route('create');
    this.route('show');
  });
  this.route('friends');
});

export default Router;
