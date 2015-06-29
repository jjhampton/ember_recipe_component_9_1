import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-recipe-component-9-1/tests/helpers/start-app';

var application;

module('Acceptance | recipe list', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting index lists the recipe items', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.recipe-item').length, 7);
  });
});
