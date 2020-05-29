import { createElement } from 'react';

const Example = ({
  children
}) => {
  return createElement("div", {
    className: 'flex items-center justify-center pa4 bg-lightest-blue navy'
  }, createElement("svg", {
    className: 'w1',
    "data-icon": 'info',
    viewBox: '0 0 32 32',
    style: {
      fill: 'currentcolor'
    }
  }, createElement("title", null, "info icon"), createElement("path", {
    d: 'M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6'
  })), createElement("span", {
    className: 'lh-title ml3'
  }, children));
};

export { Example };
//# sourceMappingURL=index.modern.js.map
