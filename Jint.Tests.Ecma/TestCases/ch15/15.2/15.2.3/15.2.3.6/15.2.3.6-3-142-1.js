/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-142-1.js
 * @description Object.defineProperty - 'Attributes' is a Boolean object that uses Object's [[Get]] method to access the 'value' property of prototype object  (8.10.5 step 5.a)
 */


function testcase() {
        var obj = {};
        try {
            Boolean.prototype.value = "Boolean";
            var boolObj = new Boolean(true);

            Object.defineProperty(obj, "property", boolObj);

            return obj.property === "Boolean";
        } finally {
            delete Boolean.prototype.value;
        }
    }
runTestCase(testcase);