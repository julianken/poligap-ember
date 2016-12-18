import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

    render: function(){
      this._super();
      $(document).ready(function(){
        $('header').addClass('active-header');
        $('.hamburger').addClass('white-hamburger');
        $('.matched-images').matchHeight();
        $('nav.mobile-nav').css('margin-top', '88px');
        $(window).scrollTop(0);
      });
    },

});
