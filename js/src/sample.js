/* jshint esversion: 6 */

(() => {
    'use strict';

    const Sample = {
        concat: function (x, y) {
            return x + y;
        }
    };

    // "window" is a global object accessable anywhere
    // The line below exposes the "Sample" instance to the global environment.
    window.Sample = Sample;

})();