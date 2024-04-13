"use strict";
exports.__esModule = true;
var globals_1 = require("@jest/globals");
var fs = require("fs");
var path = require("path");
var ts = require("typescript");
var filePath = path.join(
	__dirname,
	process.env.TEST_SOLUTIONS ? "tsconfig.solution.json" : "tsconfig.json"
);
var _a = ts.parseConfigFileTextToJson(
		filePath,
		fs.readFileSync(filePath).toString()
	),
	config = _a.config,
	error = _a.error;
if (error) {
	console.error(error);
	throw new Error("Could not parse TSConfig for test. See console errors.");
}
(0, globals_1.describe)("TSConfig", function () {
	(0, globals_1.test)("compilerOptions", function () {
		(0, globals_1.expect)(config.compilerOptions).toEqual(
			globals_1.expect.objectContaining({
				allowJs: true,
				esModuleInterop: true,
				resolveJsonModule: true,
			})
		);
	});
});
