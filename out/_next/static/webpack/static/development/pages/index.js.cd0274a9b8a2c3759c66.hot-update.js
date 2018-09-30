webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectPreviewImage.js":
/*!*******************************************!*\
  !*** ./components/ProjectPreviewImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/lib/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/chaseburgess/WebDev/Portfolio/components/ProjectPreviewImage.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ProjectPreviewImage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectPreviewImage, _Component);

  function ProjectPreviewImage() {
    _classCallCheck(this, ProjectPreviewImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectPreviewImage).apply(this, arguments));
  }

  _createClass(ProjectPreviewImage, [{
    key: "render",
    value: function render() {
      //Not a fan that I had to essentially use the same styled-jsx markup 
      //twice to avoid an error in compiling the jsx when using a const
      if (this.props.mobile) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3820898377" + " " + "parallax-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "".concat(this.props.image, "/preview.png"),
          alt: "".concat(this.props.name, " preview"),
          className: "jsx-3820898377" + " " + "base-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "3820898377",
          css: "*.jsx-3820898377{pointer-events:none;}.parallax-container.jsx-3820898377{height:100%;width:400px;position:absolute;top:0;right:5%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-3820898377{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.base-img.jsx-3820898377{position:absolute;top:0;left:0;}.base-img.jsx-3820898377{width:100%;height:100%;}@media screen and (max-width:750px){.parallax-container.jsx-3820898377{right:0;}}@media screen and (max-width:600px){.parallax-container.jsx-3820898377{width:300px;}}@media screen and (max-width:500px){.parallax-container.jsx-3820898377{right:-50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RQcmV2aWV3SW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3NCLEFBR21DLEFBR1IsQUFVSyxBQUdDLEFBS1AsQUFLRCxBQUtJLEFBS0EsUUFUZCxHQUxZLENBbEJBLEFBNEJaLEFBS0EsTUFwQk0sRUFoQlIsR0FzQkEsQ0FsQm9CLEFBYVgsT0FDVCxXQWJRLE1BQ0csU0FDTyxnQkFDSCxZQUtmLDhEQUpxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2NoYXNlYnVyZ2Vzcy9XZWJEZXYvUG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdFByZXZpZXdJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5jbGFzcyBQcm9qZWN0UHJldmlld0ltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7ICBcbiAgICAvL05vdCBhIGZhbiB0aGF0IEkgaGFkIHRvIGVzc2VudGlhbGx5IHVzZSB0aGUgc2FtZSBzdHlsZWQtanN4IG1hcmt1cCBcbiAgICAvL3R3aWNlIHRvIGF2b2lkIGFuIGVycm9yIGluIGNvbXBpbGluZyB0aGUganN4IHdoZW4gdXNpbmcgYSBjb25zdFxuXG4gICAgaWYgKHRoaXMucHJvcHMubW9iaWxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHt0aGlzLnByb3BzLmltYWdlfS9wcmV2aWV3LnBuZ2B9IGFsdD17YCR7dGhpcy5wcm9wcy5uYW1lfSBwcmV2aWV3YH0gY2xhc3NOYW1lPVwiYmFzZS1pbWdcIiAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhc2UtaW1nIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFzZS1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7dGhpcy5wcm9wcy5pbWFnZX0vYmFzZS5wbmdgfSBhbHQ9e2Ake3RoaXMucHJvcHMubmFtZX0gcHJldmlld2B9IGNsYXNzTmFtZT1cImJhc2UtaW1nXCIgLz5cbiAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgIG9mZnNldFlNYXg9ezEwfVxuICAgICAgICAgICAgb2Zmc2V0WU1pbj17LTEwfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMubW9iaWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHt0aGlzLnByb3BzLmltYWdlfS90b3AucG5nYH0gY2xhc3NOYW1lPVwidG9wLWltZ1wiIC8+XG4gICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogNSU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYXNlLWltZyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1pbWcge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYXNlLWltZywgLnRvcC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQcmV2aWV3SW1hZ2U7Il19 */\n/*@ sourceURL=/Users/chaseburgess/WebDev/Portfolio/components/ProjectPreviewImage.js */",
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1654975683" + " " + "parallax-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "".concat(this.props.image, "/base.png"),
          alt: "".concat(this.props.name, " preview"),
          className: "jsx-1654975683" + " " + "base-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
          offsetYMax: 10,
          offsetYMin: -10,
          disabled: this.props.mobile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "".concat(this.props.image, "/top.png"),
          className: "jsx-1654975683" + " " + "top-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1654975683",
          css: "*.jsx-1654975683{pointer-events:none;}.parallax-container.jsx-1654975683{height:100%;width:400px;position:absolute;top:0;right:5%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-1654975683{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.base-img.jsx-1654975683{position:absolute;top:0;left:0;}.top-img.jsx-1654975683{position:relative;top:0;left:0;}.base-img.jsx-1654975683,.top-img.jsx-1654975683{width:100%;height:100%;}@media screen and (max-width:750px){.parallax-container.jsx-1654975683{right:0;}}@media screen and (max-width:600px){.parallax-container.jsx-1654975683{width:300px;}}@media screen and (max-width:500px){.parallax-container.jsx-1654975683{right:-50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RQcmV2aWV3SW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVzQixBQUdtQyxBQUdSLEFBVUssQUFHQyxBQUtBLEFBS1AsQUFLRCxBQUtJLEFBS0EsUUFUZCxHQUxZLENBdkJBLEFBaUNaLEFBS0EsTUF6Qk0sQUFLQSxFQXJCUixHQTJCQSxDQXZCb0IsQUFhWCxBQUtBLE9BSlQsQUFLQSxXQWxCUSxNQUNHLFNBQ08sZ0JBQ0gsWUFLZiw4REFKcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9jaGFzZWJ1cmdlc3MvV2ViRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RQcmV2aWV3SW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY2xhc3MgUHJvamVjdFByZXZpZXdJbWFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkgeyAgXG4gICAgLy9Ob3QgYSBmYW4gdGhhdCBJIGhhZCB0byBlc3NlbnRpYWxseSB1c2UgdGhlIHNhbWUgc3R5bGVkLWpzeCBtYXJrdXAgXG4gICAgLy90d2ljZSB0byBhdm9pZCBhbiBlcnJvciBpbiBjb21waWxpbmcgdGhlIGpzeCB3aGVuIHVzaW5nIGEgY29uc3RcblxuICAgIGlmICh0aGlzLnByb3BzLm1vYmlsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7dGhpcy5wcm9wcy5pbWFnZX0vcHJldmlldy5wbmdgfSBhbHQ9e2Ake3RoaXMucHJvcHMubmFtZX0gcHJldmlld2B9IGNsYXNzTmFtZT1cImJhc2UtaW1nXCIgLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogNSU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYXNlLWltZyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhc2UtaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXgtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Ake3RoaXMucHJvcHMuaW1hZ2V9L2Jhc2UucG5nYH0gYWx0PXtgJHt0aGlzLnByb3BzLm5hbWV9IHByZXZpZXdgfSBjbGFzc05hbWU9XCJiYXNlLWltZ1wiIC8+XG4gICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICBvZmZzZXRZTWF4PXsxMH1cbiAgICAgICAgICAgIG9mZnNldFlNaW49ey0xMH1cbiAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLm1vYmlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7dGhpcy5wcm9wcy5pbWFnZX0vdG9wLnBuZ2B9IGNsYXNzTmFtZT1cInRvcC1pbWdcIiAvPlxuICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFzZS1pbWcge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3AtaW1nIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFzZS1pbWcsIC50b3AtaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgIC5wYXJhbGxheC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UHJldmlld0ltYWdlOyJdfQ== */\n/*@ sourceURL=/Users/chaseburgess/WebDev/Portfolio/components/ProjectPreviewImage.js */",
          __self: this
        }));
      }
    }
  }]);

  return ProjectPreviewImage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ProjectPreviewImage);

/***/ })

})
//# sourceMappingURL=index.js.cd0274a9b8a2c3759c66.hot-update.js.map