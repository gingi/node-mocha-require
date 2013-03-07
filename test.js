var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    baseUrl: __dirname
});

describe("simple test", function () {
    it("should work", function (done) {
        requirejs(['simple'], function (Simple) {
            true.should.be.true;
            done();
        })
    })
});

describe("Without requirejs", function () {
    it("should work", function () {
        true.should.be.true
    })
})
