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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeProject", function (e) {
      //li is four parents up from the button
      e.target.parentNode.parentNode.parentNode.parentNode.classList.remove('active');
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.setProjectActive,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "project-preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectPreviewImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: this.props.name,
        image: this.props.image,
        mobile: this.props.mobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "darken",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        viewBox: "0 0 22 11",
        xmlns: "http://www.w3.org/2000/svg",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "1.4142",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M19.1376.0002h2l-10.569 10.568L-.0004.0002h2l8.569 8.568 8.569-8.568z",
        fill: "#F4F4F8",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "project-details-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: function ref(element) {
          return _this2.details = element;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "project-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "details-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.props.tools.map(function (tool, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          title: tool,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "devicon-".concat(tool, "-plain"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.link,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "View Site")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u2022")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.source,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "View Source Code")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "details-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.props.description.split('\\n').map(function (line, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, line);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.closeProject,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]) + " " + "close-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300813088", [projectColor, detailsHeight, projectColor]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "x")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2300813088",
        css: "li.__jsx-style-dynamic-selector{position:relative;z-index:1;}.project-preview.__jsx-style-dynamic-selector{height:400px;position:relative;background-color:".concat(projectColor, ";cursor:pointer;-webkit-transition:filter 200ms 50ms ease;transition:filter 200ms 50ms ease;}.project-preview.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{pointer-events:none;}.darken.__jsx-style-dynamic-selector{position:absolute;width:100%;height:100%;background:#1E1E20;opacity:0.15;-webkit-transition:opacity 150ms 30ms linear;transition:opacity 150ms 30ms linear;}.project-preview.__jsx-style-dynamic-selector:hover .darken.__jsx-style-dynamic-selector{opacity:0.1;}.active.__jsx-style-dynamic-selector .darken.__jsx-style-dynamic-selector,.active.__jsx-style-dynamic-selector .project-preview.__jsx-style-dynamic-selector:hover .darken.__jsx-style-dynamic-selector{opacity:0;}header.__jsx-style-dynamic-selector{position:absolute;top:30%;left:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.__jsx-style-dynamic-selector{color:#F4F4F8;font-size:3rem;margin-right:15px;text-shadow:0 1px 3px rgba(30,30,32,0.25);}.arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);height:1.5rem;width:1.5rem;min-width:1.5rem;opacity:0.75;-webkit-transition:200ms ease;transition:200ms ease;-webkit-filter:drop-shadow(0 1px 2px rgba(30,30,32,0.25));filter:drop-shadow(0 1px 2px rgba(30,30,32,0.25));}.active.__jsx-style-dynamic-selector .arrow.__jsx-style-dynamic-selector{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.project-details-container.__jsx-style-dynamic-selector{height:0;background-color:#F4F4F8;width:100%;box-shadow:inset 0 12px 12px -12px rgba(0,0,0,0.3),inset 0 5px 5px -5px rgba(0,0,0,0.25),inset 0 -12px 12px -12px rgba(0,0,0,0.3),inset 0 -5px 5px -5px rgba(0,0,0,0.25);overflow:hidden;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:height 200ms cubic-bezier(.17,.67,.16,.99);transition:height 200ms cubic-bezier(.17,.67,.16,.99);}.active.__jsx-style-dynamic-selector .project-details-container.__jsx-style-dynamic-selector{height:").concat(detailsHeight, "px;}.project-details.__jsx-style-dynamic-selector{width:100%;padding:100px 40px;box-sizing:border-box;display:grid;grid-template-columns:auto auto;grid-column-gap:40px;grid-row-gap:1.4em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px);opacity:0;-webkit-transition:opacity 199ms linear,-webkit-transform 1ms 199ms linear;-webkit-transition:opacity 199ms linear,transform 1ms 199ms linear;transition:opacity 199ms linear,transform 1ms 199ms linear;}.active.__jsx-style-dynamic-selector .project-details.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;-webkit-transition:-webkit-transform 200ms ease-out,opacity 190ms 10ms linear;-webkit-transition:transform 200ms ease-out,opacity 190ms 10ms linear;transition:transform 200ms ease-out,opacity 190ms 10ms linear;}.details-left.__jsx-style-dynamic-selector{display:grid;-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;}h3.__jsx-style-dynamic-selector{font-weight:500;}ul.__jsx-style-dynamic-selector{display:grid;grid-auto-flow:column;grid-gap:5px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}i.__jsx-style-dynamic-selector{font-size:.8rem;color:rgba(30,30,32,0.8);}ul.__jsx-style-dynamic-selector:last-child{margin-top:.5em;}a.__jsx-style-dynamic-selector,span.__jsx-style-dynamic-selector{color:rgba(30,30,32,0.7);}a.__jsx-style-dynamic-selector{position:relative;font-weight:300;padding:0 5px;z-index:1;}a.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:1px;background:").concat(projectColor, ";opacity:0.6;z-index:-1;-webkit-transition:200ms 50ms ease;transition:200ms 50ms ease;}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:40%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;-webkit-transform:scaleY(8);-ms-transform:scaleY(8);transform:scaleY(8);}.details-right.__jsx-style-dynamic-selector{max-width:700px;}p.__jsx-style-dynamic-selector{color:rgba(30,30,32,0.8);margin-bottom:1em;}p.__jsx-style-dynamic-selector:last-child{margin-bottom:0;}.close-container.__jsx-style-dynamic-selector{grid-column-end:-1;grid-row-start:span -1;justify-self:end;margin-top:40px;}button.__jsx-style-dynamic-selector{border:none;border-radius:50%;background:rgba(30,30,32,0.7);color:#F1F1F8;width:30px;height:30px;font-family:\"Roboto Mono\",mono;font-size:16px;padding:0 0 5px 0;margin:0;text-align:center;-webkit-appearance:button;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,0.25),0 1px 7px rgba(0,0,0,0.22);-webkit-transition:background 200ms 30ms linear;transition:background 200ms 30ms linear;}button.__jsx-style-dynamic-selector:hover{background:rgba(30,30,32,0.9);}button.__jsx-style-dynamic-selector:focus{outline:none;}@media screen and (max-width:1000px){header.__jsx-style-dynamic-selector{left:20px;}h2.__jsx-style-dynamic-selector{font-size:2.5rem;}.project-details.__jsx-style-dynamic-selector{padding:100px 20px;}}@media screen and (max-width:900px){.project-details.__jsx-style-dynamic-selector{grid-template-columns:auto;}}@media screen and (max-width:750px){h2.__jsx-style-dynamic-selector{font-size:2rem;margin-right:10px;}.parallax-container.__jsx-style-dynamic-selector{right:0;}.arrow.__jsx-style-dynamic-selector{width:1.2rem;min-width:1.2rem;}}@media screen and (max-width:600px){.project-preview.__jsx-style-dynamic-selector{height:300px;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;}.parallax-container.__jsx-style-dynamic-selector{width:300px;}.arrow.__jsx-style-dynamic-selector{width:1rem;min-width:1rem;}.project-details.__jsx-style-dynamic-selector{padding:80px 20px;}}@media screen and (max-width:500px){header.__jsx-style-dynamic-selector{left:15px;}.parallax-container.__jsx-style-dynamic-selector{right:-50px;}.project-details.__jsx-style-dynamic-selector{padding:80px 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUcrQixBQUlMLEFBT08sQUFHRixBQVFOLEFBR0YsQUFHUSxBQU9KLEFBTVcsQUFTTCxBQUdYLEFBUzZCLEFBRzNCLEFBY2EsQUFLWCxBQUlHLEFBR0gsQUFNRyxBQUlBLEFBR1MsQUFHUCxBQU1QLEFBWUEsQUFLSyxBQUdTLEFBSVQsQUFHRyxBQU1QLEFBaUJrQixBQUdqQixBQUlELEFBR08sQUFHRSxBQUtRLEFBS1osQUFJUCxBQUdLLEFBTUEsQUFHSSxBQUdMLEFBR0QsQUFJTyxBQUtSLEFBR0UsQUFHTSxRQWhDcEIsQ0F6SXlCLENBNUIzQixBQWlKRSxBQStDQSxDQXhKbUIsQUFnREQsQUFZTSxBQW1GUCxDQTFMbkIsQUE0SG9CLEFBMkRsQixBQWVBLENBeE5rQixBQWdGRSxBQU9FLEFBMkV4QixBQTJCcUIsQUFNbkIsQ0FwS2UsQ0F1SkssQ0FsR3RCLEFBUzJCLEFBSTNCLEFBNkJBLEFBT0EsQ0FvQ0UsQUE2QkEsQ0ExTVUsQUFjQyxBQWNILEFBK0VRLEFBeUdoQixBQVdBLENBbkZ1QixBQW9DdkIsQ0FyS0YsS0E2RkEsQUE2Qm9CLENBeEdSLEFBb0xWLENBNUJBLENBcExGLENBY2MsQUFxQk0sQUE4RVgsQ0FoRGUsQUFpRlEsQUFnQmhDLEFBK0JFLENBN0w4QyxFQXNMOUMsQ0FySVcsQUFzREcsQ0FoQkQsQ0E5REEsQUFxRkosRUFyRFgsR0E5Q3FCLEFBa0ZyQixDQTJDbUIsQ0FQbkIsRUEvRThLLEFBNkRqSyxFQS9FK0IsQ0F3RHBCLEFBZ0JaLElBMUNHLElBa0RGLEVBUGIsQ0FnQ2tCLENBN0hILEFBbUlDLEtBL0VrQixFQWlEUSxLQXBFMUMsQ0FoQ3VDLENBbUkxQixDQU5iLEVBeklpQixPQXlFTCxDQXVFRSxDQWpFZCxDQTVDZ0IsRUFIaEIsR0EvQm9DLEVBeUU2QixDQThDM0MsRUF4REMsQUFpRlcsSUE3R25CLE1BNkVELEdBeEZPLElBWUYsSUE0QkUsQ0FpRFIsU0FnQ0ksRUEvQlksQ0E3RWQsTUE0QlUsTUFzQnpCLEFBMkRvQixDQTVHSSxXQTFCeEIsTUF1SVcsTUEzQlgsQ0F2SEEsRUFtSm9CLGtCQUNRLElBbEM1QixJQTVFb0QsT0FkcEQsV0F3QmtCLEFBcUdELGVBQ3lELENBckczQyxNQWdCRCwwREFzRlksVUFoSDFDLEFBa0NBLHlCQXZCd0QsR0FnQjVDLFVBQ2tELHdDQXFGOUQsK0RBckdBLGtHQWlCQSIsImZpbGUiOiIvVXNlcnMvY2hhc2VidXJnZXNzL1dlYkRldi9Qb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9qZWN0UHJldmlld0ltYWdlIGZyb20gJy4vUHJvamVjdFByZXZpZXdJbWFnZSc7XG5cbi8vQ291bGQgcHJvYmFibHkgc3BsaXQgdGhpcyB1cCBpbnRvIDIgbW9yZSBjb21wb25lbnRzIHdpdGhpbiAtIFByZXZpZXcgYW5kIERldGFpbHNcblxuY2xhc3MgUHJvamVjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZXRhaWxzSGVpZ2h0OiAwLFxuICAgICAgbW91bnRlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2dldCByZW5kZXJlZCBoZWlnaHQgb2YgcHJvamVjdCBkZXRhaWxzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHNIZWlnaHQ6IHRoaXMuZGV0YWlscy5vZmZzZXRIZWlnaHQgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBzZXRQcm9qZWN0QWN0aXZlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgY2xvc2VQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAvL2xpIGlzIGZvdXIgcGFyZW50cyB1cCBmcm9tIHRoZSBidXR0b25cbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgLy9mdW5jdGlvbiB0byBnZXQgbmV3IGhlaWdodCBvZiBwcm9qZWN0IGRldGFpbHMgb24gcGFnZSByZXNpemVcbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHNIZWlnaHQ6IHRoaXMuZGV0YWlscy5vZmZzZXRIZWlnaHQgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbG9yID0gdGhpcy5wcm9wcy5jb2xvcjtcbiAgICBsZXQgZGV0YWlsc0hlaWdodCA9IHRoaXMuc3RhdGUuZGV0YWlsc0hlaWdodDtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcHJldmlld1wiIG9uQ2xpY2s9e3RoaXMuc2V0UHJvamVjdEFjdGl2ZX0gPlxuICAgICAgICAgIDxQcm9qZWN0UHJldmlld0ltYWdlIFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgaW1hZ2U9e3RoaXMucHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICBtb2JpbGU9e3RoaXMucHJvcHMubW9iaWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrZW5cIj48L2Rpdj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYXJyb3dcIiB2aWV3Qm94PVwiMCAwIDIyIDExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VNaXRlcmxpbWl0PVwiMS40MTQyXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuMTM3Ni4wMDAyaDJsLTEwLjU2OSAxMC41NjhMLS4wMDA0LjAwMDJoMmw4LjU2OSA4LjU2OCA4LjU2OS04LjU2OHpcIiBmaWxsPVwiI0Y0RjRGOFwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsc1wiIHJlZj17ZWxlbWVudCA9PiB0aGlzLmRldGFpbHMgPSBlbGVtZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50b29scy5tYXAoKHRvb2wsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PjxpIGNsYXNzTmFtZT17YGRldmljb24tJHt0b29sfS1wbGFpbmB9IHRpdGxlPXt0b29sfT48L2k+PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPXt0aGlzLnByb3BzLmxpbmt9PlZpZXcgU2l0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Bhbj7igKI8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj17dGhpcy5wcm9wcy5zb3VyY2V9PlZpZXcgU291cmNlIENvZGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlc2NyaXB0aW9uLnNwbGl0KCdcXFxcbicpLm1hcCgobGluZSxpKSA9PiA8cCBrZXk9e2l9PntsaW5lfTwvcD4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VQcm9qZWN0fT48YnV0dG9uPng8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtcHJldmlldyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9qZWN0Q29sb3J9O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zIDUwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtcHJldmlldyA+ICoge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXJrZW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUUxRTIwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4xNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgMzBtcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LXByZXZpZXc6aG92ZXIgLmRhcmtlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUgLmRhcmtlbiwgLmFjdGl2ZSAucHJvamVjdC1wcmV2aWV3OmhvdmVyIC5kYXJrZW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI0Y0RjRGODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMCwzMCwzMiwwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgzMCwzMCwzMiwwLjI1KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUgLmFycm93IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDEycHggMTJweCAtMTJweCByZ2JhKDAsMCwwLDAuMyksIGluc2V0IDAgNXB4IDVweCAtNXB4IHJnYmEoMCwwLDAsMC4yNSksIGluc2V0IDAgLTEycHggMTJweCAtMTJweCByZ2JhKDAsMCwwLDAuMyksIGluc2V0IDAgLTVweCA1cHggLTVweCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zIGN1YmljLWJlemllciguMTcsLjY3LC4xNiwuOTkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogJHtkZXRhaWxzSGVpZ2h0fXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1kZXRhaWxzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTAwcHggNDBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgLy8gZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA0MHB4O1xuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxLjRlbTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE5OW1zIGxpbmVhciwgdHJhbnNmb3JtIDFtcyAxOTltcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUgLnByb2plY3QtZGV0YWlscyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0LCBvcGFjaXR5IDE5MG1zIDEwbXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGV0YWlscy1sZWZ0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBncmlkLWdhcDogNXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzAsMzAsMzIsMC44KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLCBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMwLDMwLDMyLDAuNyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb2plY3RDb2xvcn07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIDUwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBib3R0b206IDQwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGV0YWlscy1yaWdodCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMwLDMwLDMyLDAuOCk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvc2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogLTE7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogc3BhbiAtMTtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsMzAsMzIsMC43KTtcbiAgICAgICAgICAgIGNvbG9yOiAjRjFGMUY4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDVweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIDMwbXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzMCwzMCwzMiwwLjkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLnByb2plY3QtZGV0YWlscyB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5wcm9qZWN0LXByZXZpZXcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2plY3QtZGV0YWlscyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2plY3QtZGV0YWlscyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyJdfQ== */\n/*@ sourceURL=/Users/chaseburgess/WebDev/Portfolio/components/Project.js */"),
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
//# sourceMappingURL=index.js.01f48f6230605cbd09e0.hot-update.js.map