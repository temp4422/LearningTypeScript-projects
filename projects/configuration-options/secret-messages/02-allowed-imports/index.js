"use strict";
var __spreadArray =
	(this && this.__spreadArray) ||
	function (to, from, pack) {
		if (pack || arguments.length === 2)
			for (var i = 0, l = from.length, ar; i < l; i++) {
				if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
		return to.concat(ar || Array.prototype.slice.call(from));
	};
exports.__esModule = true;
exports.decodeMessage = void 0;
var answer_js_1 = require("./answer.js");
var guesses = require("./guesses.json");
function decodeMessage(message) {
	var output = "";
	for (var i = 0; i < message.length; i += 1) {
		output += String.fromCharCode(message.codePointAt(i) - i - message.length);
	}
	return output;
}
exports.decodeMessage = decodeMessage;
for (
	var _i = 0, _a = __spreadArray([answer_js_1["default"]], guesses, true);
	_i < _a.length;
	_i++
) {
	var message = _a[_i];
	console.log(decodeMessage(message));
}
