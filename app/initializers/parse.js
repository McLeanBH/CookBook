import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup ({
     headers: {
       "X-Parse-Application-Id": 'weA6sJ27JjsBF03ztfsWUvjFrLe5ITawULO54CuP',
       "X-Parse-REST-API-Key": 'MLrNgtMbLXTSnAonaFqFtkkmSxlfKPiLu9sjjSgv'
     }
});
}

export default {
  name: 'parse',
  initialize: initialize
};
