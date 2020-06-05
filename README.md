# tron-ui

> UI Component library

[![NPM](https://img.shields.io/npm/v/tron-ui.svg)](https://www.npmjs.com/package/@jasonsilvers/tron-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo/Docs
https://jasonsilvers.github.io/tron-ui/

## Install

```bash
npm i @jasonsilvers/tron-ui
```

## License

MIT © [jasonsilvers](https://github.com/jasonsilvers)

## Development

If invalid hook warning 

https://reactjs.org/warnings/invalid-hook-call-warning.html

cd to root - tron-ui
npm link example/node_modules/react

This will make the library use the application's react copy

For pushing to gh-pages
1. In Your Application:
a) cd node_modules/react && npm link
b) cd node_modules/react-dom && npm link

2. In Your Library
a) npm link react
b) npm link react-dom

3)Stop your dev-server and do `npm start` again.


##Type Support
Typing Theme --- not working for now
https://github.com/emotion-js/emotion/pull/1609
