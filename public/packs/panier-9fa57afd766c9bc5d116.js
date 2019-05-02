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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/*!****************************************!*\
  !*** ./app/javascript/packs/panier.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var cart = {
  products: [],
  total: 0,

  addProduct: function addProduct(product) {
    this.products.push(product);
    this.calculateTotal();
  },
  calculateTotal: function calculateTotal() {
    var total = 0;
    for (var i = 0; i < this.products.length; i++) {
      total += this.products[i].price;
    }
    this.total = Math.round(total * 100) / 100;
  }
};

function displayCart() {
  if (cart.products.length == 0) {
    document.getElementById('cart').innerHTML = '<h3>Aucun produit</h3>';
    document.getElementById('order').style.display = 'none';
  } else {
    var cartCode = "";
    for (var i = 0; i < cart.products.length; i++) {
      var product = cart.products[i];
      var div = "<div><strong>" + product.title + "</strong> : " + product.price + "</div>";
      cartCode += div;
    }

    cartCode += "<h2>TOTAL : " + cart.total.toString().replace('.', ',') + " &euro;</h2>";

    document.getElementById('cart').innerHTML = cartCode;
    document.getElementById('order').style.display = 'block';
  }
}

function addProduct(id) {
  var title = document.querySelector('#produit-' + id + ' h3').innerHTML;
  var price = Number(document.getElementById('prix-' + id).value);
  var product = {
    title: title,
    price: price
  };

  cart.addProduct(product);

  displayCart();
}

var buttons = document.querySelectorAll('a.add');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];

  button.onclick = function () {
    var id = Number(this.getAttribute('data-id'));
    addProduct(id);
  };
}

displayCart();

/***/ })

/******/ });
//# sourceMappingURL=panier-9fa57afd766c9bc5d116.js.map