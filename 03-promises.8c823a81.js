!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');u.addEventListener("submit",(function(e,n,t){e.preventDefault(),t=Number(i.value);for(var o=1;o<=a.value;o+=1){function u(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}n=o,t+=Number(c.value),u(n,t).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)}))}e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.8c823a81.js.map