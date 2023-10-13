(() => {
	var e = {
			760: (e) => {
				"use strict";
				function t(e) {
					(this._maxSize = e), this.clear();
				}
				(t.prototype.clear = function () {
					(this._size = 0), (this._values = Object.create(null));
				}),
					(t.prototype.get = function (e) {
						return this._values[e];
					}),
					(t.prototype.set = function (e, t) {
						return (
							this._size >= this._maxSize && this.clear(),
							e in this._values || this._size++,
							(this._values[e] = t)
						);
					});
				var s = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
					i = /^\d+$/,
					r = /^\d/,
					a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
					n = /^\s*(['"]?)(.*?)(\1)\s*$/,
					u = new t(512),
					o = new t(512),
					l = new t(512);
				function h(e) {
					return (
						u.get(e) ||
						u.set(
							e,
							c(e).map(function (e) {
								return e.replace(n, "$2");
							})
						)
					);
				}
				function c(e) {
					return e.match(s) || [""];
				}
				function d(e) {
					return "string" == typeof e && e && -1 !== ["'", '"'].indexOf(e.charAt(0));
				}
				function p(e) {
					return (
						!d(e) &&
						((function (e) {
							return e.match(r) && !e.match(i);
						})(e) ||
							(function (e) {
								return a.test(e);
							})(e))
					);
				}
				e.exports = {
					Cache: t,
					split: c,
					normalizePath: h,
					setter: function (e) {
						var t = h(e);
						return (
							o.get(e) ||
							o.set(e, function (e, s) {
								for (var i = 0, r = t.length, a = e; i < r - 1; ) {
									var n = t[i];
									if ("__proto__" === n || "constructor" === n || "prototype" === n) return e;
									a = a[t[i++]];
								}
								a[t[i]] = s;
							})
						);
					},
					getter: function (e, t) {
						var s = h(e);
						return (
							l.get(e) ||
							l.set(e, function (e) {
								for (var i = 0, r = s.length; i < r; ) {
									if (null == e && t) return;
									e = e[s[i++]];
								}
								return e;
							})
						);
					},
					join: function (e) {
						return e.reduce(function (e, t) {
							return e + (d(t) || i.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
						}, "");
					},
					forEach: function (e, t, s) {
						!(function (e, t, s) {
							var i,
								r,
								a,
								n,
								u = e.length;
							for (r = 0; r < u; r++)
								(i = e[r]) &&
									(p(i) && (i = '"' + i + '"'),
									(a = !(n = d(i)) && /^\d+$/.test(i)),
									t.call(s, i, n, a, r, e));
						})(Array.isArray(e) ? e : c(e), t, s);
					},
				};
			},
			885: (e) => {
				const t =
						/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
					s = (e) => e.match(t) || [],
					i = (e) => e[0].toUpperCase() + e.slice(1),
					r = (e, t) => s(e).join(t).toLowerCase(),
					a = (e) =>
						s(e).reduce(
							(e, t) =>
								`${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
							""
						);
				e.exports = {
					words: s,
					upperFirst: i,
					camelCase: a,
					pascalCase: (e) => i(a(e)),
					snakeCase: (e) => r(e, "_"),
					kebabCase: (e) => r(e, "-"),
					sentenceCase: (e) => i(r(e, " ")),
					titleCase: (e) => s(e).map(i).join(" "),
				};
			},
			633: (e) => {
				function t(e, t) {
					var s = e.length,
						i = new Array(s),
						r = {},
						a = s,
						n = (function (e) {
							for (var t = new Map(), s = 0, i = e.length; s < i; s++) {
								var r = e[s];
								t.has(r[0]) || t.set(r[0], new Set()),
									t.has(r[1]) || t.set(r[1], new Set()),
									t.get(r[0]).add(r[1]);
							}
							return t;
						})(t),
						u = (function (e) {
							for (var t = new Map(), s = 0, i = e.length; s < i; s++) t.set(e[s], s);
							return t;
						})(e);
					for (
						t.forEach(function (e) {
							if (!u.has(e[0]) || !u.has(e[1]))
								throw new Error("Unknown node. There is an unknown node in the supplied edges.");
						});
						a--;

					)
						r[a] || o(e[a], a, new Set());
					return i;
					function o(e, t, a) {
						if (a.has(e)) {
							var l;
							try {
								l = ", node was:" + JSON.stringify(e);
							} catch (e) {
								l = "";
							}
							throw new Error("Cyclic dependency" + l);
						}
						if (!u.has(e))
							throw new Error(
								"Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
									JSON.stringify(e)
							);
						if (!r[t]) {
							r[t] = !0;
							var h = n.get(e) || new Set();
							if ((t = (h = Array.from(h)).length)) {
								a.add(e);
								do {
									var c = h[--t];
									o(c, u.get(c), a);
								} while (t);
								a.delete(e);
							}
							i[--s] = e;
						}
					}
				}
				(e.exports = function (e) {
					return t(
						(function (e) {
							for (var t = new Set(), s = 0, i = e.length; s < i; s++) {
								var r = e[s];
								t.add(r[0]), t.add(r[1]);
							}
							return Array.from(t);
						})(e),
						e
					);
				}),
					(e.exports.array = t);
			},
		},
		t = {};
	function s(i) {
		var r = t[i];
		if (void 0 !== r) return r.exports;
		var a = (t[i] = { exports: {} });
		return e[i](a, a.exports, s), a.exports;
	}
	(s.n = (e) => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return s.d(t, { a: t }), t;
	}),
		(s.d = (e, t) => {
			for (var i in t)
				s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
		}),
		(s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			"use strict";
			var e = s(760),
				t = s(885),
				i = s(633),
				r = s.n(i);
			const a = Object.prototype.toString,
				n = Error.prototype.toString,
				u = RegExp.prototype.toString,
				o = "undefined" != typeof Symbol ? Symbol.prototype.toString : () => "",
				l = /^Symbol\((.*)\)(.*)$/;
			function h(e, t = !1) {
				if (null == e || !0 === e || !1 === e) return "" + e;
				const s = typeof e;
				if ("number" === s)
					return (function (e) {
						return e != +e ? "NaN" : 0 === e && 1 / e < 0 ? "-0" : "" + e;
					})(e);
				if ("string" === s) return t ? `"${e}"` : e;
				if ("function" === s) return "[Function " + (e.name || "anonymous") + "]";
				if ("symbol" === s) return o.call(e).replace(l, "Symbol($1)");
				const i = a.call(e).slice(8, -1);
				return "Date" === i
					? isNaN(e.getTime())
						? "" + e
						: e.toISOString(e)
					: "Error" === i || e instanceof Error
					? "[" + n.call(e) + "]"
					: "RegExp" === i
					? u.call(e)
					: null;
			}
			function c(e, t) {
				let s = h(e, t);
				return null !== s
					? s
					: JSON.stringify(
							e,
							function (e, s) {
								let i = h(this[e], t);
								return null !== i ? i : s;
							},
							2
					  );
			}
			function d(e) {
				return null == e ? [] : [].concat(e);
			}
			let p,
				f = /\$\{\s*(\w+)\s*\}/g;
			p = Symbol.toStringTag;
			class m extends Error {
				static formatError(e, t) {
					const s = t.label || t.path || "this";
					return (
						s !== t.path && (t = Object.assign({}, t, { path: s })),
						"string" == typeof e
							? e.replace(f, (e, s) => c(t[s]))
							: "function" == typeof e
							? e(t)
							: e
					);
				}
				static isError(e) {
					return e && "ValidationError" === e.name;
				}
				constructor(e, t, s, i, r) {
					super(),
						(this.value = void 0),
						(this.path = void 0),
						(this.type = void 0),
						(this.errors = void 0),
						(this.params = void 0),
						(this.inner = void 0),
						(this[p] = "Error"),
						(this.name = "ValidationError"),
						(this.value = t),
						(this.path = s),
						(this.type = i),
						(this.errors = []),
						(this.inner = []),
						d(e).forEach((e) => {
							if (m.isError(e)) {
								this.errors.push(...e.errors);
								const t = e.inner.length ? e.inner : [e];
								this.inner.push(...t);
							} else this.errors.push(e);
						}),
						(this.message =
							this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]),
						!r && Error.captureStackTrace && Error.captureStackTrace(this, m);
				}
			}
			let g = {
					default: "${path} is invalid",
					required: "${path} is a required field",
					defined: "${path} must be defined",
					notNull: "${path} cannot be null",
					oneOf: "${path} must be one of the following values: ${values}",
					notOneOf: "${path} must not be one of the following values: ${values}",
					notType: ({ path: e, type: t, value: s, originalValue: i }) => {
						const r = null != i && i !== s ? ` (cast from the value \`${c(i, !0)}\`).` : ".";
						return "mixed" !== t
							? `${e} must be a \`${t}\` type, but the final value was: \`${c(s, !0)}\`` + r
							: `${e} must match the configured type. The validated value was: \`${c(s, !0)}\`` + r;
					},
				},
				v = {
					length: "${path} must be exactly ${length} characters",
					min: "${path} must be at least ${min} characters",
					max: "${path} must be at most ${max} characters",
					matches: '${path} must match the following: "${regex}"',
					email: "${path} must be a valid email",
					url: "${path} must be a valid URL",
					uuid: "${path} must be a valid UUID",
					trim: "${path} must be a trimmed string",
					lowercase: "${path} must be a lowercase string",
					uppercase: "${path} must be a upper case string",
				},
				k = {
					min: "${path} field must be later than ${min}",
					max: "${path} field must be at earlier than ${max}",
				},
				_ = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
				x = {
					notType: (e) => {
						const { path: t, value: s, spec: i } = e,
							r = i.types.length;
						if (Array.isArray(s)) {
							if (s.length < r)
								return `${t} tuple value has too few items, expected a length of ${r} but got ${
									s.length
								} for value: \`${c(s, !0)}\``;
							if (s.length > r)
								return `${t} tuple value has too many items, expected a length of ${r} but got ${
									s.length
								} for value: \`${c(s, !0)}\``;
						}
						return m.formatError(g.notType, e);
					},
				};
			Object.assign(Object.create(null), {
				mixed: g,
				string: v,
				number: {
					min: "${path} must be greater than or equal to ${min}",
					max: "${path} must be less than or equal to ${max}",
					lessThan: "${path} must be less than ${less}",
					moreThan: "${path} must be greater than ${more}",
					positive: "${path} must be a positive number",
					negative: "${path} must be a negative number",
					integer: "${path} must be an integer",
				},
				date: k,
				object: _,
				array: {
					min: "${path} field must have at least ${min} items",
					max: "${path} field must have less than or equal to ${max} items",
					length: "${path} must have ${length} items",
				},
				boolean: { isValue: "${path} field must be ${value}" },
				tuple: x,
			});
			const y = (e) => e && e.__isYupSchema__;
			class b {
				static fromOptions(e, t) {
					if (!t.then && !t.otherwise)
						throw new TypeError(
							"either `then:` or `otherwise:` is required for `when()` conditions"
						);
					let { is: s, then: i, otherwise: r } = t,
						a = "function" == typeof s ? s : (...e) => e.every((e) => e === s);
					return new b(e, (e, t) => {
						var s;
						let n = a(...e) ? i : r;
						return null != (s = null == n ? void 0 : n(t)) ? s : t;
					});
				}
				constructor(e, t) {
					(this.fn = void 0), (this.refs = e), (this.refs = e), (this.fn = t);
				}
				resolve(e, t) {
					let s = this.refs.map((e) =>
							e.getValue(
								null == t ? void 0 : t.value,
								null == t ? void 0 : t.parent,
								null == t ? void 0 : t.context
							)
						),
						i = this.fn(s, e, t);
					if (void 0 === i || i === e) return e;
					if (!y(i)) throw new TypeError("conditions must return a schema object");
					return i.resolve(t);
				}
			}
			class F {
				constructor(t, s = {}) {
					if (
						((this.key = void 0),
						(this.isContext = void 0),
						(this.isValue = void 0),
						(this.isSibling = void 0),
						(this.path = void 0),
						(this.getter = void 0),
						(this.map = void 0),
						"string" != typeof t)
					)
						throw new TypeError("ref must be a string, got: " + t);
					if (((this.key = t.trim()), "" === t))
						throw new TypeError("ref must be a non-empty string");
					(this.isContext = "$" === this.key[0]),
						(this.isValue = "." === this.key[0]),
						(this.isSibling = !this.isContext && !this.isValue);
					let i = this.isContext ? "$" : this.isValue ? "." : "";
					(this.path = this.key.slice(i.length)),
						(this.getter = this.path && (0, e.getter)(this.path, !0)),
						(this.map = s.map);
				}
				getValue(e, t, s) {
					let i = this.isContext ? s : this.isValue ? e : t;
					return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
				}
				cast(e, t) {
					return this.getValue(e, null == t ? void 0 : t.parent, null == t ? void 0 : t.context);
				}
				resolve() {
					return this;
				}
				describe() {
					return { type: "ref", key: this.key };
				}
				toString() {
					return `Ref(${this.key})`;
				}
				static isRef(e) {
					return e && e.__isYupRef;
				}
			}
			F.prototype.__isYupRef = !0;
			const A = (e) => null == e;
			function E(e) {
				function t({ value: t, path: s = "", options: i, originalValue: r, schema: a }, n, u) {
					const { name: o, test: l, params: h, message: c, skipAbsent: d } = e;
					let {
						parent: p,
						context: f,
						abortEarly: g = a.spec.abortEarly,
						disableStackTrace: v = a.spec.disableStackTrace,
					} = i;
					function k(e) {
						return F.isRef(e) ? e.getValue(t, p, f) : e;
					}
					function _(e = {}) {
						var i;
						const n = Object.assign(
							{ value: t, originalValue: r, label: a.spec.label, path: e.path || s, spec: a.spec },
							h,
							e.params
						);
						for (const e of Object.keys(n)) n[e] = k(n[e]);
						const u = new m(
							m.formatError(e.message || c, n),
							t,
							n.path,
							e.type || o,
							null != (i = e.disableStackTrace) ? i : v
						);
						return (u.params = n), u;
					}
					const x = g ? n : u;
					let y = {
						path: s,
						parent: p,
						type: o,
						from: i.from,
						createError: _,
						resolve: k,
						options: i,
						originalValue: r,
						schema: a,
					};
					const b = (e) => {
							m.isError(e) ? x(e) : e ? u(null) : x(_());
						},
						E = (e) => {
							m.isError(e) ? x(e) : n(e);
						};
					if (d && A(t)) return b(!0);
					let C;
					try {
						var S;
						if (((C = l.call(y, t, y)), "function" == typeof (null == (S = C) ? void 0 : S.then))) {
							if (i.sync)
								throw new Error(
									`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
								);
							return Promise.resolve(C).then(b, E);
						}
					} catch (e) {
						return void E(e);
					}
					b(C);
				}
				return (t.OPTIONS = e), t;
			}
			function C(t, s, i, r = i) {
				let a, n, u;
				return s
					? ((0, e.forEach)(s, (e, o, l) => {
							let h = o ? e.slice(1, e.length - 1) : e,
								c = "tuple" === (t = t.resolve({ context: r, parent: a, value: i })).type,
								d = l ? parseInt(h, 10) : 0;
							if (t.innerType || c) {
								if (c && !l)
									throw new Error(
										`Yup.reach cannot implicitly index into a tuple type. the path part "${u}" must contain an index to the tuple element, e.g. "${u}[0]"`
									);
								if (i && d >= i.length)
									throw new Error(
										`Yup.reach cannot resolve an array item at index: ${e}, in the path: ${s}. because there is no value at that index. `
									);
								(a = i), (i = i && i[d]), (t = c ? t.spec.types[d] : t.innerType);
							}
							if (!l) {
								if (!t.fields || !t.fields[h])
									throw new Error(
										`The schema does not contain the path: ${s}. (failed at: ${u} which is a type: "${t.type}")`
									);
								(a = i), (i = i && i[h]), (t = t.fields[h]);
							}
							(n = h), (u = o ? "[" + e + "]" : "." + e);
					  }),
					  { schema: t, parent: a, parentPath: n })
					: { parent: a, parentPath: s, schema: t };
			}
			class S extends Set {
				describe() {
					const e = [];
					for (const t of this.values()) e.push(F.isRef(t) ? t.describe() : t);
					return e;
				}
				resolveAll(e) {
					let t = [];
					for (const s of this.values()) t.push(e(s));
					return t;
				}
				clone() {
					return new S(this.values());
				}
				merge(e, t) {
					const s = this.clone();
					return e.forEach((e) => s.add(e)), t.forEach((e) => s.delete(e)), s;
				}
			}
			function w(e, t = new Map()) {
				if (y(e) || !e || "object" != typeof e) return e;
				if (t.has(e)) return t.get(e);
				let s;
				if (e instanceof Date) (s = new Date(e.getTime())), t.set(e, s);
				else if (e instanceof RegExp) (s = new RegExp(e)), t.set(e, s);
				else if (Array.isArray(e)) {
					(s = new Array(e.length)), t.set(e, s);
					for (let i = 0; i < e.length; i++) s[i] = w(e[i], t);
				} else if (e instanceof Map) {
					(s = new Map()), t.set(e, s);
					for (const [i, r] of e.entries()) s.set(i, w(r, t));
				} else if (e instanceof Set) {
					(s = new Set()), t.set(e, s);
					for (const i of e) s.add(w(i, t));
				} else {
					if (!(e instanceof Object)) throw Error(`Unable to clone ${e}`);
					(s = {}), t.set(e, s);
					for (const [i, r] of Object.entries(e)) s[i] = w(r, t);
				}
				return s;
			}
			class D {
				constructor(e) {
					(this.type = void 0),
						(this.deps = []),
						(this.tests = void 0),
						(this.transforms = void 0),
						(this.conditions = []),
						(this._mutate = void 0),
						(this.internalTests = {}),
						(this._whitelist = new S()),
						(this._blacklist = new S()),
						(this.exclusiveTests = Object.create(null)),
						(this._typeCheck = void 0),
						(this.spec = void 0),
						(this.tests = []),
						(this.transforms = []),
						this.withMutation(() => {
							this.typeError(g.notType);
						}),
						(this.type = e.type),
						(this._typeCheck = e.check),
						(this.spec = Object.assign(
							{
								strip: !1,
								strict: !1,
								abortEarly: !0,
								recursive: !0,
								disableStackTrace: !1,
								nullable: !1,
								optional: !0,
								coerce: !0,
							},
							null == e ? void 0 : e.spec
						)),
						this.withMutation((e) => {
							e.nonNullable();
						});
				}
				get _type() {
					return this.type;
				}
				clone(e) {
					if (this._mutate) return e && Object.assign(this.spec, e), this;
					const t = Object.create(Object.getPrototypeOf(this));
					return (
						(t.type = this.type),
						(t._typeCheck = this._typeCheck),
						(t._whitelist = this._whitelist.clone()),
						(t._blacklist = this._blacklist.clone()),
						(t.internalTests = Object.assign({}, this.internalTests)),
						(t.exclusiveTests = Object.assign({}, this.exclusiveTests)),
						(t.deps = [...this.deps]),
						(t.conditions = [...this.conditions]),
						(t.tests = [...this.tests]),
						(t.transforms = [...this.transforms]),
						(t.spec = w(Object.assign({}, this.spec, e))),
						t
					);
				}
				label(e) {
					let t = this.clone();
					return (t.spec.label = e), t;
				}
				meta(...e) {
					if (0 === e.length) return this.spec.meta;
					let t = this.clone();
					return (t.spec.meta = Object.assign(t.spec.meta || {}, e[0])), t;
				}
				withMutation(e) {
					let t = this._mutate;
					this._mutate = !0;
					let s = e(this);
					return (this._mutate = t), s;
				}
				concat(e) {
					if (!e || e === this) return this;
					if (e.type !== this.type && "mixed" !== this.type)
						throw new TypeError(
							`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`
						);
					let t = this,
						s = e.clone();
					const i = Object.assign({}, t.spec, s.spec);
					return (
						(s.spec = i),
						(s.internalTests = Object.assign({}, t.internalTests, s.internalTests)),
						(s._whitelist = t._whitelist.merge(e._whitelist, e._blacklist)),
						(s._blacklist = t._blacklist.merge(e._blacklist, e._whitelist)),
						(s.tests = t.tests),
						(s.exclusiveTests = t.exclusiveTests),
						s.withMutation((t) => {
							e.tests.forEach((e) => {
								t.test(e.OPTIONS);
							});
						}),
						(s.transforms = [...t.transforms, ...s.transforms]),
						s
					);
				}
				isType(e) {
					return null == e
						? !(!this.spec.nullable || null !== e) || !(!this.spec.optional || void 0 !== e)
						: this._typeCheck(e);
				}
				resolve(e) {
					let t = this;
					if (t.conditions.length) {
						let s = t.conditions;
						(t = t.clone()),
							(t.conditions = []),
							(t = s.reduce((t, s) => s.resolve(t, e), t)),
							(t = t.resolve(e));
					}
					return t;
				}
				resolveOptions(e) {
					var t, s, i, r;
					return Object.assign({}, e, {
						from: e.from || [],
						strict: null != (t = e.strict) ? t : this.spec.strict,
						abortEarly: null != (s = e.abortEarly) ? s : this.spec.abortEarly,
						recursive: null != (i = e.recursive) ? i : this.spec.recursive,
						disableStackTrace: null != (r = e.disableStackTrace) ? r : this.spec.disableStackTrace,
					});
				}
				cast(e, t = {}) {
					let s = this.resolve(Object.assign({ value: e }, t)),
						i = "ignore-optionality" === t.assert,
						r = s._cast(e, t);
					if (!1 !== t.assert && !s.isType(r)) {
						if (i && A(r)) return r;
						let a = c(e),
							n = c(r);
						throw new TypeError(
							`The value of ${
								t.path || "field"
							} could not be cast to a value that satisfies the schema type: "${
								s.type
							}". \n\nattempted value: ${a} \n` + (n !== a ? `result of cast: ${n}` : "")
						);
					}
					return r;
				}
				_cast(e, t) {
					let s = void 0 === e ? e : this.transforms.reduce((t, s) => s.call(this, t, e, this), e);
					return void 0 === s && (s = this.getDefault(t)), s;
				}
				_validate(e, t = {}, s, i) {
					let { path: r, originalValue: a = e, strict: n = this.spec.strict } = t,
						u = e;
					n || (u = this._cast(u, Object.assign({ assert: !1 }, t)));
					let o = [];
					for (let e of Object.values(this.internalTests)) e && o.push(e);
					this.runTests({ path: r, value: u, originalValue: a, options: t, tests: o }, s, (e) => {
						if (e.length) return i(e, u);
						this.runTests(
							{ path: r, value: u, originalValue: a, options: t, tests: this.tests },
							s,
							i
						);
					});
				}
				runTests(e, t, s) {
					let i = !1,
						{ tests: r, value: a, originalValue: n, path: u, options: o } = e,
						l = (e) => {
							i || ((i = !0), t(e, a));
						},
						h = (e) => {
							i || ((i = !0), s(e, a));
						},
						c = r.length,
						d = [];
					if (!c) return h([]);
					let p = { value: a, originalValue: n, path: u, options: o, schema: this };
					for (let e = 0; e < r.length; e++)
						(0, r[e])(p, l, function (e) {
							e && (Array.isArray(e) ? d.push(...e) : d.push(e)), --c <= 0 && h(d);
						});
				}
				asNestedTest({
					key: e,
					index: t,
					parent: s,
					parentPath: i,
					originalParent: r,
					options: a,
				}) {
					const n = null != e ? e : t;
					if (null == n) throw TypeError("Must include `key` or `index` for nested validations");
					const u = "number" == typeof n;
					let o = s[n];
					const l = Object.assign({}, a, {
						strict: !0,
						parent: s,
						value: o,
						originalValue: r[n],
						key: void 0,
						[u ? "index" : "key"]: n,
						path: u || n.includes(".") ? `${i || ""}[${o ? n : `"${n}"`}]` : (i ? `${i}.` : "") + e,
					});
					return (e, t, s) => this.resolve(l)._validate(o, l, t, s);
				}
				validate(e, t) {
					var s;
					let i = this.resolve(Object.assign({}, t, { value: e })),
						r =
							null != (s = null == t ? void 0 : t.disableStackTrace) ? s : i.spec.disableStackTrace;
					return new Promise((s, a) =>
						i._validate(
							e,
							t,
							(e, t) => {
								m.isError(e) && (e.value = t), a(e);
							},
							(e, t) => {
								e.length ? a(new m(e, t, void 0, void 0, r)) : s(t);
							}
						)
					);
				}
				validateSync(e, t) {
					var s;
					let i,
						r = this.resolve(Object.assign({}, t, { value: e })),
						a =
							null != (s = null == t ? void 0 : t.disableStackTrace) ? s : r.spec.disableStackTrace;
					return (
						r._validate(
							e,
							Object.assign({}, t, { sync: !0 }),
							(e, t) => {
								throw (m.isError(e) && (e.value = t), e);
							},
							(t, s) => {
								if (t.length) throw new m(t, e, void 0, void 0, a);
								i = s;
							}
						),
						i
					);
				}
				isValid(e, t) {
					return this.validate(e, t).then(
						() => !0,
						(e) => {
							if (m.isError(e)) return !1;
							throw e;
						}
					);
				}
				isValidSync(e, t) {
					try {
						return this.validateSync(e, t), !0;
					} catch (e) {
						if (m.isError(e)) return !1;
						throw e;
					}
				}
				_getDefault(e) {
					let t = this.spec.default;
					return null == t ? t : "function" == typeof t ? t.call(this, e) : w(t);
				}
				getDefault(e) {
					return this.resolve(e || {})._getDefault(e);
				}
				default(e) {
					return 0 === arguments.length ? this._getDefault() : this.clone({ default: e });
				}
				strict(e = !0) {
					return this.clone({ strict: e });
				}
				nullability(e, t) {
					const s = this.clone({ nullable: e });
					return (
						(s.internalTests.nullable = E({
							message: t,
							name: "nullable",
							test(e) {
								return null !== e || this.schema.spec.nullable;
							},
						})),
						s
					);
				}
				optionality(e, t) {
					const s = this.clone({ optional: e });
					return (
						(s.internalTests.optionality = E({
							message: t,
							name: "optionality",
							test(e) {
								return void 0 !== e || this.schema.spec.optional;
							},
						})),
						s
					);
				}
				optional() {
					return this.optionality(!0);
				}
				defined(e = g.defined) {
					return this.optionality(!1, e);
				}
				nullable() {
					return this.nullability(!0);
				}
				nonNullable(e = g.notNull) {
					return this.nullability(!1, e);
				}
				required(e = g.required) {
					return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
				}
				notRequired() {
					return this.clone().withMutation((e) => e.nullable().optional());
				}
				transform(e) {
					let t = this.clone();
					return t.transforms.push(e), t;
				}
				test(...e) {
					let t;
					if (
						((t =
							1 === e.length
								? "function" == typeof e[0]
									? { test: e[0] }
									: e[0]
								: 2 === e.length
								? { name: e[0], test: e[1] }
								: { name: e[0], message: e[1], test: e[2] }),
						void 0 === t.message && (t.message = g.default),
						"function" != typeof t.test)
					)
						throw new TypeError("`test` is a required parameters");
					let s = this.clone(),
						i = E(t),
						r = t.exclusive || (t.name && !0 === s.exclusiveTests[t.name]);
					if (t.exclusive && !t.name)
						throw new TypeError(
							"Exclusive tests must provide a unique `name` identifying the test"
						);
					return (
						t.name && (s.exclusiveTests[t.name] = !!t.exclusive),
						(s.tests = s.tests.filter((e) => {
							if (e.OPTIONS.name === t.name) {
								if (r) return !1;
								if (e.OPTIONS.test === i.OPTIONS.test) return !1;
							}
							return !0;
						})),
						s.tests.push(i),
						s
					);
				}
				when(e, t) {
					Array.isArray(e) || "string" == typeof e || ((t = e), (e = "."));
					let s = this.clone(),
						i = d(e).map((e) => new F(e));
					return (
						i.forEach((e) => {
							e.isSibling && s.deps.push(e.key);
						}),
						s.conditions.push("function" == typeof t ? new b(i, t) : b.fromOptions(i, t)),
						s
					);
				}
				typeError(e) {
					let t = this.clone();
					return (
						(t.internalTests.typeError = E({
							message: e,
							name: "typeError",
							skipAbsent: !0,
							test(e) {
								return (
									!!this.schema._typeCheck(e) ||
									this.createError({ params: { type: this.schema.type } })
								);
							},
						})),
						t
					);
				}
				oneOf(e, t = g.oneOf) {
					let s = this.clone();
					return (
						e.forEach((e) => {
							s._whitelist.add(e), s._blacklist.delete(e);
						}),
						(s.internalTests.whiteList = E({
							message: t,
							name: "oneOf",
							skipAbsent: !0,
							test(e) {
								let t = this.schema._whitelist,
									s = t.resolveAll(this.resolve);
								return (
									!!s.includes(e) ||
									this.createError({ params: { values: Array.from(t).join(", "), resolved: s } })
								);
							},
						})),
						s
					);
				}
				notOneOf(e, t = g.notOneOf) {
					let s = this.clone();
					return (
						e.forEach((e) => {
							s._blacklist.add(e), s._whitelist.delete(e);
						}),
						(s.internalTests.blacklist = E({
							message: t,
							name: "notOneOf",
							test(e) {
								let t = this.schema._blacklist,
									s = t.resolveAll(this.resolve);
								return (
									!s.includes(e) ||
									this.createError({ params: { values: Array.from(t).join(", "), resolved: s } })
								);
							},
						})),
						s
					);
				}
				strip(e = !0) {
					let t = this.clone();
					return (t.spec.strip = e), t;
				}
				describe(e) {
					const t = (e ? this.resolve(e) : this).clone(),
						{ label: s, meta: i, optional: r, nullable: a } = t.spec;
					return {
						meta: i,
						label: s,
						optional: r,
						nullable: a,
						default: t.getDefault(e),
						type: t.type,
						oneOf: t._whitelist.describe(),
						notOneOf: t._blacklist.describe(),
						tests: t.tests
							.map((e) => ({ name: e.OPTIONS.name, params: e.OPTIONS.params }))
							.filter((e, t, s) => s.findIndex((t) => t.name === e.name) === t),
					};
				}
			}
			D.prototype.__isYupSchema__ = !0;
			for (const e of ["validate", "validateSync"])
				D.prototype[`${e}At`] = function (t, s, i = {}) {
					const { parent: r, parentPath: a, schema: n } = C(this, t, s, i.context);
					return n[e](r && r[a], Object.assign({}, i, { parent: r, path: t }));
				};
			for (const e of ["equals", "is"]) D.prototype[e] = D.prototype.oneOf;
			for (const e of ["not", "nope"]) D.prototype[e] = D.prototype.notOneOf;
			let T =
					/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				B =
					/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
				V =
					/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
				M = (e) => A(e) || e === e.trim(),
				O = {}.toString();
			function I() {
				return new P();
			}
			class P extends D {
				constructor() {
					super({
						type: "string",
						check: (e) => (e instanceof String && (e = e.valueOf()), "string" == typeof e),
					}),
						this.withMutation(() => {
							this.transform((e, t, s) => {
								if (!s.spec.coerce || s.isType(e)) return e;
								if (Array.isArray(e)) return e;
								const i = null != e && e.toString ? e.toString() : e;
								return i === O ? e : i;
							});
						});
				}
				required(e) {
					return super
						.required(e)
						.withMutation((t) =>
							t.test({
								message: e || g.required,
								name: "required",
								skipAbsent: !0,
								test: (e) => !!e.length,
							})
						);
				}
				notRequired() {
					return super
						.notRequired()
						.withMutation(
							(e) => ((e.tests = e.tests.filter((e) => "required" !== e.OPTIONS.name)), e)
						);
				}
				length(e, t = v.length) {
					return this.test({
						message: t,
						name: "length",
						exclusive: !0,
						params: { length: e },
						skipAbsent: !0,
						test(t) {
							return t.length === this.resolve(e);
						},
					});
				}
				min(e, t = v.min) {
					return this.test({
						message: t,
						name: "min",
						exclusive: !0,
						params: { min: e },
						skipAbsent: !0,
						test(t) {
							return t.length >= this.resolve(e);
						},
					});
				}
				max(e, t = v.max) {
					return this.test({
						name: "max",
						exclusive: !0,
						message: t,
						params: { max: e },
						skipAbsent: !0,
						test(t) {
							return t.length <= this.resolve(e);
						},
					});
				}
				matches(e, t) {
					let s,
						i,
						r = !1;
					return (
						t &&
							("object" == typeof t
								? ({ excludeEmptyString: r = !1, message: s, name: i } = t)
								: (s = t)),
						this.test({
							name: i || "matches",
							message: s || v.matches,
							params: { regex: e },
							skipAbsent: !0,
							test: (t) => ("" === t && r) || -1 !== t.search(e),
						})
					);
				}
				email(e = v.email) {
					return this.matches(T, { name: "email", message: e, excludeEmptyString: !0 });
				}
				url(e = v.url) {
					return this.matches(B, { name: "url", message: e, excludeEmptyString: !0 });
				}
				uuid(e = v.uuid) {
					return this.matches(V, { name: "uuid", message: e, excludeEmptyString: !1 });
				}
				ensure() {
					return this.default("").transform((e) => (null === e ? "" : e));
				}
				trim(e = v.trim) {
					return this.transform((e) => (null != e ? e.trim() : e)).test({
						message: e,
						name: "trim",
						test: M,
					});
				}
				lowercase(e = v.lowercase) {
					return this.transform((e) => (A(e) ? e : e.toLowerCase())).test({
						message: e,
						name: "string_case",
						exclusive: !0,
						skipAbsent: !0,
						test: (e) => A(e) || e === e.toLowerCase(),
					});
				}
				uppercase(e = v.uppercase) {
					return this.transform((e) => (A(e) ? e : e.toUpperCase())).test({
						message: e,
						name: "string_case",
						exclusive: !0,
						skipAbsent: !0,
						test: (e) => A(e) || e === e.toUpperCase(),
					});
				}
			}
			I.prototype = P.prototype;
			const R =
				/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
			function $(e, t = 0) {
				return Number(e) || t;
			}
			let j = new Date("");
			function L() {
				return new N();
			}
			class N extends D {
				constructor() {
					super({
						type: "date",
						check(e) {
							return (
								(t = e),
								"[object Date]" === Object.prototype.toString.call(t) && !isNaN(e.getTime())
							);
							var t;
						},
					}),
						this.withMutation(() => {
							this.transform((e, t, s) =>
								!s.spec.coerce || s.isType(e) || null === e
									? e
									: ((e = (function (e) {
											const t = R.exec(e);
											if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
											const s = {
												year: $(t[1]),
												month: $(t[2], 1) - 1,
												day: $(t[3], 1),
												hour: $(t[4]),
												minute: $(t[5]),
												second: $(t[6]),
												millisecond: t[7] ? $(t[7].substring(0, 3)) : 0,
												z: t[8] || void 0,
												plusMinus: t[9] || void 0,
												hourOffset: $(t[10]),
												minuteOffset: $(t[11]),
											};
											if (void 0 === s.z && void 0 === s.plusMinus)
												return new Date(
													s.year,
													s.month,
													s.day,
													s.hour,
													s.minute,
													s.second,
													s.millisecond
												).valueOf();
											let i = 0;
											return (
												"Z" !== s.z &&
													void 0 !== s.plusMinus &&
													((i = 60 * s.hourOffset + s.minuteOffset),
													"+" === s.plusMinus && (i = 0 - i)),
												Date.UTC(
													s.year,
													s.month,
													s.day,
													s.hour,
													s.minute + i,
													s.second,
													s.millisecond
												)
											);
									  })(e)),
									  isNaN(e) ? N.INVALID_DATE : new Date(e))
							);
						});
				}
				prepareParam(e, t) {
					let s;
					if (F.isRef(e)) s = e;
					else {
						let i = this.cast(e);
						if (!this._typeCheck(i))
							throw new TypeError(
								`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`
							);
						s = i;
					}
					return s;
				}
				min(e, t = k.min) {
					let s = this.prepareParam(e, "min");
					return this.test({
						message: t,
						name: "min",
						exclusive: !0,
						params: { min: e },
						skipAbsent: !0,
						test(e) {
							return e >= this.resolve(s);
						},
					});
				}
				max(e, t = k.max) {
					let s = this.prepareParam(e, "max");
					return this.test({
						message: t,
						name: "max",
						exclusive: !0,
						params: { max: e },
						skipAbsent: !0,
						test(e) {
							return e <= this.resolve(s);
						},
					});
				}
			}
			function q(e, t) {
				let s = 1 / 0;
				return (
					e.some((e, i) => {
						var r;
						if (null != (r = t.path) && r.includes(e)) return (s = i), !0;
					}),
					s
				);
			}
			function z(e) {
				return (t, s) => q(e, t) - q(e, s);
			}
			(N.INVALID_DATE = j), (L.prototype = N.prototype), (L.INVALID_DATE = j);
			const U = (e, t, s) => {
				if ("string" != typeof e) return e;
				let i = e;
				try {
					i = JSON.parse(e);
				} catch (e) {}
				return s.isType(i) ? i : e;
			};
			function Z(e) {
				if ("fields" in e) {
					const t = {};
					for (const [s, i] of Object.entries(e.fields)) t[s] = Z(i);
					return e.setFields(t);
				}
				if ("array" === e.type) {
					const t = e.optional();
					return t.innerType && (t.innerType = Z(t.innerType)), t;
				}
				return "tuple" === e.type
					? e.optional().clone({ types: e.spec.types.map(Z) })
					: "optional" in e
					? e.optional()
					: e;
			}
			let Y = (e) => "[object Object]" === Object.prototype.toString.call(e);
			const K = z([]);
			function H(e) {
				return new G(e);
			}
			class G extends D {
				constructor(e) {
					super({ type: "object", check: (e) => Y(e) || "function" == typeof e }),
						(this.fields = Object.create(null)),
						(this._sortErrors = K),
						(this._nodes = []),
						(this._excludedEdges = []),
						this.withMutation(() => {
							e && this.shape(e);
						});
				}
				_cast(e, t = {}) {
					var s;
					let i = super._cast(e, t);
					if (void 0 === i) return this.getDefault(t);
					if (!this._typeCheck(i)) return i;
					let r = this.fields,
						a = null != (s = t.stripUnknown) ? s : this.spec.noUnknown,
						n = [].concat(
							this._nodes,
							Object.keys(i).filter((e) => !this._nodes.includes(e))
						),
						u = {},
						o = Object.assign({}, t, { parent: u, __validating: t.__validating || !1 }),
						l = !1;
					for (const e of n) {
						let s = r[e],
							n = e in i;
						if (s) {
							let r,
								a = i[e];
							(o.path = (t.path ? `${t.path}.` : "") + e),
								(s = s.resolve({ value: a, context: t.context, parent: u }));
							let n = s instanceof D ? s.spec : void 0,
								h = null == n ? void 0 : n.strict;
							if (null != n && n.strip) {
								l = l || e in i;
								continue;
							}
							(r = t.__validating && h ? i[e] : s.cast(i[e], o)), void 0 !== r && (u[e] = r);
						} else n && !a && (u[e] = i[e]);
						(n === e in u && u[e] === i[e]) || (l = !0);
					}
					return l ? u : i;
				}
				_validate(e, t = {}, s, i) {
					let { from: r = [], originalValue: a = e, recursive: n = this.spec.recursive } = t;
					(t.from = [{ schema: this, value: a }, ...r]),
						(t.__validating = !0),
						(t.originalValue = a),
						super._validate(e, t, s, (e, r) => {
							if (!n || !Y(r)) return void i(e, r);
							a = a || r;
							let u = [];
							for (let e of this._nodes) {
								let s = this.fields[e];
								s &&
									!F.isRef(s) &&
									u.push(
										s.asNestedTest({
											options: t,
											key: e,
											parent: r,
											parentPath: t.path,
											originalParent: a,
										})
									);
							}
							this.runTests({ tests: u, value: r, originalValue: a, options: t }, s, (t) => {
								i(t.sort(this._sortErrors).concat(e), r);
							});
						});
				}
				clone(e) {
					const t = super.clone(e);
					return (
						(t.fields = Object.assign({}, this.fields)),
						(t._nodes = this._nodes),
						(t._excludedEdges = this._excludedEdges),
						(t._sortErrors = this._sortErrors),
						t
					);
				}
				concat(e) {
					let t = super.concat(e),
						s = t.fields;
					for (let [e, t] of Object.entries(this.fields)) {
						const i = s[e];
						s[e] = void 0 === i ? t : i;
					}
					return t.withMutation((t) =>
						t.setFields(s, [...this._excludedEdges, ...e._excludedEdges])
					);
				}
				_getDefault(e) {
					if ("default" in this.spec) return super._getDefault(e);
					if (!this._nodes.length) return;
					let t = {};
					return (
						this._nodes.forEach((s) => {
							var i;
							const r = this.fields[s];
							let a = e;
							null != (i = a) &&
								i.value &&
								(a = Object.assign({}, a, { parent: a.value, value: a.value[s] })),
								(t[s] = r && "getDefault" in r ? r.getDefault(a) : void 0);
						}),
						t
					);
				}
				setFields(t, s) {
					let i = this.clone();
					return (
						(i.fields = t),
						(i._nodes = (function (t, s = []) {
							let i = [],
								a = new Set(),
								n = new Set(s.map(([e, t]) => `${e}-${t}`));
							function u(t, s) {
								let r = (0, e.split)(t)[0];
								a.add(r), n.has(`${s}-${r}`) || i.push([s, r]);
							}
							for (const e of Object.keys(t)) {
								let s = t[e];
								a.add(e),
									F.isRef(s) && s.isSibling
										? u(s.path, e)
										: y(s) && "deps" in s && s.deps.forEach((t) => u(t, e));
							}
							return r().array(Array.from(a), i).reverse();
						})(t, s)),
						(i._sortErrors = z(Object.keys(t))),
						s && (i._excludedEdges = s),
						i
					);
				}
				shape(e, t = []) {
					return this.clone().withMutation((s) => {
						let i = s._excludedEdges;
						return (
							t.length && (Array.isArray(t[0]) || (t = [t]), (i = [...s._excludedEdges, ...t])),
							s.setFields(Object.assign(s.fields, e), i)
						);
					});
				}
				partial() {
					const e = {};
					for (const [t, s] of Object.entries(this.fields))
						e[t] = "optional" in s && s.optional instanceof Function ? s.optional() : s;
					return this.setFields(e);
				}
				deepPartial() {
					return Z(this);
				}
				pick(e) {
					const t = {};
					for (const s of e) this.fields[s] && (t[s] = this.fields[s]);
					return this.setFields(
						t,
						this._excludedEdges.filter(([t, s]) => e.includes(t) && e.includes(s))
					);
				}
				omit(e) {
					const t = [];
					for (const s of Object.keys(this.fields)) e.includes(s) || t.push(s);
					return this.pick(t);
				}
				from(t, s, i) {
					let r = (0, e.getter)(t, !0);
					return this.transform((a) => {
						if (!a) return a;
						let n = a;
						return (
							((t, s) => {
								const i = [...(0, e.normalizePath)(s)];
								if (1 === i.length) return i[0] in t;
								let r = i.pop(),
									a = (0, e.getter)((0, e.join)(i), !0)(t);
								return !(!a || !(r in a));
							})(a, t) && ((n = Object.assign({}, a)), i || delete n[t], (n[s] = r(a))),
							n
						);
					});
				}
				json() {
					return this.transform(U);
				}
				noUnknown(e = !0, t = _.noUnknown) {
					"boolean" != typeof e && ((t = e), (e = !0));
					let s = this.test({
						name: "noUnknown",
						exclusive: !0,
						message: t,
						test(t) {
							if (null == t) return !0;
							const s = (function (e, t) {
								let s = Object.keys(e.fields);
								return Object.keys(t).filter((e) => -1 === s.indexOf(e));
							})(this.schema, t);
							return (
								!e || 0 === s.length || this.createError({ params: { unknown: s.join(", ") } })
							);
						},
					});
					return (s.spec.noUnknown = e), s;
				}
				unknown(e = !0, t = _.noUnknown) {
					return this.noUnknown(!e, t);
				}
				transformKeys(e) {
					return this.transform((t) => {
						if (!t) return t;
						const s = {};
						for (const i of Object.keys(t)) s[e(i)] = t[i];
						return s;
					});
				}
				camelCase() {
					return this.transformKeys(t.camelCase);
				}
				snakeCase() {
					return this.transformKeys(t.snakeCase);
				}
				constantCase() {
					return this.transformKeys((e) => (0, t.snakeCase)(e).toUpperCase());
				}
				describe(e) {
					const t = (e ? this.resolve(e) : this).clone(),
						s = super.describe(e);
					s.fields = {};
					for (const [r, a] of Object.entries(t.fields)) {
						var i;
						let t = e;
						null != (i = t) &&
							i.value &&
							(t = Object.assign({}, t, { parent: t.value, value: t.value[r] })),
							(s.fields[r] = a.describe(t));
					}
					return s;
				}
			}
			H.prototype = G.prototype;
			const X = document.querySelector(".form1"),
				J = document.querySelector(".log-email"),
				W = document.querySelector(".log-password"),
				Q = document.querySelector(".invalid-login-password"),
				ee = document.querySelector(".login-page"),
				te = document.querySelector(".register-page"),
				se = H().shape({
					inputLoginEmail: I().email().required("Brand is required"),
					inputLoginPassword: I()
						.min(4)
						.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
						.required("No password provided."),
				});
			function ie(e) {
				return "string" == typeof e || e instanceof String;
			}
			function re(e) {
				var t;
				return (
					"object" == typeof e &&
					null != e &&
					"Object" === (null == e || null == (t = e.constructor) ? void 0 : t.name)
				);
			}
			function ae(e, t) {
				return Array.isArray(t)
					? ae(e, (e, s) => t.includes(s))
					: Object.entries(e).reduce((e, s) => {
							let [i, r] = s;
							return t(r, i) && (e[i] = r), e;
					  }, {});
			}
			X.addEventListener("submit", (e) => {
				e.preventDefault();
				const t = { inputLoginEmail: J.value, inputLoginPassword: W.value };
				console.log(t),
					se
						.validate(t)
						.then(() => {
							console.log("correct"),
								(Q.innerText = ""),
								(ee.style.display = "none"),
								(te.style.display = "block");
						})
						.catch((e) => {
							console.log(e),
								("inputLoginPassword" !== e.path && "" !== W.value) ||
									(Q.innerText = "Password is incorrect");
						});
			});
			const ne = "NONE",
				ue = "LEFT",
				oe = "FORCE_LEFT",
				le = "RIGHT",
				he = "FORCE_RIGHT";
			function ce(e) {
				return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
			}
			function de(e, t) {
				if (t === e) return !0;
				const s = Array.isArray(t),
					i = Array.isArray(e);
				let r;
				if (s && i) {
					if (t.length != e.length) return !1;
					for (r = 0; r < t.length; r++) if (!de(t[r], e[r])) return !1;
					return !0;
				}
				if (s != i) return !1;
				if (t && e && "object" == typeof t && "object" == typeof e) {
					const s = t instanceof Date,
						i = e instanceof Date;
					if (s && i) return t.getTime() == e.getTime();
					if (s != i) return !1;
					const a = t instanceof RegExp,
						n = e instanceof RegExp;
					if (a && n) return t.toString() == e.toString();
					if (a != n) return !1;
					const u = Object.keys(t);
					for (r = 0; r < u.length; r++)
						if (!Object.prototype.hasOwnProperty.call(e, u[r])) return !1;
					for (r = 0; r < u.length; r++) if (!de(e[u[r]], t[u[r]])) return !1;
					return !0;
				}
				return (
					!(!t || !e || "function" != typeof t || "function" != typeof e) &&
					t.toString() === e.toString()
				);
			}
			class pe {
				constructor(e) {
					for (
						Object.assign(this, e);
						this.value.slice(0, this.startChangePos) !==
						this.oldValue.slice(0, this.startChangePos);

					)
						--this.oldSelection.start;
				}
				get startChangePos() {
					return Math.min(this.cursorPos, this.oldSelection.start);
				}
				get insertedCount() {
					return this.cursorPos - this.startChangePos;
				}
				get inserted() {
					return this.value.substr(this.startChangePos, this.insertedCount);
				}
				get removedCount() {
					return Math.max(
						this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length,
						0
					);
				}
				get removed() {
					return this.oldValue.substr(this.startChangePos, this.removedCount);
				}
				get head() {
					return this.value.substring(0, this.startChangePos);
				}
				get tail() {
					return this.value.substring(this.startChangePos + this.insertedCount);
				}
				get removeDirection() {
					return !this.removedCount || this.insertedCount
						? ne
						: (this.oldSelection.end !== this.cursorPos &&
								this.oldSelection.start !== this.cursorPos) ||
						  this.oldSelection.end !== this.oldSelection.start
						? ue
						: le;
				}
			}
			function fe(e, t) {
				return new fe.InputMask(e, t);
			}
			function me(e) {
				if (null == e) throw new Error("mask property should be defined");
				return e instanceof RegExp
					? fe.MaskedRegExp
					: ie(e)
					? fe.MaskedPattern
					: e === Date
					? fe.MaskedDate
					: e === Number
					? fe.MaskedNumber
					: Array.isArray(e) || e === Array
					? fe.MaskedDynamic
					: fe.Masked && e.prototype instanceof fe.Masked
					? e
					: fe.Masked && e instanceof fe.Masked
					? e.constructor
					: e instanceof Function
					? fe.MaskedFunction
					: (console.warn("Mask not found for mask", e), fe.Masked);
			}
			function ge(e) {
				if (!e) throw new Error("Options in not defined");
				if (fe.Masked) {
					if (e.prototype instanceof fe.Masked) return { mask: e };
					const { mask: t, ...s } =
						e instanceof fe.Masked ? { mask: e } : re(e) && e.mask instanceof fe.Masked ? e : {};
					if (t) {
						const e = t.mask;
						return { ...ae(t, (e, t) => !t.startsWith("_")), mask: t.constructor, _mask: e, ...s };
					}
				}
				return re(e) ? { ...e } : { mask: e };
			}
			function ve(e) {
				if (fe.Masked && e instanceof fe.Masked) return e;
				const t = ge(e),
					s = me(t.mask);
				if (!s)
					throw new Error(
						"Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask."
					);
				return (
					t.mask === s && delete t.mask, t._mask && ((t.mask = t._mask), delete t._mask), new s(t)
				);
			}
			fe.createMask = ve;
			class ke {
				get selectionStart() {
					let e;
					try {
						e = this._unsafeSelectionStart;
					} catch {}
					return null != e ? e : this.value.length;
				}
				get selectionEnd() {
					let e;
					try {
						e = this._unsafeSelectionEnd;
					} catch {}
					return null != e ? e : this.value.length;
				}
				select(e, t) {
					if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd))
						try {
							this._unsafeSelect(e, t);
						} catch {}
				}
				get isActive() {
					return !1;
				}
			}
			fe.MaskElement = ke;
			class _e extends ke {
				constructor(e) {
					super(), (this.input = e), (this._handlers = {});
				}
				get rootElement() {
					var e, t, s;
					return null != (e = null == (t = (s = this.input).getRootNode) ? void 0 : t.call(s))
						? e
						: document;
				}
				get isActive() {
					return this.input === this.rootElement.activeElement;
				}
				bindEvents(e) {
					Object.keys(e).forEach((t) => this._toggleEventHandler(_e.EVENTS_MAP[t], e[t]));
				}
				unbindEvents() {
					Object.keys(this._handlers).forEach((e) => this._toggleEventHandler(e));
				}
				_toggleEventHandler(e, t) {
					this._handlers[e] &&
						(this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]),
						t && (this.input.addEventListener(e, t), (this._handlers[e] = t));
				}
			}
			(_e.EVENTS_MAP = {
				selectionChange: "keydown",
				input: "input",
				drop: "drop",
				click: "click",
				focus: "focus",
				commit: "blur",
			}),
				(fe.HTMLMaskElement = _e);
			class xe extends _e {
				constructor(e) {
					super(e), (this.input = e), (this._handlers = {});
				}
				get _unsafeSelectionStart() {
					return null != this.input.selectionStart ? this.input.selectionStart : this.value.length;
				}
				get _unsafeSelectionEnd() {
					return this.input.selectionEnd;
				}
				_unsafeSelect(e, t) {
					this.input.setSelectionRange(e, t);
				}
				get value() {
					return this.input.value;
				}
				set value(e) {
					this.input.value = e;
				}
			}
			fe.HTMLMaskElement = _e;
			class ye extends _e {
				get _unsafeSelectionStart() {
					const e = this.rootElement,
						t = e.getSelection && e.getSelection(),
						s = t && t.anchorOffset,
						i = t && t.focusOffset;
					return null == i || null == s || s < i ? s : i;
				}
				get _unsafeSelectionEnd() {
					const e = this.rootElement,
						t = e.getSelection && e.getSelection(),
						s = t && t.anchorOffset,
						i = t && t.focusOffset;
					return null == i || null == s || s > i ? s : i;
				}
				_unsafeSelect(e, t) {
					if (!this.rootElement.createRange) return;
					const s = this.rootElement.createRange();
					s.setStart(this.input.firstChild || this.input, e),
						s.setEnd(this.input.lastChild || this.input, t);
					const i = this.rootElement,
						r = i.getSelection && i.getSelection();
					r && (r.removeAllRanges(), r.addRange(s));
				}
				get value() {
					return this.input.textContent || "";
				}
				set value(e) {
					this.input.textContent = e;
				}
			}
			(fe.HTMLContenteditableMaskElement = ye),
				(fe.InputMask = class {
					constructor(e, t) {
						(this.el =
							e instanceof ke
								? e
								: e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName
								? new ye(e)
								: new xe(e)),
							(this.masked = ve(t)),
							(this._listeners = {}),
							(this._value = ""),
							(this._unmaskedValue = ""),
							(this._saveSelection = this._saveSelection.bind(this)),
							(this._onInput = this._onInput.bind(this)),
							(this._onChange = this._onChange.bind(this)),
							(this._onDrop = this._onDrop.bind(this)),
							(this._onFocus = this._onFocus.bind(this)),
							(this._onClick = this._onClick.bind(this)),
							(this.alignCursor = this.alignCursor.bind(this)),
							(this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
							this._bindEvents(),
							this.updateValue(),
							this._onChange();
					}
					maskEquals(e) {
						var t;
						return null == e || (null == (t = this.masked) ? void 0 : t.maskEquals(e));
					}
					get mask() {
						return this.masked.mask;
					}
					set mask(e) {
						if (this.maskEquals(e)) return;
						if (!(e instanceof fe.Masked) && this.masked.constructor === me(e))
							return void this.masked.updateOptions({ mask: e });
						const t = e instanceof fe.Masked ? e : ve({ mask: e });
						(t.unmaskedValue = this.masked.unmaskedValue), (this.masked = t);
					}
					get value() {
						return this._value;
					}
					set value(e) {
						this.value !== e && ((this.masked.value = e), this.updateControl(), this.alignCursor());
					}
					get unmaskedValue() {
						return this._unmaskedValue;
					}
					set unmaskedValue(e) {
						this.unmaskedValue !== e &&
							((this.masked.unmaskedValue = e), this.updateControl(), this.alignCursor());
					}
					get typedValue() {
						return this.masked.typedValue;
					}
					set typedValue(e) {
						this.masked.typedValueEquals(e) ||
							((this.masked.typedValue = e), this.updateControl(), this.alignCursor());
					}
					get displayValue() {
						return this.masked.displayValue;
					}
					_bindEvents() {
						this.el.bindEvents({
							selectionChange: this._saveSelection,
							input: this._onInput,
							drop: this._onDrop,
							click: this._onClick,
							focus: this._onFocus,
							commit: this._onChange,
						});
					}
					_unbindEvents() {
						this.el && this.el.unbindEvents();
					}
					_fireEvent(e, t) {
						const s = this._listeners[e];
						s && s.forEach((e) => e(t));
					}
					get selectionStart() {
						return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
					}
					get cursorPos() {
						return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
					}
					set cursorPos(e) {
						this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection());
					}
					_saveSelection() {
						this.displayValue !== this.el.value &&
							console.warn(
								"Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
							),
							(this._selection = { start: this.selectionStart, end: this.cursorPos });
					}
					updateValue() {
						(this.masked.value = this.el.value), (this._value = this.masked.value);
					}
					updateControl() {
						const e = this.masked.unmaskedValue,
							t = this.masked.value,
							s = this.displayValue,
							i = this.unmaskedValue !== e || this.value !== t;
						(this._unmaskedValue = e),
							(this._value = t),
							this.el.value !== s && (this.el.value = s),
							i && this._fireChangeEvents();
					}
					updateOptions(e) {
						const { mask: t, ...s } = e,
							i = !this.maskEquals(t),
							r = !de(this.masked, s);
						i && (this.mask = t),
							r && this.masked.updateOptions(s),
							(i || r) && this.updateControl();
					}
					updateCursor(e) {
						null != e && ((this.cursorPos = e), this._delayUpdateCursor(e));
					}
					_delayUpdateCursor(e) {
						this._abortUpdateCursor(),
							(this._changingCursorPos = e),
							(this._cursorChanging = setTimeout(() => {
								this.el && ((this.cursorPos = this._changingCursorPos), this._abortUpdateCursor());
							}, 10));
					}
					_fireChangeEvents() {
						this._fireEvent("accept", this._inputEvent),
							this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
					}
					_abortUpdateCursor() {
						this._cursorChanging &&
							(clearTimeout(this._cursorChanging), delete this._cursorChanging);
					}
					alignCursor() {
						this.cursorPos = this.masked.nearestInputPos(
							this.masked.nearestInputPos(this.cursorPos, ue)
						);
					}
					alignCursorFriendly() {
						this.selectionStart === this.cursorPos && this.alignCursor();
					}
					on(e, t) {
						return (
							this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
						);
					}
					off(e, t) {
						if (!this._listeners[e]) return this;
						if (!t) return delete this._listeners[e], this;
						const s = this._listeners[e].indexOf(t);
						return s >= 0 && this._listeners[e].splice(s, 1), this;
					}
					_onInput(e) {
						if (((this._inputEvent = e), this._abortUpdateCursor(), !this._selection))
							return this.updateValue();
						const t = new pe({
								value: this.el.value,
								cursorPos: this.cursorPos,
								oldValue: this.displayValue,
								oldSelection: this._selection,
							}),
							s = this.masked.rawInputValue,
							i = this.masked.splice(
								t.startChangePos,
								t.removed.length,
								t.inserted,
								t.removeDirection,
								{ input: !0, raw: !0 }
							).offset,
							r = s === this.masked.rawInputValue ? t.removeDirection : ne;
						let a = this.masked.nearestInputPos(t.startChangePos + i, r);
						r !== ne && (a = this.masked.nearestInputPos(a, ne)),
							this.updateControl(),
							this.updateCursor(a),
							delete this._inputEvent;
					}
					_onChange() {
						this.displayValue !== this.el.value && this.updateValue(),
							this.masked.doCommit(),
							this.updateControl(),
							this._saveSelection();
					}
					_onDrop(e) {
						e.preventDefault(), e.stopPropagation();
					}
					_onFocus(e) {
						this.alignCursorFriendly();
					}
					_onClick(e) {
						this.alignCursorFriendly();
					}
					destroy() {
						this._unbindEvents(), (this._listeners.length = 0), delete this.el;
					}
				});
			class be {
				static normalize(e) {
					return Array.isArray(e) ? e : [e, new be()];
				}
				constructor(e) {
					Object.assign(this, { inserted: "", rawInserted: "", skip: !1, tailShift: 0 }, e);
				}
				aggregate(e) {
					return (
						(this.rawInserted += e.rawInserted),
						(this.skip = this.skip || e.skip),
						(this.inserted += e.inserted),
						(this.tailShift += e.tailShift),
						this
					);
				}
				get offset() {
					return this.tailShift + this.inserted.length;
				}
			}
			fe.ChangeDetails = be;
			class Fe {
				constructor(e, t, s) {
					void 0 === e && (e = ""),
						void 0 === t && (t = 0),
						(this.value = e),
						(this.from = t),
						(this.stop = s);
				}
				toString() {
					return this.value;
				}
				extend(e) {
					this.value += String(e);
				}
				appendTo(e) {
					return e.append(this.toString(), { tail: !0 }).aggregate(e._appendPlaceholder());
				}
				get state() {
					return { value: this.value, from: this.from, stop: this.stop };
				}
				set state(e) {
					Object.assign(this, e);
				}
				unshift(e) {
					if (!this.value.length || (null != e && this.from >= e)) return "";
					const t = this.value[0];
					return (this.value = this.value.slice(1)), t;
				}
				shift() {
					if (!this.value.length) return "";
					const e = this.value[this.value.length - 1];
					return (this.value = this.value.slice(0, -1)), e;
				}
			}
			class Ae {
				constructor(e) {
					(this._value = ""), this._update({ ...Ae.DEFAULTS, ...e }), (this._initialized = !0);
				}
				updateOptions(e) {
					Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e));
				}
				_update(e) {
					Object.assign(this, e);
				}
				get state() {
					return { _value: this.value, _rawInputValue: this.rawInputValue };
				}
				set state(e) {
					this._value = e._value;
				}
				reset() {
					this._value = "";
				}
				get value() {
					return this._value;
				}
				set value(e) {
					this.resolve(e, { input: !0 });
				}
				resolve(e, t) {
					void 0 === t && (t = { input: !0 }), this.reset(), this.append(e, t, ""), this.doCommit();
				}
				get unmaskedValue() {
					return this.value;
				}
				set unmaskedValue(e) {
					this.resolve(e, {});
				}
				get typedValue() {
					return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
				}
				set typedValue(e) {
					this.format ? (this.value = this.format(e, this)) : (this.unmaskedValue = String(e));
				}
				get rawInputValue() {
					return this.extractInput(0, this.displayValue.length, { raw: !0 });
				}
				set rawInputValue(e) {
					this.resolve(e, { raw: !0 });
				}
				get displayValue() {
					return this.value;
				}
				get isComplete() {
					return !0;
				}
				get isFilled() {
					return this.isComplete;
				}
				nearestInputPos(e, t) {
					return e;
				}
				totalInputPositions(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						Math.min(this.displayValue.length, t - e)
					);
				}
				extractInput(e, t, s) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						this.displayValue.slice(e, t)
					);
				}
				extractTail(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						new Fe(this.extractInput(e, t), e)
					);
				}
				appendTail(e) {
					return ie(e) && (e = new Fe(String(e))), e.appendTo(this);
				}
				_appendCharRaw(e, t) {
					return e ? ((this._value += e), new be({ inserted: e, rawInserted: e })) : new be();
				}
				_appendChar(e, t, s) {
					void 0 === t && (t = {});
					const i = this.state;
					let r;
					if (
						(([e, r] = this.doPrepareChar(e, t)),
						(r = r.aggregate(this._appendCharRaw(e, t))),
						r.inserted)
					) {
						let e,
							a = !1 !== this.doValidate(t);
						if (a && null != s) {
							const t = this.state;
							!0 === this.overwrite &&
								((e = s.state), s.unshift(this.displayValue.length - r.tailShift));
							let i = this.appendTail(s);
							(a = i.rawInserted === s.toString()),
								(a && i.inserted) ||
									"shift" !== this.overwrite ||
									((this.state = t),
									(e = s.state),
									s.shift(),
									(i = this.appendTail(s)),
									(a = i.rawInserted === s.toString())),
								a && i.inserted && (this.state = t);
						}
						a || ((r = new be()), (this.state = i), s && e && (s.state = e));
					}
					return r;
				}
				_appendPlaceholder() {
					return new be();
				}
				_appendEager() {
					return new be();
				}
				append(e, t, s) {
					if (!ie(e)) throw new Error("value should be string");
					const i = ie(s) ? new Fe(String(s)) : s;
					let r;
					null != t && t.tail && (t._beforeTailState = this.state), ([e, r] = this.doPrepare(e, t));
					for (let s = 0; s < e.length; ++s) {
						const a = this._appendChar(e[s], t, i);
						if (!a.rawInserted && !this.doSkipInvalid(e[s], t, i)) break;
						r.aggregate(a);
					}
					return (
						(!0 === this.eager || "append" === this.eager) &&
							null != t &&
							t.input &&
							e &&
							r.aggregate(this._appendEager()),
						null != i && (r.tailShift += this.appendTail(i).tailShift),
						r
					);
				}
				remove(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						(this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t)),
						new be()
					);
				}
				withValueRefresh(e) {
					if (this._refreshing || !this._initialized) return e();
					this._refreshing = !0;
					const t = this.rawInputValue,
						s = this.value,
						i = e();
					return (
						(this.rawInputValue = t),
						this.value &&
							this.value !== s &&
							0 === s.indexOf(this.value) &&
							this.append(s.slice(this.displayValue.length), {}, ""),
						delete this._refreshing,
						i
					);
				}
				runIsolated(e) {
					if (this._isolated || !this._initialized) return e(this);
					this._isolated = !0;
					const t = this.state,
						s = e(this);
					return (this.state = t), delete this._isolated, s;
				}
				doSkipInvalid(e, t, s) {
					return Boolean(this.skipInvalid);
				}
				doPrepare(e, t) {
					return (
						void 0 === t && (t = {}), be.normalize(this.prepare ? this.prepare(e, this, t) : e)
					);
				}
				doPrepareChar(e, t) {
					return (
						void 0 === t && (t = {}),
						be.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e)
					);
				}
				doValidate(e) {
					return (
						(!this.validate || this.validate(this.value, this, e)) &&
						(!this.parent || this.parent.doValidate(e))
					);
				}
				doCommit() {
					this.commit && this.commit(this.value, this);
				}
				splice(e, t, s, i, r) {
					void 0 === i && (i = ne), void 0 === r && (r = { input: !0 });
					const a = e + t,
						n = this.extractTail(a),
						u = !0 === this.eager || "remove" === this.eager;
					let o;
					u &&
						((i = (function (e) {
							switch (e) {
								case ue:
									return oe;
								case le:
									return he;
								default:
									return e;
							}
						})(i)),
						(o = this.extractInput(0, a, { raw: !0 })));
					let l = e;
					const h = new be();
					if (
						(i !== ne &&
							((l = this.nearestInputPos(e, t > 1 && 0 !== e && !u ? ne : i)),
							(h.tailShift = l - e)),
						h.aggregate(this.remove(l)),
						u && i !== ne && o === this.rawInputValue)
					)
						if (i === oe) {
							let e;
							for (; o === this.rawInputValue && (e = this.displayValue.length); )
								h.aggregate(new be({ tailShift: -1 })).aggregate(this.remove(e - 1));
						} else i === he && n.unshift();
					return h.aggregate(this.append(s, r, n));
				}
				maskEquals(e) {
					return this.mask === e;
				}
				typedValueEquals(e) {
					const t = this.typedValue;
					return (
						e === t ||
						(Ae.EMPTY_VALUES.includes(e) && Ae.EMPTY_VALUES.includes(t)) ||
						(!!this.format && this.format(e, this) === this.format(this.typedValue, this))
					);
				}
			}
			(Ae.DEFAULTS = { skipInvalid: !0 }), (Ae.EMPTY_VALUES = [void 0, null, ""]), (fe.Masked = Ae);
			class Ee {
				constructor(e, t) {
					void 0 === e && (e = []), void 0 === t && (t = 0), (this.chunks = e), (this.from = t);
				}
				toString() {
					return this.chunks.map(String).join("");
				}
				extend(e) {
					if (!String(e)) return;
					e = ie(e) ? new Fe(String(e)) : e;
					const t = this.chunks[this.chunks.length - 1],
						s =
							t && (t.stop === e.stop || null == e.stop) && e.from === t.from + t.toString().length;
					if (e instanceof Fe) s ? t.extend(e.toString()) : this.chunks.push(e);
					else if (e instanceof Ee) {
						if (null == e.stop) {
							let t;
							for (; e.chunks.length && null == e.chunks[0].stop; )
								(t = e.chunks.shift()), (t.from += e.from), this.extend(t);
						}
						e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
					}
				}
				appendTo(e) {
					if (!(e instanceof fe.MaskedPattern)) return new Fe(this.toString()).appendTo(e);
					const t = new be();
					for (let s = 0; s < this.chunks.length && !t.skip; ++s) {
						const i = this.chunks[s],
							r = e._mapPosToBlock(e.displayValue.length),
							a = i.stop;
						let n;
						if (null != a && (!r || r.index <= a)) {
							if (i instanceof Ee || e._stops.indexOf(a) >= 0) {
								const s = e._appendPlaceholder(a);
								t.aggregate(s);
							}
							n = i instanceof Ee && e._blocks[a];
						}
						if (n) {
							const s = n.appendTail(i);
							(s.skip = !1), t.aggregate(s), (e._value += s.inserted);
							const r = i.toString().slice(s.rawInserted.length);
							r && t.aggregate(e.append(r, { tail: !0 }));
						} else t.aggregate(e.append(i.toString(), { tail: !0 }));
					}
					return t;
				}
				get state() {
					return {
						chunks: this.chunks.map((e) => e.state),
						from: this.from,
						stop: this.stop,
						blockIndex: this.blockIndex,
					};
				}
				set state(e) {
					const { chunks: t, ...s } = e;
					Object.assign(this, s),
						(this.chunks = t.map((e) => {
							const t = "chunks" in e ? new Ee() : new Fe();
							return (t.state = e), t;
						}));
				}
				unshift(e) {
					if (!this.chunks.length || (null != e && this.from >= e)) return "";
					const t = null != e ? e - this.from : e;
					let s = 0;
					for (; s < this.chunks.length; ) {
						const e = this.chunks[s],
							i = e.unshift(t);
						if (e.toString()) {
							if (!i) break;
							++s;
						} else this.chunks.splice(s, 1);
						if (i) return i;
					}
					return "";
				}
				shift() {
					if (!this.chunks.length) return "";
					let e = this.chunks.length - 1;
					for (; 0 <= e; ) {
						const t = this.chunks[e],
							s = t.shift();
						if (t.toString()) {
							if (!s) break;
							--e;
						} else this.chunks.splice(e, 1);
						if (s) return s;
					}
					return "";
				}
			}
			class Ce {
				constructor(e, t) {
					(this.masked = e), (this._log = []);
					const { offset: s, index: i } =
						e._mapPosToBlock(t) ||
						(t < 0 ? { index: 0, offset: 0 } : { index: this.masked._blocks.length, offset: 0 });
					(this.offset = s), (this.index = i), (this.ok = !1);
				}
				get block() {
					return this.masked._blocks[this.index];
				}
				get pos() {
					return this.masked._blockStartPos(this.index) + this.offset;
				}
				get state() {
					return { index: this.index, offset: this.offset, ok: this.ok };
				}
				set state(e) {
					Object.assign(this, e);
				}
				pushState() {
					this._log.push(this.state);
				}
				popState() {
					const e = this._log.pop();
					return e && (this.state = e), e;
				}
				bindBlock() {
					this.block ||
						(this.index < 0 && ((this.index = 0), (this.offset = 0)),
						this.index >= this.masked._blocks.length &&
							((this.index = this.masked._blocks.length - 1),
							(this.offset = this.block.displayValue.length)));
				}
				_pushLeft(e) {
					for (
						this.pushState(), this.bindBlock();
						0 <= this.index;
						--this.index,
							this.offset = (null == (t = this.block) ? void 0 : t.displayValue.length) || 0
					) {
						var t;
						if (e()) return (this.ok = !0);
					}
					return (this.ok = !1);
				}
				_pushRight(e) {
					for (
						this.pushState(), this.bindBlock();
						this.index < this.masked._blocks.length;
						++this.index, this.offset = 0
					)
						if (e()) return (this.ok = !0);
					return (this.ok = !1);
				}
				pushLeftBeforeFilled() {
					return this._pushLeft(() => {
						if (!this.block.isFixed && this.block.value)
							return (
								(this.offset = this.block.nearestInputPos(this.offset, oe)),
								0 !== this.offset || void 0
							);
					});
				}
				pushLeftBeforeInput() {
					return this._pushLeft(() => {
						if (!this.block.isFixed)
							return (this.offset = this.block.nearestInputPos(this.offset, ue)), !0;
					});
				}
				pushLeftBeforeRequired() {
					return this._pushLeft(() => {
						if (!(this.block.isFixed || (this.block.isOptional && !this.block.value)))
							return (this.offset = this.block.nearestInputPos(this.offset, ue)), !0;
					});
				}
				pushRightBeforeFilled() {
					return this._pushRight(() => {
						if (!this.block.isFixed && this.block.value)
							return (
								(this.offset = this.block.nearestInputPos(this.offset, he)),
								this.offset !== this.block.value.length || void 0
							);
					});
				}
				pushRightBeforeInput() {
					return this._pushRight(() => {
						if (!this.block.isFixed)
							return (this.offset = this.block.nearestInputPos(this.offset, ne)), !0;
					});
				}
				pushRightBeforeRequired() {
					return this._pushRight(() => {
						if (!(this.block.isFixed || (this.block.isOptional && !this.block.value)))
							return (this.offset = this.block.nearestInputPos(this.offset, ne)), !0;
					});
				}
			}
			class Se {
				constructor(e) {
					Object.assign(this, e), (this._value = ""), (this.isFixed = !0);
				}
				get value() {
					return this._value;
				}
				get unmaskedValue() {
					return this.isUnmasking ? this.value : "";
				}
				get rawInputValue() {
					return this._isRawInput ? this.value : "";
				}
				get displayValue() {
					return this.value;
				}
				reset() {
					(this._isRawInput = !1), (this._value = "");
				}
				remove(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this._value.length),
						(this._value = this._value.slice(0, e) + this._value.slice(t)),
						this._value || (this._isRawInput = !1),
						new be()
					);
				}
				nearestInputPos(e, t) {
					void 0 === t && (t = ne);
					const s = this._value.length;
					switch (t) {
						case ue:
						case oe:
							return 0;
						default:
							return s;
					}
				}
				totalInputPositions(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this._value.length),
						this._isRawInput ? t - e : 0
					);
				}
				extractInput(e, t, s) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this._value.length),
						void 0 === s && (s = {}),
						(s.raw && this._isRawInput && this._value.slice(e, t)) || ""
					);
				}
				get isComplete() {
					return !0;
				}
				get isFilled() {
					return Boolean(this._value);
				}
				_appendChar(e, t) {
					void 0 === t && (t = {});
					const s = new be();
					if (this.isFilled) return s;
					const i = !0 === this.eager || "append" === this.eager,
						r =
							this.char === e &&
							(this.isUnmasking || t.input || t.raw) &&
							(!t.raw || !i) &&
							!t.tail;
					return (
						r && (s.rawInserted = this.char),
						(this._value = s.inserted = this.char),
						(this._isRawInput = r && (t.raw || t.input)),
						s
					);
				}
				_appendEager() {
					return this._appendChar(this.char, { tail: !0 });
				}
				_appendPlaceholder() {
					const e = new be();
					return this.isFilled || (this._value = e.inserted = this.char), e;
				}
				extractTail() {
					return new Fe("");
				}
				appendTail(e) {
					return ie(e) && (e = new Fe(String(e))), e.appendTo(this);
				}
				append(e, t, s) {
					const i = this._appendChar(e[0], t);
					return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
				}
				doCommit() {}
				get state() {
					return { _value: this._value, _rawInputValue: this.rawInputValue };
				}
				set state(e) {
					(this._value = e._value), (this._isRawInput = Boolean(e._rawInputValue));
				}
			}
			class we {
				constructor(e) {
					const {
						parent: t,
						isOptional: s,
						placeholderChar: i,
						displayChar: r,
						lazy: a,
						eager: n,
						...u
					} = e;
					(this.masked = ve(u)),
						Object.assign(this, {
							parent: t,
							isOptional: s,
							placeholderChar: i,
							displayChar: r,
							lazy: a,
							eager: n,
						});
				}
				reset() {
					(this.isFilled = !1), this.masked.reset();
				}
				remove(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.value.length),
						0 === e && t >= 1 ? ((this.isFilled = !1), this.masked.remove(e, t)) : new be()
					);
				}
				get value() {
					return (
						this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
					);
				}
				get unmaskedValue() {
					return this.masked.unmaskedValue;
				}
				get rawInputValue() {
					return this.masked.rawInputValue;
				}
				get displayValue() {
					return (this.masked.value && this.displayChar) || this.value;
				}
				get isComplete() {
					return Boolean(this.masked.value) || this.isOptional;
				}
				_appendChar(e, t) {
					if ((void 0 === t && (t = {}), this.isFilled)) return new be();
					const s = this.masked.state,
						i = this.masked._appendChar(e, this.currentMaskFlags(t));
					return (
						i.inserted &&
							!1 === this.doValidate(t) &&
							((i.inserted = i.rawInserted = ""), (this.masked.state = s)),
						i.inserted ||
							this.isOptional ||
							this.lazy ||
							t.input ||
							(i.inserted = this.placeholderChar),
						(i.skip = !i.inserted && !this.isOptional),
						(this.isFilled = Boolean(i.inserted)),
						i
					);
				}
				append(e, t, s) {
					return this.masked.append(e, this.currentMaskFlags(t), s);
				}
				_appendPlaceholder() {
					const e = new be();
					return (
						this.isFilled ||
							this.isOptional ||
							((this.isFilled = !0), (e.inserted = this.placeholderChar)),
						e
					);
				}
				_appendEager() {
					return new be();
				}
				extractTail(e, t) {
					return this.masked.extractTail(e, t);
				}
				appendTail(e) {
					return this.masked.appendTail(e);
				}
				extractInput(e, t, s) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.value.length),
						this.masked.extractInput(e, t, s)
					);
				}
				nearestInputPos(e, t) {
					void 0 === t && (t = ne);
					const s = this.value.length,
						i = Math.min(Math.max(e, 0), s);
					switch (t) {
						case ue:
						case oe:
							return this.isComplete ? i : 0;
						case le:
						case he:
							return this.isComplete ? i : s;
						default:
							return i;
					}
				}
				totalInputPositions(e, t) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.value.length),
						this.value.slice(e, t).length
					);
				}
				doValidate(e) {
					return (
						this.masked.doValidate(this.currentMaskFlags(e)) &&
						(!this.parent || this.parent.doValidate(this.currentMaskFlags(e)))
					);
				}
				doCommit() {
					this.masked.doCommit();
				}
				get state() {
					return {
						_value: this.value,
						_rawInputValue: this.rawInputValue,
						masked: this.masked.state,
						isFilled: this.isFilled,
					};
				}
				set state(e) {
					(this.masked.state = e.masked), (this.isFilled = e.isFilled);
				}
				currentMaskFlags(e) {
					var t;
					return {
						...e,
						_beforeTailState:
							(null == e || null == (t = e._beforeTailState) ? void 0 : t.masked) ||
							(null == e ? void 0 : e._beforeTailState),
					};
				}
			}
			(we.DEFAULT_DEFINITIONS = {
				0: /\d/,
				a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
				"*": /./,
			}),
				(fe.MaskedRegExp = class extends Ae {
					updateOptions(e) {
						super.updateOptions(e);
					}
					_update(e) {
						const t = e.mask;
						t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
					}
				});
			class De extends Ae {
				constructor(e) {
					super({
						...De.DEFAULTS,
						...e,
						definitions: Object.assign(
							{},
							we.DEFAULT_DEFINITIONS,
							null == e ? void 0 : e.definitions
						),
					});
				}
				updateOptions(e) {
					super.updateOptions(e);
				}
				_update(e) {
					(e.definitions = Object.assign({}, this.definitions, e.definitions)),
						super._update(e),
						this._rebuildMask();
				}
				_rebuildMask() {
					const e = this.definitions;
					(this._blocks = []),
						(this.exposeBlock = void 0),
						(this._stops = []),
						(this._maskedBlocks = {});
					const t = this.mask;
					if (!t || !e) return;
					let s = !1,
						i = !1;
					for (let r = 0; r < t.length; ++r) {
						if (this.blocks) {
							const e = t.slice(r),
								s = Object.keys(this.blocks).filter((t) => 0 === e.indexOf(t));
							s.sort((e, t) => t.length - e.length);
							const i = s[0];
							if (i) {
								const { expose: e, ...t } = ge(this.blocks[i]),
									s = ve({
										lazy: this.lazy,
										eager: this.eager,
										placeholderChar: this.placeholderChar,
										displayChar: this.displayChar,
										overwrite: this.overwrite,
										...t,
										parent: this,
									});
								s &&
									(this._blocks.push(s),
									e && (this.exposeBlock = s),
									this._maskedBlocks[i] || (this._maskedBlocks[i] = []),
									this._maskedBlocks[i].push(this._blocks.length - 1)),
									(r += i.length - 1);
								continue;
							}
						}
						let a = t[r],
							n = a in e;
						if (a === De.STOP_CHAR) {
							this._stops.push(this._blocks.length);
							continue;
						}
						if ("{" === a || "}" === a) {
							s = !s;
							continue;
						}
						if ("[" === a || "]" === a) {
							i = !i;
							continue;
						}
						if (a === De.ESCAPE_CHAR) {
							if ((++r, (a = t[r]), !a)) break;
							n = !1;
						}
						const u = n
							? new we({
									isOptional: i,
									lazy: this.lazy,
									eager: this.eager,
									placeholderChar: this.placeholderChar,
									displayChar: this.displayChar,
									...ge(e[a]),
									parent: this,
							  })
							: new Se({ char: a, eager: this.eager, isUnmasking: s });
						this._blocks.push(u);
					}
				}
				get state() {
					return { ...super.state, _blocks: this._blocks.map((e) => e.state) };
				}
				set state(e) {
					const { _blocks: t, ...s } = e;
					this._blocks.forEach((e, s) => (e.state = t[s])), (super.state = s);
				}
				reset() {
					super.reset(), this._blocks.forEach((e) => e.reset());
				}
				get isComplete() {
					return this.exposeBlock
						? this.exposeBlock.isComplete
						: this._blocks.every((e) => e.isComplete);
				}
				get isFilled() {
					return this._blocks.every((e) => e.isFilled);
				}
				get isFixed() {
					return this._blocks.every((e) => e.isFixed);
				}
				get isOptional() {
					return this._blocks.every((e) => e.isOptional);
				}
				doCommit() {
					this._blocks.forEach((e) => e.doCommit()), super.doCommit();
				}
				get unmaskedValue() {
					return this.exposeBlock
						? this.exposeBlock.unmaskedValue
						: this._blocks.reduce((e, t) => e + t.unmaskedValue, "");
				}
				set unmaskedValue(e) {
					if (this.exposeBlock) {
						const t = this.extractTail(
							this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) +
								this.exposeBlock.displayValue.length
						);
						(this.exposeBlock.unmaskedValue = e), this.appendTail(t), this.doCommit();
					} else super.unmaskedValue = e;
				}
				get value() {
					return this.exposeBlock
						? this.exposeBlock.value
						: this._blocks.reduce((e, t) => e + t.value, "");
				}
				set value(e) {
					if (this.exposeBlock) {
						const t = this.extractTail(
							this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) +
								this.exposeBlock.displayValue.length
						);
						(this.exposeBlock.value = e), this.appendTail(t), this.doCommit();
					} else super.value = e;
				}
				get typedValue() {
					return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
				}
				set typedValue(e) {
					if (this.exposeBlock) {
						const t = this.extractTail(
							this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) +
								this.exposeBlock.displayValue.length
						);
						(this.exposeBlock.typedValue = e), this.appendTail(t), this.doCommit();
					} else super.typedValue = e;
				}
				get displayValue() {
					return this._blocks.reduce((e, t) => e + t.displayValue, "");
				}
				appendTail(e) {
					return super.appendTail(e).aggregate(this._appendPlaceholder());
				}
				_appendEager() {
					var e;
					const t = new be();
					let s = null == (e = this._mapPosToBlock(this.displayValue.length)) ? void 0 : e.index;
					if (null == s) return t;
					this._blocks[s].isFilled && ++s;
					for (let e = s; e < this._blocks.length; ++e) {
						const s = this._blocks[e]._appendEager();
						if (!s.inserted) break;
						t.aggregate(s);
					}
					return t;
				}
				_appendCharRaw(e, t) {
					void 0 === t && (t = {});
					const s = this._mapPosToBlock(this.displayValue.length),
						i = new be();
					if (!s) return i;
					for (let a = s.index; ; ++a) {
						var r;
						const s = this._blocks[a];
						if (!s) break;
						const n = s._appendChar(e, {
								...t,
								_beforeTailState:
									null == (r = t._beforeTailState) || null == (r = r._blocks) ? void 0 : r[a],
							}),
							u = n.skip;
						if ((i.aggregate(n), u || n.rawInserted)) break;
					}
					return i;
				}
				extractTail(e, t) {
					void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
					const s = new Ee();
					return (
						e === t ||
							this._forEachBlocksInRange(e, t, (e, t, i, r) => {
								const a = e.extractTail(i, r);
								(a.stop = this._findStopBefore(t)),
									(a.from = this._blockStartPos(t)),
									a instanceof Ee && (a.blockIndex = t),
									s.extend(a);
							}),
						s
					);
				}
				extractInput(e, t, s) {
					if (
						(void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						void 0 === s && (s = {}),
						e === t)
					)
						return "";
					let i = "";
					return (
						this._forEachBlocksInRange(e, t, (e, t, r, a) => {
							i += e.extractInput(r, a, s);
						}),
						i
					);
				}
				_findStopBefore(e) {
					let t;
					for (let s = 0; s < this._stops.length; ++s) {
						const i = this._stops[s];
						if (!(i <= e)) break;
						t = i;
					}
					return t;
				}
				_appendPlaceholder(e) {
					const t = new be();
					if (this.lazy && null == e) return t;
					const s = this._mapPosToBlock(this.displayValue.length);
					if (!s) return t;
					const i = s.index,
						r = null != e ? e : this._blocks.length;
					return (
						this._blocks.slice(i, r).forEach((s) => {
							if (!s.lazy || null != e) {
								var i;
								const e = s._appendPlaceholder(null == (i = s._blocks) ? void 0 : i.length);
								(this._value += e.inserted), t.aggregate(e);
							}
						}),
						t
					);
				}
				_mapPosToBlock(e) {
					let t = "";
					for (let s = 0; s < this._blocks.length; ++s) {
						const i = this._blocks[s],
							r = t.length;
						if (((t += i.displayValue), e <= t.length)) return { index: s, offset: e - r };
					}
				}
				_blockStartPos(e) {
					return this._blocks.slice(0, e).reduce((e, t) => e + t.displayValue.length, 0);
				}
				_forEachBlocksInRange(e, t, s) {
					void 0 === t && (t = this.displayValue.length);
					const i = this._mapPosToBlock(e);
					if (i) {
						const e = this._mapPosToBlock(t),
							r = e && i.index === e.index,
							a = i.offset,
							n = e && r ? e.offset : this._blocks[i.index].displayValue.length;
						if ((s(this._blocks[i.index], i.index, a, n), e && !r)) {
							for (let t = i.index + 1; t < e.index; ++t)
								s(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
							s(this._blocks[e.index], e.index, 0, e.offset);
						}
					}
				}
				remove(e, t) {
					void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
					const s = super.remove(e, t);
					return (
						this._forEachBlocksInRange(e, t, (e, t, i, r) => {
							s.aggregate(e.remove(i, r));
						}),
						s
					);
				}
				nearestInputPos(e, t) {
					if ((void 0 === t && (t = ne), !this._blocks.length)) return 0;
					const s = new Ce(this, e);
					if (t === ne)
						return s.pushRightBeforeInput()
							? s.pos
							: (s.popState(), s.pushLeftBeforeInput() ? s.pos : this.displayValue.length);
					if (t === ue || t === oe) {
						if (t === ue) {
							if ((s.pushRightBeforeFilled(), s.ok && s.pos === e)) return e;
							s.popState();
						}
						if (
							(s.pushLeftBeforeInput(),
							s.pushLeftBeforeRequired(),
							s.pushLeftBeforeFilled(),
							t === ue)
						) {
							if ((s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e))
								return s.pos;
							if ((s.popState(), s.ok && s.pos <= e)) return s.pos;
							s.popState();
						}
						return s.ok
							? s.pos
							: t === oe
							? 0
							: (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
					}
					return t === le || t === he
						? (s.pushRightBeforeInput(),
						  s.pushRightBeforeRequired(),
						  s.pushRightBeforeFilled()
								? s.pos
								: t === he
								? this.displayValue.length
								: (s.popState(),
								  s.ok ? s.pos : (s.popState(), s.ok ? s.pos : this.nearestInputPos(e, ue))))
						: e;
				}
				totalInputPositions(e, t) {
					void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
					let s = 0;
					return (
						this._forEachBlocksInRange(e, t, (e, t, i, r) => {
							s += e.totalInputPositions(i, r);
						}),
						s
					);
				}
				maskedBlock(e) {
					return this.maskedBlocks(e)[0];
				}
				maskedBlocks(e) {
					const t = this._maskedBlocks[e];
					return t ? t.map((e) => this._blocks[e]) : [];
				}
			}
			(De.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
				(De.STOP_CHAR = "`"),
				(De.ESCAPE_CHAR = "\\"),
				(De.InputDefinition = we),
				(De.FixedDefinition = Se),
				(fe.MaskedPattern = De);
			class Te extends De {
				get _matchFrom() {
					return this.maxLength - String(this.from).length;
				}
				constructor(e) {
					super(e);
				}
				updateOptions(e) {
					super.updateOptions(e);
				}
				_update(e) {
					const {
						to: t = this.to || 0,
						from: s = this.from || 0,
						maxLength: i = this.maxLength || 0,
						autofix: r = this.autofix,
						...a
					} = e;
					(this.to = t),
						(this.from = s),
						(this.maxLength = Math.max(String(t).length, i)),
						(this.autofix = r);
					const n = String(this.from).padStart(this.maxLength, "0"),
						u = String(this.to).padStart(this.maxLength, "0");
					let o = 0;
					for (; o < u.length && u[o] === n[o]; ) ++o;
					(a.mask = u.slice(0, o).replace(/0/g, "\\0") + "0".repeat(this.maxLength - o)),
						super._update(a);
				}
				get isComplete() {
					return super.isComplete && Boolean(this.value);
				}
				boundaries(e) {
					let t = "",
						s = "";
					const [, i, r] = e.match(/^(\D*)(\d*)(\D*)/) || [];
					return (
						r && ((t = "0".repeat(i.length) + r), (s = "9".repeat(i.length) + r)),
						(t = t.padEnd(this.maxLength, "0")),
						(s = s.padEnd(this.maxLength, "9")),
						[t, s]
					);
				}
				doPrepareChar(e, t) {
					let s;
					if (
						(void 0 === t && (t = {}),
						([e, s] = super.doPrepareChar(e.replace(/\D/g, ""), t)),
						!this.autofix || !e)
					)
						return [e, s];
					const i = String(this.from).padStart(this.maxLength, "0"),
						r = String(this.to).padStart(this.maxLength, "0"),
						a = this.value + e;
					if (a.length > this.maxLength) return ["", s];
					const [n, u] = this.boundaries(a);
					return Number(u) < this.from
						? [i[a.length - 1], s]
						: Number(n) > this.to
						? "pad" === this.autofix && a.length < this.maxLength
							? ["", s.aggregate(this.append(i[a.length - 1] + e, t))]
							: [r[a.length - 1], s]
						: [e, s];
				}
				doValidate(e) {
					const t = this.value;
					if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom) return !0;
					const [s, i] = this.boundaries(t);
					return this.from <= Number(i) && Number(s) <= this.to && super.doValidate(e);
				}
			}
			fe.MaskedRange = Te;
			class Be extends De {
				constructor(e) {
					const { mask: t, pattern: s, ...i } = { ...Be.DEFAULTS, ...e };
					super({ ...i, mask: ie(t) ? t : s });
				}
				updateOptions(e) {
					super.updateOptions(e);
				}
				_update(e) {
					const { mask: t, pattern: s, blocks: i, ...r } = { ...Be.DEFAULTS, ...e },
						a = Object.assign({}, Be.GET_DEFAULT_BLOCKS());
					e.min && (a.Y.from = e.min.getFullYear()),
						e.max && (a.Y.to = e.max.getFullYear()),
						e.min &&
							e.max &&
							a.Y.from === a.Y.to &&
							((a.m.from = e.min.getMonth() + 1),
							(a.m.to = e.max.getMonth() + 1),
							a.m.from === a.m.to && ((a.d.from = e.min.getDate()), (a.d.to = e.max.getDate()))),
						Object.assign(a, this.blocks, i),
						Object.keys(a).forEach((t) => {
							const s = a[t];
							!("autofix" in s) && "autofix" in e && (s.autofix = e.autofix);
						}),
						super._update({ ...r, mask: ie(t) ? t : s, blocks: a });
				}
				doValidate(e) {
					const t = this.date;
					return (
						super.doValidate(e) &&
						(!this.isComplete ||
							(this.isDateExist(this.value) &&
								null != t &&
								(null == this.min || this.min <= t) &&
								(null == this.max || t <= this.max)))
					);
				}
				isDateExist(e) {
					return this.format(this.parse(e, this), this).indexOf(e) >= 0;
				}
				get date() {
					return this.typedValue;
				}
				set date(e) {
					this.typedValue = e;
				}
				get typedValue() {
					return this.isComplete ? super.typedValue : null;
				}
				set typedValue(e) {
					super.typedValue = e;
				}
				maskEquals(e) {
					return e === Date || super.maskEquals(e);
				}
			}
			(Be.GET_DEFAULT_BLOCKS = () => ({
				d: { mask: Te, from: 1, to: 31, maxLength: 2 },
				m: { mask: Te, from: 1, to: 12, maxLength: 2 },
				Y: { mask: Te, from: 1900, to: 9999 },
			})),
				(Be.DEFAULTS = {
					mask: Date,
					pattern: "d{.}`m{.}`Y",
					format: (e, t) =>
						e
							? [
									String(e.getDate()).padStart(2, "0"),
									String(e.getMonth() + 1).padStart(2, "0"),
									e.getFullYear(),
							  ].join(".")
							: "",
					parse: (e, t) => {
						const [s, i, r] = e.split(".").map(Number);
						return new Date(r, i - 1, s);
					},
				}),
				(fe.MaskedDate = Be);
			class Ve extends Ae {
				constructor(e) {
					super({ ...Ve.DEFAULTS, ...e }), (this.currentMask = void 0);
				}
				updateOptions(e) {
					super.updateOptions(e);
				}
				_update(e) {
					super._update(e),
						"mask" in e &&
							((this.exposeMask = void 0),
							(this.compiledMasks = Array.isArray(e.mask)
								? e.mask.map((e) => {
										const { expose: t, ...s } = ge(e),
											i = ve({
												overwrite: this._overwrite,
												eager: this._eager,
												skipInvalid: this._skipInvalid,
												...s,
											});
										return t && (this.exposeMask = i), i;
								  })
								: []));
				}
				_appendCharRaw(e, t) {
					void 0 === t && (t = {});
					const s = this._applyDispatch(e, t);
					return (
						this.currentMask &&
							s.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))),
						s
					);
				}
				_applyDispatch(e, t, s) {
					void 0 === e && (e = ""), void 0 === t && (t = {}), void 0 === s && (s = "");
					const i = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
						r = this.rawInputValue,
						a = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : r,
						n = r.slice(a.length),
						u = this.currentMask,
						o = new be(),
						l = null == u ? void 0 : u.state;
					if (((this.currentMask = this.doDispatch(e, { ...t }, s)), this.currentMask))
						if (this.currentMask !== u) {
							if ((this.currentMask.reset(), a)) {
								const e = this.currentMask.append(a, { raw: !0 });
								o.tailShift = e.inserted.length - i.length;
							}
							n && (o.tailShift += this.currentMask.append(n, { raw: !0, tail: !0 }).tailShift);
						} else l && (this.currentMask.state = l);
					return o;
				}
				_appendPlaceholder() {
					const e = this._applyDispatch();
					return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e;
				}
				_appendEager() {
					const e = this._applyDispatch();
					return this.currentMask && e.aggregate(this.currentMask._appendEager()), e;
				}
				appendTail(e) {
					const t = new be();
					return (
						e && t.aggregate(this._applyDispatch("", {}, e)),
						t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e))
					);
				}
				currentMaskFlags(e) {
					var t, s;
					return {
						...e,
						_beforeTailState:
							((null == (t = e._beforeTailState) ? void 0 : t.currentMaskRef) ===
								this.currentMask &&
								(null == (s = e._beforeTailState) ? void 0 : s.currentMask)) ||
							e._beforeTailState,
					};
				}
				doDispatch(e, t, s) {
					return void 0 === t && (t = {}), void 0 === s && (s = ""), this.dispatch(e, this, t, s);
				}
				doValidate(e) {
					return (
						super.doValidate(e) &&
						(!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)))
					);
				}
				doPrepare(e, t) {
					void 0 === t && (t = {});
					let [s, i] = super.doPrepare(e, t);
					if (this.currentMask) {
						let e;
						([s, e] = super.doPrepare(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
					}
					return [s, i];
				}
				doPrepareChar(e, t) {
					void 0 === t && (t = {});
					let [s, i] = super.doPrepareChar(e, t);
					if (this.currentMask) {
						let e;
						([s, e] = super.doPrepareChar(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
					}
					return [s, i];
				}
				reset() {
					var e;
					null == (e = this.currentMask) || e.reset(), this.compiledMasks.forEach((e) => e.reset());
				}
				get value() {
					return this.exposeMask
						? this.exposeMask.value
						: this.currentMask
						? this.currentMask.value
						: "";
				}
				set value(e) {
					this.exposeMask
						? ((this.exposeMask.value = e),
						  (this.currentMask = this.exposeMask),
						  this._applyDispatch())
						: (super.value = e);
				}
				get unmaskedValue() {
					return this.exposeMask
						? this.exposeMask.unmaskedValue
						: this.currentMask
						? this.currentMask.unmaskedValue
						: "";
				}
				set unmaskedValue(e) {
					this.exposeMask
						? ((this.exposeMask.unmaskedValue = e),
						  (this.currentMask = this.exposeMask),
						  this._applyDispatch())
						: (super.unmaskedValue = e);
				}
				get typedValue() {
					return this.exposeMask
						? this.exposeMask.typedValue
						: this.currentMask
						? this.currentMask.typedValue
						: "";
				}
				set typedValue(e) {
					if (this.exposeMask)
						return (
							(this.exposeMask.typedValue = e),
							(this.currentMask = this.exposeMask),
							void this._applyDispatch()
						);
					let t = String(e);
					this.currentMask &&
						((this.currentMask.typedValue = e), (t = this.currentMask.unmaskedValue)),
						(this.unmaskedValue = t);
				}
				get displayValue() {
					return this.currentMask ? this.currentMask.displayValue : "";
				}
				get isComplete() {
					var e;
					return Boolean(null == (e = this.currentMask) ? void 0 : e.isComplete);
				}
				get isFilled() {
					var e;
					return Boolean(null == (e = this.currentMask) ? void 0 : e.isFilled);
				}
				remove(e, t) {
					const s = new be();
					return (
						this.currentMask &&
							s.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()),
						s
					);
				}
				get state() {
					var e;
					return {
						...super.state,
						_rawInputValue: this.rawInputValue,
						compiledMasks: this.compiledMasks.map((e) => e.state),
						currentMaskRef: this.currentMask,
						currentMask: null == (e = this.currentMask) ? void 0 : e.state,
					};
				}
				set state(e) {
					const { compiledMasks: t, currentMaskRef: s, currentMask: i, ...r } = e;
					t && this.compiledMasks.forEach((e, s) => (e.state = t[s])),
						null != s && ((this.currentMask = s), (this.currentMask.state = i)),
						(super.state = r);
				}
				extractInput(e, t, s) {
					return this.currentMask ? this.currentMask.extractInput(e, t, s) : "";
				}
				extractTail(e, t) {
					return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t);
				}
				doCommit() {
					this.currentMask && this.currentMask.doCommit(), super.doCommit();
				}
				nearestInputPos(e, t) {
					return this.currentMask
						? this.currentMask.nearestInputPos(e, t)
						: super.nearestInputPos(e, t);
				}
				get overwrite() {
					return this.currentMask ? this.currentMask.overwrite : this._overwrite;
				}
				set overwrite(e) {
					this._overwrite = e;
				}
				get eager() {
					return this.currentMask ? this.currentMask.eager : this._eager;
				}
				set eager(e) {
					this._eager = e;
				}
				get skipInvalid() {
					return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
				}
				set skipInvalid(e) {
					this._skipInvalid = e;
				}
				maskEquals(e) {
					return Array.isArray(e)
						? this.compiledMasks.every((t, s) => {
								if (!e[s]) return;
								const { mask: i, ...r } = e[s];
								return de(t, r) && t.maskEquals(i);
						  })
						: super.maskEquals(e);
				}
				typedValueEquals(e) {
					var t;
					return Boolean(null == (t = this.currentMask) ? void 0 : t.typedValueEquals(e));
				}
			}
			(Ve.DEFAULTS = void 0),
				(Ve.DEFAULTS = {
					dispatch: (e, t, s, i) => {
						if (!t.compiledMasks.length) return;
						const r = t.rawInputValue,
							a = t.compiledMasks.map((a, n) => {
								const u = t.currentMask === a,
									o = u ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, oe);
								return (
									a.rawInputValue !== r ? (a.reset(), a.append(r, { raw: !0 })) : u || a.remove(o),
									a.append(e, t.currentMaskFlags(s)),
									a.appendTail(i),
									{
										index: n,
										weight: a.rawInputValue.length,
										totalInputPositions: a.totalInputPositions(
											0,
											Math.max(o, a.nearestInputPos(a.displayValue.length, oe))
										),
									}
								);
							});
						return (
							a.sort(
								(e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions
							),
							t.compiledMasks[a[0].index]
						);
					},
				}),
				(fe.MaskedDynamic = Ve),
				(fe.MaskedEnum = class extends De {
					constructor(e) {
						super(e);
					}
					updateOptions(e) {
						super.updateOptions(e);
					}
					_update(e) {
						const { enum: t, ...s } = e;
						if (t) {
							const e = t.map((e) => e.length),
								i = Math.min(...e),
								r = Math.max(...e) - i;
							(s.mask = "*".repeat(i)), r && (s.mask += "[" + "*".repeat(r) + "]"), (this.enum = t);
						}
						super._update(s);
					}
					doValidate(e) {
						return (
							this.enum.some((e) => 0 === e.indexOf(this.unmaskedValue)) && super.doValidate(e)
						);
					}
				}),
				(fe.MaskedFunction = class extends Ae {
					updateOptions(e) {
						super.updateOptions(e);
					}
					_update(e) {
						super._update({ ...e, validate: e.mask });
					}
				});
			class Me extends Ae {
				constructor(e) {
					super({ ...Me.DEFAULTS, ...e });
				}
				updateOptions(e) {
					super.updateOptions(e);
				}
				_update(e) {
					super._update(e), this._updateRegExps();
				}
				_updateRegExps() {
					const e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
						t = (this.scale ? "(" + ce(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
					(this._numberRegExp = new RegExp(e + "\\d*" + t)),
						(this._mapToRadixRegExp = new RegExp(
							"[" + this.mapToRadix.map(ce).join("") + "]",
							"g"
						)),
						(this._thousandsSeparatorRegExp = new RegExp(ce(this.thousandsSeparator), "g"));
				}
				_removeThousandsSeparators(e) {
					return e.replace(this._thousandsSeparatorRegExp, "");
				}
				_insertThousandsSeparators(e) {
					const t = e.split(this.radix);
					return (
						(t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)),
						t.join(this.radix)
					);
				}
				doPrepareChar(e, t) {
					void 0 === t && (t = {});
					const [s, i] = super.doPrepareChar(
						this._removeThousandsSeparators(
							this.scale && this.mapToRadix.length && ((t.input && t.raw) || (!t.input && !t.raw))
								? e.replace(this._mapToRadixRegExp, this.radix)
								: e
						),
						t
					);
					return (
						e && !s && (i.skip = !0),
						!s ||
							this.allowPositive ||
							this.value ||
							"-" === s ||
							i.aggregate(this._appendChar("-")),
						[s, i]
					);
				}
				_separatorsCount(e, t) {
					void 0 === t && (t = !1);
					let s = 0;
					for (let i = 0; i < e; ++i)
						this._value.indexOf(this.thousandsSeparator, i) === i &&
							(++s, t && (e += this.thousandsSeparator.length));
					return s;
				}
				_separatorsCountFromSlice(e) {
					return (
						void 0 === e && (e = this._value),
						this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
					);
				}
				extractInput(e, t, s) {
					return (
						void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						([e, t] = this._adjustRangeWithSeparators(e, t)),
						this._removeThousandsSeparators(super.extractInput(e, t, s))
					);
				}
				_appendCharRaw(e, t) {
					if ((void 0 === t && (t = {}), !this.thousandsSeparator))
						return super._appendCharRaw(e, t);
					const s = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
						i = this._separatorsCountFromSlice(s);
					this._value = this._removeThousandsSeparators(this.value);
					const r = super._appendCharRaw(e, t);
					this._value = this._insertThousandsSeparators(this._value);
					const a = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
						n = this._separatorsCountFromSlice(a);
					return (
						(r.tailShift += (n - i) * this.thousandsSeparator.length),
						(r.skip = !r.rawInserted && e === this.thousandsSeparator),
						r
					);
				}
				_findSeparatorAround(e) {
					if (this.thousandsSeparator) {
						const t = e - this.thousandsSeparator.length + 1,
							s = this.value.indexOf(this.thousandsSeparator, t);
						if (s <= e) return s;
					}
					return -1;
				}
				_adjustRangeWithSeparators(e, t) {
					const s = this._findSeparatorAround(e);
					s >= 0 && (e = s);
					const i = this._findSeparatorAround(t);
					return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t];
				}
				remove(e, t) {
					void 0 === e && (e = 0),
						void 0 === t && (t = this.displayValue.length),
						([e, t] = this._adjustRangeWithSeparators(e, t));
					const s = this.value.slice(0, e),
						i = this.value.slice(t),
						r = this._separatorsCount(s.length);
					this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + i));
					const a = this._separatorsCountFromSlice(s);
					return new be({ tailShift: (a - r) * this.thousandsSeparator.length });
				}
				nearestInputPos(e, t) {
					if (!this.thousandsSeparator) return e;
					switch (t) {
						case ne:
						case ue:
						case oe: {
							const s = this._findSeparatorAround(e - 1);
							if (s >= 0) {
								const i = s + this.thousandsSeparator.length;
								if (e < i || this.value.length <= i || t === oe) return s;
							}
							break;
						}
						case le:
						case he: {
							const t = this._findSeparatorAround(e);
							if (t >= 0) return t + this.thousandsSeparator.length;
						}
					}
					return e;
				}
				doValidate(e) {
					let t = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
					if (t) {
						const e = this.number;
						t =
							t &&
							!isNaN(e) &&
							(null == this.min || this.min >= 0 || this.min <= this.number) &&
							(null == this.max || this.max <= 0 || this.number <= this.max);
					}
					return t && super.doValidate(e);
				}
				doCommit() {
					if (this.value) {
						const e = this.number;
						let t = e;
						null != this.min && (t = Math.max(t, this.min)),
							null != this.max && (t = Math.min(t, this.max)),
							t !== e && (this.unmaskedValue = this.format(t, this));
						let s = this.value;
						this.normalizeZeros && (s = this._normalizeZeros(s)),
							this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)),
							(this._value = s);
					}
					super.doCommit();
				}
				_normalizeZeros(e) {
					const t = this._removeThousandsSeparators(e).split(this.radix);
					return (
						(t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, s, i) => t + i)),
						e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"),
						t.length > 1 && ((t[1] = t[1].replace(/0*$/, "")), t[1].length || (t.length = 1)),
						this._insertThousandsSeparators(t.join(this.radix))
					);
				}
				_padFractionalZeros(e) {
					if (!e) return e;
					const t = e.split(this.radix);
					return (
						t.length < 2 && t.push(""), (t[1] = t[1].padEnd(this.scale, "0")), t.join(this.radix)
					);
				}
				doSkipInvalid(e, t, s) {
					void 0 === t && (t = {});
					const i =
						0 === this.scale &&
						e !== this.thousandsSeparator &&
						(e === this.radix || e === Me.UNMASKED_RADIX || this.mapToRadix.includes(e));
					return super.doSkipInvalid(e, t, s) && !i;
				}
				get unmaskedValue() {
					return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(
						this.radix,
						Me.UNMASKED_RADIX
					);
				}
				set unmaskedValue(e) {
					super.unmaskedValue = e;
				}
				get typedValue() {
					return this.parse(this.unmaskedValue, this);
				}
				set typedValue(e) {
					this.rawInputValue = this.format(e, this).replace(Me.UNMASKED_RADIX, this.radix);
				}
				get number() {
					return this.typedValue;
				}
				set number(e) {
					this.typedValue = e;
				}
				get allowNegative() {
					return (null != this.min && this.min < 0) || (null != this.max && this.max < 0);
				}
				get allowPositive() {
					return (null != this.min && this.min > 0) || (null != this.max && this.max > 0);
				}
				typedValueEquals(e) {
					return (
						(super.typedValueEquals(e) ||
							(Me.EMPTY_VALUES.includes(e) && Me.EMPTY_VALUES.includes(this.typedValue))) &&
						!(0 === e && "" === this.value)
					);
				}
			}
			(Me.UNMASKED_RADIX = "."),
				(Me.EMPTY_VALUES = [...Ae.EMPTY_VALUES, 0]),
				(Me.DEFAULTS = {
					mask: Number,
					radix: ",",
					thousandsSeparator: "",
					mapToRadix: [Me.UNMASKED_RADIX],
					min: Number.MIN_SAFE_INTEGER,
					max: Number.MAX_SAFE_INTEGER,
					scale: 2,
					normalizeZeros: !0,
					padFractionalZeros: !1,
					parse: Number,
					format: (e) => e.toLocaleString("en-US", { useGrouping: !1, maximumFractionDigits: 20 }),
				}),
				(fe.MaskedNumber = Me);
			const Oe = { MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue" };
			function Ie(e, t, s) {
				void 0 === t && (t = Oe.MASKED), void 0 === s && (s = Oe.MASKED);
				const i = ve(e);
				return (e) => i.runIsolated((i) => ((i[t] = e), i[s]));
			}
			(fe.PIPE_TYPE = Oe),
				(fe.createPipe = Ie),
				(fe.pipe = function (e, t, s, i) {
					return Ie(t, s, i)(e);
				});
			try {
				globalThis.IMask = fe;
			} catch {}
			const Pe = document.querySelector(".form2"),
				Re = document.querySelector(".register-email"),
				$e = document.querySelector(".register-password"),
				je = document.querySelector(".register-confirm"),
				Le = document.querySelector(".register-name"),
				Ne = document.querySelector(".register-username"),
				qe = document.querySelector(".register-phone"),
				ze = (document.querySelector(".forget-password"), document.querySelector(".invalid1")),
				Ue = document.querySelector(".invalid2"),
				Ze = document.querySelector(".invalid3"),
				Ye = document.querySelector(".invalid4"),
				Ke =
					(document.querySelector(".invalid5"),
					document.querySelector(".login-page"),
					document.querySelector(".register-page")),
				He = document.querySelector(".registered");
			fe(qe, { mask: "+{998} 00 000-00-00" });
			const Ge = H().shape({
				inputRegisterEmail: I().email().required("Brand is required"),
				inputRegisterPassword: I()
					.min(4)
					.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
					.required("No password provided."),
				inputRegisterConfirm: I()
					.min(4)
					.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
					.required("No password provided."),
				inputRegisterName: I().matches(/^[A-Za-z\.]+$/g),
				inputRegisterUsername: I().matches(/^[a-z0-9_\.]+$/g),
				inputRegisterPhoneNumber: I().matches(/^[+]*[]{0,1}[0-9]{1,4}[]{0,1}[-\s\./0-9]*$/g),
			});
			Pe.addEventListener("submit", (e) => {
				e.preventDefault();
				const t = {
					inputRegisterEmail: Re.value,
					inputRegisterPassword: $e.value,
					inputRegisterConfirm: je.value,
					inputRegisterName: Le.value,
					inputRegisterUsername: Ne.value,
					inputRegisterPhoneNumber: qe.value,
				};
				console.log(t),
					Ge.validate(t)
						.then(() => {
							console.log("correct"),
								(ze.innerText = ""),
								(Ue.innerText = ""),
								(Ze.innerText = ""),
								(Ye.innerText = ""),
								(He.style.display = "block"),
								(Ke.style.display = "none");
						})
						.catch((e) => {
							console.log(e),
								("inputRegisterEmail" !== e.path && "" !== Re.value) ||
									(ze.innerText = "Email is incorrect"),
								("inputRegisterPassword" !== e.path && "" !== $e.value) ||
									(Ue.innerText = "Password is incorrect"),
								("inputRegisterConfirm" !== e.path && "" !== je.value) ||
									(Ze.innerText = "Confirm Password is incorrect"),
								("inputRegisterName" !== e.path && "" !== Le.value) ||
									(Ye.innerText = "Please create correct Username "),
								("inputRegisterUsername" !== e.path && "" !== Ne.value) ||
									(Ye.innerText = "Please create correct Username ");
						});
			});
			const Xe = document.querySelector(".form3"),
				Je = document.querySelector(".forget-password"),
				We = document.querySelector(".register-page"),
				Qe = document.querySelector(".forget-page"),
				et = document.querySelector(".registered");
			Je.addEventListener("click", (e) => {
				e.preventDefault(), (We.style.display = "none"), (Qe.style.display = "block");
			}),
				Xe.addEventListener("submit", (e) => {
					e.preventDefault(),
						(We.style.display = "none"),
						(Qe.style.display = "none"),
						(et.style.display = "block"),
						setTimeout(() => {
							(We.style.display = "flex"), (et.style.display = "none");
						}, 2e3);
				});
		})();
})();
