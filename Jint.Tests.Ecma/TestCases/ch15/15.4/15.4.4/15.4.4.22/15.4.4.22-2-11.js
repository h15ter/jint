/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-2-11.js
 * @description Array.prototype.reduceRight applied to Array-like object, 'length' is an own accessor property without a get function
 */


function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return typeof obj.length === "undefined";
        }

        var obj = {
            0: 11,
            1: 12
        };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

        return Array.prototype.reduceRight.call(obj, callbackfn, 111) === 111 && !accessed;
    }
runTestCase(testcase);