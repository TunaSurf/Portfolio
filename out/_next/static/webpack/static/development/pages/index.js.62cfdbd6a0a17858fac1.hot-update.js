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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.setProjectActive,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "project-preview",
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "darken",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z",
        fill: "#F4F4F8",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "project-details-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: function ref(element) {
          return _this2.details = element;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "project-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "details-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.props.tools.map(function (tool, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          title: tool,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "devicon-".concat(tool, "-plain"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.link,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "View Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u2022")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.source,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "View Source Code")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "details-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.description.split('\\n').map(function (line, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, line);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]) + " " + "close-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1818963565", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "X")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1818963565",
        css: "li.__jsx-style-dynamic-selector{position:relative;z-index:1;}.project-preview.__jsx-style-dynamic-selector{height:400px;position:relative;background-color:".concat(projectColor, ";cursor:pointer;-webkit-transition:filter 200ms 50ms ease;transition:filter 200ms 50ms ease;}.project-preview.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{pointer-events:none;}.darken.__jsx-style-dynamic-selector{position:absolute;width:100%;height:100%;background:#1E1E20;opacity:0.15;-webkit-transition:opacity 150ms 30ms linear;transition:opacity 150ms 30ms linear;}.project-preview.__jsx-style-dynamic-selector:hover .darken.__jsx-style-dynamic-selector{opacity:0.1;}.active.__jsx-style-dynamic-selector .darken.__jsx-style-dynamic-selector,.active.__jsx-style-dynamic-selector .project-preview.__jsx-style-dynamic-selector:hover .darken.__jsx-style-dynamic-selector{opacity:0;}header.__jsx-style-dynamic-selector{position:absolute;top:30%;left:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.__jsx-style-dynamic-selector{color:#F4F4F8;font-size:3rem;margin-right:15px;text-shadow:0 1px 3px rgba(30,30,32,0.25);}.arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);height:1.5rem;width:1.5rem;min-width:1.5rem;opacity:0.75;-webkit-transition:200ms ease;transition:200ms ease;-webkit-filter:drop-shadow(0 1px 2px rgba(30,30,32,0.25));filter:drop-shadow(0 1px 2px rgba(30,30,32,0.25));}.active.__jsx-style-dynamic-selector .arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.project-details-container.__jsx-style-dynamic-selector{height:0;background-color:#F4F4F8;width:100%;box-shadow:inset 0 12px 12px -12px rgba(0,0,0,0.3),inset 0 5px 5px -5px rgba(0,0,0,0.25),inset 0 -12px 12px -12px rgba(0,0,0,0.3),inset 0 -5px 5px -5px rgba(0,0,0,0.25);overflow:hidden;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:height 200ms cubic-bezier(.17,.67,.16,.99);transition:height 200ms cubic-bezier(.17,.67,.16,.99);}.active.__jsx-style-dynamic-selector .project-details-container.__jsx-style-dynamic-selector{height:").concat(detailsHeight, "px;}.project-details.__jsx-style-dynamic-selector{width:100%;padding:100px 40px;box-sizing:border-box;display:grid;grid-template-columns:auto auto;grid-column-gap:40px;grid-row-gap:1.4em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);opacity:0;-webkit-transition:opacity 199ms linear,-webkit-transform 1ms 199ms linear;-webkit-transition:opacity 199ms linear,transform 1ms 199ms linear;transition:opacity 199ms linear,transform 1ms 199ms linear;}.active.__jsx-style-dynamic-selector .project-details.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;-webkit-transition:-webkit-transform 200ms ease-out,opacity 190ms 10ms linear;-webkit-transition:transform 200ms ease-out,opacity 190ms 10ms linear;transition:transform 200ms ease-out,opacity 190ms 10ms linear;}.details-left.__jsx-style-dynamic-selector{display:grid;-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;}h3.__jsx-style-dynamic-selector{font-weight:500;}ul.__jsx-style-dynamic-selector{display:grid;grid-auto-flow:column;grid-gap:5px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}i.__jsx-style-dynamic-selector{font-size:.8rem;color:rgba(30,30,32,0.8);}ul.__jsx-style-dynamic-selector:last-child{margin-top:.5em;}a.__jsx-style-dynamic-selector,span.__jsx-style-dynamic-selector{color:rgba(30,30,32,0.7);}a.__jsx-style-dynamic-selector{position:relative;font-weight:300;padding:0 5px;z-index:1;}a.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:1px;background:").concat(projectColor, ";opacity:0.6;z-index:-1;-webkit-transition:200ms 50ms ease;transition:200ms 50ms ease;}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:40%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;-webkit-transform:scaleY(8);-ms-transform:scaleY(8);transform:scaleY(8);}.details-right.__jsx-style-dynamic-selector{max-width:700px;}p.__jsx-style-dynamic-selector{color:rgba(30,30,32,0.8);margin-bottom:1em;}p.__jsx-style-dynamic-selector:last-child{margin-bottom:0;}.close-container.__jsx-style-dynamic-selector{grid-column-end:-1;grid-row-start:span -1;justify-self:end;}button.__jsx-style-dynamic-selector{border:none;border-radius:50%;background:#1E1E20;color:#F1F1F8;font-family:inherit;font-size:100%;margin:0;-webkit-appearance:button;}@media screen and (max-width:1000px){header.__jsx-style-dynamic-selector{left:20px;}h2.__jsx-style-dynamic-selector{font-size:2.5rem;}.project-details.__jsx-style-dynamic-selector{padding:100px 20px;}}@media screen and (max-width:900px){.project-details.__jsx-style-dynamic-selector{grid-template-columns:auto;}}@media screen and (max-width:750px){h2.__jsx-style-dynamic-selector{font-size:2rem;margin-right:10px;}.parallax-container.__jsx-style-dynamic-selector{right:0;}.arrow.__jsx-style-dynamic-selector{width:1.2rem;min-width:1.2rem;}}@media screen and (max-width:600px){.project-preview.__jsx-style-dynamic-selector{height:300px;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;}.parallax-container.__jsx-style-dynamic-selector{width:300px;}.arrow.__jsx-style-dynamic-selector{width:1rem;min-width:1rem;}.project-details.__jsx-style-dynamic-selector{padding:80px 20px;}}@media screen and (max-width:500px){header.__jsx-style-dynamic-selector{left:15px;}.parallax-container.__jsx-style-dynamic-selector{right:-50px;}.project-details.__jsx-style-dynamic-selector{padding:80px 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVvQixBQUcrQixBQUlMLEFBT08sQUFHRixBQVFOLEFBR0YsQUFHUSxBQU9KLEFBTVcsQUFTTCxBQUdYLEFBUzZCLEFBRzNCLEFBY2EsQUFLWCxBQUlHLEFBR0gsQUFNRyxBQUlBLEFBR1MsQUFHUCxBQU1QLEFBWUEsQUFLSyxBQUdTLEFBSVQsQUFHRyxBQUtQLEFBV0EsQUFHTyxBQUdFLEFBS1EsQUFLWixBQUlQLEFBR0ssQUFNQSxBQUdJLEFBR0wsQUFHRCxBQUlPLEFBS1IsQUFHRSxBQUdNLFFBaENwQixDQTNIeUIsQ0E1QjNCLEFBbUlFLEFBK0NBLENBMUltQixBQWdERCxBQVlNLEFBcUVQLENBNUtuQixBQTJIb0IsQUE4Q2xCLEFBZUEsQ0ExTWtCLEFBZ0ZFLEFBT0UsQUF3RkgsQUFNbkIsQ0F0SmUsQ0F5SUssQ0FwRnRCLEFBUzJCLEFBSTNCLEFBNkJBLEFBT0EsQ0FzQkUsQUE2QkEsQ0E1TFUsQUFjQyxBQWNILEFBK0VRLEFBMkZoQixBQVdBLENBckV1QixBQXNCdkIsQ0F2SkYsS0E2RkEsQUE2Qm9CLENBeEdSLEFBc0tWLENBNUJBLENBdEtGLENBY2MsQUFxQk0sQUE4RVgsQ0FoRGUsQUFnRkgsQUFrQ25CLENBL0s4QyxFQXdLOUMsQ0F2SFcsQUFzREcsQ0FoQkQsQ0E5REEsQUFxRkosRUFyRFgsR0E5Q3FCLEFBa0ZyQixDQTJDbUIsQ0FQbkIsRUEvRThLLEFBNkRqSyxFQS9FK0IsQ0F3RHBCLEFBZ0JaLENBc0NJLEdBaEZELElBa0RGLEVBUGIsQ0FnQ0EsQ0E3SGUsR0FtSU8sRUEvRVksRUFpRFEsS0FwRTFDLENBaEN1QyxJQVp0QixNQStJQSxDQXRFTCxFQU1aLENBNUNnQixFQUhoQixHQS9Cb0MsRUF5RTZCLENBOEMzQyxFQXhEQyxDQWdGWixHQTVHSSxNQTZFRCxBQWdDYyxHQXhIUCxJQVlGLElBNEJFLENBaURSLFdBQ2dCLENBN0VkLEVBNEdmLElBaEZ5QixNQXNCekIsQ0FqRHdCLFdBMUJ4QixZQTRHQSxDQXZIQSx3QkFrSEEsSUE1RW9ELE9BZHBELFdBd0JrQixnQkFDYSxNQWdCRCxvRUExQjlCLEFBa0NBLHlCQXZCd0QsR0FnQjVDLFVBQ2tELHVHQWhCOUQsa0dBaUJBIiwiZmlsZSI6Ii9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2plY3RQcmV2aWV3SW1hZ2UgZnJvbSAnLi9Qcm9qZWN0UHJldmlld0ltYWdlJztcblxuLy9Db3VsZCBwcm9iYWJseSBzcGxpdCB0aGlzIHVwIGludG8gMiBtb3JlIGNvbXBvbmVudHMgd2l0aGluIC0gUHJldmlldyBhbmQgRGV0YWlsc1xuXG5jbGFzcyBQcm9qZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRldGFpbHNIZWlnaHQ6IDAsXG4gICAgICBtb3VudGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vZ2V0IHJlbmRlcmVkIGhlaWdodCBvZiBwcm9qZWN0IGRldGFpbHNcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsc0hlaWdodDogdGhpcy5kZXRhaWxzLm9mZnNldEhlaWdodCB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIHNldFByb2plY3RBY3RpdmUgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cblxuICAvL2Z1bmN0aW9uIHRvIGdldCBuZXcgaGVpZ2h0IG9mIHByb2plY3QgZGV0YWlscyBvbiBwYWdlIHJlc2l6ZVxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsc0hlaWdodDogdGhpcy5kZXRhaWxzLm9mZnNldEhlaWdodCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSB0aGlzLnByb3BzLmNvbG9yO1xuICAgIGxldCBkZXRhaWxzSGVpZ2h0ID0gdGhpcy5zdGF0ZS5kZXRhaWxzSGVpZ2h0O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wcmV2aWV3XCIgb25DbGljaz17dGhpcy5zZXRQcm9qZWN0QWN0aXZlfSA+XG4gICAgICAgICAgPFByb2plY3RQcmV2aWV3SW1hZ2UgXG4gICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICBpbWFnZT17dGhpcy5wcm9wcy5pbWFnZX1cbiAgICAgICAgICAgIG1vYmlsZT17dGhpcy5wcm9wcy5tb2JpbGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcmtlblwiPjwvZGl2PlxuICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDI+e3RoaXMucHJvcHMubmFtZX08L2gyPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhcnJvd1wiIHZpZXdCb3g9XCIwIDAgMjIgMTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZU1pdGVybGltaXQ9XCIxLjQxNDJcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS4xMzc2LjAwMDJoMmwtMTAuNTY5IDEwLjU2OEwtLjAwMDQuMDAwMmgybDguNTY5IDguNTY4IDguNTY5LTguNTY4elwiIGZpbGw9XCIjRjRGNEY4XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxzXCIgcmVmPXtlbGVtZW50ID0+IHRoaXMuZGV0YWlscyA9IGVsZW1lbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvb2xzLm1hcCgodG9vbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+PGkgY2xhc3NOYW1lPXtgZGV2aWNvbi0ke3Rvb2x9LXBsYWluYH0gdGl0bGU9e3Rvb2x9PjwvaT48L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9e3RoaXMucHJvcHMubGlua30+VmlldyBTaXRlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzcGFuPuKAojwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPXt0aGlzLnByb3BzLnNvdXJjZX0+VmlldyBTb3VyY2UgQ29kZTwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtcmlnaHRcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY3JpcHRpb24uc3BsaXQoJ1xcXFxuJykubWFwKChsaW5lLGkpID0+IDxwIGtleT17aX0+e2xpbmV9PC9wPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtY29udGFpbmVyXCI+PGJ1dHRvbj5YPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LXByZXZpZXcge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvamVjdENvbG9yfTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcyA1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LXByZXZpZXcgPiAqIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGFya2VuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFFMUUyMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMTU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIDMwbXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1wcmV2aWV3OmhvdmVyIC5kYXJrZW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIC5kYXJrZW4sIC5hY3RpdmUgLnByb2plY3QtcHJldmlldzpob3ZlciAuZGFya2VuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6ICNGNEY0Rjg7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzAsMzAsMzIsMC4yNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMzAsMzAsMzIsMC4yNSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIC5hcnJvdyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGODtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxMnB4IDEycHggLTEycHggcmdiYSgwLDAsMCwwLjMpLCBpbnNldCAwIDVweCA1cHggLTVweCByZ2JhKDAsMCwwLDAuMjUpLCBpbnNldCAwIC0xMnB4IDEycHggLTEycHggcmdiYSgwLDAsMCwwLjMpLCBpbnNldCAwIC01cHggNXB4IC01cHggcmdiYSgwLDAsMCwwLjI1KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcyBjdWJpYy1iZXppZXIoLjE3LC42NywuMTYsLjk5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSAucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7ZGV0YWlsc0hlaWdodH1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtZGV0YWlscyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDQwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIC8vIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNDBweDtcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMS40ZW07XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxOTltcyBsaW5lYXIsIHRyYW5zZm9ybSAxbXMgMTk5bXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dCwgb3BhY2l0eSAxOTBtcyAxMG1zIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRldGFpbHMtbGVmdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMwLDMwLDMyLDAuOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSwgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzMCwzMCwzMiwwLjcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtwcm9qZWN0Q29sb3J9O1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyA1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYm90dG9tOiA0MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSg4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRldGFpbHMtcmlnaHQge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzMCwzMCwzMiwwLjgpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsb3NlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gLTE7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxRTFFMjA7XG4gICAgICAgICAgICBjb2xvcjogI0YxRjFGODtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdC1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAucHJvamVjdC1wcmV2aWV3IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiXX0= */\n/*@ sourceURL=/Users/chaseburgess/WebDev/Portfolio/components/Project.js */"),
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
//# sourceMappingURL=index.js.62cfdbd6a0a17858fac1.hot-update.js.map