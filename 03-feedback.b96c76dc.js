!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function S(e){return c=e,u=setTimeout(T,t),s?p(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=b();if(O(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function h(e){return u=void 0,d&&r?p(e):(r=i=void 0,f)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return S(l);if(m)return u=setTimeout(T,t),p(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},w.flush=function(){return void 0===u?f:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S,O,T={},h={form:document.querySelector(".feedback-form"),message:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};h.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(T),localStorage.removeItem("feedback - form - state")})),h.form.addEventListener("input",e(t)((function(e){w={email:h.form.elements.email.value,message:h.form.elements.message.value},localStorage.setItem("feedback - form - state",JSON.stringify(w))}),500)),h.form.addEventListener("input",(function(e){T[e.target.name]=e.target.value})),S=localStorage.getItem("feedback - form - state"),(O=JSON.parse(S))&&(h.form.elements.email.value=O.email,h.form.elements.message.value=O.message);var w={}}();
//# sourceMappingURL=03-feedback.b96c76dc.js.map