"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = _interopRequireDefault(require("./server"));

var _client = _interopRequireDefault(require("./client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  CtpServer: _server.default,
  CtpClient: _client.default
};
exports.default = _default;