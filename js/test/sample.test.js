/* jshint esversion: 6 */

(() => {
    'use strict';

    // Group related tests under a single label.
    // Read more at: https://api.qunitjs.com/QUnit/module
    QUnit.module('Sample');

    QUnit.test('a basic "test" example - asserterion', function (assert) {
        // Add a test to run.
        // The assert argument to the callback contains all of QUnit’s assertion methods. Use this argument to call your test assertions.
        // Read more at: https://api.qunitjs.com/QUnit/test

        let valueToTest = 0;
        let expectedValue = 0;

        assert.equal(valueToTest, expectedValue);
    });

    QUnit.test('a basic "test" example - uses production code', function (assert) {
        let sample = window.Sample; // This will fail if window.Sample is not defined
        // Refer to js/src/sample.js

        // First assertion. Checks if production code is loaded properly
        assert.notEqual(sample, undefined);

        // Second asssertion. Checks if Sample has a concat() function and if it behaves accordingly.
        let result = sample.concat('1', '1');
        let expectedResult = '11';

        assert.equal(result, expectedResult);
    });

    QUnit.todo('a basic "todo" example', function (assert) {
        // Adds a test which expects at least one failing assertion during its run.
        // Usage: Use this method to test a unit of code which is still under development (in a “todo” state). The test will pass as long as one failing assertion is present.
        // Read more at: https://api.qunitjs.com/QUnit/todo

        ///////////////////////////////////////////////////
        // Uncomment the line below to make this test fail
        // assert.equal(true, true);
    });

    QUnit.skip('a basic "skip" example', function (assert) {
        // Adds a test like object to be skipped
        // Usage: Use this method to replace QUnit.test() instead of commenting out entire tests.
        // Read more at: https://api.qunitjs.com/QUnit/todo 

        assert.equal(0, 1);
    });


})();