var React = require('react');

var Example = function Example(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: 'flex items-center justify-center pa4 bg-lightest-blue navy'
  }, React.createElement("svg", {
    className: 'w1',
    "data-icon": 'info',
    viewBox: '0 0 32 32',
    style: {
      fill: 'currentcolor'
    }
  }, React.createElement("title", null, "info icon"), React.createElement("path", {
    d: 'M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6'
  })), React.createElement("span", {
    className: 'lh-title ml3'
  }, children));
};

exports.Example = Example;
//# sourceMappingURL=index.js.map
