webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectPreviewImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectPreviewImage */ "./components/ProjectPreviewImage.js");
var _jsxFileName = "/Users/chaseburgess/WebDev/Portfolio/components/Project.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //Could probably split this up into 2 more components within - Preview and Details

var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  function Project(props) {
    var _this;

    _classCallCheck(this, Project);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Project).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setProjectActive", function (e) {
      e.target.parentNode.classList.toggle('active');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResize", function () {
      window.requestAnimationFrame(function () {
        _this.setState({
          detailsHeight: _this.details.offsetHeight
        });
      });
    });

    _this.state = {
      detailsHeight: 0,
      mounted: false
    };
    return _this;
  }

  _createClass(Project, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //get rendered height of project details
      this.setState({
        detailsHeight: this.details.offsetHeight
      });
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var projectColor = this.props.color;
      var detailsHeight = this.state.detailsHeight;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.setProjectActive,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "project-preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectPreviewImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: this.props.name,
        image: this.props.image,
        mobile: this.props.mobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "darken",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        viewBox: "0 0 22 11",
        xmlns: "http://www.w3.org/2000/svg",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "1.4142",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z",
        fill: "#F4F4F8",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "project-details-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: function ref(element) {
          return _this2.details = element;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "project-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "details-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.props.tools.map(function (tool, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          title: tool,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "devicon-".concat(tool, "-plain"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.link,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "View Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u2022")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.source,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "View Source Code")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "details-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.description.split('\\n').map(function (line, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, line);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]) + " " + "close-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4002168941", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "X")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4002168941",
        css: "li.__jsx-style-dynamic-selector{position:relative;z-index:1;}.project-preview.__jsx-style-dynamic-selector{height:400px;position:relative;background-color:".concat(projectColor, ";cursor:pointer;-webkit-transition:filter 200ms 50ms ease;transition:filter 200ms 50ms ease;}.project-preview.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{pointer-events:none;}.darken.__jsx-style-dynamic-selector{position:absolute;width:100%;height:100%;background:#1E1E20;opacity:0.15;-webkit-transition:opacity 150ms 30ms linear;transition:opacity 150ms 30ms linear;}.project-preview.__jsx-style-dynamic-selector:hover .darken.__jsx-style-dynamic-selector{opacity:0.1;}.active.__jsx-style-dynamic-selector .darken.__jsx-style-dynamic-selector,.active.__jsx-style-dynamic-selector .project-preview.__jsx-style-dynamic-selector:hover .darken.__jsx-style-dynamic-selector{opacity:0;}header.__jsx-style-dynamic-selector{position:absolute;top:30%;left:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.__jsx-style-dynamic-selector{color:#F4F4F8;font-size:3rem;margin-right:15px;text-shadow:0 1px 3px rgba(30,30,32,0.25);}.arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);height:1.5rem;width:1.5rem;min-width:1.5rem;opacity:0.75;-webkit-transition:200ms ease;transition:200ms ease;-webkit-filter:drop-shadow(0 1px 2px rgba(30,30,32,0.25));filter:drop-shadow(0 1px 2px rgba(30,30,32,0.25));}.active.__jsx-style-dynamic-selector .arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.project-details-container.__jsx-style-dynamic-selector{height:0;background-color:#F4F4F8;width:100%;box-shadow:inset 0 12px 12px -12px rgba(0,0,0,0.3),inset 0 5px 5px -5px rgba(0,0,0,0.25),inset 0 -12px 12px -12px rgba(0,0,0,0.3),inset 0 -5px 5px -5px rgba(0,0,0,0.25);overflow:hidden;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:height 200ms cubic-bezier(.17,.67,.16,.99);transition:height 200ms cubic-bezier(.17,.67,.16,.99);}.active.__jsx-style-dynamic-selector .project-details-container.__jsx-style-dynamic-selector{height:").concat(detailsHeight, "px;}.project-details.__jsx-style-dynamic-selector{width:100%;padding:100px 40px;box-sizing:border-box;display:grid;grid-template-columns:auto auto;grid-column-gap:40px;grid-row-gap:1.4em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);opacity:0;-webkit-transition:opacity 199ms linear,-webkit-transform 1ms 199ms linear;-webkit-transition:opacity 199ms linear,transform 1ms 199ms linear;transition:opacity 199ms linear,transform 1ms 199ms linear;}.active.__jsx-style-dynamic-selector .project-details.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;-webkit-transition:-webkit-transform 200ms ease-out,opacity 190ms 10ms linear;-webkit-transition:transform 200ms ease-out,opacity 190ms 10ms linear;transition:transform 200ms ease-out,opacity 190ms 10ms linear;}.details-left.__jsx-style-dynamic-selector{display:grid;-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;}h3.__jsx-style-dynamic-selector{font-weight:500;}ul.__jsx-style-dynamic-selector{display:grid;grid-auto-flow:column;grid-gap:5px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}i.__jsx-style-dynamic-selector{font-size:.8rem;color:rgba(30,30,32,0.8);}ul.__jsx-style-dynamic-selector:last-child{margin-top:.5em;}a.__jsx-style-dynamic-selector,span.__jsx-style-dynamic-selector{color:rgba(30,30,32,0.7);}a.__jsx-style-dynamic-selector{position:relative;font-weight:300;padding:0 5px;z-index:1;}a.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:1px;background:").concat(projectColor, ";opacity:0.6;z-index:-1;-webkit-transition:200ms 50ms ease;transition:200ms 50ms ease;}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:40%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;-webkit-transform:scaleY(8);-ms-transform:scaleY(8);transform:scaleY(8);}.details-right.__jsx-style-dynamic-selector{max-width:700px;}p.__jsx-style-dynamic-selector{color:rgba(30,30,32,0.8);margin-bottom:1em;}p.__jsx-style-dynamic-selector:last-child{margin-bottom:0;}.close-container.__jsx-style-dynamic-selector{grid-column-end:-1;grid-row-start:span -1;justify-self:end;}button.__jsx-style-dynamic-selector{border:none;border-radius:50%;background:rgba(30,30,32,0.9);color:#F1F1F8;font-family:inherit;font-size:100%;margin:0;-webkit-appearance:button;}@media screen and (max-width:1000px){header.__jsx-style-dynamic-selector{left:20px;}h2.__jsx-style-dynamic-selector{font-size:2.5rem;}.project-details.__jsx-style-dynamic-selector{padding:100px 20px;}}@media screen and (max-width:900px){.project-details.__jsx-style-dynamic-selector{grid-template-columns:auto;}}@media screen and (max-width:750px){h2.__jsx-style-dynamic-selector{font-size:2rem;margin-right:10px;}.parallax-container.__jsx-style-dynamic-selector{right:0;}.arrow.__jsx-style-dynamic-selector{width:1.2rem;min-width:1.2rem;}}@media screen and (max-width:600px){.project-preview.__jsx-style-dynamic-selector{height:300px;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;}.parallax-container.__jsx-style-dynamic-selector{width:300px;}.arrow.__jsx-style-dynamic-selector{width:1rem;min-width:1rem;}.project-details.__jsx-style-dynamic-selector{padding:80px 20px;}}@media screen and (max-width:500px){header.__jsx-style-dynamic-selector{left:15px;}.parallax-container.__jsx-style-dynamic-selector{right:-50px;}.project-details.__jsx-style-dynamic-selector{padding:80px 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVvQixBQUcrQixBQUlMLEFBT08sQUFHRixBQVFOLEFBR0YsQUFHUSxBQU9KLEFBTVcsQUFTTCxBQUdYLEFBUzZCLEFBRzNCLEFBY2EsQUFLWCxBQUlHLEFBR0gsQUFNRyxBQUlBLEFBR1MsQUFHUCxBQU1QLEFBWUEsQUFLSyxBQUdTLEFBSVQsQUFHRyxBQUtQLEFBV0EsQUFHTyxBQUdFLEFBS1EsQUFLWixBQUlQLEFBR0ssQUFNQSxBQUdJLEFBR0wsQUFHRCxBQUlPLEFBS1IsQUFHRSxBQUdNLFFBaENwQixDQTNIeUIsQ0E1QjNCLEFBbUlFLEFBK0NBLENBMUltQixBQWdERCxBQVlNLEFBcUVQLENBNUtuQixBQTJIb0IsQUE4Q2xCLEFBZUEsQ0ExTWtCLEFBZ0ZFLEFBT0UsQUF3RkgsQUFNbkIsQ0F0SmUsQ0F5SUssQ0FwRnRCLEFBUzJCLEFBSTNCLEFBNkJBLEFBT0EsQ0FzQkUsQUE2QkEsQ0E1TFUsQUFjQyxBQWNILEFBK0VRLEFBMkZoQixBQVdBLENBckV1QixBQXNCdkIsQ0F2SkYsS0E2RkEsQUE2Qm9CLENBeEdSLEFBc0tWLENBNUJBLENBdEtGLENBY2MsQUFxQk0sQUE4RVgsQ0FoRGUsQUFnRlEsQUFrQzlCLENBL0s4QyxFQXdLOUMsQ0F2SFcsQUFzREcsQ0FoQkQsQ0E5REEsQUFxRkosRUFyRFgsR0E5Q3FCLEFBa0ZyQixDQTJDbUIsQ0FQbkIsRUEvRThLLEFBNkRqSyxFQS9FK0IsQ0F3RHBCLEFBZ0JaLElBMUNHLElBa0RGLEVBUGIsQ0FnQ0EsQ0E3SGUsQUFrSUMsS0E5RWtCLEVBaURRLEtBcEUxQyxDQWhDdUMsQ0FrSWpCLEdBOUlMLE9BeUVMLEVBTVosQ0E1Q2dCLEVBSGhCLEdBL0JvQyxFQXlFNkIsQUFxRWhELENBdkJLLEVBeERDLElBNUJSLE1BNkVELEVBK0JILENBdkhVLElBWUYsSUE0QkUsQUFnRk8sQ0EvQmYsV0FDZ0IsQ0E3RWQsTUE0QlUsTUFzQnpCLENBakR3QixBQTJHeEIsV0FySUEsWUE0R0EsQ0F2SEEsd0JBa0hBLElBNUVvRCxPQWRwRCxXQXdCa0IsZ0JBQ2EsTUFnQkQsb0VBMUI5QixBQWtDQSx5QkF2QndELEdBZ0I1QyxVQUNrRCx1R0FoQjlELGtHQWlCQSIsImZpbGUiOiIvVXNlcnMvY2hhc2VidXJnZXNzL1dlYkRldi9Qb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9qZWN0UHJldmlld0ltYWdlIGZyb20gJy4vUHJvamVjdFByZXZpZXdJbWFnZSc7XG5cbi8vQ291bGQgcHJvYmFibHkgc3BsaXQgdGhpcyB1cCBpbnRvIDIgbW9yZSBjb21wb25lbnRzIHdpdGhpbiAtIFByZXZpZXcgYW5kIERldGFpbHNcblxuY2xhc3MgUHJvamVjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZXRhaWxzSGVpZ2h0OiAwLFxuICAgICAgbW91bnRlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2dldCByZW5kZXJlZCBoZWlnaHQgb2YgcHJvamVjdCBkZXRhaWxzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHNIZWlnaHQ6IHRoaXMuZGV0YWlscy5vZmZzZXRIZWlnaHQgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBzZXRQcm9qZWN0QWN0aXZlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgLy9mdW5jdGlvbiB0byBnZXQgbmV3IGhlaWdodCBvZiBwcm9qZWN0IGRldGFpbHMgb24gcGFnZSByZXNpemVcbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHNIZWlnaHQ6IHRoaXMuZGV0YWlscy5vZmZzZXRIZWlnaHQgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbG9yID0gdGhpcy5wcm9wcy5jb2xvcjtcbiAgICBsZXQgZGV0YWlsc0hlaWdodCA9IHRoaXMuc3RhdGUuZGV0YWlsc0hlaWdodDtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcHJldmlld1wiIG9uQ2xpY2s9e3RoaXMuc2V0UHJvamVjdEFjdGl2ZX0gPlxuICAgICAgICAgIDxQcm9qZWN0UHJldmlld0ltYWdlIFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgaW1hZ2U9e3RoaXMucHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICBtb2JpbGU9e3RoaXMucHJvcHMubW9iaWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrZW5cIj48L2Rpdj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYXJyb3dcIiB2aWV3Qm94PVwiMCAwIDIyIDExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VNaXRlcmxpbWl0PVwiMS40MTQyXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuMTM3Ni4wMDAyaDJsLTEwLjU2OSAxMC41NjhMLS4wMDA0LjAwMDJoMmw4LjU2OSA4LjU2OCA4LjU2OS04LjU2OHpcIiBmaWxsPVwiI0Y0RjRGOFwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsc1wiIHJlZj17ZWxlbWVudCA9PiB0aGlzLmRldGFpbHMgPSBlbGVtZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50b29scy5tYXAoKHRvb2wsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PjxpIGNsYXNzTmFtZT17YGRldmljb24tJHt0b29sfS1wbGFpbmB9IHRpdGxlPXt0b29sfT48L2k+PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPXt0aGlzLnByb3BzLmxpbmt9PlZpZXcgU2l0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Bhbj7igKI8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj17dGhpcy5wcm9wcy5zb3VyY2V9PlZpZXcgU291cmNlIENvZGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlc2NyaXB0aW9uLnNwbGl0KCdcXFxcbicpLm1hcCgobGluZSxpKSA9PiA8cCBrZXk9e2l9PntsaW5lfTwvcD4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNvbnRhaW5lclwiPjxidXR0b24+WDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1wcmV2aWV3IHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb2plY3RDb2xvcn07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjAwbXMgNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1wcmV2aWV3ID4gKiB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRhcmtlbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxRTFFMjA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE1O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyAzMG1zIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtcHJldmlldzpob3ZlciAuZGFya2VuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSAuZGFya2VuLCAuYWN0aXZlIC5wcm9qZWN0LXByZXZpZXc6aG92ZXIgLmRhcmtlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRjRGNEY4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDMwLDMwLDMyLDAuMjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDMwLDMwLDMyLDAuMjUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSAuYXJyb3cge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMTJweCAxMnB4IC0xMnB4IHJnYmEoMCwwLDAsMC4zKSwgaW5zZXQgMCA1cHggNXB4IC01cHggcmdiYSgwLDAsMCwwLjI1KSwgaW5zZXQgMCAtMTJweCAxMnB4IC0xMnB4IHJnYmEoMCwwLDAsMC4zKSwgaW5zZXQgMCAtNXB4IDVweCAtNXB4IHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMgY3ViaWMtYmV6aWVyKC4xNywuNjcsLjE2LC45OSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUgLnByb2plY3QtZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAke2RldGFpbHNIZWlnaHR9cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCA0MHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAvLyBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDQwcHg7XG4gICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEuNGVtO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTk5bXMgbGluZWFyLCB0cmFuc2Zvcm0gMW1zIDE5OW1zIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSAucHJvamVjdC1kZXRhaWxzIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQsIG9wYWNpdHkgMTkwbXMgMTBtcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXRhaWxzLWxlZnQge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzMCwzMCwzMiwwLjgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzAsMzAsMzIsMC43KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvamVjdENvbG9yfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICAgIGJvdHRvbTogNDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXRhaWxzLXJpZ2h0IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzAsMzAsMzIsMC44KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbG9zZS1jb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiBzcGFuIC0xO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLDMwLDMyLDAuOSk7XG4gICAgICAgICAgICBjb2xvcjogI0YxRjFGODtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdC1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAucHJvamVjdC1wcmV2aWV3IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiXX0= */\n/*@ sourceURL=/Users/chaseburgess/WebDev/Portfolio/components/Project.js */"),
        dynamic: [projectColor, detailsHeight, projectColor],
        __self: this
      }));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.aad6365fa1c9719dff28.hot-update.js.map