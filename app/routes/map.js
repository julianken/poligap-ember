import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(){
    $(document).ready(function(){
      $('header').addClass('active-header');

     var div = d3.select("body").append("div")
     .attr("class", "tooltip")
     .style("opacity", 0);

     d3.selectAll("path")
        .on("mousemove", function(d) {
            d3.select(this).style('fill', 'red');
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div .html(this.id)
                .style("left", ((d3.event.pageX) - 30) + "px")
                .style("top", ((d3.event.pageY) - 50) + "px")
                console.log(d3.event.clientX);

            })
        .on("mouseout", function(d) {
          d3.select(this).style('fill', '#ccc');
            div.transition()
                .duration(200)
                .style("opacity", 0);
        });

    });
}});
