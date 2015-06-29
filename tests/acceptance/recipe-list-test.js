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

    assert.equal(find('.recipe-item .quantity').get(0).textContent, 1);
    assert.equal(find('.recipe-item .quantity').get(1).textContent, 1);
    assert.equal(find('.recipe-item .quantity').get(2).textContent, 1);
    assert.equal(find('.recipe-item .quantity').get(3).textContent, 1/2);
    assert.equal(find('.recipe-item .quantity').get(4).textContent, 1/3);
    assert.equal(find('.recipe-item .quantity').get(5).textContent, 1/3);
    assert.equal(find('.recipe-item .quantity').get(6).textContent, 1/3);
    assert.equal(find('.recipe-item .quantity').get(6).textContent, 1/3);

    assert.equal(find('.recipe-item .name').get(0).textContent, "Boneless chicken breast");
    assert.equal(find('.recipe-item .name').get(1).textContent, "Sliced carrots");
    assert.equal(find('.recipe-item .name').get(2).textContent, "Frozen green peas");
    assert.equal(find('.recipe-item .name').get(3).textContent, "Sliced celery");
    assert.equal(find('.recipe-item .name').get(4).textContent, "Butter");
    assert.equal(find('.recipe-item .name').get(5).textContent, "Chopped onion");
    assert.equal(find('.recipe-item .name').get(6).textContent, "All-purpose flour");

    assert.equal(find('.recipe-item .unit').get(0).textContent, "pound");
    assert.equal(find('.recipe-item .unit').get(1).textContent, "cup");
    assert.equal(find('.recipe-item .unit').get(2).textContent, "cup");
    assert.equal(find('.recipe-item .unit').get(3).textContent, "cup");
    assert.equal(find('.recipe-item .unit').get(4).textContent, "cup");
    assert.equal(find('.recipe-item .unit').get(5).textContent, "cup");
    assert.equal(find('.recipe-item .unit').get(6).textContent, "cup");
  });
});
