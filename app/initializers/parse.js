import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup ({
     headers: {
       "X-Parse-Application-Id": 'um2UFrNxo3qc1YfibgAueaeQy2APInooospgdqr3',
       "X-Parse-REST-API-Key": 'ViNtz0I8lxQ6YVHJnOVTvomGoezpAObxqqNHaMwD'
     }

});
}

export default {
 name: 'parse',
 initialize: initialize
};
