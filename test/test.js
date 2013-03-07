var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    baseUrl: __dirname + "/src"
});

requirejs.onError = function (err) {
    console.error(err);
    throw err;
}

describe("Simple RequireJS module", function () {
    console.log("It gets here")
    requirejs(['module'], function (Module) {
        console.log("But never gets here")
        it("should work but doesn't", function () {
            Module.should.be.ok;
        })
    })
});

describe("Without requirejs", function () {
    it("should work", function () {
        true.should.be.true
    })
})
