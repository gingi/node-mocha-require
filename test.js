var requirejs = require('requirejs');
var mocha = require('mocha');
var should = require('should');

requirejs.config({
    nodeRequire: require
});

describe("simple test", function () {
    requirejs(['simple'], function (Simple) {
        // NEVER REACHES HERE!
        it("should work", function () {
            true.should.be.true;
        })
    })
});

describe("Without requirejs", function () {
    it("should work", function () {
        true.should.be.true
    })
})
