import Ember from 'ember';
import $ from 'jquery';


export default Ember.Route.extend({
  render: function(){
    this._super();
    $(document).ready(function(){
      $('header').removeClass('active-header');
      $('.hamburger').removeClass('white-hamburger');
      $('.matched-images').matchHeight();
      $('nav.mobile-nav').css('margin-top', '88px');
      $(window).scrollTop(0);

      $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if ((scroll > 439) && ($('.index-route').length > 0)) {
          $('header').addClass('active-header');
          $('.hamburger').addClass('white-hamburger');
        } else if ((scroll <= 439) && ($('.index-route').length > 0)) {
          $('header').removeClass('active-header');
          $('.hamburger').removeClass('white-hamburger');
        } else {
          $('header').addClass('active-header');
          $('.hamburger').addClass('white-hamburger');
        }
      });
    });
  }
});
