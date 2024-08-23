const {niceLogger} = require("../src/niceLogger.js");

test("niceLogger returns Hello world!", () => {

	expect(niceLogger()).toBe("Hello world!");
});