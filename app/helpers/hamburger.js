import Ember from 'ember';

export function hamburger() {
  return `
      <?xml version="1.0" encoding="UTF-8"?>
        <svg id="hamburger-svg" width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Poligap" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Home-04-375-@2x" transform="translate(-337.000000, -24.000000)" fill="#FFFFFF">
              <g id="hamburger-toggle" transform="translate(337.000000, 24.000000)">
                  <rect id="top" x="0" y="0" width="22" height="2"></rect>
                  <rect id="middle" x="0" y="7" width="22" height="2"></rect>
                  <rect id="bottom" x="0" y="14" width="22" height="2"></rect>
              </g>
            </g>
          </g>
        </svg>
  `;
}

export default Ember.Helper.helper(hamburger);
