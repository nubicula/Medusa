/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkslim"] = self["webpackChunkslim"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/npm.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var vue_snotify_styles_material_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-snotify/styles/material.css */ \"./node_modules/vue-snotify/styles/material.css\");\n/* harmony import */ var _vendor_js_tablesorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendor/js/tablesorter */ \"./vendor/js/tablesorter.js\");\n/* harmony import */ var _vendor_css_open_sans_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor/css/open-sans.css */ \"./vendor/css/open-sans.css\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.common.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-js-toggle-button */ \"./node_modules/vue-js-toggle-button/dist/index.js\");\n/* harmony import */ var vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _global_vue_shim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global-vue-shim */ \"./src/global-vue-shim.js\");\n/* eslint-disable import/no-unassigned-import */\n\n\n\n\n\n\n/* eslint-enable import/no-unassigned-import */\n\n\n\n\n\n\n\n\n\n\n\nif (window) {\n  // @TODO: Remove this before v1.0.0\n  window.globalVueShim = _global_vue_shim__WEBPACK_IMPORTED_MODULE_12__.default; // Adding libs to window so mako files can use them\n\n  window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());\n  window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());\n  window.Vue = vue__WEBPACK_IMPORTED_MODULE_13__.default;\n  window.Vuex = (vuex__WEBPACK_IMPORTED_MODULE_14___default());\n  window.ToggleButton = vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6__.ToggleButton;\n  window.axios = (axios__WEBPACK_IMPORTED_MODULE_7___default());\n  window._ = {\n    debounce: (lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default())\n  };\n  window.store = _store__WEBPACK_IMPORTED_MODULE_9__.default;\n  window.router = _router__WEBPACK_IMPORTED_MODULE_10__.default;\n  window.apiRoute = _api__WEBPACK_IMPORTED_MODULE_11__.apiRoute;\n  window.apiv1 = _api__WEBPACK_IMPORTED_MODULE_11__.apiv1;\n  window.api = _api__WEBPACK_IMPORTED_MODULE_11__.api;\n  window.MEDUSA = {\n    common: {},\n    config: {\n      general: {},\n      layout: {}\n    },\n    home: {},\n    addShows: {}\n  };\n  window.webRoot = _api__WEBPACK_IMPORTED_MODULE_11__.webRoot;\n  window.apiKey = _api__WEBPACK_IMPORTED_MODULE_11__.apiKey; // Push x-template components to this array to register them globally\n\n  window.components = [];\n}\n\nconst UTIL = {\n  exec(controller, action) {\n    const ns = MEDUSA;\n    action = action === undefined ? 'init' : action;\n\n    if (controller !== '' && ns[controller] && typeof ns[controller][action] === 'function') {\n      ns[controller][action]();\n    }\n  },\n\n  init() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[v-cloak]').removeAttr('v-cloak');\n    const {\n      body\n    } = document;\n    const controller = body.getAttribute('data-controller');\n    const action = body.getAttribute('data-action');\n    UTIL.exec('common'); // Load common\n\n    UTIL.exec(controller); // Load MEDUSA[controller]\n\n    UTIL.exec(controller, action); // Load MEDUSA[controller][action]\n\n    window.dispatchEvent(new Event('medusa-loaded'));\n  }\n\n};\nconst {\n  pathname\n} = window.location;\n\nif (!pathname.includes('/login') && !pathname.includes('/apibuilder')) {\n  const configLoaded = event => {\n    const {\n      general,\n      layout\n    } = event.detail;\n    MEDUSA.config.general = { ...MEDUSA.config.general,\n      ...general\n    };\n    const themeSpinner = layout.themeName === 'dark' ? '-dark' : '';\n    MEDUSA.config.layout = { ...MEDUSA.config.layout,\n      ...layout,\n      themeSpinner,\n      loading: '<img src=\"images/loading16' + themeSpinner + '.gif\" height=\"16\" width=\"16\" />'\n    };\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(UTIL.init);\n  };\n\n  window.addEventListener('medusa-config-loaded', configLoaded, {\n    once: true\n  });\n}\n\n//# sourceURL=webpack://slim/./src/index.js?");

/***/ })

},
0,[["./src/index.js","vendors","medusa-runtime","vendors~date-fns"]]]);