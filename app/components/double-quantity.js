import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setDoubleQuantity: function(units){
      this.sendAction('action', units);
    }
  }
});
