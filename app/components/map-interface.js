import Ember from 'ember';
import $ from 'jquery';
import DS from 'ember-data';

export default Ember.Component.extend({

  init: function(){
    this._super();
  },

  didInsertElement: function() {
    let states = this.get('states');
    let representatives = this.get('representatives');
    let map = new Object();
    states = states.map(function(state, index){
      return map[index] = {
        abbreviated_name: state.data.abbreviated_name,
        representatives: state.data.representatives,
        full_name: state.data.full_name,
        senate_democrat_percentage: state.data.senate_stats.party.democrat.percentage,
        senate_republican_percentage: state.data.senate_stats.party.republican.percentage,
        senate_gender_male_percentage: state.data.senate_stats.gender.male.percentage,
        senate_gender_female_percentage: state.data.senate_stats.gender.female.percentage,

        congressional_total: state.data.congress_stats.total,
        congressional_democrat_percentage: state.data.congress_stats.party.democrat.percentage,
        congressional_republican_percentage: state.data.congress_stats.party.republican.percentage,
        congressional_gender_male_percentage: state.data.congress_stats.gender.male.percentage,
        congressional_gender_female_percentage: state.data.congress_stats.gender.female.percentage,
      };
    });

    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

      d3.selectAll("path")
        .on("mousemove", function() {
          let state = states[parseInt(this.id - 1)];
          let stateColor = '';
          if (state.congressional_republican_percentage > state.congressional_democrat_percentage) {
            stateColor = '#FC131F';
          } else {
            stateColor = "#1CA7F0";
          }
          d3.select(this).style('fill', stateColor);
          tooltip.transition()
            .duration(0)
            .style("opacity", 1);

          tooltip.html(`
            <h3>${state.full_name}</h3>
            <div class="state-tooltip-section">
              <h5>2 Senators</h5>
              <p class="twin republican-dot">${state.senate_republican_percentage}% Rep</p>
              <p class="twin democrat-dot">${state.senate_democrat_percentage}% Dem</p>
              <p class="twin male-icon">${state.senate_gender_male_percentage}% M</p>
              <p class="twin female-icon">${state.senate_gender_female_percentage}% F</p>
            </div>
              <br><hr>
            <div class="state-tooltip-section">
              <h5>${state.congressional_total} Congressperson(s)</h5>
              <p class="twin republican-dot">${state.congressional_republican_percentage}% Rep</p>
              <p class="twin democrat-dot">${state.congressional_democrat_percentage}% Dem</p>
              <p class="twin male-icon">${state.congressional_gender_male_percentage}% M</p>
              <p class="twin female-icon">${state.congressional_gender_female_percentage}% F</p>
            </div>
          `)
            .style("left", ((d3.event.pageX) - 100) + "px")
            .style("top", ((d3.event.pageY) - 220) + "px");
        })

        .on("mouseout", function() {
          d3.select(this).style('fill', '#ccc');
            tooltip.transition()
                .duration(0)
                .style("opacity", 0);
        });

    },
    willDestroyElement: function() {
      this.$().off('mouseenter mouseleave');
    }

});
