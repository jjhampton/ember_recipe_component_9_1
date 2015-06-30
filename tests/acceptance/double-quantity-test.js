import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-recipe-component-9-1/tests/helpers/start-app';

var application;

module('Acceptance | double quantity', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('clicking Adjust Recipe button should double quantity', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.quantity').get(0).textContent, "1");
    click('.adjust-recipe');
  });

  andThen(function() {
    assert.equal(find('.quantity').get(0).textContent, "2");
    click('.adjust-recipe');
  });

});
