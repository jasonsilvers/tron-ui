# tron-ui

> UI Component library

[![NPM](https://img.shields.io/npm/v/tron-ui.svg)](https://www.npmjs.com/package/@jason.silvers/tron-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo/Docs
https://jasonsilvers.github.io/tron-ui/

## Install

```bash
npm i @jason.silvers/tron-ui
```

Add Icons
```bash
npm install react-icons --save
```

Add font
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

htlml {
  font-family: 'Roboto', sans-serif;
}
```

Add theme

Tron-Ui is based on guidance from Refactoring UI and sets up a color palette
of Pimary, Neutral and Accents. 

You can create your own theme by creating a theme.ts file and adding it to the theme provider. 


## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'tron-ui'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [jasonsilvers](https://github.com/jasonsilvers)

## Development

If invalid hook warning 

https://reactjs.org/warnings/invalid-hook-call-warning.html

cd to root - tron-ui
npm link example/node_modules/react

This will make the library use the application's react copy


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
