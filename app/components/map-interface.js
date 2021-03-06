import Ember from 'ember';
import d3 from 'd3';
import $ from 'jquery';

export default Ember.Component.extend({

  init: function(){
    this._super();
  },

  didInsertElement: function() {

    let stateLink = $('.land, .states-list > a');
    let overlay = $('.overlay');

    stateLink.click(function() {
      overlay.addClass('active');
    });

    let states = this.get('states');
    let map = {};

    states = states.map(function(state, index){
      return map[index] = {
        abbreviatedName: state.data.abbreviatedName,
        representatives: state.data.representatives,
        fullName: state.data.fullName,
        senateDemocratPercentage: state.data.senateStats.party.democrat.percentage,
        senateRepublicanPercentage: state.data.senateStats.party.republican.percentage,
        senateGenderMalePercentage: state.data.senateStats.gender.male.percentage,
        senateGenderFemalePercentage: state.data.senateStats.gender.female.percentage,

        congressionalTotal: state.data.congressStats.total,
        congressionalDemocratPercentage: state.data.congressStats.party.democrat.percentage,
        congressionalRepublicanPercentage: state.data.congressStats.party.republican.percentage,
        congressionalGenderMalePercentage: state.data.congressStats.gender.male.percentage,
        congressionalGenderFemalePercentage: state.data.congressStats.gender.female.percentage,
      };
    });

    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

      d3.selectAll(".map-container path")
        .on("mousemove", function() {
          let state = states[parseInt(this.id - 1)];
          let stateColor = '';
          if (state.congressionalRepublicanPercentage > state.congressionalDemocratPercentage) {
            stateColor = '#FC131F';
          } else {
            stateColor = "#1CA7F0";
          }
          d3.select(this).style('fill', stateColor);
          tooltip.transition()
            .duration(0)
            .style("opacity", 1);

          tooltip.html(`
            <h3>${state.fullName}</h3>
            <div class="state-tooltip-section">
              <h5>2 Senators</h5>
              <p class="twin republican-dot">${state.senateRepublicanPercentage}% Rep</p>
              <p class="twin democrat-dot">${state.senateDemocratPercentage}% Dem</p>
              <p class="twin male-icon">${state.senateGenderMalePercentage}% M</p>
              <p class="twin female-icon">${state.senateGenderFemalePercentage}% F</p>
            </div>
              <br><hr>
            <div class="state-tooltip-section">
              <h5>${state.congressionalTotal} Congressperson(s)</h5>
              <p class="twin republican-dot">${state.congressionalRepublicanPercentage}% Rep</p>
              <p class="twin democrat-dot">${state.congressionalDemocratPercentage}% Dem</p>
              <p class="twin male-icon">${state.congressionalGenderMalePercentage}% M</p>
              <p class="twin female-icon">${state.congressionalGenderFemalePercentage}% F</p>
            </div>
          `)
            .style("left", ((d3.event.pageX) - 100) + "px")
            .style("top", ((d3.event.pageY) - 220) + "px")
            .style("display", "block");
        })

        .on("mouseout", function() {
          d3.select(this).style('fill', '#e6e6e6');
            tooltip.transition()
                .duration(0)
                .style("opacity", 0);
        })
        .on("click", function(){
          d3.select(this).style('fill', '#e6e6e6');
          tooltip.transition()
            .duration(0)
            .style("opacity", 0);
        });

    },
    willDestroyElement: function() {
      this.$().off('mouseenter mouseleave');
    }

});
