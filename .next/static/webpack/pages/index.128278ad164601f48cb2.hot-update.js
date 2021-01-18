webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/depd/lib/browser/index.js":
/*!************************************************!*\
  !*** ./node_modules/depd/lib/browser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = depd

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate (message) {
    // no-op in browser
  }

  deprecate._file = undefined
  deprecate._ignored = true
  deprecate._namespace = namespace
  deprecate._traced = false
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }
}


/***/ }),

/***/ "./node_modules/http-errors/index.js":
/*!*******************************************!*\
  !*** ./node_modules/http-errors/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(/*! depd */ "./node_modules/depd/lib/browser/index.js")('http-errors')
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "./node_modules/setprototypeof/index.js")
var statuses = __webpack_require__(/*! statuses */ "./node_modules/statuses/index.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var toIdentifier = __webpack_require__(/*! toidentifier */ "./node_modules/toidentifier/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = createError
module.exports.HttpError = createHttpErrorConstructor()

// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)

/**
 * Get the code class of a status code.
 * @private
 */

function codeClass (status) {
  return Number(String(status).charAt(0) + '00')
}

/**
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */

function createError () {
  // so much arity going on ~_~
  var err
  var msg
  var status = 500
  var props = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (arg instanceof Error) {
      err = arg
      status = err.status || err.statusCode || status
      continue
    }
    switch (typeof arg) {
      case 'string':
        msg = arg
        break
      case 'number':
        status = arg
        if (i !== 0) {
          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')
        }
        break
      case 'object':
        props = arg
        break
    }
  }

  if (typeof status === 'number' && (status < 400 || status >= 600)) {
    deprecate('non-error status code; use only 4xx or 5xx status codes')
  }

  if (typeof status !== 'number' ||
    (!statuses[status] && (status < 400 || status >= 600))) {
    status = 500
  }

  // constructor
  var HttpError = createError[status] || createError[codeClass(status)]

  if (!err) {
    // create error
    err = HttpError
      ? new HttpError(msg)
      : new Error(msg || statuses[status])
    Error.captureStackTrace(err, createError)
  }

  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
    // add properties to generic error
    err.expose = status < 500
    err.status = err.statusCode = status
  }

  for (var key in props) {
    if (key !== 'status' && key !== 'statusCode') {
      err[key] = props[key]
    }
  }

  return err
}

/**
 * Create HTTP error abstract base class.
 * @private
 */

function createHttpErrorConstructor () {
  function HttpError () {
    throw new TypeError('cannot construct abstract class')
  }

  inherits(HttpError, Error)

  return HttpError
}

/**
 * Create a constructor for a client error.
 * @private
 */

function createClientErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ClientError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ClientError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ClientError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ClientError, HttpError)
  nameFunc(ClientError, className)

  ClientError.prototype.status = code
  ClientError.prototype.statusCode = code
  ClientError.prototype.expose = true

  return ClientError
}

/**
 * Create a constructor for a server error.
 * @private
 */

function createServerErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ServerError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ServerError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ServerError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ServerError, HttpError)
  nameFunc(ServerError, className)

  ServerError.prototype.status = code
  ServerError.prototype.statusCode = code
  ServerError.prototype.expose = false

  return ServerError
}

/**
 * Set the name of a function, if possible.
 * @private
 */

function nameFunc (func, name) {
  var desc = Object.getOwnPropertyDescriptor(func, 'name')

  if (desc && desc.configurable) {
    desc.value = name
    Object.defineProperty(func, 'name', desc)
  }
}

/**
 * Populate the exports object with constructors for every error class.
 * @private
 */

function populateConstructorExports (exports, codes, HttpError) {
  codes.forEach(function forEachCode (code) {
    var CodeError
    var name = toIdentifier(statuses[code])

    switch (codeClass(code)) {
      case 400:
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case 500:
        CodeError = createServerErrorConstructor(HttpError, name, code)
        break
    }

    if (CodeError) {
      // export the constructor
      exports[code] = CodeError
      exports[name] = CodeError
    }
  })

  // backwards-compatibility
  exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
    '"I\'mateapot"; use "ImATeapot" instead')
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/koa-router/lib/layer.js":
/*!**********************************************!*\
  !*** ./node_modules/koa-router/lib/layer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { pathToRegexp, compile, parse } = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist.es2015/index.js");
const { parse: parseUrl, format: formatUrl } = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

module.exports = Layer;

/**
 * Initialize a new routing Layer with given `method`, `path`, and `middleware`.
 *
 * @param {String|RegExp} path Path string or regular expression.
 * @param {Array} methods Array of HTTP verbs.
 * @param {Array} middleware Layer callback/middleware or series of.
 * @param {Object=} opts
 * @param {String=} opts.name route name
 * @param {String=} opts.sensitive case sensitive (default: false)
 * @param {String=} opts.strict require the trailing slash (default: false)
 * @returns {Layer}
 * @private
 */

function Layer(path, methods, middleware, opts) {
  this.opts = opts || {};
  this.name = this.opts.name || null;
  this.methods = [];
  this.paramNames = [];
  this.stack = Array.isArray(middleware) ? middleware : [middleware];

  for(let i = 0; i < methods.length; i++) {
    const l = this.methods.push(methods[i].toUpperCase());
    if (this.methods[l-1] === 'GET') this.methods.unshift('HEAD');
  }

  // ensure middleware is a function
  for (let i = 0; i < this.stack.length; i++) {
    const fn = this.stack[i];
    const type = (typeof fn);
    if (type !== 'function')
      throw new Error(
        `${methods.toString()} \`${this.opts.name || path}\`: \`middleware\` must be a function, not \`${type}\``
      );
  }

  this.path = path;
  this.regexp = pathToRegexp(path, this.paramNames, this.opts);
};

/**
 * Returns whether request `path` matches route.
 *
 * @param {String} path
 * @returns {Boolean}
 * @private
 */

Layer.prototype.match = function (path) {
  return this.regexp.test(path);
};

/**
 * Returns map of URL parameters for given `path` and `paramNames`.
 *
 * @param {String} path
 * @param {Array.<String>} captures
 * @param {Object=} existingParams
 * @returns {Object}
 * @private
 */

Layer.prototype.params = function (path, captures, existingParams) {
  const params = existingParams || {};

  for (let len = captures.length, i=0; i<len; i++) {
    if (this.paramNames[i]) {
      const c = captures[i];
      params[this.paramNames[i].name] = c ? safeDecodeURIComponent(c) : c;
    }
  }

  return params;
};

/**
 * Returns array of regexp url path captures.
 *
 * @param {String} path
 * @returns {Array.<String>}
 * @private
 */

Layer.prototype.captures = function (path) {
  return this.opts.ignoreCaptures ? [] : path.match(this.regexp).slice(1);
};

/**
 * Generate URL for route using given `params`.
 *
 * @example
 *
 * ```javascript
 * const route = new Layer('/users/:id', ['GET'], fn);
 *
 * route.url({ id: 123 }); // => "/users/123"
 * ```
 *
 * @param {Object} params url parameters
 * @returns {String}
 * @private
 */

Layer.prototype.url = function (params, options) {
  let args = params;
  const url = this.path.replace(/\(\.\*\)/g, '');

  if (typeof params != 'object') {
    args = Array.prototype.slice.call(arguments);
    if (typeof args[args.length - 1] == 'object') {
      options = args[args.length - 1];
      args = args.slice(0, args.length - 1);
    }
  }

  const toPath = compile(url, options);
  let replaced;

  const tokens = parse(url);
  let replace = {};

  if (args instanceof Array) {
    for (let len = tokens.length, i=0, j=0; i<len; i++) {
      if (tokens[i].name) replace[tokens[i].name] = args[j++];
    }
  } else if (tokens.some(token => token.name)) {
    replace = params;
  } else if (!options) {
    options = params;
  }

  replaced = toPath(replace);

  if (options && options.query) {
    replaced = parseUrl(replaced);
    if (typeof options.query === 'string') {
      replaced.search = options.query;
    } else {
      replaced.search = undefined;
      replaced.query = options.query;
    }
    return formatUrl(replaced);
  }

  return replaced;
};

/**
 * Run validations on route named parameters.
 *
 * @example
 *
 * ```javascript
 * router
 *   .param('user', function (id, ctx, next) {
 *     ctx.user = users[id];
 *     if (!user) return ctx.status = 404;
 *     next();
 *   })
 *   .get('/users/:user', function (ctx, next) {
 *     ctx.body = ctx.user;
 *   });
 * ```
 *
 * @param {String} param
 * @param {Function} middleware
 * @returns {Layer}
 * @private
 */

Layer.prototype.param = function (param, fn) {
  const stack = this.stack;
  const params = this.paramNames;
  const middleware = function (ctx, next) {
    return fn.call(this, ctx.params[param], ctx, next);
  };
  middleware.param = param;

  const names = params.map(function (p) {
    return p.name;
  });

  const x = names.indexOf(param);
  if (x > -1) {
    // iterate through the stack, to figure out where to place the handler fn
    stack.some(function (fn, i) {
      // param handlers are always first, so when we find an fn w/o a param property, stop here
      // if the param handler at this part of the stack comes after the one we are adding, stop here
      if (!fn.param || names.indexOf(fn.param) > x) {
        // inject this param handler right before the current item
        stack.splice(i, 0, middleware);
        return true; // then break the loop
      }
    });
  }

  return this;
};

/**
 * Prefix route path.
 *
 * @param {String} prefix
 * @returns {Layer}
 * @private
 */

Layer.prototype.setPrefix = function (prefix) {
  if (this.path) {
    this.path = (this.path !== '/' || this.opts.strict === true) ? `${prefix}${this.path}` : prefix
    this.paramNames = [];
    this.regexp = pathToRegexp(this.path, this.paramNames, this.opts);
  }

  return this;
};

/**
 * Safe decodeURIComponent, won't throw any error.
 * If `decodeURIComponent` error happen, just return the original value.
 *
 * @param {String} text
 * @returns {String} URL decode original string.
 * @private
 */

function safeDecodeURIComponent(text) {
  try {
    return decodeURIComponent(text);
  } catch (e) {
    return text;
  }
}


/***/ }),

/***/ "./node_modules/koa-router/lib/router.js":
/*!***********************************************!*\
  !*** ./node_modules/koa-router/lib/router.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * RESTful resource routing middleware for koa.
 *
 * @author Alex Mingoia <talk@alexmingoia.com>
 * @link https://github.com/alexmingoia/koa-router
 */

const debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('koa-router');
const compose = __webpack_require__(/*! koa-compose */ "./node_modules/koa-router/node_modules/koa-compose/index.js");
const HttpError = __webpack_require__(/*! http-errors */ "./node_modules/http-errors/index.js");
const methods = __webpack_require__(/*! methods */ "./node_modules/methods/index.js");
const Layer = __webpack_require__(/*! ./layer */ "./node_modules/koa-router/lib/layer.js");
const { pathToRegexp } = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist.es2015/index.js");

/**
 * @module koa-router
 */

module.exports = Router;

/**
 * Create a new router.
 *
 * @example
 *
 * Basic usage:
 *
 * ```javascript
 * const Koa = require('koa');
 * const Router = require('@koa/router');
 *
 * const app = new Koa();
 * const router = new Router();
 *
 * router.get('/', (ctx, next) => {
 *   // ctx.router available
 * });
 *
 * app
 *   .use(router.routes())
 *   .use(router.allowedMethods());
 * ```
 *
 * @alias module:koa-router
 * @param {Object=} opts
 * @param {String=} opts.prefix prefix router paths
 * @constructor
 */

function Router(opts) {
  if (!(this instanceof Router)) return new Router(opts);

  this.opts = opts || {};
  this.methods = this.opts.methods || [
    'HEAD',
    'OPTIONS',
    'GET',
    'PUT',
    'PATCH',
    'POST',
    'DELETE'
  ];

  this.params = {};
  this.stack = [];
};

/**
 * Create `router.verb()` methods, where *verb* is one of the HTTP verbs such
 * as `router.get()` or `router.post()`.
 *
 * Match URL patterns to callback functions or controller actions using `router.verb()`,
 * where **verb** is one of the HTTP verbs such as `router.get()` or `router.post()`.
 *
 * Additionaly, `router.all()` can be used to match against all methods.
 *
 * ```javascript
 * router
 *   .get('/', (ctx, next) => {
 *     ctx.body = 'Hello World!';
 *   })
 *   .post('/users', (ctx, next) => {
 *     // ...
 *   })
 *   .put('/users/:id', (ctx, next) => {
 *     // ...
 *   })
 *   .del('/users/:id', (ctx, next) => {
 *     // ...
 *   })
 *   .all('/users/:id', (ctx, next) => {
 *     // ...
 *   });
 * ```
 *
 * When a route is matched, its path is available at `ctx._matchedRoute` and if named,
 * the name is available at `ctx._matchedRouteName`
 *
 * Route paths will be translated to regular expressions using
 * [path-to-regexp](https://github.com/pillarjs/path-to-regexp).
 *
 * Query strings will not be considered when matching requests.
 *
 * #### Named routes
 *
 * Routes can optionally have names. This allows generation of URLs and easy
 * renaming of URLs during development.
 *
 * ```javascript
 * router.get('user', '/users/:id', (ctx, next) => {
 *  // ...
 * });
 *
 * router.url('user', 3);
 * // => "/users/3"
 * ```
 *
 * #### Multiple middleware
 *
 * Multiple middleware may be given:
 *
 * ```javascript
 * router.get(
 *   '/users/:id',
 *   (ctx, next) => {
 *     return User.findOne(ctx.params.id).then(function(user) {
 *       ctx.user = user;
 *       next();
 *     });
 *   },
 *   ctx => {
 *     console.log(ctx.user);
 *     // => { id: 17, name: "Alex" }
 *   }
 * );
 * ```
 *
 * ### Nested routers
 *
 * Nesting routers is supported:
 *
 * ```javascript
 * const forums = new Router();
 * const posts = new Router();
 *
 * posts.get('/', (ctx, next) => {...});
 * posts.get('/:pid', (ctx, next) => {...});
 * forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());
 *
 * // responds to "/forums/123/posts" and "/forums/123/posts/123"
 * app.use(forums.routes());
 * ```
 *
 * #### Router prefixes
 *
 * Route paths can be prefixed at the router level:
 *
 * ```javascript
 * const router = new Router({
 *   prefix: '/users'
 * });
 *
 * router.get('/', ...); // responds to "/users"
 * router.get('/:id', ...); // responds to "/users/:id"
 * ```
 *
 * #### URL parameters
 *
 * Named route parameters are captured and added to `ctx.params`.
 *
 * ```javascript
 * router.get('/:category/:title', (ctx, next) => {
 *   console.log(ctx.params);
 *   // => { category: 'programming', title: 'how-to-node' }
 * });
 * ```
 *
 * The [path-to-regexp](https://github.com/pillarjs/path-to-regexp) module is
 * used to convert paths to regular expressions.
 *
 * @name get|put|post|patch|delete|del
 * @memberof module:koa-router.prototype
 * @param {String} path
 * @param {Function=} middleware route middleware(s)
 * @param {Function} callback route callback
 * @returns {Router}
 */

for (let i = 0; i < methods.length; i++) {
  function setMethodVerb(method) {
    Router.prototype[method] = function(name, path, middleware) {
      if (typeof path === "string" || path instanceof RegExp) {
        middleware = Array.prototype.slice.call(arguments, 2);
      } else {
        middleware = Array.prototype.slice.call(arguments, 1);
        path = name;
        name = null;
      }

      this.register(path, [method], middleware, {
        name: name
      });

      return this;
    };
  }
  setMethodVerb(methods[i]);
}

// Alias for `router.delete()` because delete is a reserved word
Router.prototype.del = Router.prototype['delete'];

/**
 * Use given middleware.
 *
 * Middleware run in the order they are defined by `.use()`. They are invoked
 * sequentially, requests start at the first middleware and work their way
 * "down" the middleware stack.
 *
 * @example
 *
 * ```javascript
 * // session middleware will run before authorize
 * router
 *   .use(session())
 *   .use(authorize());
 *
 * // use middleware only with given path
 * router.use('/users', userAuth());
 *
 * // or with an array of paths
 * router.use(['/users', '/admin'], userAuth());
 *
 * app.use(router.routes());
 * ```
 *
 * @param {String=} path
 * @param {Function} middleware
 * @param {Function=} ...
 * @returns {Router}
 */

Router.prototype.use = function () {
  const router = this;
  const middleware = Array.prototype.slice.call(arguments);
  let path;

  // support array of paths
  if (Array.isArray(middleware[0]) && typeof middleware[0][0] === 'string') {
    let arrPaths = middleware[0];
    for (let i = 0; i < arrPaths.length; i++) {
      const p = arrPaths[i];
      router.use.apply(router, [p].concat(middleware.slice(1)));
    }

    return this;
  }

  const hasPath = typeof middleware[0] === 'string';
  if (hasPath) path = middleware.shift();

  for (let i = 0; i < middleware.length; i++) {
    const m = middleware[i];
    if (m.router) {
      const cloneRouter = Object.assign(Object.create(Router.prototype), m.router, {
        stack: m.router.stack.slice(0)
      });

      for (let j = 0; j < cloneRouter.stack.length; j++) {
        const nestedLayer = cloneRouter.stack[j];
        const cloneLayer = Object.assign(
          Object.create(Layer.prototype),
          nestedLayer
        );

        if (path) cloneLayer.setPrefix(path);
        if (router.opts.prefix) cloneLayer.setPrefix(router.opts.prefix);
        router.stack.push(cloneLayer);
        cloneRouter.stack[j] = cloneLayer;
      }

      if (router.params) {
        function setRouterParams(paramArr) {
          const routerParams = paramArr;
          for (let j = 0; j < routerParams.length; j++) {
            const key = routerParams[j];
            cloneRouter.param(key, router.params[key]);
          }
        }
        setRouterParams(Object.keys(router.params));
      }
    } else {
      const keys = [];
      pathToRegexp(router.opts.prefix || '', keys);
      const routerPrefixHasParam = router.opts.prefix && keys.length;
      router.register(path || '([^\/]*)', [], m, { end: false, ignoreCaptures: !hasPath && !routerPrefixHasParam });
    }
  }

  return this;
};

/**
 * Set the path prefix for a Router instance that was already initialized.
 *
 * @example
 *
 * ```javascript
 * router.prefix('/things/:thing_id')
 * ```
 *
 * @param {String} prefix
 * @returns {Router}
 */

Router.prototype.prefix = function (prefix) {
  prefix = prefix.replace(/\/$/, '');

  this.opts.prefix = prefix;

  for (let i = 0; i < this.stack.length; i++) {
    const route = this.stack[i];
    route.setPrefix(prefix);
  }

  return this;
};

/**
 * Returns router middleware which dispatches a route matching the request.
 *
 * @returns {Function}
 */

Router.prototype.routes = Router.prototype.middleware = function () {
  const router = this;

  let dispatch = function dispatch(ctx, next) {
    debug('%s %s', ctx.method, ctx.path);

    const path = router.opts.routerPath || ctx.routerPath || ctx.path;
    const matched = router.match(path, ctx.method);
    let layerChain;

    if (ctx.matched) {
      ctx.matched.push.apply(ctx.matched, matched.path);
    } else {
      ctx.matched = matched.path;
    }

    ctx.router = router;

    if (!matched.route) return next();

    const matchedLayers = matched.pathAndMethod
    const mostSpecificLayer = matchedLayers[matchedLayers.length - 1]
    ctx._matchedRoute = mostSpecificLayer.path;
    if (mostSpecificLayer.name) {
      ctx._matchedRouteName = mostSpecificLayer.name;
    }

    layerChain = matchedLayers.reduce(function(memo, layer) {
      memo.push(function(ctx, next) {
        ctx.captures = layer.captures(path, ctx.captures);
        ctx.params = ctx.request.params = layer.params(path, ctx.captures, ctx.params);
        ctx.routerPath = layer.path;
        ctx.routerName = layer.name;
        ctx._matchedRoute = layer.path;
        if (layer.name) {
          ctx._matchedRouteName = layer.name;
        }
        return next();
      });
      return memo.concat(layer.stack);
    }, []);

    return compose(layerChain)(ctx, next);
  };

  dispatch.router = this;

  return dispatch;
};

/**
 * Returns separate middleware for responding to `OPTIONS` requests with
 * an `Allow` header containing the allowed methods, as well as responding
 * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
 *
 * @example
 *
 * ```javascript
 * const Koa = require('koa');
 * const Router = require('@koa/router');
 *
 * const app = new Koa();
 * const router = new Router();
 *
 * app.use(router.routes());
 * app.use(router.allowedMethods());
 * ```
 *
 * **Example with [Boom](https://github.com/hapijs/boom)**
 *
 * ```javascript
 * const Koa = require('koa');
 * const Router = require('@koa/router');
 * const Boom = require('boom');
 *
 * const app = new Koa();
 * const router = new Router();
 *
 * app.use(router.routes());
 * app.use(router.allowedMethods({
 *   throw: true,
 *   notImplemented: () => new Boom.notImplemented(),
 *   methodNotAllowed: () => new Boom.methodNotAllowed()
 * }));
 * ```
 *
 * @param {Object=} options
 * @param {Boolean=} options.throw throw error instead of setting status and header
 * @param {Function=} options.notImplemented throw the returned value in place of the default NotImplemented error
 * @param {Function=} options.methodNotAllowed throw the returned value in place of the default MethodNotAllowed error
 * @returns {Function}
 */

Router.prototype.allowedMethods = function (options) {
  options = options || {};
  const implemented = this.methods;

  return function allowedMethods(ctx, next) {
    return next().then(function() {
      const allowed = {};

      if (!ctx.status || ctx.status === 404) {
        for (let i = 0; i < ctx.matched.length; i++) {
          const route = ctx.matched[i];
          for (let j = 0; j < route.methods.length; j++) {
            const method = route.methods[j];
            allowed[method] = method;
          }
        }

        const allowedArr = Object.keys(allowed);

        if (!~implemented.indexOf(ctx.method)) {
          if (options.throw) {
            let notImplementedThrowable = (typeof options.notImplemented === 'function')
            ? options.notImplemented()  // set whatever the user returns from their function
            : new HttpError.NotImplemented();

            throw notImplementedThrowable;
          } else {
            ctx.status = 501;
            ctx.set('Allow', allowedArr.join(', '));
          }
        } else if (allowedArr.length) {
          if (ctx.method === 'OPTIONS') {
            ctx.status = 200;
            ctx.body = '';
            ctx.set('Allow', allowedArr.join(', '));
          } else if (!allowed[ctx.method]) {
            if (options.throw) {
              let notAllowedThrowable = (typeof options.methodNotAllowed === 'function')
              ? options.methodNotAllowed() // set whatever the user returns from their function
              : new HttpError.MethodNotAllowed();

              throw notAllowedThrowable;
            } else {
              ctx.status = 405;
              ctx.set('Allow', allowedArr.join(', '));
            }
          }
        }
      }
    });
  };
};

/**
 * Register route with all methods.
 *
 * @param {String} name Optional.
 * @param {String} path
 * @param {Function=} middleware You may also pass multiple middleware.
 * @param {Function} callback
 * @returns {Router}
 * @private
 */

Router.prototype.all = function (name, path, middleware) {
  if (typeof path === 'string') {
    middleware = Array.prototype.slice.call(arguments, 2);
  } else {
    middleware = Array.prototype.slice.call(arguments, 1);
    path = name;
    name = null;
  }

  this.register(path, methods, middleware, { name });

  return this;
};

/**
 * Redirect `source` to `destination` URL with optional 30x status `code`.
 *
 * Both `source` and `destination` can be route names.
 *
 * ```javascript
 * router.redirect('/login', 'sign-in');
 * ```
 *
 * This is equivalent to:
 *
 * ```javascript
 * router.all('/login', ctx => {
 *   ctx.redirect('/sign-in');
 *   ctx.status = 301;
 * });
 * ```
 *
 * @param {String} source URL or route name.
 * @param {String} destination URL or route name.
 * @param {Number=} code HTTP status code (default: 301).
 * @returns {Router}
 */

Router.prototype.redirect = function (source, destination, code) {
  // lookup source route by name
  if (source[0] !== '/') source = this.url(source);

  // lookup destination route by name
  if (destination[0] !== '/' && !destination.includes('://')) destination = this.url(destination);

  return this.all(source, ctx => {
    ctx.redirect(destination);
    ctx.status = code || 301;
  });
};

/**
 * Create and register a route.
 *
 * @param {String} path Path string.
 * @param {Array.<String>} methods Array of HTTP verbs.
 * @param {Function} middleware Multiple middleware also accepted.
 * @returns {Layer}
 * @private
 */

Router.prototype.register = function (path, methods, middleware, opts) {
  opts = opts || {};

  const router = this;
  const stack = this.stack;

  // support array of paths
  if (Array.isArray(path)) {
    for (let i = 0; i < path.length; i++) {
      const curPath = path[i];
      router.register.call(router, curPath, methods, middleware, opts);
    }

    return this;
  }

  // create route
  const route = new Layer(path, methods, middleware, {
    end: opts.end === false ? opts.end : true,
    name: opts.name,
    sensitive: opts.sensitive || this.opts.sensitive || false,
    strict: opts.strict || this.opts.strict || false,
    prefix: opts.prefix || this.opts.prefix || "",
    ignoreCaptures: opts.ignoreCaptures
  });

  if (this.opts.prefix) {
    route.setPrefix(this.opts.prefix);
  }

  // add parameter middleware
  for (let i = 0; i < Object.keys(this.params).length; i++) {
    const param = Object.keys(this.params)[i];
    route.param(param, this.params[param]);
  }

  stack.push(route);

  debug('defined route %s %s', route.methods, route.path);

  return route;
};

/**
 * Lookup route with given `name`.
 *
 * @param {String} name
 * @returns {Layer|false}
 */

Router.prototype.route = function (name) {
  const routes = this.stack;

  for (let len = routes.length, i=0; i<len; i++) {
    if (routes[i].name && routes[i].name === name) return routes[i];
  }

  return false;
};

/**
 * Generate URL for route. Takes a route name and map of named `params`.
 *
 * @example
 *
 * ```javascript
 * router.get('user', '/users/:id', (ctx, next) => {
 *   // ...
 * });
 *
 * router.url('user', 3);
 * // => "/users/3"
 *
 * router.url('user', { id: 3 });
 * // => "/users/3"
 *
 * router.use((ctx, next) => {
 *   // redirect to named route
 *   ctx.redirect(ctx.router.url('sign-in'));
 * })
 *
 * router.url('user', { id: 3 }, { query: { limit: 1 } });
 * // => "/users/3?limit=1"
 *
 * router.url('user', { id: 3 }, { query: "limit=1" });
 * // => "/users/3?limit=1"
 * ```
 *
 * @param {String} name route name
 * @param {Object} params url parameters
 * @param {Object} [options] options parameter
 * @param {Object|String} [options.query] query options
 * @returns {String|Error}
 */

Router.prototype.url = function (name, params) {
  const route = this.route(name);

  if (route) {
    const args = Array.prototype.slice.call(arguments, 1);
    return route.url.apply(route, args);
  }

  return new Error(`No route found for name: ${name}`);
};

/**
 * Match given `path` and return corresponding routes.
 *
 * @param {String} path
 * @param {String} method
 * @returns {Object.<path, pathAndMethod>} returns layers that matched path and
 * path and method.
 * @private
 */

Router.prototype.match = function (path, method) {
  const layers = this.stack;
  let layer;
  const matched = {
    path: [],
    pathAndMethod: [],
    route: false
  };

  for (let len = layers.length, i = 0; i < len; i++) {
    layer = layers[i];

    debug('test %s %s', layer.path, layer.regexp);

    if (layer.match(path)) {
      matched.path.push(layer);

      if (layer.methods.length === 0 || ~layer.methods.indexOf(method)) {
        matched.pathAndMethod.push(layer);
        if (layer.methods.length) matched.route = true;
      }
    }
  }

  return matched;
};

/**
 * Run middleware for named route parameters. Useful for auto-loading or
 * validation.
 *
 * @example
 *
 * ```javascript
 * router
 *   .param('user', (id, ctx, next) => {
 *     ctx.user = users[id];
 *     if (!ctx.user) return ctx.status = 404;
 *     return next();
 *   })
 *   .get('/users/:user', ctx => {
 *     ctx.body = ctx.user;
 *   })
 *   .get('/users/:user/friends', ctx => {
 *     return ctx.user.getFriends().then(function(friends) {
 *       ctx.body = friends;
 *     });
 *   })
 *   // /users/3 => {"id": 3, "name": "Alex"}
 *   // /users/3/friends => [{"id": 4, "name": "TJ"}]
 * ```
 *
 * @param {String} param
 * @param {Function} middleware
 * @returns {Router}
 */

Router.prototype.param = function(param, middleware) {
  this.params[param] = middleware;
  for (let i = 0; i < this.stack.length; i++) {
    const route = this.stack[i];
    route.param(param, middleware);
  }

  return this;
};

/**
 * Generate URL from url pattern and given `params`.
 *
 * @example
 *
 * ```javascript
 * const url = Router.url('/users/:id', {id: 1});
 * // => "/users/1"
 * ```
 *
 * @param {String} path url pattern
 * @param {Object} params url parameters
 * @returns {String}
 */
Router.url = function (path) {
  const args = Array.prototype.slice.call(arguments, 1);
  return Layer.prototype.url.apply({ path }, args);
};


/***/ }),

/***/ "./node_modules/koa-router/node_modules/koa-compose/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koa-router/node_modules/koa-compose/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose compositor.
 */

module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/methods/index.js":
/*!***************************************!*\
  !*** ./node_modules/methods/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * methods
 * Copyright(c) 2013-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var http = __webpack_require__(/*! http */ 1);

/**
 * Module exports.
 * @public
 */

module.exports = getCurrentNodeMethods() || getBasicNodeMethods();

/**
 * Get the current Node.js methods.
 * @private
 */

function getCurrentNodeMethods() {
  return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {
    return method.toLowerCase();
  });
}

/**
 * Get the "basic" Node.js methods, a snapshot from Node.js 0.10.
 * @private
 */

function getBasicNodeMethods() {
  return [
    'get',
    'post',
    'put',
    'head',
    'delete',
    'options',
    'trace',
    'copy',
    'lock',
    'mkcol',
    'move',
    'purge',
    'propfind',
    'proppatch',
    'unlock',
    'report',
    'mkactivity',
    'checkout',
    'merge',
    'm-search',
    'notify',
    'subscribe',
    'unsubscribe',
    'patch',
    'search',
    'connect'
  ];
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var t,e=(t=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof t&&"default"in t?t.default:t,o=/https?|ftp|gopher|file/;function r(t){"string"==typeof t&&(t=d(t));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",c=t.query||"",h=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?h=r+t.host:a&&(h=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(h+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(t,e,o);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var a="http://",s="w.w",p=a+s,n=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function h(t,e){var o="string"==typeof t?d(t):t;t="object"==typeof t?r(t):t;var s=d(e),h="";o.protocol&&!o.slashes&&(h=o.protocol,t=t.replace(o.protocol,""),h+="/"===e[0]||"/"===t[0]?"/":""),h&&s.protocol&&(h="",s.slashes||(h=s.protocol,e=e.replace(s.protocol,"")));var l=t.match(n);l&&!s.protocol&&(t=t.substr((h=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(h=h.slice(0,-1)));var i=new URL(t,p+"/"),u=new URL(e,i).toString().replace(p,""),f=s.protocol||o.protocol;return f+=o.slashes||s.slashes?"//":"",!h&&f?u=u.replace(a,f):h&&(u=u.replace(a,"")),c.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),h&&(u=h+("/"===u[0]?u.substr(1):u)),u}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),t&&"object"==typeof t&&t instanceof l)return t;var n=(t=t.trim()).match(u);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var c=!/(^javascript)/.test(t)&&t.match(f),h=m.test(t),d="";c&&(i.test(c[1])||(d=c[1].toLowerCase(),t=""+c[2]+c[3]),c[2]||(h=!1,i.test(c[1])?(d=c[1],t=""+c[3]):t="//"+c[3]),3!==c[2].length&&1!==c[2].length||(d=c[1],t="/"+c[3]));var g,y=(n?n[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",j="";try{g=new URL(t)}catch(e){U=e,d||a||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{g=new URL(t,p)}catch(t){return C.protocol=d,C.href=d,C}}C.slashes=h&&!j,C.host=g.host===s?"":g.host,C.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),C.protocol=U?d||null:g.protocol,C.search=g.search.replace(/\\/g,"%5C"),C.hash=g.hash.replace(/\\/g,"%5C");var w=t.split("#");!C.search&&~w[0].indexOf("?")&&(C.search="?"),C.hash||""!==w[1]||(C.hash="#"),C.query=o?e.decode(g.search.substr(1)):C.search.substr(1),C.pathname=j+(c?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(g.pathname):g.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==t[0]&&(C.pathname=C.pathname.substr(1)),d&&!i.test(d)&&"/"!==t.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=g.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=j?""+C.pathname+C.search+C.hash:r(C);var x=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~x.indexOf(t)||(C[t]=C[t]||null)}),C}exports.parse=d,exports.format=r,exports.resolve=h,exports.resolveObject=function(t,e){return d(h(t,e))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/path-to-regexp/dist.es2015/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**********************************************************/
/*! exports provided: parse, compile, tokensToFunction, match, regexpToFunction, tokensToRegexp, pathToRegexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToFunction", function() { return tokensToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpToFunction", function() { return regexpToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToRegexp", function() { return tokensToRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToRegexp", function() { return pathToRegexp; });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/setprototypeof/index.js":
/*!**********************************************!*\
  !*** ./node_modules/setprototypeof/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint no-proto: 0 */
module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)

function setProtoOf (obj, proto) {
  obj.__proto__ = proto
  return obj
}

function mixinProperties (obj, proto) {
  for (var prop in proto) {
    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = proto[prop]
    }
  }
  return obj
}


/***/ }),

/***/ "./node_modules/statuses/codes.json":
/*!******************************************!*\
  !*** ./node_modules/statuses/codes.json ***!
  \******************************************/
/*! exports provided: 100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"100\":\"Continue\",\"101\":\"Switching Protocols\",\"102\":\"Processing\",\"103\":\"Early Hints\",\"200\":\"OK\",\"201\":\"Created\",\"202\":\"Accepted\",\"203\":\"Non-Authoritative Information\",\"204\":\"No Content\",\"205\":\"Reset Content\",\"206\":\"Partial Content\",\"207\":\"Multi-Status\",\"208\":\"Already Reported\",\"226\":\"IM Used\",\"300\":\"Multiple Choices\",\"301\":\"Moved Permanently\",\"302\":\"Found\",\"303\":\"See Other\",\"304\":\"Not Modified\",\"305\":\"Use Proxy\",\"306\":\"(Unused)\",\"307\":\"Temporary Redirect\",\"308\":\"Permanent Redirect\",\"400\":\"Bad Request\",\"401\":\"Unauthorized\",\"402\":\"Payment Required\",\"403\":\"Forbidden\",\"404\":\"Not Found\",\"405\":\"Method Not Allowed\",\"406\":\"Not Acceptable\",\"407\":\"Proxy Authentication Required\",\"408\":\"Request Timeout\",\"409\":\"Conflict\",\"410\":\"Gone\",\"411\":\"Length Required\",\"412\":\"Precondition Failed\",\"413\":\"Payload Too Large\",\"414\":\"URI Too Long\",\"415\":\"Unsupported Media Type\",\"416\":\"Range Not Satisfiable\",\"417\":\"Expectation Failed\",\"418\":\"I'm a teapot\",\"421\":\"Misdirected Request\",\"422\":\"Unprocessable Entity\",\"423\":\"Locked\",\"424\":\"Failed Dependency\",\"425\":\"Unordered Collection\",\"426\":\"Upgrade Required\",\"428\":\"Precondition Required\",\"429\":\"Too Many Requests\",\"431\":\"Request Header Fields Too Large\",\"451\":\"Unavailable For Legal Reasons\",\"500\":\"Internal Server Error\",\"501\":\"Not Implemented\",\"502\":\"Bad Gateway\",\"503\":\"Service Unavailable\",\"504\":\"Gateway Timeout\",\"505\":\"HTTP Version Not Supported\",\"506\":\"Variant Also Negotiates\",\"507\":\"Insufficient Storage\",\"508\":\"Loop Detected\",\"509\":\"Bandwidth Limit Exceeded\",\"510\":\"Not Extended\",\"511\":\"Network Authentication Required\"}");

/***/ }),

/***/ "./node_modules/statuses/index.js":
/*!****************************************!*\
  !*** ./node_modules/statuses/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var codes = __webpack_require__(/*! ./codes.json */ "./node_modules/statuses/codes.json")

/**
 * Module exports.
 * @public
 */

module.exports = status

// status code to message map
status.STATUS_CODES = codes

// array of status codes
status.codes = populateStatusesMap(status, codes)

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
}

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
}

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
}

/**
 * Populate the statuses map for given codes.
 * @private
 */

function populateStatusesMap (statuses, codes) {
  var arr = []

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code]
    var status = Number(code)

    // Populate properties
    statuses[status] = message
    statuses[message] = status
    statuses[message.toLowerCase()] = status

    // Add to array
    arr.push(status)
  })

  return arr
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    if (!status[code]) throw new Error('invalid status code: ' + code)
    return code
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10)
  if (!isNaN(n)) {
    if (!status[n]) throw new Error('invalid status code: ' + n)
    return n
  }

  n = status[code.toLowerCase()]
  if (!n) throw new Error('invalid status message: "' + code + '"')
  return n
}


/***/ }),

/***/ "./node_modules/toidentifier/index.js":
/*!********************************************!*\
  !*** ./node_modules/toidentifier/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

module.exports = toIdentifier

/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */

function toIdentifier (str) {
  return str
    .split(' ')
    .map(function (token) {
      return token.slice(0, 1).toUpperCase() + token.slice(1)
    })
    .join('')
    .replace(/[^ _0-9a-z]/gi, '')
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _components_SettingForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SettingForm */ "./components/SettingForm.js");
/* harmony import */ var _components_CrawlUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CrawlUrl */ "./components/CrawlUrl.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! koa-router */ "./node_modules/koa-router/lib/router.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var App = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = _super.call(this, props);
    _this.state = {
      isuserLoggedin: false,
      config: {
        apiKey: "ec7e1b0e4f4879ac841ef8579cd77b9d",
        shopOrigin: Cookies.get('shopOrigin'),
        forceRedirect: true
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.isuserLoggedin) {
        koa_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/signup');
      } else {}
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Frame"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlcGQvbGliL2Jyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9odHRwLWVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9rb2Etcm91dGVyL2xpYi9sYXllci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2tvYS1yb3V0ZXIvbGliL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2tvYS1yb3V0ZXIvbm9kZV9tb2R1bGVzL2tvYS1jb21wb3NlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmF0aXZlLXVybC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcGF0aC10by1yZWdleHAvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NldHByb3RvdHlwZW9mL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RhdHVzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90b2lkZW50aWZpZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvaHR0cCAoaWdub3JlZCkiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzdXNlckxvZ2dlZGluIiwiY29uZmlnIiwiYXBpS2V5IiwiQVBJX0tFWSIsInNob3BPcmlnaW4iLCJDb29raWVzIiwiZ2V0IiwiZm9yY2VSZWRpcmVjdCIsIlJvdXRlciIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUM3WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGYTs7QUFFYixpQ0FBaUMsbUJBQU8sQ0FBQywwREFBVTtBQUNuRCxxQ0FBcUMsbUJBQU8sQ0FBQywwREFBVTs7Ozs7Ozs7Ozs7OztBQ0gzQztBQUNaO0FBQ0EsNENBQTRDLGdCQUFnQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsd0RBQWM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztJQUdxQkEsRzs7Ozs7QUFFbkIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNWQyxvQkFBYyxFQUFDLEtBREw7QUFFVkMsWUFBTSxFQUFFO0FBQ1BDLGNBQU0sRUFBRUMsa0NBREQ7QUFFUEMsa0JBQVUsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUZMO0FBR1BDLHFCQUFhLEVBQUU7QUFIUjtBQUZFLEtBQWI7QUFGaUI7QUFVbEI7Ozs7d0NBQ2tCO0FBQ2pCLFVBQUcsQ0FBQyxLQUFLUixLQUFMLENBQVdDLGNBQWYsRUFBOEI7QUFDNUJRLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0QsT0FGRCxNQUVLLENBRUo7QUFDRjs7OzZCQUNPO0FBQ04sMEJBQ0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBS0Q7Ozs7RUExQjhCQywrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pqQyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEyODI3OGFkMTY0NjAxZjQ4Y2IyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXHRjcmVhdGVEZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiBlbmFibGVPdmVycmlkZSA9PT0gbnVsbCA/IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKSA6IGVuYWJsZU92ZXJyaWRlLFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKiFcbiAqIGRlcGRcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGRcblxuLyoqXG4gKiBDcmVhdGUgZGVwcmVjYXRlIGZvciBuYW1lc3BhY2UgaW4gY2FsbGVyLlxuICovXG5cbmZ1bmN0aW9uIGRlcGQgKG5hbWVzcGFjZSkge1xuICBpZiAoIW5hbWVzcGFjZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWVzcGFjZSBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBmdW5jdGlvbiBkZXByZWNhdGUgKG1lc3NhZ2UpIHtcbiAgICAvLyBuby1vcCBpbiBicm93c2VyXG4gIH1cblxuICBkZXByZWNhdGUuX2ZpbGUgPSB1bmRlZmluZWRcbiAgZGVwcmVjYXRlLl9pZ25vcmVkID0gdHJ1ZVxuICBkZXByZWNhdGUuX25hbWVzcGFjZSA9IG5hbWVzcGFjZVxuICBkZXByZWNhdGUuX3RyYWNlZCA9IGZhbHNlXG4gIGRlcHJlY2F0ZS5fd2FybmVkID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGRlcHJlY2F0ZS5mdW5jdGlvbiA9IHdyYXBmdW5jdGlvblxuICBkZXByZWNhdGUucHJvcGVydHkgPSB3cmFwcHJvcGVydHlcblxuICByZXR1cm4gZGVwcmVjYXRlXG59XG5cbi8qKlxuICogUmV0dXJuIGEgd3JhcHBlZCBmdW5jdGlvbiBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKlxuICogVGhpcyBpcyBhIG5vLW9wIHZlcnNpb24gb2YgdGhlIHdyYXBwZXIsIHdoaWNoIGRvZXMgbm90aGluZyBidXQgY2FsbFxuICogdmFsaWRhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiB3cmFwZnVuY3Rpb24gKGZuLCBtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBmbiBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICB9XG5cbiAgcmV0dXJuIGZuXG59XG5cbi8qKlxuICogV3JhcCBwcm9wZXJ0eSBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKlxuICogVGhpcyBpcyBhIG5vLW9wIHZlcnNpb24gb2YgdGhlIHdyYXBwZXIsIHdoaWNoIGRvZXMgbm90aGluZyBidXQgY2FsbFxuICogdmFsaWRhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiB3cmFwcHJvcGVydHkgKG9iaiwgcHJvcCwgbWVzc2FnZSkge1xuICBpZiAoIW9iaiB8fCAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBvYmogbXVzdCBiZSBvYmplY3QnKVxuICB9XG5cbiAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcClcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IGNhbGwgcHJvcGVydHkgb24gb3duZXIgb2JqZWN0JylcbiAgfVxuXG4gIGlmICghZGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcm9wZXJ0eSBtdXN0IGJlIGNvbmZpZ3VyYWJsZScpXG4gIH1cbn1cbiIsIi8qIVxuICogaHR0cC1lcnJvcnNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2h0dHAtZXJyb3JzJylcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ3NldHByb3RvdHlwZW9mJylcbnZhciBzdGF0dXNlcyA9IHJlcXVpcmUoJ3N0YXR1c2VzJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciB0b0lkZW50aWZpZXIgPSByZXF1aXJlKCd0b2lkZW50aWZpZXInKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRXJyb3Jcbm1vZHVsZS5leHBvcnRzLkh0dHBFcnJvciA9IGNyZWF0ZUh0dHBFcnJvckNvbnN0cnVjdG9yKClcblxuLy8gUG9wdWxhdGUgZXhwb3J0cyBmb3IgYWxsIGNvbnN0cnVjdG9yc1xucG9wdWxhdGVDb25zdHJ1Y3RvckV4cG9ydHMobW9kdWxlLmV4cG9ydHMsIHN0YXR1c2VzLmNvZGVzLCBtb2R1bGUuZXhwb3J0cy5IdHRwRXJyb3IpXG5cbi8qKlxuICogR2V0IHRoZSBjb2RlIGNsYXNzIG9mIGEgc3RhdHVzIGNvZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZGVDbGFzcyAoc3RhdHVzKSB7XG4gIHJldHVybiBOdW1iZXIoU3RyaW5nKHN0YXR1cykuY2hhckF0KDApICsgJzAwJylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgSFRUUCBFcnJvci5cbiAqXG4gKiBAcmV0dXJucyB7RXJyb3J9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3IgKCkge1xuICAvLyBzbyBtdWNoIGFyaXR5IGdvaW5nIG9uIH5fflxuICB2YXIgZXJyXG4gIHZhciBtc2dcbiAgdmFyIHN0YXR1cyA9IDUwMFxuICB2YXIgcHJvcHMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV1cbiAgICBpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGVyciA9IGFyZ1xuICAgICAgc3RhdHVzID0gZXJyLnN0YXR1cyB8fCBlcnIuc3RhdHVzQ29kZSB8fCBzdGF0dXNcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgbXNnID0gYXJnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBzdGF0dXMgPSBhcmdcbiAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICBkZXByZWNhdGUoJ25vbi1maXJzdC1hcmd1bWVudCBzdGF0dXMgY29kZTsgcmVwbGFjZSB3aXRoIGNyZWF0ZUVycm9yKCcgKyBhcmcgKyAnLCAuLi4pJylcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcHJvcHMgPSBhcmdcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHN0YXR1cyA9PT0gJ251bWJlcicgJiYgKHN0YXR1cyA8IDQwMCB8fCBzdGF0dXMgPj0gNjAwKSkge1xuICAgIGRlcHJlY2F0ZSgnbm9uLWVycm9yIHN0YXR1cyBjb2RlOyB1c2Ugb25seSA0eHggb3IgNXh4IHN0YXR1cyBjb2RlcycpXG4gIH1cblxuICBpZiAodHlwZW9mIHN0YXR1cyAhPT0gJ251bWJlcicgfHxcbiAgICAoIXN0YXR1c2VzW3N0YXR1c10gJiYgKHN0YXR1cyA8IDQwMCB8fCBzdGF0dXMgPj0gNjAwKSkpIHtcbiAgICBzdGF0dXMgPSA1MDBcbiAgfVxuXG4gIC8vIGNvbnN0cnVjdG9yXG4gIHZhciBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcltzdGF0dXNdIHx8IGNyZWF0ZUVycm9yW2NvZGVDbGFzcyhzdGF0dXMpXVxuXG4gIGlmICghZXJyKSB7XG4gICAgLy8gY3JlYXRlIGVycm9yXG4gICAgZXJyID0gSHR0cEVycm9yXG4gICAgICA/IG5ldyBIdHRwRXJyb3IobXNnKVxuICAgICAgOiBuZXcgRXJyb3IobXNnIHx8IHN0YXR1c2VzW3N0YXR1c10pXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBjcmVhdGVFcnJvcilcbiAgfVxuXG4gIGlmICghSHR0cEVycm9yIHx8ICEoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yKSB8fCBlcnIuc3RhdHVzICE9PSBzdGF0dXMpIHtcbiAgICAvLyBhZGQgcHJvcGVydGllcyB0byBnZW5lcmljIGVycm9yXG4gICAgZXJyLmV4cG9zZSA9IHN0YXR1cyA8IDUwMFxuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzQ29kZSA9IHN0YXR1c1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGtleSAhPT0gJ3N0YXR1cycgJiYga2V5ICE9PSAnc3RhdHVzQ29kZScpIHtcbiAgICAgIGVycltrZXldID0gcHJvcHNba2V5XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJcbn1cblxuLyoqXG4gKiBDcmVhdGUgSFRUUCBlcnJvciBhYnN0cmFjdCBiYXNlIGNsYXNzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVIdHRwRXJyb3JDb25zdHJ1Y3RvciAoKSB7XG4gIGZ1bmN0aW9uIEh0dHBFcnJvciAoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2Fubm90IGNvbnN0cnVjdCBhYnN0cmFjdCBjbGFzcycpXG4gIH1cblxuICBpbmhlcml0cyhIdHRwRXJyb3IsIEVycm9yKVxuXG4gIHJldHVybiBIdHRwRXJyb3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdHJ1Y3RvciBmb3IgYSBjbGllbnQgZXJyb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudEVycm9yQ29uc3RydWN0b3IgKEh0dHBFcnJvciwgbmFtZSwgY29kZSkge1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZS5tYXRjaCgvRXJyb3IkLykgPyBuYW1lIDogbmFtZSArICdFcnJvcidcblxuICBmdW5jdGlvbiBDbGllbnRFcnJvciAobWVzc2FnZSkge1xuICAgIC8vIGNyZWF0ZSB0aGUgZXJyb3Igb2JqZWN0XG4gICAgdmFyIG1zZyA9IG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiBzdGF0dXNlc1tjb2RlXVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKVxuXG4gICAgLy8gY2FwdHVyZSBhIHN0YWNrIHRyYWNlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gcG9pbnRcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIENsaWVudEVycm9yKVxuXG4gICAgLy8gYWRqdXN0IHRoZSBbW1Byb3RvdHlwZV1dXG4gICAgc2V0UHJvdG90eXBlT2YoZXJyLCBDbGllbnRFcnJvci5wcm90b3R5cGUpXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdtZXNzYWdlJywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBtc2csXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbmFtZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICduYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY2xhc3NOYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgaW5oZXJpdHMoQ2xpZW50RXJyb3IsIEh0dHBFcnJvcilcbiAgbmFtZUZ1bmMoQ2xpZW50RXJyb3IsIGNsYXNzTmFtZSlcblxuICBDbGllbnRFcnJvci5wcm90b3R5cGUuc3RhdHVzID0gY29kZVxuICBDbGllbnRFcnJvci5wcm90b3R5cGUuc3RhdHVzQ29kZSA9IGNvZGVcbiAgQ2xpZW50RXJyb3IucHJvdG90eXBlLmV4cG9zZSA9IHRydWVcblxuICByZXR1cm4gQ2xpZW50RXJyb3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdHJ1Y3RvciBmb3IgYSBzZXJ2ZXIgZXJyb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlckVycm9yQ29uc3RydWN0b3IgKEh0dHBFcnJvciwgbmFtZSwgY29kZSkge1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZS5tYXRjaCgvRXJyb3IkLykgPyBuYW1lIDogbmFtZSArICdFcnJvcidcblxuICBmdW5jdGlvbiBTZXJ2ZXJFcnJvciAobWVzc2FnZSkge1xuICAgIC8vIGNyZWF0ZSB0aGUgZXJyb3Igb2JqZWN0XG4gICAgdmFyIG1zZyA9IG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiBzdGF0dXNlc1tjb2RlXVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKVxuXG4gICAgLy8gY2FwdHVyZSBhIHN0YWNrIHRyYWNlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gcG9pbnRcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIFNlcnZlckVycm9yKVxuXG4gICAgLy8gYWRqdXN0IHRoZSBbW1Byb3RvdHlwZV1dXG4gICAgc2V0UHJvdG90eXBlT2YoZXJyLCBTZXJ2ZXJFcnJvci5wcm90b3R5cGUpXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdtZXNzYWdlJywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBtc2csXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbmFtZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICduYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY2xhc3NOYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgaW5oZXJpdHMoU2VydmVyRXJyb3IsIEh0dHBFcnJvcilcbiAgbmFtZUZ1bmMoU2VydmVyRXJyb3IsIGNsYXNzTmFtZSlcblxuICBTZXJ2ZXJFcnJvci5wcm90b3R5cGUuc3RhdHVzID0gY29kZVxuICBTZXJ2ZXJFcnJvci5wcm90b3R5cGUuc3RhdHVzQ29kZSA9IGNvZGVcbiAgU2VydmVyRXJyb3IucHJvdG90eXBlLmV4cG9zZSA9IGZhbHNlXG5cbiAgcmV0dXJuIFNlcnZlckVycm9yXG59XG5cbi8qKlxuICogU2V0IHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24sIGlmIHBvc3NpYmxlLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBuYW1lRnVuYyAoZnVuYywgbmFtZSkge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnVuYywgJ25hbWUnKVxuXG4gIGlmIChkZXNjICYmIGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgZGVzYy52YWx1ZSA9IG5hbWVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuYywgJ25hbWUnLCBkZXNjKVxuICB9XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGV4cG9ydHMgb2JqZWN0IHdpdGggY29uc3RydWN0b3JzIGZvciBldmVyeSBlcnJvciBjbGFzcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVDb25zdHJ1Y3RvckV4cG9ydHMgKGV4cG9ydHMsIGNvZGVzLCBIdHRwRXJyb3IpIHtcbiAgY29kZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29kZSAoY29kZSkge1xuICAgIHZhciBDb2RlRXJyb3JcbiAgICB2YXIgbmFtZSA9IHRvSWRlbnRpZmllcihzdGF0dXNlc1tjb2RlXSlcblxuICAgIHN3aXRjaCAoY29kZUNsYXNzKGNvZGUpKSB7XG4gICAgICBjYXNlIDQwMDpcbiAgICAgICAgQ29kZUVycm9yID0gY3JlYXRlQ2xpZW50RXJyb3JDb25zdHJ1Y3RvcihIdHRwRXJyb3IsIG5hbWUsIGNvZGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgQ29kZUVycm9yID0gY3JlYXRlU2VydmVyRXJyb3JDb25zdHJ1Y3RvcihIdHRwRXJyb3IsIG5hbWUsIGNvZGUpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKENvZGVFcnJvcikge1xuICAgICAgLy8gZXhwb3J0IHRoZSBjb25zdHJ1Y3RvclxuICAgICAgZXhwb3J0c1tjb2RlXSA9IENvZGVFcnJvclxuICAgICAgZXhwb3J0c1tuYW1lXSA9IENvZGVFcnJvclxuICAgIH1cbiAgfSlcblxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICBleHBvcnRzW1wiSSdtYXRlYXBvdFwiXSA9IGRlcHJlY2F0ZS5mdW5jdGlvbihleHBvcnRzLkltQVRlYXBvdCxcbiAgICAnXCJJXFwnbWF0ZWFwb3RcIjsgdXNlIFwiSW1BVGVhcG90XCIgaW5zdGVhZCcpXG59XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gICAgfVxuICB9XG59XG4iLCJjb25zdCB7IHBhdGhUb1JlZ2V4cCwgY29tcGlsZSwgcGFyc2UgfSA9IHJlcXVpcmUoJ3BhdGgtdG8tcmVnZXhwJyk7XG5jb25zdCB7IHBhcnNlOiBwYXJzZVVybCwgZm9ybWF0OiBmb3JtYXRVcmwgfSA9IHJlcXVpcmUoJ3VybCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgcm91dGluZyBMYXllciB3aXRoIGdpdmVuIGBtZXRob2RgLCBgcGF0aGAsIGFuZCBgbWlkZGxld2FyZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBwYXRoIFBhdGggc3RyaW5nIG9yIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IG1ldGhvZHMgQXJyYXkgb2YgSFRUUCB2ZXJicy5cbiAqIEBwYXJhbSB7QXJyYXl9IG1pZGRsZXdhcmUgTGF5ZXIgY2FsbGJhY2svbWlkZGxld2FyZSBvciBzZXJpZXMgb2YuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdHNcbiAqIEBwYXJhbSB7U3RyaW5nPX0gb3B0cy5uYW1lIHJvdXRlIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nPX0gb3B0cy5zZW5zaXRpdmUgY2FzZSBzZW5zaXRpdmUgKGRlZmF1bHQ6IGZhbHNlKVxuICogQHBhcmFtIHtTdHJpbmc9fSBvcHRzLnN0cmljdCByZXF1aXJlIHRoZSB0cmFpbGluZyBzbGFzaCAoZGVmYXVsdDogZmFsc2UpXG4gKiBAcmV0dXJucyB7TGF5ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIExheWVyKHBhdGgsIG1ldGhvZHMsIG1pZGRsZXdhcmUsIG9wdHMpIHtcbiAgdGhpcy5vcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5uYW1lID0gdGhpcy5vcHRzLm5hbWUgfHwgbnVsbDtcbiAgdGhpcy5tZXRob2RzID0gW107XG4gIHRoaXMucGFyYW1OYW1lcyA9IFtdO1xuICB0aGlzLnN0YWNrID0gQXJyYXkuaXNBcnJheShtaWRkbGV3YXJlKSA/IG1pZGRsZXdhcmUgOiBbbWlkZGxld2FyZV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsID0gdGhpcy5tZXRob2RzLnB1c2gobWV0aG9kc1tpXS50b1VwcGVyQ2FzZSgpKTtcbiAgICBpZiAodGhpcy5tZXRob2RzW2wtMV0gPT09ICdHRVQnKSB0aGlzLm1ldGhvZHMudW5zaGlmdCgnSEVBRCcpO1xuICB9XG5cbiAgLy8gZW5zdXJlIG1pZGRsZXdhcmUgaXMgYSBmdW5jdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBmbiA9IHRoaXMuc3RhY2tbaV07XG4gICAgY29uc3QgdHlwZSA9ICh0eXBlb2YgZm4pO1xuICAgIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHttZXRob2RzLnRvU3RyaW5nKCl9IFxcYCR7dGhpcy5vcHRzLm5hbWUgfHwgcGF0aH1cXGA6IFxcYG1pZGRsZXdhcmVcXGAgbXVzdCBiZSBhIGZ1bmN0aW9uLCBub3QgXFxgJHt0eXBlfVxcYGBcbiAgICAgICk7XG4gIH1cblxuICB0aGlzLnBhdGggPSBwYXRoO1xuICB0aGlzLnJlZ2V4cCA9IHBhdGhUb1JlZ2V4cChwYXRoLCB0aGlzLnBhcmFtTmFtZXMsIHRoaXMub3B0cyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciByZXF1ZXN0IGBwYXRoYCBtYXRjaGVzIHJvdXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cblxuTGF5ZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgcmV0dXJuIHRoaXMucmVnZXhwLnRlc3QocGF0aCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgbWFwIG9mIFVSTCBwYXJhbWV0ZXJzIGZvciBnaXZlbiBgcGF0aGAgYW5kIGBwYXJhbU5hbWVzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gY2FwdHVyZXNcbiAqIEBwYXJhbSB7T2JqZWN0PX0gZXhpc3RpbmdQYXJhbXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbkxheWVyLnByb3RvdHlwZS5wYXJhbXMgPSBmdW5jdGlvbiAocGF0aCwgY2FwdHVyZXMsIGV4aXN0aW5nUGFyYW1zKSB7XG4gIGNvbnN0IHBhcmFtcyA9IGV4aXN0aW5nUGFyYW1zIHx8IHt9O1xuXG4gIGZvciAobGV0IGxlbiA9IGNhcHR1cmVzLmxlbmd0aCwgaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgaWYgKHRoaXMucGFyYW1OYW1lc1tpXSkge1xuICAgICAgY29uc3QgYyA9IGNhcHR1cmVzW2ldO1xuICAgICAgcGFyYW1zW3RoaXMucGFyYW1OYW1lc1tpXS5uYW1lXSA9IGMgPyBzYWZlRGVjb2RlVVJJQ29tcG9uZW50KGMpIDogYztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFycmF5IG9mIHJlZ2V4cCB1cmwgcGF0aCBjYXB0dXJlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybnMge0FycmF5LjxTdHJpbmc+fVxuICogQHByaXZhdGVcbiAqL1xuXG5MYXllci5wcm90b3R5cGUuY2FwdHVyZXMgPSBmdW5jdGlvbiAocGF0aCkge1xuICByZXR1cm4gdGhpcy5vcHRzLmlnbm9yZUNhcHR1cmVzID8gW10gOiBwYXRoLm1hdGNoKHRoaXMucmVnZXhwKS5zbGljZSgxKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgVVJMIGZvciByb3V0ZSB1c2luZyBnaXZlbiBgcGFyYW1zYC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHJvdXRlID0gbmV3IExheWVyKCcvdXNlcnMvOmlkJywgWydHRVQnXSwgZm4pO1xuICpcbiAqIHJvdXRlLnVybCh7IGlkOiAxMjMgfSk7IC8vID0+IFwiL3VzZXJzLzEyM1wiXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHVybCBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5MYXllci5wcm90b3R5cGUudXJsID0gZnVuY3Rpb24gKHBhcmFtcywgb3B0aW9ucykge1xuICBsZXQgYXJncyA9IHBhcmFtcztcbiAgY29uc3QgdXJsID0gdGhpcy5wYXRoLnJlcGxhY2UoL1xcKFxcLlxcKlxcKS9nLCAnJyk7XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdG9QYXRoID0gY29tcGlsZSh1cmwsIG9wdGlvbnMpO1xuICBsZXQgcmVwbGFjZWQ7XG5cbiAgY29uc3QgdG9rZW5zID0gcGFyc2UodXJsKTtcbiAgbGV0IHJlcGxhY2UgPSB7fTtcblxuICBpZiAoYXJncyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgZm9yIChsZXQgbGVuID0gdG9rZW5zLmxlbmd0aCwgaT0wLCBqPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgIGlmICh0b2tlbnNbaV0ubmFtZSkgcmVwbGFjZVt0b2tlbnNbaV0ubmFtZV0gPSBhcmdzW2orK107XG4gICAgfVxuICB9IGVsc2UgaWYgKHRva2Vucy5zb21lKHRva2VuID0+IHRva2VuLm5hbWUpKSB7XG4gICAgcmVwbGFjZSA9IHBhcmFtcztcbiAgfSBlbHNlIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBwYXJhbXM7XG4gIH1cblxuICByZXBsYWNlZCA9IHRvUGF0aChyZXBsYWNlKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnF1ZXJ5KSB7XG4gICAgcmVwbGFjZWQgPSBwYXJzZVVybChyZXBsYWNlZCk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVwbGFjZWQuc2VhcmNoID0gb3B0aW9ucy5xdWVyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwbGFjZWQuc2VhcmNoID0gdW5kZWZpbmVkO1xuICAgICAgcmVwbGFjZWQucXVlcnkgPSBvcHRpb25zLnF1ZXJ5O1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0VXJsKHJlcGxhY2VkKTtcbiAgfVxuXG4gIHJldHVybiByZXBsYWNlZDtcbn07XG5cbi8qKlxuICogUnVuIHZhbGlkYXRpb25zIG9uIHJvdXRlIG5hbWVkIHBhcmFtZXRlcnMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiByb3V0ZXJcbiAqICAgLnBhcmFtKCd1c2VyJywgZnVuY3Rpb24gKGlkLCBjdHgsIG5leHQpIHtcbiAqICAgICBjdHgudXNlciA9IHVzZXJzW2lkXTtcbiAqICAgICBpZiAoIXVzZXIpIHJldHVybiBjdHguc3RhdHVzID0gNDA0O1xuICogICAgIG5leHQoKTtcbiAqICAgfSlcbiAqICAgLmdldCgnL3VzZXJzLzp1c2VyJywgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICogICAgIGN0eC5ib2R5ID0gY3R4LnVzZXI7XG4gKiAgIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtaWRkbGV3YXJlXG4gKiBAcmV0dXJucyB7TGF5ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5cbkxheWVyLnByb3RvdHlwZS5wYXJhbSA9IGZ1bmN0aW9uIChwYXJhbSwgZm4pIHtcbiAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrO1xuICBjb25zdCBwYXJhbXMgPSB0aGlzLnBhcmFtTmFtZXM7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgcmV0dXJuIGZuLmNhbGwodGhpcywgY3R4LnBhcmFtc1twYXJhbV0sIGN0eCwgbmV4dCk7XG4gIH07XG4gIG1pZGRsZXdhcmUucGFyYW0gPSBwYXJhbTtcblxuICBjb25zdCBuYW1lcyA9IHBhcmFtcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcC5uYW1lO1xuICB9KTtcblxuICBjb25zdCB4ID0gbmFtZXMuaW5kZXhPZihwYXJhbSk7XG4gIGlmICh4ID4gLTEpIHtcbiAgICAvLyBpdGVyYXRlIHRocm91Z2ggdGhlIHN0YWNrLCB0byBmaWd1cmUgb3V0IHdoZXJlIHRvIHBsYWNlIHRoZSBoYW5kbGVyIGZuXG4gICAgc3RhY2suc29tZShmdW5jdGlvbiAoZm4sIGkpIHtcbiAgICAgIC8vIHBhcmFtIGhhbmRsZXJzIGFyZSBhbHdheXMgZmlyc3QsIHNvIHdoZW4gd2UgZmluZCBhbiBmbiB3L28gYSBwYXJhbSBwcm9wZXJ0eSwgc3RvcCBoZXJlXG4gICAgICAvLyBpZiB0aGUgcGFyYW0gaGFuZGxlciBhdCB0aGlzIHBhcnQgb2YgdGhlIHN0YWNrIGNvbWVzIGFmdGVyIHRoZSBvbmUgd2UgYXJlIGFkZGluZywgc3RvcCBoZXJlXG4gICAgICBpZiAoIWZuLnBhcmFtIHx8IG5hbWVzLmluZGV4T2YoZm4ucGFyYW0pID4geCkge1xuICAgICAgICAvLyBpbmplY3QgdGhpcyBwYXJhbSBoYW5kbGVyIHJpZ2h0IGJlZm9yZSB0aGUgY3VycmVudCBpdGVtXG4gICAgICAgIHN0YWNrLnNwbGljZShpLCAwLCBtaWRkbGV3YXJlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIHRoZW4gYnJlYWsgdGhlIGxvb3BcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQcmVmaXggcm91dGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJucyB7TGF5ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5cbkxheWVyLnByb3RvdHlwZS5zZXRQcmVmaXggPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gIGlmICh0aGlzLnBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSAodGhpcy5wYXRoICE9PSAnLycgfHwgdGhpcy5vcHRzLnN0cmljdCA9PT0gdHJ1ZSkgPyBgJHtwcmVmaXh9JHt0aGlzLnBhdGh9YCA6IHByZWZpeFxuICAgIHRoaXMucGFyYW1OYW1lcyA9IFtdO1xuICAgIHRoaXMucmVnZXhwID0gcGF0aFRvUmVnZXhwKHRoaXMucGF0aCwgdGhpcy5wYXJhbU5hbWVzLCB0aGlzLm9wdHMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNhZmUgZGVjb2RlVVJJQ29tcG9uZW50LCB3b24ndCB0aHJvdyBhbnkgZXJyb3IuXG4gKiBJZiBgZGVjb2RlVVJJQ29tcG9uZW50YCBlcnJvciBoYXBwZW4sIGp1c3QgcmV0dXJuIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybnMge1N0cmluZ30gVVJMIGRlY29kZSBvcmlnaW5hbCBzdHJpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhZmVEZWNvZGVVUklDb21wb25lbnQodGV4dCkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodGV4dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuIiwiLyoqXG4gKiBSRVNUZnVsIHJlc291cmNlIHJvdXRpbmcgbWlkZGxld2FyZSBmb3Iga29hLlxuICpcbiAqIEBhdXRob3IgQWxleCBNaW5nb2lhIDx0YWxrQGFsZXhtaW5nb2lhLmNvbT5cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4bWluZ29pYS9rb2Etcm91dGVyXG4gKi9cblxuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdrb2Etcm91dGVyJyk7XG5jb25zdCBjb21wb3NlID0gcmVxdWlyZSgna29hLWNvbXBvc2UnKTtcbmNvbnN0IEh0dHBFcnJvciA9IHJlcXVpcmUoJ2h0dHAtZXJyb3JzJyk7XG5jb25zdCBtZXRob2RzID0gcmVxdWlyZSgnbWV0aG9kcycpO1xuY29uc3QgTGF5ZXIgPSByZXF1aXJlKCcuL2xheWVyJyk7XG5jb25zdCB7IHBhdGhUb1JlZ2V4cCB9ID0gcmVxdWlyZSgncGF0aC10by1yZWdleHAnKTtcblxuLyoqXG4gKiBAbW9kdWxlIGtvYS1yb3V0ZXJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlcjtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgcm91dGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogQmFzaWMgdXNhZ2U6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgS29hID0gcmVxdWlyZSgna29hJyk7XG4gKiBjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdAa29hL3JvdXRlcicpO1xuICpcbiAqIGNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcbiAqIGNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAqXG4gKiByb3V0ZXIuZ2V0KCcvJywgKGN0eCwgbmV4dCkgPT4ge1xuICogICAvLyBjdHgucm91dGVyIGF2YWlsYWJsZVxuICogfSk7XG4gKlxuICogYXBwXG4gKiAgIC51c2Uocm91dGVyLnJvdXRlcygpKVxuICogICAudXNlKHJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcbiAqIGBgYFxuICpcbiAqIEBhbGlhcyBtb2R1bGU6a29hLXJvdXRlclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRzXG4gKiBAcGFyYW0ge1N0cmluZz19IG9wdHMucHJlZml4IHByZWZpeCByb3V0ZXIgcGF0aHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmZ1bmN0aW9uIFJvdXRlcihvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSb3V0ZXIpKSByZXR1cm4gbmV3IFJvdXRlcihvcHRzKTtcblxuICB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1ldGhvZHMgPSB0aGlzLm9wdHMubWV0aG9kcyB8fCBbXG4gICAgJ0hFQUQnLFxuICAgICdPUFRJT05TJyxcbiAgICAnR0VUJyxcbiAgICAnUFVUJyxcbiAgICAnUEFUQ0gnLFxuICAgICdQT1NUJyxcbiAgICAnREVMRVRFJ1xuICBdO1xuXG4gIHRoaXMucGFyYW1zID0ge307XG4gIHRoaXMuc3RhY2sgPSBbXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGByb3V0ZXIudmVyYigpYCBtZXRob2RzLCB3aGVyZSAqdmVyYiogaXMgb25lIG9mIHRoZSBIVFRQIHZlcmJzIHN1Y2hcbiAqIGFzIGByb3V0ZXIuZ2V0KClgIG9yIGByb3V0ZXIucG9zdCgpYC5cbiAqXG4gKiBNYXRjaCBVUkwgcGF0dGVybnMgdG8gY2FsbGJhY2sgZnVuY3Rpb25zIG9yIGNvbnRyb2xsZXIgYWN0aW9ucyB1c2luZyBgcm91dGVyLnZlcmIoKWAsXG4gKiB3aGVyZSAqKnZlcmIqKiBpcyBvbmUgb2YgdGhlIEhUVFAgdmVyYnMgc3VjaCBhcyBgcm91dGVyLmdldCgpYCBvciBgcm91dGVyLnBvc3QoKWAuXG4gKlxuICogQWRkaXRpb25hbHksIGByb3V0ZXIuYWxsKClgIGNhbiBiZSB1c2VkIHRvIG1hdGNoIGFnYWluc3QgYWxsIG1ldGhvZHMuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcm91dGVyXG4gKiAgIC5nZXQoJy8nLCAoY3R4LCBuZXh0KSA9PiB7XG4gKiAgICAgY3R4LmJvZHkgPSAnSGVsbG8gV29ybGQhJztcbiAqICAgfSlcbiAqICAgLnBvc3QoJy91c2VycycsIChjdHgsIG5leHQpID0+IHtcbiAqICAgICAvLyAuLi5cbiAqICAgfSlcbiAqICAgLnB1dCgnL3VzZXJzLzppZCcsIChjdHgsIG5leHQpID0+IHtcbiAqICAgICAvLyAuLi5cbiAqICAgfSlcbiAqICAgLmRlbCgnL3VzZXJzLzppZCcsIChjdHgsIG5leHQpID0+IHtcbiAqICAgICAvLyAuLi5cbiAqICAgfSlcbiAqICAgLmFsbCgnL3VzZXJzLzppZCcsIChjdHgsIG5leHQpID0+IHtcbiAqICAgICAvLyAuLi5cbiAqICAgfSk7XG4gKiBgYGBcbiAqXG4gKiBXaGVuIGEgcm91dGUgaXMgbWF0Y2hlZCwgaXRzIHBhdGggaXMgYXZhaWxhYmxlIGF0IGBjdHguX21hdGNoZWRSb3V0ZWAgYW5kIGlmIG5hbWVkLFxuICogdGhlIG5hbWUgaXMgYXZhaWxhYmxlIGF0IGBjdHguX21hdGNoZWRSb3V0ZU5hbWVgXG4gKlxuICogUm91dGUgcGF0aHMgd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNpbmdcbiAqIFtwYXRoLXRvLXJlZ2V4cF0oaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwKS5cbiAqXG4gKiBRdWVyeSBzdHJpbmdzIHdpbGwgbm90IGJlIGNvbnNpZGVyZWQgd2hlbiBtYXRjaGluZyByZXF1ZXN0cy5cbiAqXG4gKiAjIyMjIE5hbWVkIHJvdXRlc1xuICpcbiAqIFJvdXRlcyBjYW4gb3B0aW9uYWxseSBoYXZlIG5hbWVzLiBUaGlzIGFsbG93cyBnZW5lcmF0aW9uIG9mIFVSTHMgYW5kIGVhc3lcbiAqIHJlbmFtaW5nIG9mIFVSTHMgZHVyaW5nIGRldmVsb3BtZW50LlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHJvdXRlci5nZXQoJ3VzZXInLCAnL3VzZXJzLzppZCcsIChjdHgsIG5leHQpID0+IHtcbiAqICAvLyAuLi5cbiAqIH0pO1xuICpcbiAqIHJvdXRlci51cmwoJ3VzZXInLCAzKTtcbiAqIC8vID0+IFwiL3VzZXJzLzNcIlxuICogYGBgXG4gKlxuICogIyMjIyBNdWx0aXBsZSBtaWRkbGV3YXJlXG4gKlxuICogTXVsdGlwbGUgbWlkZGxld2FyZSBtYXkgYmUgZ2l2ZW46XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcm91dGVyLmdldChcbiAqICAgJy91c2Vycy86aWQnLFxuICogICAoY3R4LCBuZXh0KSA9PiB7XG4gKiAgICAgcmV0dXJuIFVzZXIuZmluZE9uZShjdHgucGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uKHVzZXIpIHtcbiAqICAgICAgIGN0eC51c2VyID0gdXNlcjtcbiAqICAgICAgIG5leHQoKTtcbiAqICAgICB9KTtcbiAqICAgfSxcbiAqICAgY3R4ID0+IHtcbiAqICAgICBjb25zb2xlLmxvZyhjdHgudXNlcik7XG4gKiAgICAgLy8gPT4geyBpZDogMTcsIG5hbWU6IFwiQWxleFwiIH1cbiAqICAgfVxuICogKTtcbiAqIGBgYFxuICpcbiAqICMjIyBOZXN0ZWQgcm91dGVyc1xuICpcbiAqIE5lc3Rpbmcgcm91dGVycyBpcyBzdXBwb3J0ZWQ6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgZm9ydW1zID0gbmV3IFJvdXRlcigpO1xuICogY29uc3QgcG9zdHMgPSBuZXcgUm91dGVyKCk7XG4gKlxuICogcG9zdHMuZ2V0KCcvJywgKGN0eCwgbmV4dCkgPT4gey4uLn0pO1xuICogcG9zdHMuZ2V0KCcvOnBpZCcsIChjdHgsIG5leHQpID0+IHsuLi59KTtcbiAqIGZvcnVtcy51c2UoJy9mb3J1bXMvOmZpZC9wb3N0cycsIHBvc3RzLnJvdXRlcygpLCBwb3N0cy5hbGxvd2VkTWV0aG9kcygpKTtcbiAqXG4gKiAvLyByZXNwb25kcyB0byBcIi9mb3J1bXMvMTIzL3Bvc3RzXCIgYW5kIFwiL2ZvcnVtcy8xMjMvcG9zdHMvMTIzXCJcbiAqIGFwcC51c2UoZm9ydW1zLnJvdXRlcygpKTtcbiAqIGBgYFxuICpcbiAqICMjIyMgUm91dGVyIHByZWZpeGVzXG4gKlxuICogUm91dGUgcGF0aHMgY2FuIGJlIHByZWZpeGVkIGF0IHRoZSByb3V0ZXIgbGV2ZWw6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcih7XG4gKiAgIHByZWZpeDogJy91c2VycydcbiAqIH0pO1xuICpcbiAqIHJvdXRlci5nZXQoJy8nLCAuLi4pOyAvLyByZXNwb25kcyB0byBcIi91c2Vyc1wiXG4gKiByb3V0ZXIuZ2V0KCcvOmlkJywgLi4uKTsgLy8gcmVzcG9uZHMgdG8gXCIvdXNlcnMvOmlkXCJcbiAqIGBgYFxuICpcbiAqICMjIyMgVVJMIHBhcmFtZXRlcnNcbiAqXG4gKiBOYW1lZCByb3V0ZSBwYXJhbWV0ZXJzIGFyZSBjYXB0dXJlZCBhbmQgYWRkZWQgdG8gYGN0eC5wYXJhbXNgLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHJvdXRlci5nZXQoJy86Y2F0ZWdvcnkvOnRpdGxlJywgKGN0eCwgbmV4dCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhjdHgucGFyYW1zKTtcbiAqICAgLy8gPT4geyBjYXRlZ29yeTogJ3Byb2dyYW1taW5nJywgdGl0bGU6ICdob3ctdG8tbm9kZScgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgW3BhdGgtdG8tcmVnZXhwXShodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHApIG1vZHVsZSBpc1xuICogdXNlZCB0byBjb252ZXJ0IHBhdGhzIHRvIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gKlxuICogQG5hbWUgZ2V0fHB1dHxwb3N0fHBhdGNofGRlbGV0ZXxkZWxcbiAqIEBtZW1iZXJvZiBtb2R1bGU6a29hLXJvdXRlci5wcm90b3R5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gbWlkZGxld2FyZSByb3V0ZSBtaWRkbGV3YXJlKHMpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayByb3V0ZSBjYWxsYmFja1xuICogQHJldHVybnMge1JvdXRlcn1cbiAqL1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgZnVuY3Rpb24gc2V0TWV0aG9kVmVyYihtZXRob2QpIHtcbiAgICBSb3V0ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihuYW1lLCBwYXRoLCBtaWRkbGV3YXJlKSB7XG4gICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgfHwgcGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICBtaWRkbGV3YXJlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pZGRsZXdhcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBwYXRoID0gbmFtZTtcbiAgICAgICAgbmFtZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVnaXN0ZXIocGF0aCwgW21ldGhvZF0sIG1pZGRsZXdhcmUsIHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cbiAgc2V0TWV0aG9kVmVyYihtZXRob2RzW2ldKTtcbn1cblxuLy8gQWxpYXMgZm9yIGByb3V0ZXIuZGVsZXRlKClgIGJlY2F1c2UgZGVsZXRlIGlzIGEgcmVzZXJ2ZWQgd29yZFxuUm91dGVyLnByb3RvdHlwZS5kZWwgPSBSb3V0ZXIucHJvdG90eXBlWydkZWxldGUnXTtcblxuLyoqXG4gKiBVc2UgZ2l2ZW4gbWlkZGxld2FyZS5cbiAqXG4gKiBNaWRkbGV3YXJlIHJ1biBpbiB0aGUgb3JkZXIgdGhleSBhcmUgZGVmaW5lZCBieSBgLnVzZSgpYC4gVGhleSBhcmUgaW52b2tlZFxuICogc2VxdWVudGlhbGx5LCByZXF1ZXN0cyBzdGFydCBhdCB0aGUgZmlyc3QgbWlkZGxld2FyZSBhbmQgd29yayB0aGVpciB3YXlcbiAqIFwiZG93blwiIHRoZSBtaWRkbGV3YXJlIHN0YWNrLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogLy8gc2Vzc2lvbiBtaWRkbGV3YXJlIHdpbGwgcnVuIGJlZm9yZSBhdXRob3JpemVcbiAqIHJvdXRlclxuICogICAudXNlKHNlc3Npb24oKSlcbiAqICAgLnVzZShhdXRob3JpemUoKSk7XG4gKlxuICogLy8gdXNlIG1pZGRsZXdhcmUgb25seSB3aXRoIGdpdmVuIHBhdGhcbiAqIHJvdXRlci51c2UoJy91c2VycycsIHVzZXJBdXRoKCkpO1xuICpcbiAqIC8vIG9yIHdpdGggYW4gYXJyYXkgb2YgcGF0aHNcbiAqIHJvdXRlci51c2UoWycvdXNlcnMnLCAnL2FkbWluJ10sIHVzZXJBdXRoKCkpO1xuICpcbiAqIGFwcC51c2Uocm91dGVyLnJvdXRlcygpKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nPX0gcGF0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWlkZGxld2FyZVxuICogQHBhcmFtIHtGdW5jdGlvbj19IC4uLlxuICogQHJldHVybnMge1JvdXRlcn1cbiAqL1xuXG5Sb3V0ZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgcm91dGVyID0gdGhpcztcbiAgY29uc3QgbWlkZGxld2FyZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIGxldCBwYXRoO1xuXG4gIC8vIHN1cHBvcnQgYXJyYXkgb2YgcGF0aHNcbiAgaWYgKEFycmF5LmlzQXJyYXkobWlkZGxld2FyZVswXSkgJiYgdHlwZW9mIG1pZGRsZXdhcmVbMF1bMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IGFyclBhdGhzID0gbWlkZGxld2FyZVswXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyclBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwID0gYXJyUGF0aHNbaV07XG4gICAgICByb3V0ZXIudXNlLmFwcGx5KHJvdXRlciwgW3BdLmNvbmNhdChtaWRkbGV3YXJlLnNsaWNlKDEpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25zdCBoYXNQYXRoID0gdHlwZW9mIG1pZGRsZXdhcmVbMF0gPT09ICdzdHJpbmcnO1xuICBpZiAoaGFzUGF0aCkgcGF0aCA9IG1pZGRsZXdhcmUuc2hpZnQoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1pZGRsZXdhcmUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtID0gbWlkZGxld2FyZVtpXTtcbiAgICBpZiAobS5yb3V0ZXIpIHtcbiAgICAgIGNvbnN0IGNsb25lUm91dGVyID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFJvdXRlci5wcm90b3R5cGUpLCBtLnJvdXRlciwge1xuICAgICAgICBzdGFjazogbS5yb3V0ZXIuc3RhY2suc2xpY2UoMClcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNsb25lUm91dGVyLnN0YWNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5lc3RlZExheWVyID0gY2xvbmVSb3V0ZXIuc3RhY2tbal07XG4gICAgICAgIGNvbnN0IGNsb25lTGF5ZXIgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIE9iamVjdC5jcmVhdGUoTGF5ZXIucHJvdG90eXBlKSxcbiAgICAgICAgICBuZXN0ZWRMYXllclxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChwYXRoKSBjbG9uZUxheWVyLnNldFByZWZpeChwYXRoKTtcbiAgICAgICAgaWYgKHJvdXRlci5vcHRzLnByZWZpeCkgY2xvbmVMYXllci5zZXRQcmVmaXgocm91dGVyLm9wdHMucHJlZml4KTtcbiAgICAgICAgcm91dGVyLnN0YWNrLnB1c2goY2xvbmVMYXllcik7XG4gICAgICAgIGNsb25lUm91dGVyLnN0YWNrW2pdID0gY2xvbmVMYXllcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdXRlci5wYXJhbXMpIHtcbiAgICAgICAgZnVuY3Rpb24gc2V0Um91dGVyUGFyYW1zKHBhcmFtQXJyKSB7XG4gICAgICAgICAgY29uc3Qgcm91dGVyUGFyYW1zID0gcGFyYW1BcnI7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3V0ZXJQYXJhbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdXRlclBhcmFtc1tqXTtcbiAgICAgICAgICAgIGNsb25lUm91dGVyLnBhcmFtKGtleSwgcm91dGVyLnBhcmFtc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Um91dGVyUGFyYW1zKE9iamVjdC5rZXlzKHJvdXRlci5wYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgcGF0aFRvUmVnZXhwKHJvdXRlci5vcHRzLnByZWZpeCB8fCAnJywga2V5cyk7XG4gICAgICBjb25zdCByb3V0ZXJQcmVmaXhIYXNQYXJhbSA9IHJvdXRlci5vcHRzLnByZWZpeCAmJiBrZXlzLmxlbmd0aDtcbiAgICAgIHJvdXRlci5yZWdpc3RlcihwYXRoIHx8ICcoW15cXC9dKiknLCBbXSwgbSwgeyBlbmQ6IGZhbHNlLCBpZ25vcmVDYXB0dXJlczogIWhhc1BhdGggJiYgIXJvdXRlclByZWZpeEhhc1BhcmFtIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHBhdGggcHJlZml4IGZvciBhIFJvdXRlciBpbnN0YW5jZSB0aGF0IHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcm91dGVyLnByZWZpeCgnL3RoaW5ncy86dGhpbmdfaWQnKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeFxuICogQHJldHVybnMge1JvdXRlcn1cbiAqL1xuXG5Sb3V0ZXIucHJvdG90eXBlLnByZWZpeCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgcHJlZml4ID0gcHJlZml4LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgdGhpcy5vcHRzLnByZWZpeCA9IHByZWZpeDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuc3RhY2tbaV07XG4gICAgcm91dGUuc2V0UHJlZml4KHByZWZpeCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJucyByb3V0ZXIgbWlkZGxld2FyZSB3aGljaCBkaXNwYXRjaGVzIGEgcm91dGUgbWF0Y2hpbmcgdGhlIHJlcXVlc3QuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cblJvdXRlci5wcm90b3R5cGUucm91dGVzID0gUm91dGVyLnByb3RvdHlwZS5taWRkbGV3YXJlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCByb3V0ZXIgPSB0aGlzO1xuXG4gIGxldCBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGN0eCwgbmV4dCkge1xuICAgIGRlYnVnKCclcyAlcycsIGN0eC5tZXRob2QsIGN0eC5wYXRoKTtcblxuICAgIGNvbnN0IHBhdGggPSByb3V0ZXIub3B0cy5yb3V0ZXJQYXRoIHx8IGN0eC5yb3V0ZXJQYXRoIHx8IGN0eC5wYXRoO1xuICAgIGNvbnN0IG1hdGNoZWQgPSByb3V0ZXIubWF0Y2gocGF0aCwgY3R4Lm1ldGhvZCk7XG4gICAgbGV0IGxheWVyQ2hhaW47XG5cbiAgICBpZiAoY3R4Lm1hdGNoZWQpIHtcbiAgICAgIGN0eC5tYXRjaGVkLnB1c2guYXBwbHkoY3R4Lm1hdGNoZWQsIG1hdGNoZWQucGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5tYXRjaGVkID0gbWF0Y2hlZC5wYXRoO1xuICAgIH1cblxuICAgIGN0eC5yb3V0ZXIgPSByb3V0ZXI7XG5cbiAgICBpZiAoIW1hdGNoZWQucm91dGUpIHJldHVybiBuZXh0KCk7XG5cbiAgICBjb25zdCBtYXRjaGVkTGF5ZXJzID0gbWF0Y2hlZC5wYXRoQW5kTWV0aG9kXG4gICAgY29uc3QgbW9zdFNwZWNpZmljTGF5ZXIgPSBtYXRjaGVkTGF5ZXJzW21hdGNoZWRMYXllcnMubGVuZ3RoIC0gMV1cbiAgICBjdHguX21hdGNoZWRSb3V0ZSA9IG1vc3RTcGVjaWZpY0xheWVyLnBhdGg7XG4gICAgaWYgKG1vc3RTcGVjaWZpY0xheWVyLm5hbWUpIHtcbiAgICAgIGN0eC5fbWF0Y2hlZFJvdXRlTmFtZSA9IG1vc3RTcGVjaWZpY0xheWVyLm5hbWU7XG4gICAgfVxuXG4gICAgbGF5ZXJDaGFpbiA9IG1hdGNoZWRMYXllcnMucmVkdWNlKGZ1bmN0aW9uKG1lbW8sIGxheWVyKSB7XG4gICAgICBtZW1vLnB1c2goZnVuY3Rpb24oY3R4LCBuZXh0KSB7XG4gICAgICAgIGN0eC5jYXB0dXJlcyA9IGxheWVyLmNhcHR1cmVzKHBhdGgsIGN0eC5jYXB0dXJlcyk7XG4gICAgICAgIGN0eC5wYXJhbXMgPSBjdHgucmVxdWVzdC5wYXJhbXMgPSBsYXllci5wYXJhbXMocGF0aCwgY3R4LmNhcHR1cmVzLCBjdHgucGFyYW1zKTtcbiAgICAgICAgY3R4LnJvdXRlclBhdGggPSBsYXllci5wYXRoO1xuICAgICAgICBjdHgucm91dGVyTmFtZSA9IGxheWVyLm5hbWU7XG4gICAgICAgIGN0eC5fbWF0Y2hlZFJvdXRlID0gbGF5ZXIucGF0aDtcbiAgICAgICAgaWYgKGxheWVyLm5hbWUpIHtcbiAgICAgICAgICBjdHguX21hdGNoZWRSb3V0ZU5hbWUgPSBsYXllci5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZW1vLmNvbmNhdChsYXllci5zdGFjayk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGNvbXBvc2UobGF5ZXJDaGFpbikoY3R4LCBuZXh0KTtcbiAgfTtcblxuICBkaXNwYXRjaC5yb3V0ZXIgPSB0aGlzO1xuXG4gIHJldHVybiBkaXNwYXRjaDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBzZXBhcmF0ZSBtaWRkbGV3YXJlIGZvciByZXNwb25kaW5nIHRvIGBPUFRJT05TYCByZXF1ZXN0cyB3aXRoXG4gKiBhbiBgQWxsb3dgIGhlYWRlciBjb250YWluaW5nIHRoZSBhbGxvd2VkIG1ldGhvZHMsIGFzIHdlbGwgYXMgcmVzcG9uZGluZ1xuICogd2l0aCBgNDA1IE1ldGhvZCBOb3QgQWxsb3dlZGAgYW5kIGA1MDEgTm90IEltcGxlbWVudGVkYCBhcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IEtvYSA9IHJlcXVpcmUoJ2tvYScpO1xuICogY29uc3QgUm91dGVyID0gcmVxdWlyZSgnQGtvYS9yb3V0ZXInKTtcbiAqXG4gKiBjb25zdCBhcHAgPSBuZXcgS29hKCk7XG4gKiBjb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gKlxuICogYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpO1xuICogYXBwLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG4gKiBgYGBcbiAqXG4gKiAqKkV4YW1wbGUgd2l0aCBbQm9vbV0oaHR0cHM6Ly9naXRodWIuY29tL2hhcGlqcy9ib29tKSoqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgS29hID0gcmVxdWlyZSgna29hJyk7XG4gKiBjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdAa29hL3JvdXRlcicpO1xuICogY29uc3QgQm9vbSA9IHJlcXVpcmUoJ2Jvb20nKTtcbiAqXG4gKiBjb25zdCBhcHAgPSBuZXcgS29hKCk7XG4gKiBjb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gKlxuICogYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpO1xuICogYXBwLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoe1xuICogICB0aHJvdzogdHJ1ZSxcbiAqICAgbm90SW1wbGVtZW50ZWQ6ICgpID0+IG5ldyBCb29tLm5vdEltcGxlbWVudGVkKCksXG4gKiAgIG1ldGhvZE5vdEFsbG93ZWQ6ICgpID0+IG5ldyBCb29tLm1ldGhvZE5vdEFsbG93ZWQoKVxuICogfSkpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSBvcHRpb25zLnRocm93IHRocm93IGVycm9yIGluc3RlYWQgb2Ygc2V0dGluZyBzdGF0dXMgYW5kIGhlYWRlclxuICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdGlvbnMubm90SW1wbGVtZW50ZWQgdGhyb3cgdGhlIHJldHVybmVkIHZhbHVlIGluIHBsYWNlIG9mIHRoZSBkZWZhdWx0IE5vdEltcGxlbWVudGVkIGVycm9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gb3B0aW9ucy5tZXRob2ROb3RBbGxvd2VkIHRocm93IHRoZSByZXR1cm5lZCB2YWx1ZSBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBNZXRob2ROb3RBbGxvd2VkIGVycm9yXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxuUm91dGVyLnByb3RvdHlwZS5hbGxvd2VkTWV0aG9kcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBpbXBsZW1lbnRlZCA9IHRoaXMubWV0aG9kcztcblxuICByZXR1cm4gZnVuY3Rpb24gYWxsb3dlZE1ldGhvZHMoY3R4LCBuZXh0KSB7XG4gICAgcmV0dXJuIG5leHQoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYWxsb3dlZCA9IHt9O1xuXG4gICAgICBpZiAoIWN0eC5zdGF0dXMgfHwgY3R4LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3R4Lm1hdGNoZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByb3V0ZSA9IGN0eC5tYXRjaGVkW2ldO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm91dGUubWV0aG9kcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gcm91dGUubWV0aG9kc1tqXTtcbiAgICAgICAgICAgIGFsbG93ZWRbbWV0aG9kXSA9IG1ldGhvZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGxvd2VkQXJyID0gT2JqZWN0LmtleXMoYWxsb3dlZCk7XG5cbiAgICAgICAgaWYgKCF+aW1wbGVtZW50ZWQuaW5kZXhPZihjdHgubWV0aG9kKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnRocm93KSB7XG4gICAgICAgICAgICBsZXQgbm90SW1wbGVtZW50ZWRUaHJvd2FibGUgPSAodHlwZW9mIG9wdGlvbnMubm90SW1wbGVtZW50ZWQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICA/IG9wdGlvbnMubm90SW1wbGVtZW50ZWQoKSAgLy8gc2V0IHdoYXRldmVyIHRoZSB1c2VyIHJldHVybnMgZnJvbSB0aGVpciBmdW5jdGlvblxuICAgICAgICAgICAgOiBuZXcgSHR0cEVycm9yLk5vdEltcGxlbWVudGVkKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5vdEltcGxlbWVudGVkVGhyb3dhYmxlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguc3RhdHVzID0gNTAxO1xuICAgICAgICAgICAgY3R4LnNldCgnQWxsb3cnLCBhbGxvd2VkQXJyLmpvaW4oJywgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhbGxvd2VkQXJyLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChjdHgubWV0aG9kID09PSAnT1BUSU9OUycpIHtcbiAgICAgICAgICAgIGN0eC5zdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICBjdHguYm9keSA9ICcnO1xuICAgICAgICAgICAgY3R4LnNldCgnQWxsb3cnLCBhbGxvd2VkQXJyLmpvaW4oJywgJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWFsbG93ZWRbY3R4Lm1ldGhvZF0pIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRocm93KSB7XG4gICAgICAgICAgICAgIGxldCBub3RBbGxvd2VkVGhyb3dhYmxlID0gKHR5cGVvZiBvcHRpb25zLm1ldGhvZE5vdEFsbG93ZWQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgID8gb3B0aW9ucy5tZXRob2ROb3RBbGxvd2VkKCkgLy8gc2V0IHdoYXRldmVyIHRoZSB1c2VyIHJldHVybnMgZnJvbSB0aGVpciBmdW5jdGlvblxuICAgICAgICAgICAgICA6IG5ldyBIdHRwRXJyb3IuTWV0aG9kTm90QWxsb3dlZCgpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5vdEFsbG93ZWRUaHJvd2FibGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjdHguc3RhdHVzID0gNDA1O1xuICAgICAgICAgICAgICBjdHguc2V0KCdBbGxvdycsIGFsbG93ZWRBcnIuam9pbignLCAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHJvdXRlIHdpdGggYWxsIG1ldGhvZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgT3B0aW9uYWwuXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtGdW5jdGlvbj19IG1pZGRsZXdhcmUgWW91IG1heSBhbHNvIHBhc3MgbXVsdGlwbGUgbWlkZGxld2FyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7Um91dGVyfVxuICogQHByaXZhdGVcbiAqL1xuXG5Sb3V0ZXIucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIChuYW1lLCBwYXRoLCBtaWRkbGV3YXJlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICBtaWRkbGV3YXJlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgfSBlbHNlIHtcbiAgICBtaWRkbGV3YXJlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBwYXRoID0gbmFtZTtcbiAgICBuYW1lID0gbnVsbDtcbiAgfVxuXG4gIHRoaXMucmVnaXN0ZXIocGF0aCwgbWV0aG9kcywgbWlkZGxld2FyZSwgeyBuYW1lIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZWRpcmVjdCBgc291cmNlYCB0byBgZGVzdGluYXRpb25gIFVSTCB3aXRoIG9wdGlvbmFsIDMweCBzdGF0dXMgYGNvZGVgLlxuICpcbiAqIEJvdGggYHNvdXJjZWAgYW5kIGBkZXN0aW5hdGlvbmAgY2FuIGJlIHJvdXRlIG5hbWVzLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHJvdXRlci5yZWRpcmVjdCgnL2xvZ2luJywgJ3NpZ24taW4nKTtcbiAqIGBgYFxuICpcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0bzpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiByb3V0ZXIuYWxsKCcvbG9naW4nLCBjdHggPT4ge1xuICogICBjdHgucmVkaXJlY3QoJy9zaWduLWluJyk7XG4gKiAgIGN0eC5zdGF0dXMgPSAzMDE7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVVJMIG9yIHJvdXRlIG5hbWUuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzdGluYXRpb24gVVJMIG9yIHJvdXRlIG5hbWUuXG4gKiBAcGFyYW0ge051bWJlcj19IGNvZGUgSFRUUCBzdGF0dXMgY29kZSAoZGVmYXVsdDogMzAxKS5cbiAqIEByZXR1cm5zIHtSb3V0ZXJ9XG4gKi9cblxuUm91dGVyLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3RpbmF0aW9uLCBjb2RlKSB7XG4gIC8vIGxvb2t1cCBzb3VyY2Ugcm91dGUgYnkgbmFtZVxuICBpZiAoc291cmNlWzBdICE9PSAnLycpIHNvdXJjZSA9IHRoaXMudXJsKHNvdXJjZSk7XG5cbiAgLy8gbG9va3VwIGRlc3RpbmF0aW9uIHJvdXRlIGJ5IG5hbWVcbiAgaWYgKGRlc3RpbmF0aW9uWzBdICE9PSAnLycgJiYgIWRlc3RpbmF0aW9uLmluY2x1ZGVzKCc6Ly8nKSkgZGVzdGluYXRpb24gPSB0aGlzLnVybChkZXN0aW5hdGlvbik7XG5cbiAgcmV0dXJuIHRoaXMuYWxsKHNvdXJjZSwgY3R4ID0+IHtcbiAgICBjdHgucmVkaXJlY3QoZGVzdGluYXRpb24pO1xuICAgIGN0eC5zdGF0dXMgPSBjb2RlIHx8IDMwMTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmVnaXN0ZXIgYSByb3V0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBQYXRoIHN0cmluZy5cbiAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IG1ldGhvZHMgQXJyYXkgb2YgSFRUUCB2ZXJicy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1pZGRsZXdhcmUgTXVsdGlwbGUgbWlkZGxld2FyZSBhbHNvIGFjY2VwdGVkLlxuICogQHJldHVybnMge0xheWVyfVxuICogQHByaXZhdGVcbiAqL1xuXG5Sb3V0ZXIucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHBhdGgsIG1ldGhvZHMsIG1pZGRsZXdhcmUsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgY29uc3Qgcm91dGVyID0gdGhpcztcbiAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrO1xuXG4gIC8vIHN1cHBvcnQgYXJyYXkgb2YgcGF0aHNcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1clBhdGggPSBwYXRoW2ldO1xuICAgICAgcm91dGVyLnJlZ2lzdGVyLmNhbGwocm91dGVyLCBjdXJQYXRoLCBtZXRob2RzLCBtaWRkbGV3YXJlLCBvcHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGNyZWF0ZSByb3V0ZVxuICBjb25zdCByb3V0ZSA9IG5ldyBMYXllcihwYXRoLCBtZXRob2RzLCBtaWRkbGV3YXJlLCB7XG4gICAgZW5kOiBvcHRzLmVuZCA9PT0gZmFsc2UgPyBvcHRzLmVuZCA6IHRydWUsXG4gICAgbmFtZTogb3B0cy5uYW1lLFxuICAgIHNlbnNpdGl2ZTogb3B0cy5zZW5zaXRpdmUgfHwgdGhpcy5vcHRzLnNlbnNpdGl2ZSB8fCBmYWxzZSxcbiAgICBzdHJpY3Q6IG9wdHMuc3RyaWN0IHx8IHRoaXMub3B0cy5zdHJpY3QgfHwgZmFsc2UsXG4gICAgcHJlZml4OiBvcHRzLnByZWZpeCB8fCB0aGlzLm9wdHMucHJlZml4IHx8IFwiXCIsXG4gICAgaWdub3JlQ2FwdHVyZXM6IG9wdHMuaWdub3JlQ2FwdHVyZXNcbiAgfSk7XG5cbiAgaWYgKHRoaXMub3B0cy5wcmVmaXgpIHtcbiAgICByb3V0ZS5zZXRQcmVmaXgodGhpcy5vcHRzLnByZWZpeCk7XG4gIH1cblxuICAvLyBhZGQgcGFyYW1ldGVyIG1pZGRsZXdhcmVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcykubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJhbSA9IE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKVtpXTtcbiAgICByb3V0ZS5wYXJhbShwYXJhbSwgdGhpcy5wYXJhbXNbcGFyYW1dKTtcbiAgfVxuXG4gIHN0YWNrLnB1c2gocm91dGUpO1xuXG4gIGRlYnVnKCdkZWZpbmVkIHJvdXRlICVzICVzJywgcm91dGUubWV0aG9kcywgcm91dGUucGF0aCk7XG5cbiAgcmV0dXJuIHJvdXRlO1xufTtcblxuLyoqXG4gKiBMb29rdXAgcm91dGUgd2l0aCBnaXZlbiBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtMYXllcnxmYWxzZX1cbiAqL1xuXG5Sb3V0ZXIucHJvdG90eXBlLnJvdXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgY29uc3Qgcm91dGVzID0gdGhpcy5zdGFjaztcblxuICBmb3IgKGxldCBsZW4gPSByb3V0ZXMubGVuZ3RoLCBpPTA7IGk8bGVuOyBpKyspIHtcbiAgICBpZiAocm91dGVzW2ldLm5hbWUgJiYgcm91dGVzW2ldLm5hbWUgPT09IG5hbWUpIHJldHVybiByb3V0ZXNbaV07XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIFVSTCBmb3Igcm91dGUuIFRha2VzIGEgcm91dGUgbmFtZSBhbmQgbWFwIG9mIG5hbWVkIGBwYXJhbXNgLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcm91dGVyLmdldCgndXNlcicsICcvdXNlcnMvOmlkJywgKGN0eCwgbmV4dCkgPT4ge1xuICogICAvLyAuLi5cbiAqIH0pO1xuICpcbiAqIHJvdXRlci51cmwoJ3VzZXInLCAzKTtcbiAqIC8vID0+IFwiL3VzZXJzLzNcIlxuICpcbiAqIHJvdXRlci51cmwoJ3VzZXInLCB7IGlkOiAzIH0pO1xuICogLy8gPT4gXCIvdXNlcnMvM1wiXG4gKlxuICogcm91dGVyLnVzZSgoY3R4LCBuZXh0KSA9PiB7XG4gKiAgIC8vIHJlZGlyZWN0IHRvIG5hbWVkIHJvdXRlXG4gKiAgIGN0eC5yZWRpcmVjdChjdHgucm91dGVyLnVybCgnc2lnbi1pbicpKTtcbiAqIH0pXG4gKlxuICogcm91dGVyLnVybCgndXNlcicsIHsgaWQ6IDMgfSwgeyBxdWVyeTogeyBsaW1pdDogMSB9IH0pO1xuICogLy8gPT4gXCIvdXNlcnMvMz9saW1pdD0xXCJcbiAqXG4gKiByb3V0ZXIudXJsKCd1c2VyJywgeyBpZDogMyB9LCB7IHF1ZXJ5OiBcImxpbWl0PTFcIiB9KTtcbiAqIC8vID0+IFwiL3VzZXJzLzM/bGltaXQ9MVwiXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSByb3V0ZSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHVybCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIG9wdGlvbnMgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zLnF1ZXJ5XSBxdWVyeSBvcHRpb25zXG4gKiBAcmV0dXJucyB7U3RyaW5nfEVycm9yfVxuICovXG5cblJvdXRlci5wcm90b3R5cGUudXJsID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGUobmFtZSk7XG5cbiAgaWYgKHJvdXRlKSB7XG4gICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIHJvdXRlLnVybC5hcHBseShyb3V0ZSwgYXJncyk7XG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBObyByb3V0ZSBmb3VuZCBmb3IgbmFtZTogJHtuYW1lfWApO1xufTtcblxuLyoqXG4gKiBNYXRjaCBnaXZlbiBgcGF0aGAgYW5kIHJldHVybiBjb3JyZXNwb25kaW5nIHJvdXRlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHJldHVybnMge09iamVjdC48cGF0aCwgcGF0aEFuZE1ldGhvZD59IHJldHVybnMgbGF5ZXJzIHRoYXQgbWF0Y2hlZCBwYXRoIGFuZFxuICogcGF0aCBhbmQgbWV0aG9kLlxuICogQHByaXZhdGVcbiAqL1xuXG5Sb3V0ZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHBhdGgsIG1ldGhvZCkge1xuICBjb25zdCBsYXllcnMgPSB0aGlzLnN0YWNrO1xuICBsZXQgbGF5ZXI7XG4gIGNvbnN0IG1hdGNoZWQgPSB7XG4gICAgcGF0aDogW10sXG4gICAgcGF0aEFuZE1ldGhvZDogW10sXG4gICAgcm91dGU6IGZhbHNlXG4gIH07XG5cbiAgZm9yIChsZXQgbGVuID0gbGF5ZXJzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGxheWVyID0gbGF5ZXJzW2ldO1xuXG4gICAgZGVidWcoJ3Rlc3QgJXMgJXMnLCBsYXllci5wYXRoLCBsYXllci5yZWdleHApO1xuXG4gICAgaWYgKGxheWVyLm1hdGNoKHBhdGgpKSB7XG4gICAgICBtYXRjaGVkLnBhdGgucHVzaChsYXllcik7XG5cbiAgICAgIGlmIChsYXllci5tZXRob2RzLmxlbmd0aCA9PT0gMCB8fCB+bGF5ZXIubWV0aG9kcy5pbmRleE9mKG1ldGhvZCkpIHtcbiAgICAgICAgbWF0Y2hlZC5wYXRoQW5kTWV0aG9kLnB1c2gobGF5ZXIpO1xuICAgICAgICBpZiAobGF5ZXIubWV0aG9kcy5sZW5ndGgpIG1hdGNoZWQucm91dGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkO1xufTtcblxuLyoqXG4gKiBSdW4gbWlkZGxld2FyZSBmb3IgbmFtZWQgcm91dGUgcGFyYW1ldGVycy4gVXNlZnVsIGZvciBhdXRvLWxvYWRpbmcgb3JcbiAqIHZhbGlkYXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiByb3V0ZXJcbiAqICAgLnBhcmFtKCd1c2VyJywgKGlkLCBjdHgsIG5leHQpID0+IHtcbiAqICAgICBjdHgudXNlciA9IHVzZXJzW2lkXTtcbiAqICAgICBpZiAoIWN0eC51c2VyKSByZXR1cm4gY3R4LnN0YXR1cyA9IDQwNDtcbiAqICAgICByZXR1cm4gbmV4dCgpO1xuICogICB9KVxuICogICAuZ2V0KCcvdXNlcnMvOnVzZXInLCBjdHggPT4ge1xuICogICAgIGN0eC5ib2R5ID0gY3R4LnVzZXI7XG4gKiAgIH0pXG4gKiAgIC5nZXQoJy91c2Vycy86dXNlci9mcmllbmRzJywgY3R4ID0+IHtcbiAqICAgICByZXR1cm4gY3R4LnVzZXIuZ2V0RnJpZW5kcygpLnRoZW4oZnVuY3Rpb24oZnJpZW5kcykge1xuICogICAgICAgY3R4LmJvZHkgPSBmcmllbmRzO1xuICogICAgIH0pO1xuICogICB9KVxuICogICAvLyAvdXNlcnMvMyA9PiB7XCJpZFwiOiAzLCBcIm5hbWVcIjogXCJBbGV4XCJ9XG4gKiAgIC8vIC91c2Vycy8zL2ZyaWVuZHMgPT4gW3tcImlkXCI6IDQsIFwibmFtZVwiOiBcIlRKXCJ9XVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtaWRkbGV3YXJlXG4gKiBAcmV0dXJucyB7Um91dGVyfVxuICovXG5cblJvdXRlci5wcm90b3R5cGUucGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgbWlkZGxld2FyZSkge1xuICB0aGlzLnBhcmFtc1twYXJhbV0gPSBtaWRkbGV3YXJlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuc3RhY2tbaV07XG4gICAgcm91dGUucGFyYW0ocGFyYW0sIG1pZGRsZXdhcmUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIFVSTCBmcm9tIHVybCBwYXR0ZXJuIGFuZCBnaXZlbiBgcGFyYW1zYC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHVybCA9IFJvdXRlci51cmwoJy91c2Vycy86aWQnLCB7aWQ6IDF9KTtcbiAqIC8vID0+IFwiL3VzZXJzLzFcIlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdXJsIHBhdHRlcm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgdXJsIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblJvdXRlci51cmwgPSBmdW5jdGlvbiAocGF0aCkge1xuICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIExheWVyLnByb3RvdHlwZS51cmwuYXBwbHkoeyBwYXRoIH0sIGFyZ3MpO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEV4cG9zZSBjb21wb3NpdG9yLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcG9zZVxuXG4vKipcbiAqIENvbXBvc2UgYG1pZGRsZXdhcmVgIHJldHVybmluZ1xuICogYSBmdWxseSB2YWxpZCBtaWRkbGV3YXJlIGNvbXByaXNlZFxuICogb2YgYWxsIHRob3NlIHdoaWNoIGFyZSBwYXNzZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbWlkZGxld2FyZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNvbXBvc2UgKG1pZGRsZXdhcmUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG1pZGRsZXdhcmUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdNaWRkbGV3YXJlIHN0YWNrIG11c3QgYmUgYW4gYXJyYXkhJylcbiAgZm9yIChjb25zdCBmbiBvZiBtaWRkbGV3YXJlKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignTWlkZGxld2FyZSBtdXN0IGJlIGNvbXBvc2VkIG9mIGZ1bmN0aW9ucyEnKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgbmV4dCkge1xuICAgIC8vIGxhc3QgY2FsbGVkIG1pZGRsZXdhcmUgI1xuICAgIGxldCBpbmRleCA9IC0xXG4gICAgcmV0dXJuIGRpc3BhdGNoKDApXG4gICAgZnVuY3Rpb24gZGlzcGF0Y2ggKGkpIHtcbiAgICAgIGlmIChpIDw9IGluZGV4KSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCduZXh0KCkgY2FsbGVkIG11bHRpcGxlIHRpbWVzJykpXG4gICAgICBpbmRleCA9IGlcbiAgICAgIGxldCBmbiA9IG1pZGRsZXdhcmVbaV1cbiAgICAgIGlmIChpID09PSBtaWRkbGV3YXJlLmxlbmd0aCkgZm4gPSBuZXh0XG4gICAgICBpZiAoIWZuKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm4oY29udGV4dCwgZGlzcGF0Y2guYmluZChudWxsLCBpICsgMSkpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyohXG4gKiBtZXRob2RzXG4gKiBDb3B5cmlnaHQoYykgMjAxMy0yMDE0IFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNS0yMDE2IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRDdXJyZW50Tm9kZU1ldGhvZHMoKSB8fCBnZXRCYXNpY05vZGVNZXRob2RzKCk7XG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IE5vZGUuanMgbWV0aG9kcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q3VycmVudE5vZGVNZXRob2RzKCkge1xuICByZXR1cm4gaHR0cC5NRVRIT0RTICYmIGh0dHAuTUVUSE9EUy5tYXAoZnVuY3Rpb24gbG93ZXJDYXNlTWV0aG9kKG1ldGhvZCkge1xuICAgIHJldHVybiBtZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBcImJhc2ljXCIgTm9kZS5qcyBtZXRob2RzLCBhIHNuYXBzaG90IGZyb20gTm9kZS5qcyAwLjEwLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRCYXNpY05vZGVNZXRob2RzKCkge1xuICByZXR1cm4gW1xuICAgICdnZXQnLFxuICAgICdwb3N0JyxcbiAgICAncHV0JyxcbiAgICAnaGVhZCcsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ29wdGlvbnMnLFxuICAgICd0cmFjZScsXG4gICAgJ2NvcHknLFxuICAgICdsb2NrJyxcbiAgICAnbWtjb2wnLFxuICAgICdtb3ZlJyxcbiAgICAncHVyZ2UnLFxuICAgICdwcm9wZmluZCcsXG4gICAgJ3Byb3BwYXRjaCcsXG4gICAgJ3VubG9jaycsXG4gICAgJ3JlcG9ydCcsXG4gICAgJ21rYWN0aXZpdHknLFxuICAgICdjaGVja291dCcsXG4gICAgJ21lcmdlJyxcbiAgICAnbS1zZWFyY2gnLFxuICAgICdub3RpZnknLFxuICAgICdzdWJzY3JpYmUnLFxuICAgICd1bnN1YnNjcmliZScsXG4gICAgJ3BhdGNoJyxcbiAgICAnc2VhcmNoJyxcbiAgICAnY29ubmVjdCdcbiAgXTtcbn1cbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwidmFyIHQsZT0odD1yZXF1aXJlKFwicXVlcnlzdHJpbmdcIikpJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJkZWZhdWx0XCJpbiB0P3QuZGVmYXVsdDp0LG89L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIHIodCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWQodCkpO3ZhciByPWZ1bmN0aW9uKHQsZSxvKXt2YXIgcj10LmF1dGgsYT10Lmhvc3RuYW1lLHM9dC5wcm90b2NvbHx8XCJcIixwPXQucGF0aG5hbWV8fFwiXCIsbj10Lmhhc2h8fFwiXCIsYz10LnF1ZXJ5fHxcIlwiLGg9ITE7cj1yP2VuY29kZVVSSUNvbXBvbmVudChyKS5yZXBsYWNlKC8lM0EvaSxcIjpcIikrXCJAXCI6XCJcIix0Lmhvc3Q/aD1yK3QuaG9zdDphJiYoaD1yKyh+YS5pbmRleE9mKFwiOlwiKT9cIltcIithK1wiXVwiOmEpLHQucG9ydCYmKGgrPVwiOlwiK3QucG9ydCkpLGMmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiYoYz1lLmVuY29kZShjKSk7dmFyIGw9dC5zZWFyY2h8fGMmJlwiP1wiK2N8fFwiXCI7cmV0dXJuIHMmJlwiOlwiIT09cy5zdWJzdHIoLTEpJiYocys9XCI6XCIpLHQuc2xhc2hlc3x8KCFzfHxvLnRlc3QocykpJiYhMSE9PWg/KGg9XCIvL1wiKyhofHxcIlwiKSxwJiZcIi9cIiE9PXBbMF0mJihwPVwiL1wiK3ApKTpofHwoaD1cIlwiKSxuJiZcIiNcIiE9PW5bMF0mJihuPVwiI1wiK24pLGwmJlwiP1wiIT09bFswXSYmKGw9XCI/XCIrbCkse3Byb3RvY29sOnMsaG9zdDpoLHBhdGhuYW1lOnA9cC5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KSxzZWFyY2g6bD1sLnJlcGxhY2UoXCIjXCIsXCIlMjNcIiksaGFzaDpufX0odCxlLG8pO3JldHVyblwiXCIrci5wcm90b2NvbCtyLmhvc3Qrci5wYXRobmFtZStyLnNlYXJjaCtyLmhhc2h9dmFyIGE9XCJodHRwOi8vXCIscz1cIncud1wiLHA9YStzLG49L14oW2EtejAtOS4rLV0qOlxcL1xcL1xcLykoW2EtejAtOS4rLV06XFwvKik/L2ksYz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gaCh0LGUpe3ZhciBvPVwic3RyaW5nXCI9PXR5cGVvZiB0P2QodCk6dDt0PVwib2JqZWN0XCI9PXR5cGVvZiB0P3IodCk6dDt2YXIgcz1kKGUpLGg9XCJcIjtvLnByb3RvY29sJiYhby5zbGFzaGVzJiYoaD1vLnByb3RvY29sLHQ9dC5yZXBsYWNlKG8ucHJvdG9jb2wsXCJcIiksaCs9XCIvXCI9PT1lWzBdfHxcIi9cIj09PXRbMF0/XCIvXCI6XCJcIiksaCYmcy5wcm90b2NvbCYmKGg9XCJcIixzLnNsYXNoZXN8fChoPXMucHJvdG9jb2wsZT1lLnJlcGxhY2Uocy5wcm90b2NvbCxcIlwiKSkpO3ZhciBsPXQubWF0Y2gobik7bCYmIXMucHJvdG9jb2wmJih0PXQuc3Vic3RyKChoPWxbMV0rKGxbMl18fFwiXCIpKS5sZW5ndGgpLC9eXFwvXFwvW14vXS8udGVzdChlKSYmKGg9aC5zbGljZSgwLC0xKSkpO3ZhciBpPW5ldyBVUkwodCxwK1wiL1wiKSx1PW5ldyBVUkwoZSxpKS50b1N0cmluZygpLnJlcGxhY2UocCxcIlwiKSxmPXMucHJvdG9jb2x8fG8ucHJvdG9jb2w7cmV0dXJuIGYrPW8uc2xhc2hlc3x8cy5zbGFzaGVzP1wiLy9cIjpcIlwiLCFoJiZmP3U9dS5yZXBsYWNlKGEsZik6aCYmKHU9dS5yZXBsYWNlKGEsXCJcIikpLGMudGVzdCh1KXx8fmUuaW5kZXhPZihcIi5cIil8fFwiL1wiPT09dC5zbGljZSgtMSl8fFwiL1wiPT09ZS5zbGljZSgtMSl8fFwiL1wiIT09dS5zbGljZSgtMSl8fCh1PXUuc2xpY2UoMCwtMSkpLGgmJih1PWgrKFwiL1wiPT09dVswXT91LnN1YnN0cigxKTp1KSksdX1mdW5jdGlvbiBsKCl7fWwucHJvdG90eXBlLnBhcnNlPWQsbC5wcm90b3R5cGUuZm9ybWF0PXIsbC5wcm90b3R5cGUucmVzb2x2ZT1oLGwucHJvdG90eXBlLnJlc29sdmVPYmplY3Q9aDt2YXIgaT0vXmh0dHBzP3xmdHB8Z29waGVyfGZpbGUvLHU9L14oLio/KShbIz9dLiopLyxmPS9eKFthLXowLTkuKy1dKjopKFxcL3swLDN9KSguKikvaSxtPS9eKFthLXowLTkuKy1dKjopP1xcL1xcL1xcLyovaSx2PS9eKFthLXowLTkuKy1dKjopKFxcL3swLDJ9KVxcWyguKilcXF0kL2k7ZnVuY3Rpb24gZCh0LG8sYSl7aWYodm9pZCAwPT09byYmKG89ITEpLHZvaWQgMD09PWEmJihhPSExKSx0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCBpbnN0YW5jZW9mIGwpcmV0dXJuIHQ7dmFyIG49KHQ9dC50cmltKCkpLm1hdGNoKHUpO3Q9bj9uWzFdLnJlcGxhY2UoL1xcXFwvZyxcIi9cIikrblsyXTp0LnJlcGxhY2UoL1xcXFwvZyxcIi9cIiksdi50ZXN0KHQpJiZcIi9cIiE9PXQuc2xpY2UoLTEpJiYodCs9XCIvXCIpO3ZhciBjPSEvKF5qYXZhc2NyaXB0KS8udGVzdCh0KSYmdC5tYXRjaChmKSxoPW0udGVzdCh0KSxkPVwiXCI7YyYmKGkudGVzdChjWzFdKXx8KGQ9Y1sxXS50b0xvd2VyQ2FzZSgpLHQ9XCJcIitjWzJdK2NbM10pLGNbMl18fChoPSExLGkudGVzdChjWzFdKT8oZD1jWzFdLHQ9XCJcIitjWzNdKTp0PVwiLy9cIitjWzNdKSwzIT09Y1syXS5sZW5ndGgmJjEhPT1jWzJdLmxlbmd0aHx8KGQ9Y1sxXSx0PVwiL1wiK2NbM10pKTt2YXIgZyx5PShuP25bMV06dCkubWF0Y2goL15odHRwcz86XFwvXFwvW14vXSsoOlswLTldKykoPz1cXC98JCkvKSxiPXkmJnlbMV0sQz1uZXcgbCxVPVwiXCIsaj1cIlwiO3RyeXtnPW5ldyBVUkwodCl9Y2F0Y2goZSl7VT1lLGR8fGF8fCEvXlxcL1xcLy8udGVzdCh0KXx8L15cXC9cXC8uK1tALl0vLnRlc3QodCl8fChqPVwiL1wiLHQ9dC5zdWJzdHIoMSkpO3RyeXtnPW5ldyBVUkwodCxwKX1jYXRjaCh0KXtyZXR1cm4gQy5wcm90b2NvbD1kLEMuaHJlZj1kLEN9fUMuc2xhc2hlcz1oJiYhaixDLmhvc3Q9Zy5ob3N0PT09cz9cIlwiOmcuaG9zdCxDLmhvc3RuYW1lPWcuaG9zdG5hbWU9PT1zP1wiXCI6Zy5ob3N0bmFtZS5yZXBsYWNlKC8oXFxbfFxcXSkvZyxcIlwiKSxDLnByb3RvY29sPVU/ZHx8bnVsbDpnLnByb3RvY29sLEMuc2VhcmNoPWcuc2VhcmNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKSxDLmhhc2g9Zy5oYXNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKTt2YXIgdz10LnNwbGl0KFwiI1wiKTshQy5zZWFyY2gmJn53WzBdLmluZGV4T2YoXCI/XCIpJiYoQy5zZWFyY2g9XCI/XCIpLEMuaGFzaHx8XCJcIiE9PXdbMV18fChDLmhhc2g9XCIjXCIpLEMucXVlcnk9bz9lLmRlY29kZShnLnNlYXJjaC5zdWJzdHIoMSkpOkMuc2VhcmNoLnN1YnN0cigxKSxDLnBhdGhuYW1lPWorKGM/ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvWydefGBdL2csZnVuY3Rpb24odCl7cmV0dXJuXCIlXCIrdC5jaGFyQ29kZUF0KCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KS5yZXBsYWNlKC8oKD86JVswLTlBLUZdezJ9KSspL2csZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlKS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9dC5jaGFyQ29kZUF0KCk7cmV0dXJuIGU+MjU2fHwvXlthLXowLTldJC9pLnRlc3QodCk/dDpcIiVcIitlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfSkuam9pbihcIlwiKX1jYXRjaCh0KXtyZXR1cm4gZX19KX0oZy5wYXRobmFtZSk6Zy5wYXRobmFtZSksXCJhYm91dDpcIj09PUMucHJvdG9jb2wmJlwiYmxhbmtcIj09PUMucGF0aG5hbWUmJihDLnByb3RvY29sPVwiXCIsQy5wYXRobmFtZT1cIlwiKSxVJiZcIi9cIiE9PXRbMF0mJihDLnBhdGhuYW1lPUMucGF0aG5hbWUuc3Vic3RyKDEpKSxkJiYhaS50ZXN0KGQpJiZcIi9cIiE9PXQuc2xpY2UoLTEpJiZcIi9cIj09PUMucGF0aG5hbWUmJihDLnBhdGhuYW1lPVwiXCIpLEMucGF0aD1DLnBhdGhuYW1lK0Muc2VhcmNoLEMuYXV0aD1bZy51c2VybmFtZSxnLnBhc3N3b3JkXS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KS5maWx0ZXIoQm9vbGVhbikuam9pbihcIjpcIiksQy5wb3J0PWcucG9ydCxiJiYhQy5ob3N0LmVuZHNXaXRoKGIpJiYoQy5ob3N0Kz1iLEMucG9ydD1iLnNsaWNlKDEpKSxDLmhyZWY9aj9cIlwiK0MucGF0aG5hbWUrQy5zZWFyY2grQy5oYXNoOnIoQyk7dmFyIHg9L14oZmlsZSkvLnRlc3QoQy5ocmVmKT9bXCJob3N0XCIsXCJob3N0bmFtZVwiXTpbXTtyZXR1cm4gT2JqZWN0LmtleXMoQykuZm9yRWFjaChmdW5jdGlvbih0KXt+eC5pbmRleE9mKHQpfHwoQ1t0XT1DW3RdfHxudWxsKX0pLEN9ZXhwb3J0cy5wYXJzZT1kLGV4cG9ydHMuZm9ybWF0PXIsZXhwb3J0cy5yZXNvbHZlPWgsZXhwb3J0cy5yZXNvbHZlT2JqZWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGQoaCh0LGUpKX0sZXhwb3J0cy5Vcmw9bDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIHZhciBncm91cHNSZWdleCA9IC9cXCgoPzpcXD88KC4qPyk+KT8oPyFcXD8pL2c7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZXhlY1Jlc3VsdCA9IGdyb3Vwc1JlZ2V4LmV4ZWMocGF0aC5zb3VyY2UpO1xuICAgIHdoaWxlIChleGVjUmVzdWx0KSB7XG4gICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAvLyBVc2UgcGFyZW50aGVzaXplZCBzdWJzdHJpbmcgbWF0Y2ggaWYgYXZhaWxhYmxlLCBpbmRleCBvdGhlcndpc2VcbiAgICAgICAgICAgIG5hbWU6IGV4ZWNSZXN1bHRbMV0gfHwgaW5kZXgrKyxcbiAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgZXhlY1Jlc3VsdCA9IGdyb3Vwc1JlZ2V4LmV4ZWMocGF0aC5zb3VyY2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIid1c2Ugc3RyaWN0J1xuLyogZXNsaW50IG5vLXByb3RvOiAwICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSA/IHNldFByb3RvT2YgOiBtaXhpblByb3BlcnRpZXMpXG5cbmZ1bmN0aW9uIHNldFByb3RvT2YgKG9iaiwgcHJvdG8pIHtcbiAgb2JqLl9fcHJvdG9fXyA9IHByb3RvXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gbWl4aW5Qcm9wZXJ0aWVzIChvYmosIHByb3RvKSB7XG4gIGZvciAodmFyIHByb3AgaW4gcHJvdG8pIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgb2JqW3Byb3BdID0gcHJvdG9bcHJvcF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufVxuIiwiLyohXG4gKiBzdGF0dXNlc1xuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBDb3B5cmlnaHQoYykgMjAxNiBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGNvZGVzID0gcmVxdWlyZSgnLi9jb2Rlcy5qc29uJylcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXR1c1xuXG4vLyBzdGF0dXMgY29kZSB0byBtZXNzYWdlIG1hcFxuc3RhdHVzLlNUQVRVU19DT0RFUyA9IGNvZGVzXG5cbi8vIGFycmF5IG9mIHN0YXR1cyBjb2Rlc1xuc3RhdHVzLmNvZGVzID0gcG9wdWxhdGVTdGF0dXNlc01hcChzdGF0dXMsIGNvZGVzKVxuXG4vLyBzdGF0dXMgY29kZXMgZm9yIHJlZGlyZWN0c1xuc3RhdHVzLnJlZGlyZWN0ID0ge1xuICAzMDA6IHRydWUsXG4gIDMwMTogdHJ1ZSxcbiAgMzAyOiB0cnVlLFxuICAzMDM6IHRydWUsXG4gIDMwNTogdHJ1ZSxcbiAgMzA3OiB0cnVlLFxuICAzMDg6IHRydWVcbn1cblxuLy8gc3RhdHVzIGNvZGVzIGZvciBlbXB0eSBib2RpZXNcbnN0YXR1cy5lbXB0eSA9IHtcbiAgMjA0OiB0cnVlLFxuICAyMDU6IHRydWUsXG4gIDMwNDogdHJ1ZVxufVxuXG4vLyBzdGF0dXMgY29kZXMgZm9yIHdoZW4geW91IHNob3VsZCByZXRyeSB0aGUgcmVxdWVzdFxuc3RhdHVzLnJldHJ5ID0ge1xuICA1MDI6IHRydWUsXG4gIDUwMzogdHJ1ZSxcbiAgNTA0OiB0cnVlXG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIHN0YXR1c2VzIG1hcCBmb3IgZ2l2ZW4gY29kZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RhdHVzZXNNYXAgKHN0YXR1c2VzLCBjb2Rlcykge1xuICB2YXIgYXJyID0gW11cblxuICBPYmplY3Qua2V5cyhjb2RlcykuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29kZSAoY29kZSkge1xuICAgIHZhciBtZXNzYWdlID0gY29kZXNbY29kZV1cbiAgICB2YXIgc3RhdHVzID0gTnVtYmVyKGNvZGUpXG5cbiAgICAvLyBQb3B1bGF0ZSBwcm9wZXJ0aWVzXG4gICAgc3RhdHVzZXNbc3RhdHVzXSA9IG1lc3NhZ2VcbiAgICBzdGF0dXNlc1ttZXNzYWdlXSA9IHN0YXR1c1xuICAgIHN0YXR1c2VzW21lc3NhZ2UudG9Mb3dlckNhc2UoKV0gPSBzdGF0dXNcblxuICAgIC8vIEFkZCB0byBhcnJheVxuICAgIGFyci5wdXNoKHN0YXR1cylcbiAgfSlcblxuICByZXR1cm4gYXJyXG59XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0dXMgY29kZS5cbiAqXG4gKiBHaXZlbiBhIG51bWJlciwgdGhpcyB3aWxsIHRocm93IGlmIGl0IGlzIG5vdCBhIGtub3duIHN0YXR1c1xuICogY29kZSwgb3RoZXJ3aXNlIHRoZSBjb2RlIHdpbGwgYmUgcmV0dXJuZWQuIEdpdmVuIGEgc3RyaW5nLFxuICogdGhlIHN0cmluZyB3aWxsIGJlIHBhcnNlZCBmb3IgYSBudW1iZXIgYW5kIHJldHVybiB0aGUgY29kZVxuICogaWYgdmFsaWQsIG90aGVyd2lzZSB3aWxsIGxvb2t1cCB0aGUgY29kZSBhc3N1bWluZyB0aGlzIGlzXG4gKiB0aGUgc3RhdHVzIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb2RlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN0YXR1cyAoY29kZSkge1xuICBpZiAodHlwZW9mIGNvZGUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKCFzdGF0dXNbY29kZV0pIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGF0dXMgY29kZTogJyArIGNvZGUpXG4gICAgcmV0dXJuIGNvZGVcbiAgfVxuXG4gIGlmICh0eXBlb2YgY29kZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjb2RlIG11c3QgYmUgYSBudW1iZXIgb3Igc3RyaW5nJylcbiAgfVxuXG4gIC8vICc0MDMnXG4gIHZhciBuID0gcGFyc2VJbnQoY29kZSwgMTApXG4gIGlmICghaXNOYU4obikpIHtcbiAgICBpZiAoIXN0YXR1c1tuXSkgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHN0YXR1cyBjb2RlOiAnICsgbilcbiAgICByZXR1cm4gblxuICB9XG5cbiAgbiA9IHN0YXR1c1tjb2RlLnRvTG93ZXJDYXNlKCldXG4gIGlmICghbikgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHN0YXR1cyBtZXNzYWdlOiBcIicgKyBjb2RlICsgJ1wiJylcbiAgcmV0dXJuIG5cbn1cbiIsIi8qIVxuICogdG9pZGVudGlmaWVyXG4gKiBDb3B5cmlnaHQoYykgMjAxNiBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSWRlbnRpZmllclxuXG4vKipcbiAqIFRyYXNmb3JtIHRoZSBnaXZlbiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgaWRlbnRpZmllclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdG9JZGVudGlmaWVyIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHJldHVybiB0b2tlbi5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdG9rZW4uc2xpY2UoMSlcbiAgICB9KVxuICAgIC5qb2luKCcnKVxuICAgIC5yZXBsYWNlKC9bXiBfMC05YS16XS9naSwgJycpXG59XG4iLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFBhZ2UsXHJcbiAgRnJhbWUsXHJcbiAgTGF5b3V0LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgU2V0dGluZ0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TZXR0aW5nRm9ybSc7XHJcbmltcG9ydCBDcm93bFVybCBmcm9tICcuLi9jb21wb25lbnRzL0NyYXdsVXJsJztcclxuaW1wb3J0IE5hcnZpZ2F0aW9uQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50eyAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcykgIFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgIGlzdXNlckxvZ2dlZGluOmZhbHNlLFxyXG4gICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgYXBpS2V5OiBBUElfS0VZLCBcclxuICAgICAgICBzaG9wT3JpZ2luOiBDb29raWVzLmdldCgnc2hvcE9yaWdpbicpLFxyXG4gICAgICAgIGZvcmNlUmVkaXJlY3Q6IHRydWVcclxuICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGlmKCF0aGlzLnN0YXRlLmlzdXNlckxvZ2dlZGluKXtcclxuICAgICAgUm91dGVyLnB1c2goJy9zaWdudXAnKVxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFtZT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICA8L0ZyYW1lPlxyXG4gICAgKTtcclxuICB9ICBcclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=