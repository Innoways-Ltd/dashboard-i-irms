"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DragInnoways;
var _react = _interopRequireWildcard(require("react"));
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _packery = _interopRequireDefault(require("packery"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DragInnoways(props) {
  var items = props.items;
  var packeryInitialized = (0, _react.useRef)(false);
  var initializePackery = function initializePackery() {
    var layout = new _packery["default"]('#draggable', {
      itemSelector: '.item',
      layoutMode: 'masonry'
    });
    packeryInitialized.current = layout;
    function packeryRefreshLayoutJS() {
      setTimeout(function () {
        layout.layout();
      }, 100);
    }
    function packeryRefreshLayoutWithoutIntervalJS() {
      layout.layout();
    }
    document.addEventListener('DOMContentLoaded', packeryRefreshLayoutJS);
    window.addEventListener('resize', packeryRefreshLayoutJS);
    packeryRefreshLayoutWithoutIntervalJS();
    return function () {
      layout.destroy();
    };
  };
  var reloadItems = function reloadItems() {
    setTimeout(function () {
      packeryInitialized.current.reloadItems();
      packeryInitialized.current.layout();
    }, 100);
  };
  var onDragEnd = function onDragEnd(e) {
    props.onDragEnd(e);
    reloadItems();
  };
  (0, _react.useEffect)(function () {
    initializePackery();
    reloadItems();
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: "draggable"
  }, function (provided) {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: "row",
      id: "draggable",
      ref: provided.innerRef
    }, provided.droppableProps), items === null || items === void 0 ? void 0 : items.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
        key: item === null || item === void 0 ? void 0 : item.id,
        draggableId: item === null || item === void 0 ? void 0 : item.id,
        index: index
      }, function (provided) {
        return /*#__PURE__*/_react["default"].createElement("div", _extends({
          item: item.id,
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "item ".concat(item === null || item === void 0 ? void 0 : item.itemClass)
        }), item === null || item === void 0 ? void 0 : item.content);
      });
    }));
  }));
}