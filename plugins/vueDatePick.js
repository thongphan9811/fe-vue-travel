!(function(t, e) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define([], e)
    : typeof exports === 'object'
    ? (exports.VueDatePick = e())
    : (t.VueDatePick = e())
})(typeof self !== 'undefined' ? self : this, function() {
  return (function(n) {
    const i = {}
    function r(t) {
      if (i[t]) return i[t].exports
      const e = (i[t] = { i: t, l: !1, exports: {} })
      return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports
    }
    return (
      (r.m = n),
      (r.c = i),
      (r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
      }),
      (r.r = function(t) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e
        const n = Object.create(null)
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const i in e)
            r.d(
              n,
              i,
              function(t) {
                return e[t]
              }.bind(null, i)
            )
        return n
      }),
      (r.n = function(t) {
        const e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return r.d(e, 'a', e), e
      }),
      (r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (r.p = ''),
      r((r.s = 2))
    )
  })([
    function(t, e, n) {},
    function(t, e, n) {
      'use strict'
      const i = n(0)
      n.n(i).a
    },
    function(t, e, n) {
      'use strict'
      n.r(e)
      function h(t, e) {
        return (
          (function(t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function(t, e) {
            const n = []
            let i = !0
            let r = !1
            let o = void 0
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(i = (s = a.next()).done) &&
                (n.push(s.value), !e || n.length !== e);
                i = !0
              );
            } catch (t) {
              ;(r = !0), (o = t)
            } finally {
              try {
                i || a.return == null || a.return()
              } finally {
                if (r) throw o
              }
            }
            return n
          })(t, e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      const f = /,|\.|-| |:|\/|\\/
      const m = /D+/
      const y = /M+/
      const g = /Y+/
      const _ = /h+/i
      const C = /m+/
      const b = /s+/
      function D(t, e) {
        return void 0 !== t
          ? t.toString().length > e
            ? t
            : new Array(e - t.toString().length + 1).join('0') + t
          : void 0
      }
      function P(t, e) {
        return (
          t.getDate() === e.getDate() &&
          t.getMonth() === e.getMonth() &&
          t.getFullYear() === e.getFullYear()
        )
      }
      const i = {
        props: {
          value: { type: String, default: '' },
          format: { type: String, default: 'YYYY-MM-DD' },
          displayFormat: { type: String },
          editable: { type: Boolean, default: !0 },
          hasInputElement: { type: Boolean, default: !0 },
          inputAttributes: { type: Object },
          selectableYearRange: { type: Number, default: 40 },
          parseDate: { type: Function },
          formatDate: { type: Function },
          pickTime: { type: Boolean, default: !1 },
          pickMinutes: { type: Boolean, default: !0 },
          pickSeconds: { type: Boolean, default: !1 },
          isDateDisabled: {
            type: Function,
            default() {
              return !1
            }
          },
          nextMonthCaption: { type: String, default: 'Next month' },
          prevMonthCaption: { type: String, default: 'Previous month' },
          setTimeCaption: { type: String, default: 'Set time:' },
          mobileBreakpointWidth: { type: Number, default: 500 },
          weekdays: {
            type: Array,
            default() {
              return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
          },
          months: {
            type: Array,
            default() {
              return [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ]
            }
          },
          startWeekOnSunday: { type: Boolean, default: !1 }
        },
        data() {
          return {
            inputValue: this.valueToInputFormat(this.value),
            currentPeriod: this.getPeriodFromValue(this.value, this.format),
            direction: void 0,
            positionClass: void 0,
            opened: !this.hasInputElement
          }
        },
        computed: {
          valueDate() {
            const t = this.value
            const e = this.format
            return t ? this.parseDateString(t, e) : void 0
          },
          isReadOnly() {
            return (
              !this.editable ||
              (this.inputAttributes && this.inputAttributes.readonly)
            )
          },
          isValidValue() {
            const t = this.valueDate
            return !this.value || Boolean(t)
          },
          currentPeriodDates() {
            const e = this
            const t = this.currentPeriod
            const n = t.year
            const i = t.month
            const r = []
            const o = new Date(n, i, 1)
            const s = new Date()
            const a = this.startWeekOnSunday ? 1 : 0
            const u = o.getDay() || 7
            if (1 - a < u)
              for (let l = u - (2 - a); l >= 0; l--) {
                const d = new Date(o)
                d.setDate(-l), r.push({ outOfRange: !0, date: d })
              }
            for (; o.getMonth() === i; )
              r.push({ date: new Date(o) }), o.setDate(o.getDate() + 1)
            for (let c = 7 - (r.length % 7), p = 1; p <= c; p++) {
              const v = new Date(o)
              v.setDate(p), r.push({ outOfRange: !0, date: v })
            }
            return (
              r.forEach(function(t) {
                ;(t.disabled = e.isDateDisabled(t.date)),
                  (t.today = P(t.date, s)),
                  (t.dateKey = [
                    t.date.getFullYear(),
                    t.date.getMonth() + 1,
                    t.date.getDate()
                  ].join('-')),
                  (t.selected = !!e.valueDate && P(t.date, e.valueDate))
              }),
              (function(t, e) {
                const n = []
                for (; t.length; ) n.push(t.splice(0, e))
                return n
              })(r, 7)
            )
          },
          yearRange() {
            for (
              var t = [],
                e = this.currentPeriod.year,
                n = e - this.selectableYearRange,
                i = e + this.selectableYearRange,
                r = n;
              r <= i;
              r++
            )
              t.push(r)
            return t
          },
          currentTime() {
            const t = this.valueDate
            return t
              ? {
                  hours: t.getHours(),
                  minutes: t.getMinutes(),
                  seconds: t.getSeconds(),
                  hoursPadded: D(t.getHours(), 1),
                  minutesPadded: D(t.getMinutes(), 2),
                  secondsPadded: D(t.getSeconds(), 2)
                }
              : void 0
          },
          directionClass() {
            return this.direction
              ? 'vdp'.concat(this.direction, 'Direction')
              : void 0
          },
          weekdaysSorted() {
            if (this.startWeekOnSunday) {
              const t = this.weekdays.slice()
              return t.unshift(t.pop()), t
            }
            return this.weekdays
          }
        },
        watch: {
          value(t) {
            this.isValidValue &&
              ((this.inputValue = this.valueToInputFormat(t)),
              (this.currentPeriod = this.getPeriodFromValue(t, this.format)))
          },
          currentPeriod(t, e) {
            const n = new Date(t.year, t.month).getTime()
            const i = new Date(e.year, e.month).getTime()
            this.direction = n !== i ? (i < n ? 'Next' : 'Prev') : void 0
          }
        },
        beforeDestroy() {
          this.removeCloseEvents(), this.teardownPosition()
        },
        methods: {
          valueToInputFormat(t) {
            return (
              (this.displayFormat &&
                this.formatDateToString(
                  this.parseDateString(t, this.format),
                  this.displayFormat
                )) ||
              t
            )
          },
          getPeriodFromValue(t, e) {
            const n = this.parseDateString(t, e) || new Date()
            return { month: n.getMonth(), year: n.getFullYear() }
          },
          parseDateString(t, e) {
            return t
              ? this.parseDate
                ? this.parseDate(t, e)
                : this.parseSimpleDateString(t, e)
              : void 0
          },
          formatDateToString(t, e) {
            return t
              ? this.formatDate
                ? this.formatDate(t, e)
                : this.formatSimpleDateToString(t, e)
              : ''
          },
          parseSimpleDateString(t, e) {
            for (
              var n,
                i,
                r,
                o,
                s,
                a,
                u = t.split(f),
                l = e.split(f),
                d = l.length,
                c = 0;
              c < d;
              c++
            )
              l[c].match(m)
                ? (n = parseInt(u[c], 10))
                : l[c].match(y)
                ? (i = parseInt(u[c], 10))
                : l[c].match(g)
                ? (r = parseInt(u[c], 10))
                : l[c].match(_)
                ? (o = parseInt(u[c], 10))
                : l[c].match(C)
                ? (s = parseInt(u[c], 10))
                : l[c].match(b) && (a = parseInt(u[c], 10))
            const p = new Date([D(r, 4), D(i, 2), D(n, 2)].join('-'))
            if (!isNaN(p)) {
              const v = new Date(r, i - 1, n)
              return (
                [
                  [r, 'setFullYear'],
                  [o, 'setHours'],
                  [s, 'setMinutes'],
                  [a, 'setSeconds']
                ].forEach(function(t) {
                  const e = h(t, 2)
                  const n = e[0]
                  const i = e[1]
                  void 0 !== n && v[i](n)
                }),
                v
              )
            }
          },
          formatSimpleDateToString(e, t) {
            return t
              .replace(g, function(t) {
                return e.getFullYear()
              })
              .replace(y, function(t) {
                return D(e.getMonth() + 1, t.length)
              })
              .replace(m, function(t) {
                return D(e.getDate(), t.length)
              })
              .replace(_, function(t) {
                return D(e.getHours(), t.length)
              })
              .replace(C, function(t) {
                return D(e.getMinutes(), t.length)
              })
              .replace(b, function(t) {
                return D(e.getSeconds(), t.length)
              })
          },
          incrementMonth() {
            const t =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
            const e = new Date(
              this.currentPeriod.year,
              this.currentPeriod.month
            )
            const n = new Date(e.getFullYear(), e.getMonth() + t)
            this.currentPeriod = { month: n.getMonth(), year: n.getFullYear() }
          },
          processUserInput(t) {
            const e = this.parseDateString(t, this.displayFormat || this.format)
            ;(this.inputValue = t),
              this.$emit(
                'input',
                e ? this.formatDateToString(e, this.format) : t
              )
          },
          open() {
            this.opened ||
              ((this.opened = !0),
              (this.currentPeriod = this.getPeriodFromValue(
                this.value,
                this.format
              )),
              this.addCloseEvents(),
              this.setupPosition()),
              (this.direction = void 0)
          },
          close() {
            this.opened &&
              ((this.opened = !1),
              (this.direction = void 0),
              this.removeCloseEvents(),
              this.teardownPosition())
          },
          closeViaOverlay(t) {
            this.hasInputElement &&
              t.target === this.$refs.outerWrap &&
              this.close()
          },
          addCloseEvents() {
            const e = this
            this.closeEventListener ||
              ((this.closeEventListener = function(t) {
                return e.inspectCloseEvent(t)
              }),
              ['click', 'keyup', 'focusin'].forEach(function(t) {
                return document.addEventListener(t, e.closeEventListener)
              }))
          },
          inspectCloseEvent(t) {
            t.keyCode
              ? t.keyCode === 27 && this.close()
              : t.target === this.$el ||
                this.$el.contains(t.target) ||
                this.close()
          },
          removeCloseEvents() {
            const e = this
            this.closeEventListener &&
              (['click', 'keyup'].forEach(function(t) {
                return document.removeEventListener(t, e.closeEventListener)
              }),
              delete this.closeEventListener)
          },
          setupPosition() {
            const t = this
            this.positionEventListener ||
              ((this.positionEventListener = function() {
                return t.positionFloater()
              }),
              window.addEventListener('resize', this.positionEventListener)),
              this.positionFloater()
          },
          positionFloater() {
            const i = this
            const r = this.$el.getBoundingClientRect()
            let o = 'vdpPositionTop'
            let s = 'vdpPositionLeft'
            const t = function() {
              const t = i.$refs.outerWrap.getBoundingClientRect()
              const e = t.height
              const n = t.width
              window.innerWidth > i.mobileBreakpointWidth
                ? (r.top + r.height + e > window.innerHeight &&
                    r.top - e > 0 &&
                    (o = 'vdpPositionBottom'),
                  r.left + n > window.innerWidth && (s = 'vdpPositionRight'),
                  (i.positionClass = ['vdpPositionReady', o, s].join(' ')))
                : (i.positionClass = 'vdpPositionFixed')
            }
            this.$refs.outerWrap ? t() : this.$nextTick(t)
          },
          teardownPosition() {
            this.positionEventListener &&
              ((this.positionClass = void 0),
              window.removeEventListener('resize', this.positionEventListener),
              delete this.positionEventListener)
          },
          clear() {
            this.$emit('input', '')
          },
          selectDateItem(t) {
            if (!t.disabled) {
              const e = new Date(t.date)
              this.currentTime &&
                (e.setHours(this.currentTime.hours),
                e.setMinutes(this.currentTime.minutes),
                e.setSeconds(this.currentTime.seconds)),
                this.$emit('input', this.formatDateToString(e, this.format)),
                this.hasInputElement && !this.pickTime && this.close()
            }
          },
          inputTime(t, e) {
            const n = this.valueDate
            const i = { setHours: 23, setMinutes: 59, setSeconds: 59 }
            let r = parseInt(e.target.value, 10) || 0
            i[t] < r ? (r = i[t]) : r < 0 && (r = 0),
              (e.target.value = D(r, t === 'setHours' ? 1 : 2)),
              n[t](r),
              this.$emit('input', this.formatDateToString(n, this.format))
          }
        }
      }
      n(1)
      const r = (function(t, e, n, i, r, o, s, a) {
        let u
        const l = typeof t === 'function' ? t.options : t
        if (
          (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
          i && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          s
            ? ((u = function(t) {
                ;(t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  typeof __VUE_SSR_CONTEXT__ === 'undefined' ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s)
              }),
              (l._ssrRegister = u))
            : r &&
              (u = a
                ? function() {
                    r.call(this, this.$root.$options.shadowRoot)
                  }
                : r),
          u)
        )
          if (l.functional) {
            l._injectStyles = u
            const d = l.render
            l.render = function(t, e) {
              return u.call(e), d(t, e)
            }
          } else {
            const c = l.beforeCreate
            l.beforeCreate = c ? [].concat(c, u) : [u]
          }
        return { exports: t, options: l }
      })(
        i,
        function() {
          const n = this
          const t = n.$createElement
          const i = n._self._c || t
          return i(
            'div',
            {
              staticClass: 'vdpComponent',
              class: { vdpWithInput: n.hasInputElement }
            },
            [
              n.hasInputElement
                ? i(
                    'input',
                    n._b(
                      {
                        attrs: { type: 'text', readonly: n.isReadOnly },
                        domProps: { value: n.inputValue },
                        on: {
                          input(t) {
                            n.editable && n.processUserInput(t.target.value)
                          },
                          focus(t) {
                            n.editable && n.open()
                          },
                          click(t) {
                            n.editable && n.open()
                          }
                        }
                      },
                      'input',
                      n.inputAttributes,
                      !1
                    )
                  )
                : n._e(),
              n._v(' '),
              n.editable && n.hasInputElement && n.inputValue
                ? i('button', {
                    staticClass: 'vdpClearInput',
                    attrs: { type: 'button' },
                    on: { click: n.clear }
                  })
                : n._e(),
              n._v(' '),
              i('transition', { attrs: { name: 'vdp-toggle-calendar' } }, [
                n.opened
                  ? i(
                      'div',
                      {
                        ref: 'outerWrap',
                        staticClass: 'vdpOuterWrap',
                        class: [
                          n.positionClass,
                          { vdpFloating: n.hasInputElement }
                        ],
                        on: { click: n.closeViaOverlay }
                      },
                      [
                        i('div', { staticClass: 'vdpInnerWrap' }, [
                          i('header', { staticClass: 'vdpHeader' }, [
                            i(
                              'button',
                              {
                                staticClass: 'vdpArrow vdpArrowPrev',
                                attrs: {
                                  title: n.prevMonthCaption,
                                  type: 'button'
                                },
                                on: {
                                  click(t) {
                                    n.incrementMonth(-1)
                                  }
                                }
                              },
                              [n._v(n._s(n.prevMonthCaption))]
                            ),
                            n._v(' '),
                            i(
                              'button',
                              {
                                staticClass: 'vdpArrow vdpArrowNext',
                                attrs: {
                                  type: 'button',
                                  title: n.nextMonthCaption
                                },
                                on: {
                                  click(t) {
                                    n.incrementMonth(1)
                                  }
                                }
                              },
                              [n._v(n._s(n.nextMonthCaption))]
                            ),
                            n._v(' '),
                            i('div', { staticClass: 'vdpPeriodControls' }, [
                              i('div', { staticClass: 'vdpPeriodControl' }, [
                                i(
                                  'button',
                                  {
                                    key: n.currentPeriod.month,
                                    class: n.directionClass,
                                    attrs: { type: 'button' }
                                  },
                                  [
                                    n._v(
                                      '\n                                ' +
                                        n._s(n.months[n.currentPeriod.month]) +
                                        '\n                            '
                                    )
                                  ]
                                ),
                                n._v(' '),
                                i(
                                  'select',
                                  {
                                    directives: [
                                      {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: n.currentPeriod.month,
                                        expression: 'currentPeriod.month'
                                      }
                                    ],
                                    on: {
                                      change(t) {
                                        const e = Array.prototype.filter
                                          .call(t.target.options, function(t) {
                                            return t.selected
                                          })
                                          .map(function(t) {
                                            return '_value' in t
                                              ? t._value
                                              : t.value
                                          })
                                        n.$set(
                                          n.currentPeriod,
                                          'month',
                                          t.target.multiple ? e : e[0]
                                        )
                                      }
                                    }
                                  },
                                  n._l(n.months, function(t, e) {
                                    return i(
                                      'option',
                                      { key: t, domProps: { value: e } },
                                      [
                                        n._v(
                                          '\n                                    ' +
                                            n._s(t) +
                                            '\n                                '
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]),
                              n._v(' '),
                              i('div', { staticClass: 'vdpPeriodControl' }, [
                                i(
                                  'button',
                                  {
                                    key: n.currentPeriod.year,
                                    class: n.directionClass,
                                    attrs: { type: 'button' }
                                  },
                                  [
                                    n._v(
                                      '\n                                ' +
                                        n._s(n.currentPeriod.year) +
                                        '\n                            '
                                    )
                                  ]
                                ),
                                n._v(' '),
                                i(
                                  'select',
                                  {
                                    directives: [
                                      {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: n.currentPeriod.year,
                                        expression: 'currentPeriod.year'
                                      }
                                    ],
                                    on: {
                                      change(t) {
                                        const e = Array.prototype.filter
                                          .call(t.target.options, function(t) {
                                            return t.selected
                                          })
                                          .map(function(t) {
                                            return '_value' in t
                                              ? t._value
                                              : t.value
                                          })
                                        n.$set(
                                          n.currentPeriod,
                                          'year',
                                          t.target.multiple ? e : e[0]
                                        )
                                      }
                                    }
                                  },
                                  n._l(n.yearRange, function(t) {
                                    return i(
                                      'option',
                                      { key: t, domProps: { value: t } },
                                      [
                                        n._v(
                                          '\n                                    ' +
                                            n._s(t) +
                                            '\n                                '
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ])
                          ]),
                          n._v(' '),
                          i('table', { staticClass: 'vdpTable' }, [
                            i('thead', [
                              i(
                                'tr',
                                n._l(n.weekdaysSorted, function(t) {
                                  return i(
                                    'th',
                                    { key: t, staticClass: 'vdpHeadCell' },
                                    [
                                      i(
                                        'span',
                                        { staticClass: 'vdpHeadCellContent' },
                                        [n._v(n._s(t))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]),
                            n._v(' '),
                            i(
                              'tbody',
                              {
                                key:
                                  n.currentPeriod.year +
                                  '-' +
                                  n.currentPeriod.month,
                                class: n.directionClass
                              },
                              n._l(n.currentPeriodDates, function(t, e) {
                                return i(
                                  'tr',
                                  { key: e, staticClass: 'vdpRow' },
                                  n._l(t, function(e) {
                                    return i(
                                      'td',
                                      {
                                        key: e.dateKey,
                                        staticClass: 'vdpCell',
                                        class: {
                                          selectable: !e.disabled,
                                          selected: e.selected,
                                          disabled: e.disabled,
                                          today: e.today,
                                          outOfRange: e.outOfRange
                                        },
                                        attrs: { 'data-id': e.dateKey },
                                        on: {
                                          click(t) {
                                            n.selectDateItem(e)
                                          }
                                        }
                                      },
                                      [
                                        i(
                                          'div',
                                          { staticClass: 'vdpCellContent' },
                                          [n._v(n._s(e.date.getDate()))]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              }),
                              0
                            )
                          ]),
                          n._v(' '),
                          n.pickTime && n.currentTime
                            ? i('div', { staticClass: 'vdpTimeControls' }, [
                                i('span', { staticClass: 'vdpTimeCaption' }, [
                                  n._v(n._s(n.setTimeCaption))
                                ]),
                                n._v(' '),
                                i('div', { staticClass: 'vdpTimeUnit' }, [
                                  i('pre', [
                                    i('span', [
                                      n._v(n._s(n.currentTime.hoursPadded))
                                    ]),
                                    i('br')
                                  ]),
                                  n._v(' '),
                                  i('input', {
                                    staticClass: 'vdpHoursInput',
                                    attrs: { type: 'number', pattern: '\\d*' },
                                    domProps: {
                                      value: n.currentTime.hoursPadded
                                    },
                                    on: {
                                      input(t) {
                                        t.preventDefault(),
                                          n.inputTime('setHours', t)
                                      }
                                    }
                                  })
                                ]),
                                n._v(' '),
                                n.pickMinutes
                                  ? i(
                                      'span',
                                      { staticClass: 'vdpTimeSeparator' },
                                      [n._v(':')]
                                    )
                                  : n._e(),
                                n._v(' '),
                                n.pickMinutes
                                  ? i('div', { staticClass: 'vdpTimeUnit' }, [
                                      i('pre', [
                                        i('span', [
                                          n._v(
                                            n._s(n.currentTime.minutesPadded)
                                          )
                                        ]),
                                        i('br')
                                      ]),
                                      n._v(' '),
                                      n.pickMinutes
                                        ? i('input', {
                                            staticClass: 'vdpMinutesInput',
                                            attrs: {
                                              type: 'number',
                                              pattern: '\\d*'
                                            },
                                            domProps: {
                                              value: n.currentTime.minutesPadded
                                            },
                                            on: {
                                              input(t) {
                                                n.inputTime('setMinutes', t)
                                              }
                                            }
                                          })
                                        : n._e()
                                    ])
                                  : n._e(),
                                n._v(' '),
                                n.pickSeconds
                                  ? i(
                                      'span',
                                      { staticClass: 'vdpTimeSeparator' },
                                      [n._v(':')]
                                    )
                                  : n._e(),
                                n._v(' '),
                                n.pickSeconds
                                  ? i('div', { staticClass: 'vdpTimeUnit' }, [
                                      i('pre', [
                                        i('span', [
                                          n._v(
                                            n._s(n.currentTime.secondsPadded)
                                          )
                                        ]),
                                        i('br')
                                      ]),
                                      n._v(' '),
                                      n.pickSeconds
                                        ? i('input', {
                                            staticClass: 'vdpSecondsInput',
                                            attrs: {
                                              type: 'number',
                                              pattern: '\\d*'
                                            },
                                            domProps: {
                                              value: n.currentTime.secondsPadded
                                            },
                                            on: {
                                              input(t) {
                                                n.inputTime('setSeconds', t)
                                              }
                                            }
                                          })
                                        : n._e()
                                    ])
                                  : n._e()
                              ])
                            : n._e()
                        ])
                      ]
                    )
                  : n._e()
              ])
            ],
            1
          )
        },
        [],
        !1,
        null,
        null,
        null
      )
      r.options.__file = 'vueDatePick.vue'
      e.default = r.exports
    }
  ]).default
})
