/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-2-12.js
 * @description Array.prototype.filter - 'length' is own accessor property without a get function that overrides an inherited accessor property
 */


function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return true;
        }

        try {
            Object.defineProperty(Object.prototype, "length", {
                get: function () {
                    return 2;
                },
                configurable: true
            });

            var obj = { 0: 12, 1: 11 };
            Object.defineProperty(obj, "length", {
                set: function () { },
                configurable: true
            });

            var newArr = Array.prototype.filter.call(obj, callbackfn);
            return newArr.length === 0 && !accessed;
        } finally {
            delete Object.prototype.length;
        }
    }
runTestCase(testcase);