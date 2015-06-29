import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        quantity: "1",
        unit: "pound",
        name: "Boneless chicken breast"
      },
      {
        quantity: "1",
        unit: "cup",
        name: "Sliced carrots"
      },
      {
        quantity: "1",
        unit: "cup",
        name: "Frozen green peas"
      },
      {
        quantity: "1/2",
        unit: "cup",
        name: "Sliced celery"
      },
      {
        quantity: "1/3",
        unit: "cup",
        name: "Butter"
      },
      {
        quantity: "1/3",
        unit: "cup",
        name: "Chopped onion"
      },
      {
        quantity: "1/3",
        unit: "cup",
        name: "All-purpose flour"
      }
    ];
  }
});
