import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

    render: function(){
      this._super();
      $(document).ready(function(){
        $('header').addClass('active-header');
        $('.matched-images').matchHeight();
      });
    }
});
