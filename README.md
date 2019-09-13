# HertzScript Velocity REPL

[![NPM](https://nodei.co/npm/hertzscript-velocity.png)](https://nodei.co/npm/hertzscript-velocity/)

HertzScript Velocity is a concurrent REPL which is designed specifically for HertzScript coroutines. All code runs concurrently alongside the REPL, so you can continue typing/adding code while existing code is still running.

See the [HertzScript Specification](https://github.com/Floofies/hertzscript-specification) repository for more information.

- [Command-Line Interfaces](#command-line-interfaces)
	- [`hzv` / `hzvelocity`](#hzv--hzvelocty)
	- [`hzr` / `hzrepl`](#hzr--hzrepl)

## Command-Line Interfaces

### `hzv` / `hzvelocity`

Opens the concurrent HertzScript Velocity REPL which is designed specifically for HertzScript coroutines. The REPL consists of a status bar at the top, a virtual console output window in the middle, and a source code input line at the bottom. Source code is compiled before it is executed, and supports the `spawn` keyword. All code runs concurrently alongside the REPL, so you can continue typing/adding code while existing code is still running.

- To run code, simply type it at the bottom and press enter.

- To scroll the virtual console window up and down, press **PageUp** and **PageDown**.

- To quit press **Control+C** twice, or type `.exit` and press enter.

- To pause or unpause code execution press **Control+P**, or type `.pause` and press enter.

- To terminate all coroutines press **Control+R**, or type `.kill` and press enter.

### `hzr` / `hzrepl`

Opens a non-concurrent synchronous REPL which behaves more like a traditional NodeJS REPL. This REPL lacks a status bar and virtual console window, and runs all code in run-to-completion mode which blocks the REPL until the all code has completed running. If you've started more than one coroutine, this may be harder to use than the concurrent REPL.

- To run code, simply type it at the bottom and press enter.

- To quit press **Control+C**.