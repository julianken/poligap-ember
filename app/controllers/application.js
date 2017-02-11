import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    this._super();

    $(document).ready(function(){

      let $body = $('body');

      $(document)
        .on('focus', 'input', function() {
            $body.addClass('fixfixed');
        })
        .on('blur', 'input', function() {
            $body.removeClass('fixfixed');
        });

      $(window).resize(function(){
        let width = $(window).width();
        if (width > 560) {
          $('header').removeClass('active-mobile-nav')
            .children('.hamburger').removeClass('active-hamburger');
        }
      });
    });
  },
  currentPathChange: function () {
      $('header').removeClass('active-mobile-nav').children('.hamburger')
        .removeClass('active-hamburger');
    }.observes('currentPath')
});
