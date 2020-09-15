/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/index.js":
/*!*****************************!*\
  !*** ./src/public/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ \"./src/public/js/main.js\");\n\r\n/* import './css/normalize.css'\r\nimport './css/style.css'\r\nimport './img'\r\nimport './fonts/Neucha-Regular.ttf' */\r\n\r\nconst app = new Vue(_js_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/public/index.js?");

/***/ }),

/***/ "./src/public/js/CartComponent.js":
/*!****************************************!*\
  !*** ./src/public/js/CartComponent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cartItem = {\r\n\tprops: ['img', 'cartItem'],\r\n\ttemplate: `<div class=\"cart-item\">\r\n\t\t\t\t\t<div class=\"product-block\">\r\n\t\t\t\t\t\t\t<img :src=\"img\" alt=\"Some img\">\r\n\t\t\t\t\t\t\t<div class=\"product-desc\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-title\">{{ cartItem.product_name }}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-quantity\">Кол-во: {{ cartItem.quantity }}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-single-price\">$ {{ cartItem.product_price }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"price-block\">\r\n\t\t\t\t\t\t\t<div class=\"product-price\">{{cartItem.quantity*cartItem.product_price}} $</div>\r\n\t\t\t\t\t\t\t<i class=\"fas fa-trash\" @click=\"$emit('remove', cartItem)\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t`\r\n};\r\nconst cart = {\r\n\tdata() {\r\n\t\treturn {\r\n\t\t\tcartUrl: '/getCart.json',\r\n\t\t\tcartItems: [],\r\n\t\t\tshowCart: false,\r\n\t\t}\r\n\t},\r\n\tcomponents: {\r\n\t\tcartItem\r\n\t},\r\n\tmounted(){\r\n\t\tthis.$parent.getJson(`/api/cart`)\r\n\t\t\t.then(data => {\r\n\t\t\t\tfor (let item of data.contents){\r\n\t\t\t\t\tthis.$data.cartItems.push(item);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t},\r\n\tmethods: {\r\n\t\taddProduct(item){\r\n\t\t\tlet find = this.cartItems.find(el => el.id_product === item.id_product);\r\n\t\t\tif(find){\r\n\t\t\t\tthis.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})\r\n\t\t\t\t\t.then(data => {\r\n\t\t\t\t\t\tif(data.result === 1){\r\n\t\t\t\t\t\t\tfind.quantity++\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t} else {\r\n\t\t\t\tconst prod = Object.assign({quantity: 1}, item);\r\n\t\t\t\tthis.$parent.postJson(`/api/cart`, prod)\r\n\t\t\t\t\t.then(data => {\r\n\t\t\t\t\t\tif(data.result === 1){\r\n\t\t\t\t\t\t\tthis.cartItems.push(prod)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t}\r\n\t\t},\r\n\t\tremove(item) {\r\n\t\t\tif(item.quantity > 1){\r\n\t\t\t\tthis.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})\r\n\t\t\t\t\t.then(data => {\r\n\t\t\t\t\t\tif(data.result === 1){\r\n\t\t\t\t\t\t\titem.quantity--;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t} else {\r\n\t\t\t\tthis.$parent.deleteJson(`/api/cart/${item.id_product}`)\r\n\t\t\t\t\t.then(data => {\r\n\t\t\t\t\t\tif(data.result === 1){\r\n\t\t\t\t\t\t\tthis.cartItems.splice(this.cartItems.indexOf(item), 1)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t}\r\n\t\t},\r\n\t},\r\n\ttemplate: `\r\n\t\t<div>\r\n\t\t\t<button @click=\"showCart=!showCart\" class=\"btn-cart\" type=\"button\"><i class=\"fas fa-shopping-cart\"></i></button>\r\n\t\t\t<div class=\"cart-block\" v-show=\"showCart\">\r\n\t\t\t\t<p class=\"cart-empty\" v-if=\"!cartItems.length\">Ваша корзина пуста</p>\r\n\t\t\t\t<cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :img=\"item.image\" :cart-item=\"item\" @remove=\"remove\">\r\n\t\t\t\t</cart-item>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\r\n\n\n//# sourceURL=webpack:///./src/public/js/CartComponent.js?");

/***/ }),

/***/ "./src/public/js/ErrorComp.js":
/*!************************************!*\
  !*** ./src/public/js/ErrorComp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst error = {\r\n\tdata(){\r\n\t\treturn {\r\n\t\t\ttext: ''\r\n\t\t}\r\n\t},\r\n\tcomputed: {\r\n\t\tisVisible(){\r\n\t\t\treturn this.text !== ''\r\n\t\t}\r\n\t},\r\n\ttemplate: `\r\n\t<div class=\"error-block\" v-if=\"isVisible\">\r\n\t\t<p class=\"error-msg\">\r\n\t\t\t<button class=\"close-btn\" @click=\"text=''\">&times;</button>\r\n\t\t\t{{ text }}\r\n\t\t</p>\r\n\t</div>`\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack:///./src/public/js/ErrorComp.js?");

/***/ }),

/***/ "./src/public/js/ProductComponent.js":
/*!*******************************************!*\
  !*** ./src/public/js/ProductComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst product = {\r\n\tprops: ['product', 'img'],\r\n\t\r\n\ttemplate: `<div class=\"product-item\">\r\n\t\t\t\t\t<img :src=\"img\" alt=\"photo product\">\r\n\t\t\t\t\t<h3>{{ product.product_name }}</h3>\r\n\t\t\t\t\t<p>{{ product.product_price }}&#36;</p>\r\n\t\t\t\t\t<button class=\"buy-btn\" @click=\"$emit('add-product', product)\">Купить</button>\r\n\t\t\t\t</div>`\r\n};\r\nconst products = {\r\n\tdata() {\r\n\t\treturn {\r\n\t\t\tcatalogUrl: '/catalogData.json',\r\n\t\t\tproducts: [],\r\n\t\t\tfilterProducts: [],\r\n\t\t}\r\n\t},\r\n\tcomponents: {\r\n\t\tproduct\r\n\t},\r\n\tmounted(){\r\n\t\tthis.$parent.getJson(`/api/products`)///api/products\r\n\t\t\t.then(data => {\r\n\t\t\t\tfor (let item of data){\r\n\t\t\t\t\tthis.$data.products.push(item);\r\n\t\t\t\t\tthis.$data.filterProducts.push(item);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t},\r\n\tmethods: {\r\n\t\tfiltered(userSearch) {\r\n\t\t\tlet regexp = new RegExp(userSearch, 'i');\r\n\t\t\tthis.filterProducts = this.products.filter(el => regexp.test(el.product_name));\r\n\t\t}\r\n\t},\r\n\t\r\n\ttemplate: `<div class=\"products\">\r\n\t\t\t\t\t<product v-for=\"item of filterProducts\" \r\n\t\t\t\t\t:key=\"item.id_product\"\r\n\t\t\t\t\t:img=\"item.image\"\r\n\t\t\t\t\t:product=\"item\"\r\n\t\t\t\t\t@add-product=\"$parent.$refs.cart.addProduct\"></product>\r\n\t\t\t\t</div>`\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n//# sourceURL=webpack:///./src/public/js/ProductComponent.js?");

/***/ }),

/***/ "./src/public/js/SearchComponent.js":
/*!******************************************!*\
  !*** ./src/public/js/SearchComponent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst search = {\r\n\tdata(){\r\n\t\treturn {\r\n\t\t\tuserSearch: ''\r\n\t\t}\r\n\t},\r\n\ttemplate: `<form action=\"#\" class=\"search-form\" @submit.prevent='$parent.$refs.products.filtered(userSearch)'>\r\n\t\t\t\t\t<input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn-search\">\r\n\t\t\t\t\t<svg class=\"search-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\">\r\n\t\t\t\t\t\t<path d=\"M23.762,22.681 L17.569,16.586 C19.190,14.825 20.187,12.494 20.187,9.929 C20.186,4.443 15.668,-0.002 10.093,-0.002 C4.519,-0.002 0.001,4.443 0.001,9.929 C0.001,15.416 4.519,19.862 10.093,19.862 C12.502,19.862 14.711,19.028 16.446,17.644 L22.663,23.763 C22.966,24.062 23.458,24.062 23.761,23.763 C24.065,23.464 24.065,22.979 23.762,22.681 ZM10.093,18.334 C5.377,18.334 1.553,14.572 1.553,9.929 C1.553,5.288 5.377,1.525 10.093,1.525 C14.810,1.525 18.633,5.288 18.633,9.929 C18.633,14.572 14.810,18.334 10.093,18.334 Z\"></path>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</form>`\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\r\n\n\n//# sourceURL=webpack:///./src/public/js/SearchComponent.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CartComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent */ \"./src/public/js/CartComponent.js\");\n/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductComponent */ \"./src/public/js/ProductComponent.js\");\n/* harmony import */ var _SearchComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchComponent */ \"./src/public/js/SearchComponent.js\");\n/* harmony import */ var _ErrorComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorComp */ \"./src/public/js/ErrorComp.js\");\n\r\n\r\n\r\n\r\n\r\nconst app = {\r\n\tel: '#app',\r\n\tcomponents: {\r\n\t\tcart: _CartComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\t\tproducts: _ProductComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t\terror: _ErrorComp__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t\t'search': _SearchComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\t},\r\n\tdata: {\r\n\t\tuserSearch: '',\r\n\t},\r\n\tmethods: {\r\n\t\tgetJson(url){\r\n\t\t\treturn fetch(url)\r\n\t\t\t\t.then(result => result.json())\r\n\t\t\t\t.catch(error => {\r\n\t\t\t\t\t// console.log(error)\r\n\t\t\t\t\tthis.$refs.error.text = error;\r\n\t\t\t\t})\r\n\t\t},\r\n\t\tpostJson(url, data){\r\n\t\t\treturn fetch(url, {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"Content-Type\": \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(data)\r\n\t\t\t})\r\n\t\t\t\t.then(result => result.json())\r\n\t\t\t\t.catch(error => {\r\n\t\t\t\t\t// console.log(error)\r\n\t\t\t\t\tthis.$refs.error.text = error;\r\n\t\t\t\t})\r\n\t\t},\r\n\t\tputJson(url, data){\r\n\t\t\treturn fetch(url, {\r\n\t\t\t\tmethod: 'PUT',\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"Content-Type\": \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(data)\r\n\t\t\t})\r\n\t\t\t\t.then(result => result.json())\r\n\t\t\t\t.catch(error => {\r\n\t\t\t\t\t// console.log(error)\r\n\t\t\t\t\tthis.$refs.error.text = error;\r\n\t\t\t\t})\r\n\t\t},\r\n\t\tdeleteJson(url){\r\n\t\t\treturn fetch(url, {\r\n\t\t\t\tmethod: 'DELETE',\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"Content-Type\": \"application/json\"\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t\t\t.then(result => result.json())\r\n\t\t\t\t.catch(error => {\r\n\t\t\t\t\t// console.log(error);\r\n\t\t\t\t\tthis.$refs.error.text = error;\r\n\t\t\t\t})\r\n\t\t}\r\n\t}\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });