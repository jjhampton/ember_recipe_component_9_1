import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setDoubleQuantity: function(){
      this.sendAction('action');
    }
  }
});
