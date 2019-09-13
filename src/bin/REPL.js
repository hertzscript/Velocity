#!/usr/bin/env node
// Synchronous REPL
const Dispatcher = require("hertzscript-dispatcher");
const hzCompile = require('hertzscript-compiler');
const hzDisp = new Dispatcher();
process.stdout.write("> ");
process.stdin.on("data", code => {
	try {
		var hzModule = new Function(
			"hzUserLib",
			"return " + hzCompile("(function (){" + code.toString() + "})", false, false, true) + ";"
		);
	} catch (error) {
		console.error(error);
		process.stdout.write("\n> ");
		return;
	}
	try {
		hzDisp.import(hzModule);
		hzDisp.runComplete();
	} catch (error) {
		console.error(error);
		hzDisp = new Dispatcher();
	}
	process.stdout.write("\n> ");
});